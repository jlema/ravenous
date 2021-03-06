# Ravenous restaurant search React app

## Project description

Ravenous is a Yelp-like React app to search for restaurants using the Yelp API. Part of the [Create a Front-End App with React Path at CodeCademy](https://www.codecademy.com/learn/paths/build-web-apps-with-react).

The deployed app is [available here](https://jlema-ravenous.netlify.app/). A screenshot of the restaurant search functionality is below.

![Screenshot of Ravenous React app's main screen with restaurant search feature](screenshot.png?raw=true)

## Requirements

- A web browser (tested on 98.0.1108.56 (Official build) (64-bit))

## Features

- User can search for restaurants
- Users can view a list of restaurants returned by the Yelp API
- Users can sort through restaurants using a filter

## Technologies used

- Create React App
- CSS
- Git and GitHub
- HTML
- JavaScript
- Netlify (CLI, functions)
- Node.js
- React, ReactDOM
- Yelp API

## Install and Deployment

### Install

```bash
npm i
npx netlify dev
```

### Deployment

This deploys the app to Netlify

```bash
npm i
npx netlify build
npx netlify deploy
```

## References

[Yelp Fusion API Business Endpoints](https://www.yelp.com/developers/documentation/v3/business_search)

## Potential improvements

- Make addresses clickable and have them open the address in Google Maps in a new tab
- Make images clickable and have them open the business’ website in a new tab
- Clicking on a different sorting option automatically requeries the Yelp API, rather than having to manually click “Let’s Go” again
- Implement your own type of sort (for example, by entering a distance or radius from a central location)
- Allow you to search by pressing “Enter” (or “Return”) on your keyboard, as opposed to manually clicking
- Add autocompletion of addresses to the “Location” input
