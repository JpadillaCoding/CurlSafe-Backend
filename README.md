# CurlSafe-Backend
An app that uses Google's VisionAI API to scan hair product ingredient labels. In the curly/wavy hair world there is a movement called the Curly Girl Method (CG Method). The Method is used to make healthy hair specifically for curly/ wavy hair individuals. CG Method consists of not using hair products that contain certain ingredients- Sulfates, Silicones, Short Chain Alcohols, Parabens, Formaldehydes, Soaps, Waxes, Mineral oils. The issue is, there are over 100 of these ingredients! How can an individual check a tiny ingredients label and make sure to check for each one? This is exactly what my Curl Safe solves. 

Check out the [Frontend](https://github.com/JpadillaCoding/CurlSafe-Frontend)!

## Installation 
Available on the [Google Play store](https://play.google.com/store/apps/details?id=com.CurlSafe)!

Available on the [App Store](https://apps.apple.com/us/app/curlsafe/id6450194570)!

# Endpoints
| Method   | URL                                      | Description                              |
| -------- | ---------------------------------------- | ---------------------------------------- |
| `GET`    | `/ingredients/`                          | Retrieve all ingredients                 |
| `GET`    | `/ingredients/findOne`                   | Retrieve ingredient by name              |
| `POST`   | `/ingredients/createIngredient`          | Create a ingredient                      |
| `DELETE` | `/ingredients/deleteIngredient/:id`      | Delete ingredient by id                  |
| `POST`   | `/vision/analyzeImage`                   | Make a request to analyze an image       |

## Technologies 

<img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white"> 

MongoDB was used for development. Stored all my data of ingredients for the analyzer to look for. Deployed with MongoDB Atlas.

<img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white">

Express was chosen in tandem with Mongoose to make API endpoints and schemas. Created connection for a deployed database, ingredient schemas, and used to take care of the VisionAI API request needed to analyze images The analyzer takes a little while to load, so having a lightweight framework was needed to keep a responsive feel to the app. 

<img src="https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white">

Heroku was picked for its scalable tiers. Since I expect this to be a small app, I needed a service that would offer tiers for small applications, but can easily scale up if traffic increased. Also found the config vars feature useful for maintaining keys secure. 

<img src="https://img.shields.io/badge/Google_Cloud-4285F4?style=for-the-badge&logo=google-cloud&logoColor=white">

Google Cloud was needed for making use of VisionAI. Frontend sends a payload of the image and the backend sends back the raw data of the text. 

## Acknowledgments 

- This app was inspired by the CG Method- A guideline for taking care of  Natural hair. Originally made by Lorraine Masse- Check out her [book](https://a.co/d/0DKIAwM)!

- The curly hair [subreddit](https://www.reddit.com/r/curlyhair/) which first introduced me to proper care of curly hair.

- [Curls bot](https://www.curlsbot.com/) A website that lets you type in ingredients to check if they're on the CG method do not use list. 

- [Curl Scan](https://curlscan.com/) A website that tells the user if a hair product is CG Method approved. Community-driven to keep expanding their database of products. 