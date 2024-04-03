import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  // Your Firebase project configuration details here
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
