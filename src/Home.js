import React from "react";
import { link } from "react-router-dom";

export default function Homepage() {
  return (
    <div>
      <section class="links-container">
        <link to="login">LOGIN</link>
        <br />
        <br />
        <link to="registration">REGISTER</link>
      </section>
    </div>
  );
}
