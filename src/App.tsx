import { useEffect, useState } from "react";
import "./App.css";
import "./index.css";
import useSearch from "./hooks/useSearch";
import { WordDictionary } from "./components/WordDictionary";
import { IconBook, IconMoon, IconSun } from "./icons/IconsHeader";

const options = [
  { label: "Arial", value: "'Arial', sans-serif" },
  { label: "Courier New", value: "'Courier New', monospace" },
  { label: "Times New Roman", value: "'Times New Roman', serif" },
  { label: "Comic Sans", value: "'Comic Sans MS', cursive" },
];

function App() {
  const [mode, setMode] = useState(false);
  const [search, setSearch] = useState("");
  const { data, message, error, loading } = useSearch(search);

  const [font, setFont] = useState("Arial");
  const [isOpen, setIsOpen] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const form = new FormData(e.target as HTMLFormElement);
    const wordData = form.get("inp");
    const wordValue = wordData?.toString();
    if (wordValue === undefined) return;
    setSearch(wordValue);
  }

  function handleClickMode() {
    setMode(!mode);
  }

  useEffect(() => {
    document.body.className = mode ? "dark-mode" : "light-mode";
  }, [mode]);

  function handleClickFont(label: string, value: string) {
    setIsOpen(false);
    setFont(label);
    document.documentElement.style.setProperty("--font-family", value);
  }

  return (
    <main className="main">
      <header className="header">
        <span className="header__icon">
          <IconBook />
        </span>
        <section className="header__conf">
          <div className="header__font font">
            <div className="font__header" onClick={() => setIsOpen(!isOpen)}>
              <span>{font}</span>
              <span>{isOpen ? "▲" : "▼"}</span>
            </div>
            <ul
              className={`font__options ${isOpen ? "active" : ""}`}
              style={{
                height: `${isOpen ? `calc(35px * ${options.length})` : "0"}`,
              }}
            >
              {options.map((option, index) => (
                <li
                  key={index}
                  className="font__element"
                  onClick={() => handleClickFont(option.label, option.value)}
                >
                  {option.label}
                </li>
              ))}
            </ul>
          </div>
          <span className="header__line"></span>
          <div className="mode">
            <div className="mode__box" onClick={handleClickMode}>
              <span className={`mode__circle ${mode ? "active" : ""}`}></span>
            </div>
            {mode ? <IconMoon /> : <IconSun />}
          </div>
        </section>
      </header>
      <section className="search">
        <form className="search__form" onSubmit={handleSubmit}>
          <label htmlFor="inp" className="search__label">
            <input
              type="text"
              name="inp"
              id="inp"
              placeholder="Enter search word..."
              className="search__inp"
            />
          </label>
          <button type="button" className="search__btn">
            <svg
              width="25px"
              height="25px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="10"
                cy="10"
                r="6"
                stroke="#bbbbbbb6"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M14.5 14.5L19 19"
                stroke="#bbbbbbb6"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </form>
      </section>

      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{message}</p>
      ) : data ? (
        <WordDictionary data={data} />
      ) : null}
    </main>
  );
}

export default App;
