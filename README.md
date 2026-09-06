# mohammad-shafiq-sharifi-summer26-intro

Week5 assignment for Intro to Programming course with Code the Dream.
Mohammad Shafiq Sharifi

Open API Project - Weather Lookup

This is my Lesson 10 assignment for the Intro to Programming class. I built a weather page that uses the Open-Meteo API, which is free and does not need an API key.

What this page does
Shows a search box where you can type any city name (like "Chicago" or "Modesto, CA")
When you search, it calls Open-Meteo's geocoding API to turn that city name into latitude/longitude coordinates
After a city is found, two buttons show up: "Get City Temperature" and "Get City Condition"
Clicking "Get City Temperature" sends its own separate request to the weather API asking only for the temperature
Clicking "Get City Condition" sends a different, separate request asking only for the weather code, which I convert into words like "Partly cloudy" or "Rain" using a lookup table based on Open-Meteo's WMO weather code list
Only one result shows on the page at a time, depending on which button was clicked last
If you search a city that doesn't exist, it shows an alert telling you to try again instead of breaking the page
Files
openapi.html - the page structure, including the search form and the two navigation buttons
openapi.css - styling, made to match the colors and fonts of the rest of my portfolio
openapi.js - all of the fetch calls and logic
How to run it
Open openapi.html in a browser (I used the Live Server extension in VS Code on port 5500 while building it, but any way of opening the HTML file should work)
Type a city name into the search box and click Search
Click either "Get City Temperature" or "Get City Condition" to see that specific piece of data
Use the "Back to Home" link at the top to go back to my main portfolio page
APIs used
Weather data: https://open-meteo.com/en/docs
Geocoding (city name to coordinates): https://open-meteo.com/en/docs/geocoding-api

No API key is required for either of these.
