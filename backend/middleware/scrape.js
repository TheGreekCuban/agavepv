const db = require("../models")
const axios = require("axios")
const cheerio = require("cheerio")

const Scrape = (req, res) => {
    console.log(`REQ: ${req}, RES: ${res}`)
    /*
    //First we grab the body of the html with axios
    axios.get("https://www.tapinto.net/towns/newark/sections/development").then(response => {
        console.log("made it to back end")
        //Then we load that into cheerio and save it to $ for the shorthand selector
        let $ = cheerio.load(response.data)
        console.log(`Scraper response: ${response.data}`)
        let grabbedElement = $(".to-flex title-with-sponsor").find("a")

        //Now, we grab every headline title tag and do the following
        $(grabbedElement).each((i, element) => {

            //Save an empty result object
            const result = {}

            //Add the text and href of every link, save them as properties of result
            result.title = $(element).find(".container-section-name").text()

            //Create a new Scraper using the result obj built from scraping. First we search for a match by using findOne, if there is no match in the database then we create a new collection.
            db.Scraper
            .findOne({ title: "test" }, (error, existingArticle) => {
                if (existingArticle === null) {
                    console.log(existingArticle)
                    db.Scraper
                        .create({tile: "test"})
                        .then(dbScraper => console.log(dbScraper))
                        .catch(error => console.log(error))
                }
            })
        })       
    })
    */
}

module.exports = Scrape