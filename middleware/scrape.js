const express = require("express")
const router = express.Router()
const db = require("../models")
const axios = require("axios")
const cheerio = require("cheerio")

const Scrape = () => {
    //First we grab the body of the html with axios
    axios.get("https://therealdeal.com/").then(response => {
        //Then we load that into cheerio and save it to $ for the shorthand selector
        let $ = cheerio.load(response.data)
        let grabbedElement = $(".trd-article-lists-content").find("a")
        let removedItem = $(".trd-article-lists-content").find("a").find(".sponsored").find(".next")
        removedItem.remove()

        //Now, we grab every headline title tag and do the following
        $(grabbedElement).each((i, element) => {

            //Save an empty result object
            const result = {}

            //Add the text and href of every link, save them as properties of result
            result.title = $(element).find(".trd-article-body").find(".trd-article-title").text()
            result.link = $(element).attr("href")
            result.description = $(element).find(".trd-article-body").find(".trd-article-excerpt").text()
            result.meta = $(element).find(".trd-article-body").find(".trd-article-meta").text()

            //Create a new Scraper using the result obj built from scraping. First we search for a match by using findOne, if there is no match in the database then we create a new collection.
            db.Scraper
                .findOne({ title: result.title }, (error, existingArticle) => {
                if (existingArticle === null) {
                    db.Scraper
                        .create(result)
                        .then(dbScraper => console.log(dbScraper))
                        .catch(error => console.log(error))
                }
            })
        })
    })
}

module.exports = Scrape