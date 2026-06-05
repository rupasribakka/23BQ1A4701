# CAMPUS NOTIFICATIONS MICROSERVICE

## Candidate Details

 Roll Number: 23BQ1A4701
 Name: Rupa Sri

## Project Overview

This project implements a Priority Inbox for a Campus Notification System.

Notifications are fetched from the provided API and ranked according to:

1. Notification Type Priority

   * Placement = 3
   * Result = 2
   * Event = 1

2. Recency

   * More recent notifications receive higher priority.

The application returns the Top 10 highest-priority unread notifications.

## Technologies Used

* Node.js
* JavaScript
* Axios

## Logging Middleware

All important operations use the provided logging middleware API.

## Running the Project

Install dependencies:

npm install

Run:

node app.js

## Output

The application prints the Top 10 priority notifications in the terminal.


