import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/database";
import "firebase/compat/firestore";
// import { initializeApp } from "firebase/app";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBh4XG-1k_mYUTKm3d8-P2blkcqhC3adeA",
  authDomain: "clone-c8178.firebaseapp.com",
  projectId: "clone-c8178",
  storageBucket: "clone-c8178.appspot.com",
  messagingSenderId: "463118752896",
  appId: "1:463118752896:web:5629fcad5b8f04e8c19a65",
  measurementId: "G-SC5ZKWGM29"
};



const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();



const auth = firebase.auth();

export { auth, db };

// import {MongoClient} from "mongodb";

// var Express = require("express");
// var cors = require("cors");

// var mongoClient = require("mongodb").mongoClient;
// const multer = require("multer");
// const { MongoClient } = require("mongodb");
// var CONNECTION_STRING ="mongodb+srv://motu6449:9449488750jb@cluster0.qhdumnq.mongodb.net/?retryWrites=true&w=majority";

// var app = Express();
// app.use(cors());

// var dbname = "amazonclone";
// var db;
// app.listen(5038,()=>{
//   MongoClient.connect(CONNECTION_STRING,(error,client)=>{
//     db = client.db(dbname);
//     console.log("MONGO DB successfull connection!!");
//   });
// })

// app.get('/api',(request,response)=>{
//   db.collection("amazonclonecollection").find({}).toArray((error,result)=>{
//     response.send(result);
//   });
// })

// app.post('/api',multer().none(),(request,response)=>{
//   db.collection("amazonclonecollection").count({},function(error,numOfDocs){
//     db.collectionl("amazonclonecollection").insertOne({
//       id:(numOfDocs+1).toString(),
//       description:request.body.newNotes
//     });
//     response.json("Added successfully");
//   })
// })