import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: process.env.DB_APIKEY,
  authDomain: "v-learn-g003.firebaseapp.com",
  projectId: "v-learn-g003",
  storageBucket: "v-learn-g003.appspot.com",
  messagingSenderId: "178382188221",
  appId: process.env.APP_ID,
  databaseURL: process.env.DB_URL
};

const app = initializeApp(firebaseConfig);

const database = getDatabase(app)

export default database;