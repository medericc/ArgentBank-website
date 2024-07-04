import React from 'react';
import Feature from '../components/FeatureItem.jsx';
import chatIcon from '../img/icon-chat.png';
import moneyIcon from '../img/icon-money.png';
import securityIcon from '../img/icon-security.png';

const Home = () => {
  return (
    <React.Fragment>
      <main>
        <div className="hero">
          <section className="hero-content">
            <h2 className="sr-only">Contenu Promu</h2>
            <p className="subtitle">Pas de frais.</p>
            <p className="subtitle">Pas de dépôt minimum.</p>
            <p className="subtitle">Taux d'intérêt élevés.</p>
            <p className="text">Ouvrez un compte d'épargne chez Argent Bank dès aujourd'hui!</p>
          </section>
        </div>
      </main>
      <section className="features">
        <h2 className="sr-only">Caractéristiques</h2>
        <Feature
          img={chatIcon}
          alt="Icône de chat"
          title="Vous êtes notre priorité n°1"
          content="Besoin de parler à un représentant? Vous pouvez nous contacter via notre chat 24/7 ou par téléphone en moins de 5 minutes."
        />
        <Feature
          img={moneyIcon}
          alt="Icône d'argent"
          title="Plus vous épargnez, plus les taux sont élevés"
          content="Plus vous épargnez avec nous, plus votre taux d'intérêt sera élevé!"
        />
        <Feature
          img={securityIcon}
          alt="Icône de sécurité"
          title="Une sécurité de confiance"
          content="Nous utilisons le cryptage de pointe pour garantir que vos données et votre argent sont toujours en sécurité."
        />
      </section>
    </React.Fragment>
  );
};

export default Home;
