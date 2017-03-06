#Stormpath is Joining Okta
We are incredibly excited to announce that [Stormpath is joining forces with Okta](https://stormpath.com/blog/stormpaths-new-path?utm_source=github&utm_medium=readme&utm-campaign=okta-announcement). Please visit [the Migration FAQs](https://stormpath.com/oktaplusstormpath?utm_source=github&utm_medium=readme&utm-campaign=okta-announcement) for a detailed look at what this means for Stormpath users.

We're available to answer all questions at [support@stormpath.com](mailto:support@stormpath.com).

# Stormpath Notes Server

This is the server for the Stormpath Notes Tutorial for iOS and Android, where we show you how to build a note-taking app that saves to a server using Stormpath.

[Stormpath Notes (iOS) in Swift Tutorial](https://stormpath.com/blog/build-note-taking-app-swift-ios/) - [Stormpath Notes (Android) Tutorial](https://stormpath.com/blog/build-user-authentication-for-android-app/)

Stormpath Notes Server is an [express-stormpath](https://github.com/stormpath/express-stormpath) application that hosts the Stormpath default `application/json` endpoints, and additional endpoints to retrieve and save notes. 

The master branch automatically will be deployed to https://stormpathnotes.herokuapp.com/

**[Read the Tutorial for how to Build this Server in Node.js](https://stormpath.com/blog/tutorial-build-rest-api-mobile-apps-using-node-js)**

## Steps to run

1. Download and install [Node.js](https://nodejs.org/)
2. Grab your API Keys from the [Stormpath Admin Console](https://api.stormpath.com) (easiest way is to use the quickstart)
3. Run the commands:

```bash
git clone https://github.com/stormpath/stormpath-express-mobile-notes-example.git
cd stormpath-express-mobile-notes-example
node index.js
```

## Endpoints

All endpoints require authentication with an `Authorization: Bearer ACCESSTOKEN` header.

`GET /notes`

Returns a json object like {"notes": "The notes the user saved"}

`POST /notes`

Takes a json object of` {"notes": "The new notes the user wants to save"}` and saves it to the Stormpath account's customData.

Returns a blank page with a status code of 200 OK if successful, or 400 if the request was malformed.