# The Corporate Website Of Agave Property Ventures

##### This is a full stack application constructed using `MongoDB, Express.js, React.js, Cheerio,js, Axios and Node.js`.

##### When the `www.agavepv.com/` route is hit, the frontend pings the backend using the `API.loadArticles()` function to load some Newark-related news articles that were saved in on the Heroku MLab database. 

##### After pinging the backend, if no articles are returned the `API.scrapeArticles()` function makes a call to the API which fires up a `Cheerio.js` module that scrapes the most recent 30 articles from `www.tapinto.net/newark/development/articles.` The module then saves the pertinent information to the database and sends it to the frontend where cards with images, links and descriptions are dynamically rendered using React.js

##### In the event there are articles in the database but the client wants to scrape the website for more recent articles the `www.agavepv.com/scrape` route must be hit. This will fire the same cheerio.js module on the backend. This time, each article scraped will be referenced against the database by filtering by title. If the article is already saved, a duplicate will not be created. After the new articles are saved, they are sent to the frontend and rendered for the client.

###### Upcoming changes to the website:
  1. Updated UI
  2. Agave PV Merchandise Store
  3. Accounts, Authentication and Permissions
  4. Ownership permissions that will interface with the external the writR application. [Click here for more information on writR](https://github.com/TheGreekCuban/writR)
  
