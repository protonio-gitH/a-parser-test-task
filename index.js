import axios from "axios";
import cheerio from "cheerio";

async function parse(url){
    try{
        const response = await axios.get(url);

        const $ = cheerio.load(response.data);

        $('.integration-card-copy').each((index, element) => {
            const h4Text = $(element).find('h4').text();
            console.log(`${h4Text},${$(element).find('div:not([class])').text()}`);
        });

    }catch(err){
        console.error(`Ошибка при запросе: ${err.message}`);
    }
    
}


parse('https://a-parser.com/parsers/');