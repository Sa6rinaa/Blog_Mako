import React from "react";

export default function Prehistoric() {
  return (
    <>
      <header
        style={{
          height: "60px",
          background: "#112244",
          color: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontWeight: "700",
          fontSize: "1.5rem",
          userSelect: "none",
          boxShadow: "0 2px 8px rgba(0,0,0,0.6)",
          position: "sticky",
          top: 0,
          zIndex: 10,
        }}
      >
        Mon Header
      </header>

      <main className="prehistoric-page">
        <section className="prehistoric-intro">
          <h1>🦕 Le Monde Préhistorique des Dinosaures</h1>
          <p>
            Plongeons ensemble dans un voyage fascinant à travers le temps, pour
            découvrir comment les dinosaures sont apparus, pourquoi ils étaient
            si gigantesques, et ce qui a provoqué leur disparition.
            Prépare-toi, c’est une histoire passionnante qui nous ramène des
            centaines de millions d’années en arrière !
          </p>

          <div className="part-block">
            <h2>1. Comment sont venus les dinosaures au monde ?</h2>
            <p>
              Les dinosaures sont apparus il y a environ <strong>230 millions
              d’années</strong>, pendant la période du <em>Trias</em>. Ils descendent
              d’un groupe de reptiles appelés les <strong>archosaures</strong>,
              qui regroupaient aussi les ancêtres des crocodiles. Parmi ces
              archosaures, certains ont évolué pour devenir les premiers dinosaures.
            </p>
            <p>
              Le tout premier dinosaure connu s’appelait <em>Eoraptor</em> (“voleur
              du matin”). Ce petit dinosaure était rapide et carnivore, mais loin
              d’être aussi grand que les dinosaures géants que l’on imagine
              souvent. Il a cependant ouvert la voie à toute une famille de
              dinosaures qui allaient dominer la Terre pendant des millions
              d’années.
            </p>
          </div>

          <div className="part-block">
            <h2>2. Qui est l’ancêtre des dinosaures ?</h2>
            <p>
              Comme on l’a vu, les dinosaures viennent des{" "}
              <strong>archosaures</strong>. Ce groupe de reptiles a donné naissance
              à plusieurs lignées, dont les dinosaures et les crocodiles. Les
              dinosaures font partie d’un sous-groupe appelé les{" "}
              <em>dinosauromorphes</em>, qui ressemblent aux dinosaures mais sont
              plus primitifs.
            </p>
            <p>
              Eoraptor est un exemple typique de ce stade précoce, un dinosaure
              primitif qui montre les premières caractéristiques de ce groupe
              incroyable.
            </p>
          </div>

          <div className="part-block">
            <h2>3. Si les humains avaient vécu à l’époque des dinosaures, auraient-ils survécu ?</h2>
            <p>
              C’est une question intéressante ! Mais la réponse est que ce serait
              très difficile, voire impossible, pour les humains de survivre à
              l’époque des dinosaures. Pourquoi ?
            </p>
            <ul>
              <li><strong>La compétition avec des prédateurs redoutables :</strong> Les dinosaures, grands ou petits, étaient adaptés à leur environnement et souvent de très bons chasseurs.</li>
              <li><strong>Les conditions climatiques extrêmes :</strong> La Terre était bien plus chaude et avait une atmosphère différente, moins adaptée aux humains modernes.</li>
              <li><strong>Les ressources alimentaires :</strong> Les humains ont besoin d’une alimentation et d’un habitat spécifiques qu’ils ne pouvaient pas forcément trouver dans cet environnement.</li>
            </ul>
            <p>
              Bref, nos ancêtres n’auraient pas eu beaucoup de chances face aux
              géants du Mésozoïque.
            </p>
          </div>

          <div className="part-block">
            <h2>4. Pourquoi les animaux étaient-ils énormes à cette époque, alors qu’aujourd’hui ils sont plutôt petits ?</h2>
            <p>
              La taille impressionnante de nombreux animaux préhistoriques fascine
              toujours. Plusieurs raisons expliquent cette tendance à la
              gigantisme chez les dinosaures et autres créatures de cette époque :
            </p>
            <ul>
              <li><strong>Un taux d’oxygène plus élevé :</strong> Certaines périodes ont vu des concentrations d’oxygène dans l’atmosphère supérieures à celles d’aujourd’hui, ce qui favorise la croissance de grands animaux.</li>
              <li><strong>Moins de prédateurs pour les contrôler :</strong> Dans certains cas, des niches écologiques libres ont permis à certaines espèces de devenir très grandes pour dominer leur environnement.</li>
              <li><strong>Régulation thermique :</strong> Être gros aide certains animaux à conserver la chaleur ou à mieux gérer leur température corporelle.</li>
              <li><strong>Changements environnementaux post-extinction :</strong> Après la disparition des dinosaures, les conditions ont changé. La taille gigantesque devenait moins avantageuse, et les mammifères et autres animaux ont évolué vers des tailles plus petites adaptées à leur environnement.</li>
            </ul>
          </div>

          <div className="part-block">
            <h2>5. Pourquoi les dinosaures se sont-ils éteints ?</h2>
            <p>
              La grande extinction des dinosaures a eu lieu il y a environ{" "}
              <strong>66 millions d’années</strong>, à la fin du Crétacé. La théorie
              la plus acceptée est celle de la chute d’un gigantesque astéroïde,
              qui a frappé la Terre près de l’actuelle péninsule du Yucatán, au
              Mexique.
            </p>
            <p>Cet impact a provoqué :</p>
            <ul>
              <li>Un nuage énorme de poussières et de débris qui a bloqué la lumière du soleil pendant des mois, ce qui a perturbé la photosynthèse et la chaîne alimentaire.</li>
              <li>Une chute brutale des températures, rendant la survie difficile pour beaucoup d’espèces.</li>
              <li>Des incendies massifs, des tsunamis et des changements climatiques rapides.</li>
            </ul>
            <p>
              En plus de ça, un volcanisme intense, notamment les éruptions des
              traps du Deccan en Inde, a pu aggraver la situation. Résultat :
              presque tous les dinosaures non-aviaires ont disparu. Seuls certains
              petits dinosaures ont survécu, ceux qui ont évolué en oiseaux, nos
              ancêtres ailés d’aujourd’hui.
            </p>
          </div>

          <div className="part-block">
            <h2>Bonus : Les oiseaux, descendants directs des dinosaures</h2>
            <p>
              Si tu regardes bien un oiseau aujourd’hui, tu as un dinosaure sous
              les yeux ! Les oiseaux sont les seuls dinosaures qui ont survécu à
              l’extinction massive. Ils sont apparus pendant le Jurassique, et
              leur évolution progressive les a adaptés au vol, à la vie dans les
              arbres et à d’autres niches écologiques.
            </p>
            <p>
              C’est fou, non ? Les dinosaures ne sont donc pas complètement
              disparus, ils vivent parmi nous sous forme d’oiseaux.
            </p>
          </div>

          <p className="italic">
            Voilà, maintenant tu connais toute l’histoire des dinosaures : leur
            origine, leur taille incroyable, leur extinction, et leur héritage
            toujours vivant aujourd’hui !
          </p>
        </section>
      </main>
    </>
  );
}
