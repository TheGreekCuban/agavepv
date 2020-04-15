const axios = require("axios")
const cheerio = require("cheerio")

//This is a scraping module where I use the axios package and cheerio.js to scrape articles from tapintonewark.net
const Scrape = () => {

    //First we grab the body of the html with axios
    return axios.get("https://www.tapinto.net/towns/newark/sections/development/articles").then(response => {
        
        //Then we load that into cheerio and save it to $ for the shorthand selector
        let $ = cheerio.load(response.data)
        let grabbedElement = $(".content")
        let data = []

        //Now, we grab every headline title tag and do the following
        $(grabbedElement).each((i, element) => {
            //Save an empty result object
            const result = {}

            //Add the text and href of every link, save them as properties of result
            result.image = $(element).find(".image").find("a").find("img").attr("src")
            result.link = `https://www.tapinto.net${$(element).find(".image").find("a").attr("href")}`

            //Need a conditional because first article on page has different structure.
            i > 0 
                ? result.title = $(element).prevAll(".3").find(".title").find("h3").find("a").text() 
                : result.title = $(element).prevAll(".title").find(".title").find("h2").find("a").text()

            //Push the objects into an array that we will return up the route to the front end for mapping.
            data.push(result)
        })

        //Data is an array of objects containing the properties and values from each article.
        return data
    }).catch(error => console.log(error))
}

module.exports = Scrape