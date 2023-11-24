export const languages = {
    "sq": "Albanian",
    "am": "Amharic",
    "ar": "Arabic",
    "eu": "Basque",
    "be": "Bielarus",
    "bem": "Bemba",
    "bi": "Bislama",
    "bjs": "Bajan",
    "bn": "Bengali",
    "br": "Breton",
    "bs": "Bosnian",
    "my": "Burmese",
    "ca": "Catalan",
    "cop": "Coptic",
    "cs": "Czech",
    "hr": "Croatian",
    "nl": "Dutch",
    "da": "Danish",
    "dz": "Dzongkha",
    "de": "German",
    "el": "Greek",
    "en": "English",
    "et": "Estonian",
    "fi": "Finnish",
    "fn": "Fanagalo",
    "fo": "Faroese",
    "fr": "French",
    "gl": "Galician",
    "gu": "Gujarati",
    "ha": "Hausa",
    "he": "Hebrew",
    "hi": "Hindi",
    "hu": "Hungarian",
    "id": "Indonesian",
    "is": "Icelandic",
    "it": "Italian",
    "ja": "Japanese",
    "kk": "Kazakh",
    "km": "Khmer",
    "kn": "Kannada",
    "ko": "Korean",
    "ku": "Kurdish",
    "ky": "Kyrgyz",
    "rn": "Kirundi",
    "la": "Latin",
    "lo": "Lao",
    "lv": "Latvian",
    "men": "Mende",
    "mg": "Malagasy",
    "mi": "Maori",
    "ms": "Malay",
    "mt": "Maltese",
    "dv": "Maldivian",
    "ne": "Nepali",
    "niU": "Niuean",
    "no": "Norwegian",
    "ny": "Nyanja",
    "ur": "Pakistani",
    "paW": "Palauan",
    "pa": "Panjabi",
    "ps": "Pashto",
    "piB": "Pijin",
    "pl": "Polish",
    "pt": "Portuguese",
    "fa": "Persian",
    "ro": "Romanian",
    "ru": "Russian",
    "sg": "Sango",
    "si": "Sinhala",
    "sk": "Slovak",
    "sm": "Samoan",
    "sn": "Shona",
    "so": "Somali",
    "es": "Spanish",
    "sr": "Serbian",
    "sv": "Swedish",
    "sw": "Swahili",
    "ta": "Tamil",
    "te": "Telugu",
    "tet": "Tetum",
    "tg": "Tajik",
    "th": "Thai",
    "ti": "Tigrinya",
    "tk": "Turkmen",
    "tl": "Tagalog",
    "tn": "Tswana",
    "to": "Tongan",
    "tr": "Turkish",
    "bo": "Tibetan",
    "uk": "Ukrainian",
    "uz": "Uzbek",
    "vi": "Vietnamese",
    "wo": "Wolof",
    "cy": "Welsh",
    "xh": "Xhosa",
    "yi": "Yiddish",
    "zu": "Zulu"
}


const url = 'https://google-translate1.p.rapidapi.com/language/translate/v2';
const options = {
	method: 'POST',
	headers: {
		'content-type': 'application/x-www-form-urlencoded',
		'Accept-Encoding': 'application/gzip',
		'X-RapidAPI-Key': 'f4f3ccf944msh4c806cb5dfb476fp148071jsnefe454999a75',
		'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
	},
	body: new URLSearchParams({
		q: 'Hello',
		target: 'kn',
		source: 'en'
	})
};

export function translate(from_, to, text){
    return fetch(
    'https://translate.googleapis.com/translate_a/single?client=gtx&sl='+from_+'&tl='+to+'&dt=t&q='+text
    )
    .then((res)=>res.json())
    .then((result)=>{return result[0][0][0]})
}

function translate1(from_, to, text){
    const url = 'https://google-translate1.p.rapidapi.com/language/translate/v2';
    const options = {
        method: 'POST',
        headers: {
            'content-type': 'application/x-www-form-urlencoded',
            'Accept-Encoding': 'application/gzip',
            'X-RapidAPI-Key': 'AIzaSyDJsi7L13IZftZlsRFp57aEWDsqR9190PY',
            'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
        },
        body: new URLSearchParams({
            q: text,
            target: to,
            source: from_
        })
    };
    console.log(from_, to, text)
    return fetch(url, options)
    .then(res=>res.text())
    .then(res=>{
        console.log(JSON.parse(res))
        return JSON.parse(res).data.translations[0].translatedText
    })
    .catch(err=>console.log(err))
}
