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

@Component({
    selector: 'app-project-modal',
    templateUrl: './project-modal.component.html',
    styleUrls: ['./project-modal.component.scss']
})
export class ProjectModalComponent implements OnInit {
    @ViewChild('projectForm', { static: true }) projectForm: NgForm;
    imgString: string = 'https://via.placeholder.com/250';
    imgSrc: string = this.imgString;
    selectedImage: any = null;

    baseURL = environment.google.baseUrl;
    apiKey = environment.google.apiKey;

    loading : boolean = false;

    heading: string;

    title: string;
    description: string;
    photoUrl: string;

    projectData: Subject<Project> = new Subject();
    project: Project = {};

    constructor(public modalRef: MDBModalRef, private afAuth: AngularFireAuth, private storage: AngularFireStorage, private http: HttpClient) { }

    ngOnInit() {
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
                        this.ocrFunc(url).subscribe({
                            next: data => {
                                console.log(this.removeLinebreaks(data.body.responses[0].textAnnotations[0].description));
                                ocrResult = this.removeLinebreaks(data.body.responses[0].textAnnotations[0].description);
                                this.project.ocrText = ocrResult;
                                console.log("Set text");
                                this.projectData.next(this.project);
                                this.modalRef.hide();
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
            reader.onload = (e: any) => this.imgSrc = e.target.result;
            reader.readAsDataURL(event.target.files[0]);
            this.selectedImage = event.target.files[0];
        } else {
            this.imgSrc = this.imgString;
            this.selectedImage = null;
        }
    }

    /*OCR Mechanism*/
    ocrFunc(fileLink: string): Observable<any> {
        var request = {
            "requests": [
                {
                    "image": {
                        "source": {
                            "imageUri": fileLink
                        }
                    },
                    "features": [
                        { 
                            "type": "TEXT_DETECTION",
                            "maxResults": 10
                        }
                    ]
                }
            ]
        }
    
        console.log(fileLink);
        const headers = { 'content-type': 'application/json'}  
        const body=JSON.stringify(request);
        console.log(body)
        return this.http.post(this.baseURL + this.apiKey, body,{'headers':headers, observe: 'response'});
    }

    removeLinebreaks(dirtyString: string ) {
        return dirtyString.replace(/[\r\n]+/gm, " "); 
    } 

}