import { createContext, useContext, useState } from "react";
import { initializeApp } from "firebase/app";
import { getFirestore, getDocs, collection, addDoc  } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

// Import Required Firebase Utility

const firebaseConfig = {
  apiKey: "AIzaSyC_5ruSgNX-8XKWkTybXKzHtTMS1y2sfHY",
  authDomain: "genesiz-99896.firebaseapp.com",
  projectId: "genesiz-99896",
  storageBucket: "genesiz-99896.appspot.com",
  messagingSenderId: "453133674105",
  appId: "1:453133674105:web:ade39bffb50ac46d4156a8",
  measurementId: "G-21SRR6P715"
};

const FirebaseContext = createContext(null);
const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);
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