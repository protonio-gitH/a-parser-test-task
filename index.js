import axios from "axios";

async function parse(url){
    try {
        const response = await axios.get(url);
        const html = response.data;

        const cleanedHtml = html.replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '');

        const textWithoutTags = cleanedHtml.replace(/<\/?[a-z][^>]*>/gi, ' ');

        const wordRegex = /\b\w+\b/g;

        const wordsArray = textWithoutTags.match(wordRegex);

        console.log(`Количество слов без HTML тегов: ${wordsArray.length}`);
    }
    catch(err){
        console.error(`Ошибка при запросе: ${err.message}`);
    }
}


parse('https://a-parser.com/parsers/');


