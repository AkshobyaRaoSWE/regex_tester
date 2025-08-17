"use client";
import { useState } from "react";
export default function Home() {
  const [text, setText] = useState("");
  const [regex, setRegex] = useState<RegExp | null>();
  const [res, setRes] = useState("");

  const handleTesting = () => {
    if (!text || !regex) return;
    const match = text.match(regex);
    console.log(typeof regex);
    setRes(match ? match.join(",") : String(match));
  };

  return (
    <div>
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
          onChange={(e) => setRegex(new RegExp(e.target.value, "g"))}
          placeholder="Type here"
          required
        />
      </fieldset>
      <button className="btn btn-primary rounded-md" onClick={handleTesting}>
        Match Regex
      </button>
      <p>
        {res}, {text}, {String(regex)}
      </p>
    </div>
  );
}
