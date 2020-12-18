import firebase from "firebase";

firebase.initializeApp({
  apiKey: "AIzaSyAtyHLHPd0YUb-3VMVste3HWsFKP5Y3Idc",
  authDomain: "petronetwork-aa3d0.firebaseapp.com",
  databaseURL: "https://petronetwork-aa3d0.firebaseio.com",
  projectId: "petronetwork-aa3d0",
  storageBucket: "petronetwork-aa3d0.appspot.com",
  messagingSenderId: "596572187711",
  appId: "1:596572187711:web:26228fcc2e84ee78ec1c8a",
  measurementId: "G-2PQXRCHZRP",
});

const db = firebase.firestore();
const funcs = firebase.functions();
const an = firebase.analytics();

export { db, funcs };
export default firebase;
