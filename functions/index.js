/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");
const functions = require("firebase-functions");
// const mongoClient = require("mongodb").mongoClient;

const express = require("express");
const cors = require("cors");
const stripe = require("stripe")('sk_test_51O1pppSA7pvps57WL1TkkUe5JskEVvw4RlVNJLMiq8PIAV8xD0JYwqvQXhh1ErBRBl7etYrQYedZD0CDcCVKAnNB00qRtbQuUK');

// - API

// - App Config
const app = express();

// - MiddleWares
app.use(cors({ origin: true }));
app.use(express.json());


// - API  routes
// app.get("/", (request,response) => response.status(200).send('Hello world2'))
app.post("/payments/create", async (request, response) => {
    const total = request.query.total;

    console.log('Payment request recieved BOOM!!! for this amount >>> ', total)

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "inr",
    });
    //OK - Created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })

})

// app.post("/payments/create", async (request, response) => {
//     const total = request.query.total;

//     console.log('Payment request recieved BOOM!!! for this amount >>> ', total)
    
//     const paymentIntent = await stripe.paymentIntents.create({
//         amount: total,
//         currency: "usd",
//     });
//     //OK - Created
//     // response.status(201).send({
//     //     clientSecret: paymentIntent.client_secret,
//     // })

//     response.json().send({
//         clientSecret: paymentIntent.client_secret,
//         // ephemeralKey: ephemeralKey.secret,

//     })
// })

// - Listen Command
exports.api = functions.https.onRequest(app)
// exports.api = onRequest(app);