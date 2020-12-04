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

    loading: boolean = false;
    dictionaryResult: boolean = true;

    heading: string;

    title: string;
    description: string;
    photoUrl: string;

    projectData: Subject<Project> = new Subject();
    project: Project = {};

    //Word Dictionary
    englishFileURL = "https://raw.githubusercontent.com/JacobSamro/ngx-spellchecker/master/dict/normalized_en-US.dic";
    englishDictionary: any;

    constructor(public modalRef: MDBModalRef, private afAuth: AngularFireAuth, private storage: AngularFireStorage, private spellCheckerService: SpellCheckerService, private http: HttpClient) { }

    ngOnInit() {
        this.http.get(this.englishFileURL, { responseType: 'text' }).subscribe((res: any) => {
            this.englishDictionary = this.spellCheckerService.getDictionary(res);
            console.log(this.englishDictionary);
        })
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
                                    this.projectData.next(this.project);
                                    this.modalRef.hide(); 
                                } else if (this.aesPassphrase(ocrResult)) {
                                    this.project.decryptedText = this.decryptedText;
                                    this.projectData.next(this.project);
                                    this.modalRef.hide();
                                } else if (this.tripleDES(ocrResult)) {
                                    this.project.decryptedText = this.decryptedText;
                                    this.projectData.next(this.project);
                                    this.modalRef.hide();
                                } else {
                                    this.project.decryptedText = this.decryptedText;
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

    caesarCipher(text: string) {
        console.log("In the caesarCipher method");
        var rotation = 2;
        const cipher = new Cipher();

        var decrypted = cipher.decrypt(text, rotation);
        this.spellCheck(decrypted.toString());

        console.log("this.dictionaryResult: " + this.dictionaryResult);

        if (this.dictionaryResult) {
            console.log("changing the value of decryptedText");
            this.decryptedText = decrypted.toString();
        }

        return this.dictionaryResult;
    }

    aesPassphrase(text: string) {
        console.log("In the aesPassphrase method");

        var passphrase = "loco";

        var decrypted = crypto.AES.decrypt(text, passphrase);
        this.spellCheck(decrypted.toString());

        console.log("this.dictionaryResult: " + this.dictionaryResult);

        if (this.dictionaryResult) {
            console.log("changing the value of decryptedText");
            this.decryptedText = decrypted.toString();
        }

        return this.dictionaryResult;
    }

    tripleDES(text: string) {
        console.log("In the tripleDES method");

        var passphrase = "abuela";

        var decrypted = crypto.TripleDES.decrypt(text, passphrase);
        this.spellCheck(decrypted.toString());

        console.log("this.dictionaryResult: " + this.dictionaryResult);

        if (this.dictionaryResult) {
            console.log("changing the value of decryptedText");
            this.decryptedText = decrypted.toString();
        }

        return this.dictionaryResult;
    }

    spellCheck(checkText: string) {
        console.log("in spellCheck");
        var formattedCheckText = this.removePunctuation(checkText);

        var checkTextArray = formattedCheckText.split(" ");

        for (let i = 0; i < checkTextArray.length; i++) {
            if (checkTextArray[i] != "") {
                if (!this.englishDictionary.spellCheck(checkTextArray[i])) {
                    console.log("not an english word");
                    this.dictionaryResult = false;
                }
            }
        }

        if (this.dictionaryResult) {
            this.decryptedText = checkText;
        }
    }

    removePunctuation(text: string) {
        var regex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;

        return text.replace(regex, '');
    }
}