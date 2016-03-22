# Stormpath Notes Server

This is the server for the Stormpath Notes Tutorial, for iOS and Android, where we show you how to build a note-taking app that saves to a server using Stormpath.

[Stormpath Notes (iOS) in Swift Tutorial](https://stormpath.com/blog/build-note-taking-app-swift-ios/) - [Stormpath Notes (Android) Tutorial](https://stormpath.com/blog/build-user-authentication-for-android-app/)

Stormpath Notes Server is a `express-stormpath` application that hosts the Stormpath default `application/json` endpoints, and additional endpoints to retrieve and save notes (documentation viewable when you run the server and `GET /`)

It runs on https://stormpathnotes.herokuapp.com/

Branches:

* master - deployed to https://stormpathnotes.herokuapp.com/ automatically. Please submit a pull request or create a new branch if updating code. 