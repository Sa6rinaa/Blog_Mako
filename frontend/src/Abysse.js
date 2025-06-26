import React from 'react';


export default function Abysse() {
  return (
    <div className="abysse-page">
      <section className="abysse-intro">
        <h1>🌌 Les Abysses</h1>
        <p>
          Les abysses sont les profondeurs les plus sombres et inexplorées de l'océan. Situées entre 4 000 et 6 000 mètres de profondeur, elles abritent des espèces rares et mystérieuses, vivant dans l'obscurité totale, sous des pressions extrêmes et dans des températures proches de 0°C.
        </p>
      </section>

      <section className="abysse-species">
        <h2>Espèces rares des abysses</h2>
        <ul>
          <li>
            <h3>🐉 Dragon des abysses (Stomiidae)</h3>
            <p>Ce poisson bioluminescent vit jusqu'à 5 000 m de profondeur et utilise des leurres lumineux pour piéger ses proies.</p>
          </li>
          <li>
            <h3>👻 Poisson fantôme (Macrouridae)</h3>
            <p>Détecté à plus de 6 000 m, il vit dans le noir absolu et se déplace lentement pour économiser son énergie.</p>
          </li>
          <li>
            <h3>🦑 Calmar vampire (Vampyroteuthis infernalis)</h3>
            <p>Ce mollusque à l’apparence étrange vit entre 600 et 900 m mais descend parfois bien plus bas.</p>
          </li>
          <li>
            <h3>🪸 Concombre de mer abyssal (Scotoplanes)</h3>
            <p>Aussi appelé "cochon de mer", il rampe lentement sur le fond marin à plus de 5 000 m.</p>
          </li>
          <li>
            <h3>🦀 Crabe yéti (Kiwa hirsuta)</h3>
            <p>Découvert en 2005 à 2 200 m de profondeur, ce crabe possède des “bras” couverts de soies lui servant à cultiver des bactéries.</p>
          </li>
        </ul>
      </section>
    </div>
  );
}