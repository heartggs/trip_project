import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const {
  REACT_APP_API_KEY,
  REACT_APP_Auth_Domain,
  REACT_APP_Project_Id,
  REACT_APP_Storage_Bucket,
  REACT_APP_Messaging_Sender_Id,
  REACT_APP_App_Id,
  REACT_APP_Measurement_Id,
} = process.env

const firebaseConfig = {
  apiKey: REACT_APP_API_KEY,
  authDomain: REACT_APP_Auth_Domain,
  projectId: REACT_APP_Project_Id,
  storageBucket: REACT_APP_Storage_Bucket,
  messagingSenderId: REACT_APP_Messaging_Sender_Id,
  appId: REACT_APP_App_Id,
  measurementId: REACT_APP_Measurement_Id,
}

export const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const store = getFirestore(app)
