import React, { useState, useEffect } from "react";

function Hero() {
  const mots = ["Abysses", "Requins", "Préhistoire"];
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % mots.length);
        setFade(true); 
      }, 500);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="hero">
      <div className="hero-text">
        <h1>
          <span className="highlight-lynar">OceanBlog</span> : plongez dans{" "}
          <span className={`highlight ${fade ? "fade-in" : "fade-out"}`}>
            {mots[index]}
          </span>
        </h1>
        <p>Découvrez les mystères des profondeurs, les requins et l'histoire de la Terre.</p>
      </div>

      <div className="hero-image">
        <img src="/../images/illustration.jpg" alt="Océan illustration" />
      </div>
    </section>
  );
}

export default Hero;
