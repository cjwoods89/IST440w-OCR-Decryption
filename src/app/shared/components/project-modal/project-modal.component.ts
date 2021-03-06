import { Component, OnInit, ViewChild } from '@angular/core';
import { MDBModalRef } from 'angular-bootstrap-md';
import { Observable, Subject } from 'rxjs';
import { Project } from '../../../projects/models/project.model';
import { NgForm } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Cipher } from "js-cipher";
import * as crypto from 'crypto-js';
import { SpellCheckerService } from 'ngx-spellchecker';

@Component({
    selector: 'app-project-modal',
    templateUrl: './project-modal.component.html',
    styleUrls: ['./project-modal.component.scss']
})
export class ProjectModalComponent implements OnInit {
    @ViewChild('projectForm', { static: true }) projectForm: NgForm;
    imgString: string = 'https://via.placeholder.com/250';
    imgSrc: string = this.imgString;
    base64ImgSrc: string;
    selectedImage: any = null;
    ocrText: string = 'ERROR - Unable to OCR the image file. Please try again with a different image.';
    decryptedText: string = 'ERROR - Unable to decrypt the image file\'s OCRd text. Please try again with a different image.';

    baseURL = environment.google.baseUrl;
    apiKey = environment.google.apiKey;

    aesKey = environment.decryption.aesKey;
    aesIV = environment.decryption.aesIV;
    tripleDESKey = environment.decryption.tripleDESKey;
    tripleDESIV = environment.decryption.tripleDESIV;

    loading: boolean = false;
    dictionaryResult: boolean = true;

    heading: string;

    title: string;
    description: string;
    photoUrl: string;

    projectData: Subject<Project> = new Subject();
    project: Project = {};

    //Word Dictionary
    englishFileURL = "../../../../assets/en-US.dic";
    englishDictionary: any;
    spanishFileUrl = "../../../../assets/es-ES.dic";
    spanishDictionary: any;
    frenchFileUrl = "../../../../assets/fr-FR.dic";
    frenchDictionary: any;

    constructor(public modalRef: MDBModalRef, private afAuth: AngularFireAuth, private storage: AngularFireStorage, private spellCheckerService: SpellCheckerService, private http: HttpClient) { }

    ngOnInit() {
        this.http.get(this.englishFileURL, { responseType: 'text' }).subscribe((res: any) => {
            this.englishDictionary = this.spellCheckerService.getDictionary(res);
        });
        this.http.get(this.spanishFileUrl, { responseType: 'text' }).subscribe((res: any) => {
            this.spanishDictionary = this.spellCheckerService.getDictionary(res);
        });
        this.http.get(this.frenchFileUrl, { responseType: 'text' }).subscribe((res: any) => {
            this.frenchDictionary = this.spellCheckerService.getDictionary(res);
        });
    }

    get userId() {
        if (this.afAuth.auth.currentUser) {
            return this.afAuth.auth.currentUser.uid;
        }
    }

    onSave() {
        this.loading = true;
        const userId = this.userId;
        if (this.projectForm.valid) {
            var filePath = `OCR_Images/${userId}/${this.selectedImage.name.split('.').slice(0, -1).join('.')}_${new Date().getTime()}`;
            const fileRef = this.storage.ref(filePath);
            var ocrResult = "";
            this.storage.upload(filePath, this.selectedImage).snapshotChanges().pipe(
                finalize(() => {
                    fileRef.getDownloadURL().subscribe((url) => {
                        this.project.photoUrl = url;
                        this.ocrFunc(this.base64ImgSrc).subscribe({
                            next: data => {
                                ocrResult = this.removeLinebreaks(data.body.responses[0].textAnnotations[0].description);
                                this.project.ocrText = ocrResult;

                                if (this.caesarCipher(ocrResult)) {
                                    this.project.decryptedText = this.decryptedText;
                                    this.project.decryptionMethod = 'Caesar Cipher';
                                    this.projectData.next(this.project);
                                    this.modalRef.hide(); 
                                } else if (this.aesPassphrase(ocrResult)) {
                                    this.project.decryptedText = this.decryptedText;
                                    this.project.decryptionMethod = 'AES Passphrase';
                                    this.projectData.next(this.project);
                                    this.modalRef.hide();
                                } else if (this.tripleDES(ocrResult)) {
                                    this.project.decryptedText = this.decryptedText;
                                    this.project.decryptionMethod = 'Triple DES';
                                    this.projectData.next(this.project);
                                    this.modalRef.hide();
                                } else {
                                    this.project.decryptedText = this.decryptedText;
                                    this.project.decryptionMethod = 'None';
                                    this.projectData.next(this.project);
                                    this.modalRef.hide();
                                }
                            },
                            error: error => {
                                console.log(error);
                                this.modalRef.hide();
                            }
                        })
                    })
                })
            ).subscribe();
        } else {
            const controls = this.projectForm.controls;
            Object.keys(controls).forEach(controlName => controls[controlName].markAsTouched());
        }
    }

    showPreview(event: any) {
        if (event.target.files && event.target.files[0]) {
            const reader = new FileReader();
            reader.onload = (e: any) => {
                this.imgSrc = e.target.result;
                this.base64ImgSrc = e.target.result.split(',')[1];
            }
            reader.readAsDataURL(event.target.files[0]);
            this.selectedImage = event.target.files[0];
        } else {
            this.imgSrc = this.imgString;
            this.selectedImage = null;
        }
    }

    ocrFunc(fileLink: string): Observable<any> {
        var request = {
            "requests": [
                {
                    "image": {
                        "content": fileLink
                    },
                    "features": [
                        {
                            "type": "DOCUMENT_TEXT_DETECTION",
                            "maxResults": 10
                        }
                    ]
                }
            ]
        }

        const headers = { 'content-type': 'application/json' }
        const body = JSON.stringify(request);
        return this.http.post(this.baseURL + this.apiKey, body, { 'headers': headers, observe: 'response' });
    }

    removeLinebreaks(dirtyString: string) {
        return dirtyString.replace(/[\r\n]+/gm, " ");
    }

    caesarCipher(text: any) {
        console.log("In the caesarCipher method");
        var rotation = 3;
        const cipher = new Cipher();

        var decrypted = cipher.decrypt(text, rotation);

        console.log(decrypted.toString());

        this.doSpellCheck(decrypted.toString());

        if (this.dictionaryResult) {
            console.log("changing the value of decryptedText");
            this.decryptedText = decrypted.toString();
        }

        return this.dictionaryResult;
    }

    aesPassphrase(text: any) {
        console.log("In the aesPassphrase method");
        console.log(text);
        var key = crypto.enc.Hex.parse(this.aesKey);
        var iv = crypto.enc.Hex.parse(this.aesIV);

        var manual_data = text.replace(/\s+/g, '');
        console.log(manual_data);
        var decrypted = crypto.AES.decrypt(
            manual_data,
            key,
            {
                iv: iv,
                mode: crypto.mode.CBC,
                padding: crypto.pad.Pkcs7
            }
        );
        console.log(decrypted.toString(crypto.enc.Utf8));

        this.doSpellCheck(decrypted.toString());

        if (this.dictionaryResult) {
            console.log("changing the value of decryptedText");
            this.decryptedText = decrypted.toString(crypto.enc.Utf8);
        }

        return this.dictionaryResult;
    }

    tripleDES(text: string) {
        console.log("In the tripleDES method");

        var key = this.tripleDESKey;
        var iv = this.tripleDESIV;

        var manual_data = text.replace(/\s+/g, '');

        var decrypted = crypto.TripleDES.decrypt(
            manual_data,
            crypto.enc.Utf8.parse(key),
            {
                iv: crypto.enc.Utf8.parse(iv)
            }
        );

        console.log(decrypted.toString(crypto.enc.Utf8));

        this.doSpellCheck(decrypted.toString(crypto.enc.Utf8));
        
        if (this.dictionaryResult) {
            console.log("changing the value of decryptedText");
            this.decryptedText = decrypted.toString(crypto.enc.Utf8);
        }

        return this.dictionaryResult;
    }

    doSpellCheck(decrypted: any) {
        var i = 0;

        do {
            console.log("#######trying english#######");
            this.spellCheck(decrypted.toString(), this.englishDictionary);
            if (this.dictionaryResult) { break; }

            console.log("#######trying spanish#######");
            this.spellCheck(decrypted.toString(), this.spanishDictionary);
            if (this.dictionaryResult) { break; }

            console.log("#######trying french#######");
            this.spellCheck(decrypted.toString(), this.frenchDictionary);
            if (this.dictionaryResult) { break; }

            i++;
        }
        while (i < 1)
    }

    spellCheck(checkText: string, dictionary: any) {
        console.log("in spellCheck");
        var formattedCheckText = this.removePunctuation(checkText);

        var checkTextArray = formattedCheckText.split(" ");

        for (let i = 0; i < checkTextArray.length; i++) {
            if (checkTextArray[i] != "") {
                if (!dictionary.spellCheck(checkTextArray[i])) {
                    console.log(checkTextArray[i] + " is not an known word");
                    this.dictionaryResult = false;
                } else {
                    this.dictionaryResult = true;
                    console.log(checkTextArray[i] + " is a word")
                }
            }
        }

        if (this.dictionaryResult) {
            this.decryptedText = checkText;
        }
    }

    removePunctuation(text: string) {
        var regex = /[!"#$%&()*+,./:;<=>?@[\]^_`{|}~]/g;

        return text.replace(regex, '');
    }

    removeWhiteSpace(text: string) {
        return text.replace(/[\n\r]+/g, ' ').replace(/\s{2,}/g, ' ').replace(/^\s+|\s+$/, '') 
    }
}