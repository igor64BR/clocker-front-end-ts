interface TranslatedObject {
  data: {
    translations: TranslationText[];
  };
}

interface TranslationText {
  translatedText: string;
}

export default async function translate(text: string) {
  const url = 'https://google-translate1.p.rapidapi.com/language/translate/v2';
  const options = {
    method: 'POST',
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
      'Accept-Encoding': 'application/gzip',
      'X-RapidAPI-Key': 'fdf6ab898amsh6f843cd37d5db92p1a291bjsncd2ff3f4262d',
      'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com',
    },
    body: new URLSearchParams({
      q: text,
      target: 'pt',
      source: 'en',
    }),
  };

  try {
    const response = await fetch(url, options);
    const result = await response.text();
    const obj = JSON.parse(result);

    return (obj as TranslatedObject).data.translations[0].translatedText;
  } catch {
    return text;
  }
}
