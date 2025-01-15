import { IconPlay } from "../icons/IconsHeader";
import { Dictionary } from "../types";

interface DictionaryProps {
  data: Dictionary | null;
  mode: boolean;
}

export const WordDictionary = ({ data, mode }: DictionaryProps) => {
  async function handleClickAudio() {
    const mapAudio = new Set<string>();

    const urlAudio = data?.phonetics.filter((aud) => {
      if (aud.audio) return aud.audio;
    });

    if (!urlAudio) return;
    if (!urlAudio[0].audio) return;

    console.log(urlAudio[0].audio);
    const audioLink = urlAudio[0].audio;

    if (mapAudio.has(audioLink)) {
      console.log("Ya existe el audio");
    }

    const audioFetch = await fetch(audioLink);
    const audioBlob = await audioFetch.blob();
    console.log(audioBlob);

    // Crear una URL temporal para el audio
    const audioUrl = URL.createObjectURL(audioBlob);

    // Crear un objeto de Audio y reproducirlo
    const audioElement = new Audio(audioUrl);
    audioElement.play();

    audioElement.addEventListener("ended", () => {
      console.log("Audio terminado");
    });

    audioElement.addEventListener("play", () => {
      console.log("Audio en reproducción");
      
    });
  }

  return (
    <>
      <section className="word">
        <section className="word__main">
          <h1 className="word__title">{data?.word}</h1>
          <span className="word__text">
            {data?.phonetics.map((fon) => {
              if (!fon.text) return;
              return fon.text + " ";
            })}
          </span>
        </section>
        <button className="word__btn-audio" onClick={handleClickAudio}>
          <IconPlay color={mode ? "#FFFFFF" : "#aaa"} />
        </button>
      </section>

      {data?.meanings.map((mean, ind) => (
        <div key={ind}>
          <section className="tag">
            <span className="tag__span">{mean.partOfSpeech}</span>
            <hr className="tag__hr" />
          </section>
          <section className="meaning">
            <h3 className="meaning__title">Meaning</h3>
            <ul className="meaning__list">
              {mean.definitions.map((def, ind) => (
                <li className="meaning__item" key={ind}>
                  {def.definition}
                </li>
              ))}

              <section className="synonyms">
                <h3>
                  {mean.synonyms.length > 0 ? (
                    <>
                      Synonyms{" "}
                      {mean.synonyms.map((sy, ind) => (
                        <span className="synonyms__text" key={ind}>
                          {sy + " "}
                        </span>
                      ))}
                    </>
                  ) : (
                    ""
                  )}
                </h3>
              </section>
              <section className="antonyms">
                <h3>
                  {mean.antonyms.length > 0 ? (
                    <>
                      Antonyms{" "}
                      {mean.antonyms.map((an, ind) => (
                        <span className="antonyms__text" key={ind}>
                          {an + " "}
                        </span>
                      ))}
                    </>
                  ) : (
                    ""
                  )}
                </h3>
              </section>
            </ul>
          </section>
        </div>
      ))}

      <div className="source">
        <span>source: </span>
        <a href={data?.sourceUrls[0]} className="source__link">
          {data?.sourceUrls[0]}
        </a>
      </div>
    </>
  );
};
