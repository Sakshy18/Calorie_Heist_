import firebase from "firebase/compat/app";
import "firebase/compat/auth";
// firebase config
const config = {
  apiKey: "AIzaSyDyt3wwRCMogqnIhETZOp3K8UHe8XC-T-4",
  authDomain: "calorie-44128.firebaseapp.com",
  projectId: "calorie-44128",
  storageBucket: "calorie-44128.appspot.com",
  messagingSenderId: "1018081608077",
  appId: "1:1018081608077:web:891dd1d4c0fae7826bfdc4"
};
// initialize firebase app
if (!firebase.apps.length) {
  firebase.initializeApp(config);
}
// export
// export default firebase;
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();