import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyCsbgKor0ro9eZH79wgwEgwEM4jEXh7Sxs",
    authDomain: "v-learn-g003.firebaseapp.com",
    projectId: "v-learn-g003",
    storageBucket: "v-learn-g003.appspot.com",
    messagingSenderId: "178382188221",
    appId: "1:178382188221:web:fcdc6482e79f6fc80991d4",
    databaseURL : "https://v-learn-g003-default-rtdb.firebaseio.com"
  };

  const app = initializeApp(firebaseConfig);

  const database = getDatabase(app)

  export default database;