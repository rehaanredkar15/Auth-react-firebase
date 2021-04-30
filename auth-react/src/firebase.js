import firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
    apiKey: "AIzaSyCG64OcTOY7V80zSeZYqPj645SQFa0feOo",
    authDomain: "auth-development-cc136.firebaseapp.com",
    databaseURL: "https://auth-development-cc136-default-rtdb.firebaseio.com",
    projectId: "auth-development-cc136",
    storageBucket: "auth-development-cc136.appspot.com",
    messagingSenderId: "586996824191",
    appId: "1:586996824191:web:e1b5d6868a9e2ef109a74a",
});

export const auth = app.auth();
export default app;