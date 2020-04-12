const db = require("../models")
const axios = require("axios")
const cheerio = require("cheerio")

const Scrape = async(req, res) => {

    //First we grab the body of the html with axios
    axios.get("https://www.tapinto.net/towns/newark/sections/development").then(response => {
        
        //Then we load that into cheerio and save it to $ for the shorthand selector
        let $ = cheerio.load(response.data)
        let grabbedElement = $(".list_article").find(".select")

        //Now, we grab every headline title tag and do the following
        $(grabbedElement).each((i, element) => {
           
            //Save an empty result object
            const result = {}

            //Add the text and href of every link, save them as properties of result
            result.title = $(element).text()
            result.link = `https://www.tapinto.net/${$(element).find("a").attr("href")}`
            console.log("1: ", result.title)
            console.log("2: ", result.link)

            return result
        })       
    })
    return "hello1111"
}

module.exports = Scrape