import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { collection, where, getDoc, query, doc, setDoc, getFirestore } from "firebase/firestore";
import { loggedIn, userID } from "./stores";
const firebaseConfig = {
    apiKey: "AIzaSyCKgHIew9JL9B4-JYVMk1bQzwgVcjwEvQI",
    authDomain: "campoclubs.firebaseapp.com",
    projectId: "campoclubs",
    storageBucket: "campoclubs.appspot.com",
    messagingSenderId: "330895308165",
    appId: "1:330895308165:web:f12aadb9e43a75f39340ec",
    measurementId: "G-GY85QLKJP3"
};
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth();
const db = getFirestore(app);

const userRef = collection(db, "Users");
const userexist = query(userRef, where("state", "==", "CA"));
export function SignIN() {
    signInWithPopup(auth, provider)
        .then(async (result) => {
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            const user = result.user;
            console.log(token);
            console.log(user);
            if ((await getDoc(doc(userRef, user.uid))).exists()) {
                console.log("doc found");
            }
            else {
                console.log("doc not found");
                await setDoc(doc(userRef, user.email), {
                    name: user.displayName,
                    id: user.uid,
                    email: user.email,
                    clubs: []
                });
                console.log("doc created");
            }
            userID.set(user.uid);
            loggedIn.set(true);
        }).catch((error) => {
            alert(error);
        });
}
export function GetData() {
    
}