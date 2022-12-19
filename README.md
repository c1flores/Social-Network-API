# Table of Contents

  - [Overview](#overview)
  - [What's the difference between ORM AND ODM?](#whats-the-difference-between-orm-and-odm)
  - [Screen Capture](#screen-capture)
  - [Link to Screen Recording of Application](#link-to-screen-recording-of-application)
  - [Installation](#installation)
  - [Usage](#usage)
  
## Overview
 This repository is an exhibition of an API designed for a social network web application. The user can consult the repo to learn how to create an API for a social network web application, using the Mongoose object data modeling library (ODM). The project makes use of <a href="https://nodejs.org/en/" target="_blank">Node.js</a> to work with a back end, the <a href="https://www.npmjs.com/package/express" target="_blank">Express</a>  package to design and configure an API, the <a href="https://github.com/yanatan16/node-api-routes" target="_blank">Api-Routes</a>  package to use a declarative system for creating express API routes, the <a href="https://momentjs.com/" target="_blank">Moment</a> package to display dates, and the <a href="https://mongoosejs.com/" target="_blank">Mongoose</a> package to effectively provide a schema-based solution to model application data. 


## What's the difference between ORM AND ODM?
 ORM is object relational mapping, a technique to query or perform CRUD (Create, Read, Update, Delete) operations to a relational database, using an object-oriented paradigm. With ORM, there is no need to use SQL at all. You can directly interact with the database and perform queries in the same language used in the back-end. 

 ODM is object document mapping, akin to ORM for non-relational databases or distributed databases such as MongoDB. Mongoose is a  Node-based library that operationalizes the ODM paradigm by allowing developers to enforce a specific schema at the application layer. In addition to enforcing a schema, Mongoose offers a variety of hooks, model validation, and other features that facilitate interaction with MongoDB. 

## Screen Capture
![](https://user-images.githubusercontent.com/81927296/208347403-07a66f9e-fbc7-47b1-bbc9-b7239a83a343.gif)

## Link to Screen Recording of Application
[Google Drive Link](https://drive.google.com/file/d/1g4vKQXPYE9b0YYgCfHOxla7UCswXcBQW/view?usp=sharing)

## Installation

  - Fork repository
  - Setup Node project
  - Install dependencies 
  - Ensure Api-Routes package is installed
  - Ensure Express package is installed
  - Ensure Moment package is installed
  - Ensure Mongodb package is installed
  - Ensure Mongoose package is installed
## Usage

  - Open integrated terminal in IDE
  - Run "npm i init"
  - Run "npm i api-routes"
  - Run "npm i express"
  - Run "npm i moment"
  - Run "npm i mongodb"
  - Run "npm i mongoose"
  - Test endpoints in API tester such as [Insomnia](https://insomnia.rest/)
