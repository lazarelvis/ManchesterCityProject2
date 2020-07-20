import firebase from "@firebase/app";
import "firebase/app";
import "firebase/database";
import "firebase/auth";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCJTtITi25Er7VaMHjLjo2Slb-FZVGorpM",
  authDomain: "mcity-1d475.firebaseapp.com",
  databaseURL: "https://mcity-1d475.firebaseio.com",
  projectId: "mcity-1d475",
  storageBucket: "mcity-1d475.appspot.com",
  messagingSenderId: "491125005302",
  appId: "1:491125005302:web:f0c56ae691e3bc357c05d7",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const firebaseDB = firebase.database();
const firebaseMatches = firebaseDB.ref("matches");
const firebasePromotions = firebaseDB.ref("promotions");
const firebaseTeams = firebaseDB.ref("teams");
const firebasePlayers = firebaseDB.ref("players");

export {
  firebase,
  firebaseDB,
  firebaseMatches,
  firebasePromotions,
  firebaseTeams,
  firebasePlayers,
};
