"use client";
import { useState } from "react";
export default function Home() {
  const [text, setText] = useState("");
  const [regex, setRegex] = useState("");
  const [res, setRes] = useState("");

  const regexType = (str: string) => {
    if (str.includes("/")) {
      const reg = str.trim().match(/^\/(.+)\/([a-z]*)$/i);
      if (!reg) return null;
      return new RegExp(reg[1].replace(/\\\\+/g, "\\"), reg[2]);
    } else {
      return new RegExp(str.replace(/\\\\+/g, "\\"), "i");
    }
  };

  const handleTesting = () => {
    if (!text || !regex) return;
    const newRegex = regexType(regex);
    if (!newRegex) {
      setRes("Invalid regex format");
      return;
    }
    const match = text.match(newRegex);
    setRes(match ? String(match) : "Please try again");
  };

  return (
    <main className="flex flex-col items-center justify-center gap-5 w-fit">
      <div className="flex flex-col items-center justify-center gap-5 w-fit">
        <fieldset className="fieldset">
          <legend className="fieldset-legend">Tester Text</legend>
          <input
            type="text"
            onChange={(e) => setText(e.target.value)}
            className="input"
            placeholder="Type here"
            required
          />
        </fieldset>
        <fieldset className="fieldset">
          <legend className="fieldset-legend">Regex</legend>
          <input
            type="text"
            className="input"
            onChange={(e) => setRegex(e.target.value)}
            placeholder="Type here"
            required
          />
        </fieldset>
        <button
          className="btn btn-primary rounded-md w-full"
          onClick={handleTesting}
        >
          Match Regex
        </button>
      </div>
      <p className="font-extrabold">Result: {res}</p>
    </main>
  );
}
