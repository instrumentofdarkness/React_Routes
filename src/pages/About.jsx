import React from "react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div>
      <h1>this is About component</h1>
      <Link to="/">
        <button>Back to Home</button>
      </Link>
    </div>
  );
}
