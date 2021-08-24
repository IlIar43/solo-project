import firebase from "firebase/app"
import "firebase/auth"

const app = firebase.initializeApp({
  apiKey: "AIzaSyCf1dz6i26k_9rV8fyV-oegWPvwr6VUkHY",
    authDomain: "solo-project-aeb48.firebaseapp.com",
    projectId: "solo-project-aeb48",
    storageBucket: "solo-project-aeb48.appspot.com",
    messagingSenderId: "921353320968",
    appId: "1:921353320968:web:c3aacafc6d250b676defbd"
})

export const auth = app.auth()
export default app