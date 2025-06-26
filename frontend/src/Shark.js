import React from 'react';

export default function Shark() {
  return (
    <section className="shark-page">
      {/* INTRO */}
      <div className="shark-intro">
        <h1>🦈 Le Monde Fascinant des Requins</h1>
        <p>
          Les requins sont des créatures marines incroyablement anciennes, avec une histoire qui remonte à plus de <strong>400 millions d’années</strong> — bien avant même l’apparition des dinosaures ! Ce qui les rend uniques, c’est que leur squelette est composé de cartilage, un matériau plus léger et flexible que l’os, ce qui leur donne une grande agilité dans l’eau.
        </p>
      </div>

      {/* SECTION 1 */}
      <div className="shark-section">
        <h2>1. Les requins aujourd’hui</h2>
        <p>
          Aujourd’hui, on compte plus de 500 espèces de requins, allant du petit requin-chat de moins d’un mètre au gigantesque requin-baleine, le plus grand poisson du monde. Ils vivent dans presque tous les océans et mers de la planète, depuis les eaux tropicales chaudes jusqu’aux zones polaires glacées.
        </p>
        <p>
          Certains requins, comme le grand requin blanc, doivent nager en permanence pour faire circuler l’eau sur leurs branchies et respirer. D’autres, comme le requin dormeur, peuvent rester immobiles et utiliser un mécanisme appelé la ventilation buccale pour faire passer l’eau sur leurs branchies.
        </p>
      </div>

      {/* SECTION 2 */}
      <div className="shark-section">
        <h2>2. Le Mégalodon, le roi des mers préhistoriques</h2>
        <p>
          Le Mégalodon (<em>Carcharocles megalodon</em>) est sans doute le requin préhistorique le plus célèbre. Il a vécu entre <strong>23 et 3,6 millions d’années</strong> et pouvait mesurer jusqu’à 18 mètres, soit trois fois la taille d’un grand requin blanc moderne. Ce prédateur redoutable chassait des baleines et dominait les océans de son époque.
        </p>
        <p>
          Contrairement à ce qu’on pourrait croire, le Mégalodon est apparu après la disparition des dinosaures, donc il n’a jamais croisé un T-Rex ou un tricératops. C’est une preuve que la vie marine a continué à évoluer et à se diversifier longtemps après les extinctions massives.
        </p>
      </div>

      {/* SECTION 3 */}
      <div className="shark-section">
        <h2>3. Requins et dinosaures : une cohabitation dans deux mondes</h2>
        <p>
          Les requins et les dinosaures ont bel et bien vécu en même temps, mais pas dans les mêmes milieux. Tandis que les dinosaures régnaient sur la terre ferme pendant le Mésozoïque (il y a environ 230 à 66 millions d’années), les requins régnaient dans les océans. Ils occupaient des niches écologiques très différentes et ne se rencontraient donc jamais.
        </p>
        <p>
          Cette cohabitation dans des environnements séparés montre la richesse et la complexité de la vie sur Terre à cette époque lointaine.
        </p>
      </div>

      {/* SECTION 4 */}
      <div className="shark-section">
        <h2>4. Les premiers requins connus : Cladoselache et ses cousins</h2>
        <p>
          Les premiers ancêtres des requins sont apparus il y a environ <strong>420 millions d’années</strong>, durant le Silurien et le Dévonien. Une espèce emblématique de cette époque est <em>Cladoselache</em>, un requin primitif qui vivait dans des mers peu profondes il y a environ 370 millions d’années.
        </p>
        <p>
          Cladoselache mesurait environ 1,5 à 2 mètres et possédait déjà des dents pointues adaptées à la chasse. Son corps était plus fuselé et ses nageoires moins développées que celles des requins modernes, mais il représentait une étape clé dans l’évolution des requins.
        </p>
      </div>

      {/* SECTION 5 */}
      <div className="shark-section">
        <h2>5. Pourquoi les requins ont-ils survécu si longtemps ?</h2>
        <p>
          Les requins sont parmi les plus grands survivants de l’histoire de la vie sur Terre. Ils ont traversé plusieurs extinctions massives, y compris celle qui a fait disparaître les dinosaures. Plusieurs raisons expliquent cette longévité exceptionnelle :
        </p>
        <ul>
          <li><strong>Une grande adaptabilité :</strong> Les requins ont évolué pour vivre dans une variété d’habitats et peuvent changer leur alimentation selon les ressources disponibles.</li>
          <li><strong>Un système sensoriel très performant :</strong> Ils détectent les champs électriques, les vibrations et les odeurs, ce qui fait d’eux des chasseurs redoutables.</li>
          <li><strong>Une reproduction efficace :</strong> Certaines espèces pondent des œufs protégés, d’autres donnent naissance à des petits déjà bien développés.</li>
          <li><strong>Une faible dépendance aux conditions spécifiques :</strong> Leur squelette cartilagineux est plus léger et leur permet de se déplacer avec moins d’effort dans l’eau.</li>
        </ul>
      </div>

      {/* SECTION 6 */}
      <div className="shark-section">
        <h2>6. Les requins modernes, une diversité incroyable</h2>
        <p>
          De nos jours, on trouve des requins de toutes formes et tailles : du minuscule requin-lutin, au corps presque translucide, au gigantesque requin-baleine, qui filtre le plancton comme une baleine. Certains sont des prédateurs rapides, d’autres des filtreurs paisibles.
        </p>
        <p>
          Cette diversité montre à quel point les requins ont su évoluer et s’adapter aux changements de la planète pendant des centaines de millions d’années.
        </p>
      </div>

      {/* CONCLUSION */}
      <div className="shark-section">
        <p className="italic">
          Voilà un aperçu complet du monde fascinant des requins : leurs origines, leur évolution, leur incroyable capacité à survivre et s’adapter à travers les âges. Une histoire aussi vieille que captivante !
          Les requins sont donc de véritables survivants, témoins d’une histoire marine de plusieurs centaines de millions d’années, et continuent de régner sur les océans aujourd’hui !
        </p>
      </div>
    </section>
  );
}
