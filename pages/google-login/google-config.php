<?php
 
//Include Google Client Library for PHP autoload file
require_once 'vendor/autoload.php';
 
//Make object of Google API Client for call Google API
$google_client = new Google_Client();
 
//Set the OAuth 2.0 Client ID
$google_client->setClientId('251939066640-qvpgh5e17dre3t32h7a18v1l16sib5bl.apps.googleusercontent.com');
 
//Set the OAuth 2.0 Client Secret key
$google_client->setClientSecret('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');
 
//Set the OAuth 2.0 Redirect URI
$google_client->setRedirectUri('http://localhost:8080/booking-app/pages/google-login/google-login.php');
 
//
$google_client->addScope('email');
 
// $google_client->addScope('profile');
 
//start session on web page
// session_start(); session is started by the header template. 
