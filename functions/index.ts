import * as functions from 'firebase-functions';

//Firebase
import * as admin from 'firebase-admin';
admin.initializeApp(functions.config().firebase);

//Cloud Vision
import * as vision from '@google-cloud/vision';
const visionClient = new vision.ImageAnnotatorClient();

//Dedicated bucket for cloud function invocation
const bucketName = 'ist440w-ocr-decryption-vision';

export const imageTagger = functions.storage
    .bucket(bucketName)
    .object()
    .onChange(async event => {

        //File data
        const object = event.data;
        const filePath = object.name;

        //Location of saved file in bucket
        const imageUri = `gs://${bucketName}/${filePath}`;

        //Firestore docId === file name
        const docId = filePath.split('.jpg')[0];

        const docRef = admin.firestore().collection('photos').doc(docId);

        //Await the cloud vision response
        const textRequest = await visionClient.documentTextDetection(imageUri);
        const fullText = textRequest[0].textAnnotations[0]
        const text = fullText ? fullText.description

        const data = { text };
        return docRef.set(data);

    })