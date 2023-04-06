import { createContext, useContext, useState } from "react";
import { initializeApp } from "firebase/app";
import { getFirestore, getDocs, collection, addDoc  } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

// Import Required Firebase Utility

const firebaseConfig = {
  apiKey: "AIzaSyA4DvpBZ-fbtGwweCF9WzAnDMnBDdVsV1s",
  authDomain: "genesiz-mep.firebaseapp.com",
  projectId: "genesiz-mep",
  storageBucket: "genesiz-mep.appspot.com",
  messagingSenderId: "65259366702",
  appId: "1:65259366702:web:a18b5f04b71f2fa256f2bf",
  measurementId: "G-VT1TT003N0"
};

const FirebaseContext = createContext(null);
const firebaseApp = initializeApp(firebaseConfig);

// Create an instance of the imported firebase utility

const db = getFirestore(firebaseApp);


export const useFirebase = () => {
  return useContext(FirebaseContext);
};

export const FirebaseProvider = (props) => {


  // Create the required function for using the internal functions of the utility imported

  

  

  const addDocument = async ( data) => {
    try {
      console.log(data)
      await addDoc(collection(db, "data"), data);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };




  return (
    <FirebaseContext.Provider
      value={{
        // Pass the functions created to be used globally

   
        addDocument,
    
     
    
    
      }}
    >
      {props.children}
    </FirebaseContext.Provider>
  );
};