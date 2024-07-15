import axios from "axios";

async function parse(url){
    try {
        const response = await axios.get(url);
        const html = response.data;
        const regex = /<div class="integration-card-copy most-popular">.*?<strong(?: class="bold-text(?:-\d+)?)?">(.*?)<\/strong>.*?<div>(.*?)<\/div>/gs
        
        let match;
        while ((match = regex.exec(html)) !== null) {
            const strongText = match[1];
            const emptyDivText = match[2];
            const str = /(.*?)<strong class="bold-text(-\d+)">(.*?)<\/strong>/.exec(emptyDivText)
            if (str){
                console.log(`${strongText}, ${str[1]} ${str[3]}`);
            }else{
                console.log(`${strongText.replace(/<br>/,'')}, ${emptyDivText}`)
            }
        }


    }
    catch(err){
        console.error(`Ошибка при запросе: ${err.message}`);
    }
}


parse('https://a-parser.com/parsers/');


