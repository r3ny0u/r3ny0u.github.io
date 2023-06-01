import React from "react";

export default function Section({ title, subtitle, date, dark, id }) {
  return (
    <div className={"section" + (dark ? " section-dark" : "")}>
      <div className="section-content" id={id}>
        <div className="section-left">
          <h2>{date}</h2>
        </div>
        <div className="section-right">
          <h1>{title}</h1>
          <p>{subtitle}</p>
        </div>
      </div>
    </div>
  );
}
