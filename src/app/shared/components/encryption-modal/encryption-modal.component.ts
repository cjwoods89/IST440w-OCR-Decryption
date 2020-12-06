import { Component, OnInit } from '@angular/core';
import { MDBModalRef } from 'angular-bootstrap-md';
import { environment } from 'src/environments/environment';
import { Cipher } from "js-cipher";
import * as crypto from 'crypto-js';

@Component({
  selector: 'app-encryption-modal',
  templateUrl: './encryption-modal.component.html',
  styleUrls: ['./encryption-modal.component.scss']
})
export class EncryptionModalComponent implements OnInit {
    encryptedMessage: any;
    message: any;
    aesKey = environment.decryption.aesKey;
    aesIV = environment.decryption.aesIV;
    tripleDESKey = environment.decryption.tripleDESKey;
    tripleDESIV = environment.decryption.tripleDESIV;

    constructor(public modalRef: MDBModalRef) { }

    ngOnInit() {
    }

    onCipher() {
        var rotation = 3;
        const cipher = new Cipher();
        this.encryptedMessage = cipher.encrypt(this.message, rotation);
    }

    onAES() {
        var key = this.aesKey;
        this.encryptedMessage = crypto.AES.encrypt(this.message, key);
    }

    onTripleDES() {
        var key = this.tripleDESKey
        this.encryptedMessage = crypto.TripleDES.encrypt(this.message, key);
    }
}
