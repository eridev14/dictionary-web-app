export interface Dictionary {
  word: string;
  phonetics: Phonetic[];
  meanings: Meaning[];
  license: License;
  sourceUrls: string[];
}

interface License {
  name: string;
  url: string;
}

interface Phonetic {
  text?: string;
  audio?: string;
  sourceUrl?: string;
  license?: License;
}

interface Meaning {
  partOfSpeech: string;
  definitions: Definition[];
  synonyms: string[];
  antonyms: string[];
}

interface Definition {
  definition: string;
  synonyms: string[];
  antonyms: string[];
}

export interface ErrorSearch {
  title: string;
  message: string;
  resolution: string;
}
