import React from "react";
import "./App.css";

export default function HeaderForm() {
  return (
    <div>
      <form>
        <input className="FormStyle" type="text" placeholder="Enter a city" />

        <button className="BtnPrimary" type="submit">
          Search
        </button>
      </form>
      <br />
    </div>
  );
}
