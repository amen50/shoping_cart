import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const config ={
  apiKey: "AIzaSyBbTyqK9smMeU4c4Xg_UDfytWh-uOYj_50",
  authDomain: "react-shoping-cart-3df98.firebaseapp.com",
  projectId: "react-shoping-cart-3df98",
  storageBucket: "react-shoping-cart-3df98.appspot.com",
  messagingSenderId: "835445454227",
  appId: "1:835445454227:web:14bc822209c99ad8432466",
  measurementId: "G-3SBYWLBWQP"
}
export const createUserProfileDocument = async (userAuth, additionalData) =>  {
   if(!userAuth) return;
   const userRef = firestore.doc(`users/${userAuth.uid}`)
   const snapShot = await userRef.get();
   if (!snapShot.exists)
   {
     const {displayName} =  userAuth;
     const {email} =  userAuth;
    const createdAt = new Date();
    console.log("userAuth._delegate.displayName", userAuth._delegate.displayName)
    console.log('set', displayName, email, createdAt)
     try {
           await userRef.set({
             displayName,
             email,
             createdAt,
             ...additionalData
           })
           
     }
     catch(error){
       console.log('error creating user', error.message)
     }
   }
   return userRef;    
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;