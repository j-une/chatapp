import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
const config = {
  apiKey: "AIzaSyDl3y4ngdIhw-OG_It_T1fPzTrH3flPxkg",
  authDomain: "chatty-7fd1c.firebaseapp.com",
  databaseURL: "https://chatty-7fd1c-default-rtdb.firebaseio.com"
};

firebase.initializeApp(config);

export const auth = firebase.auth;
export const db = firebase.database();