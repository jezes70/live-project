import React from "react";
import "./hero.css";
import heroImage from "../../assets/heroImage.png";
import {Link} from "react-router-dom"

export default function Hero() {
  return (
    <div>
      <main className="hero">
        <section id="a">
          <h1>Mental Health Matters</h1>

          <p id="numberOne">
            Share, connect, and provide support in a safe space for mental
            health. A community of empatics where you get to unburden your mind.
          </p>

          <p id="numberTwo">
            Mental health conditions affect millions of people worldwide. Many
            people struggle to find the support they need to cope with their
            conditions, stigma often prevents them from seeking help.
          </p>
         <Link to="/login" >
          <button id="first">Sign In</button>
          </Link>
          <Link to="/register"> 
          <button id="second">Register Here</button>
          </Link>
        </section>
        <section id="b">
          <img src={heroImage} alt="logo" height="640" width="617" />
        </section>
      </main>
    </div>
  );
}
