import { initializeApp } from "firebase/app";
import { userEmail, loggedIn, userID } from "./stores";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { collection, where, getDoc, getDocs, query, doc, setDoc, getFirestore } from "firebase/firestore";
let isloggedin;
let owner = "";

loggedIn.subscribe((value) => {
    isloggedin = value;
});
userEmail.subscribe((value: string) => {
    owner = value;
});
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
const userClub = collection(db, "Clubs");
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
            userEmail.set(user.email);
        }).catch((error) => {
            alert(error);
        });
}
// export function GetData() {
//     
// }
export function AddClub(name: string, description: string, where: string, when: string, contact: string, type: string) {
    setDoc(doc(userClub, name), {
        name: name,
        description: description,
        where: where,
        when: when,
        type: type,
        email: contact,
        owner: owner
    });
}
let data;
let isOwner;
export async function GetOwnedClubs(email: string) {
    let ToReturn = [];
    console.log(email);
    let isOwner = query(userClub, where("owner", "==", email));
    const querySnapshot = await getDocs(isOwner);
    querySnapshot.forEach((doc) => {
        data = doc.data();
        console.log(doc.id, " => ", data);
        ToReturn.push({ value: data.name, name: data.name },);
    });
    if (ToReturn.length == 0) {
        ToReturn.push({ value: "No Clubs", name: "No Clubs" });
    }
    return ToReturn;
}