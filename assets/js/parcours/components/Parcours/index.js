import React from 'react';
// import { Redirect, Route, Switch } from 'react-router-dom';
// import PropTypes from 'prop-types';

// Styles & assets
import './parcours.scss';
import Ornata from '/assets/styles/images/Ornata.png';
import Cora from '/assets/styles/images/Cora.png';
import HCJ from '/assets/styles/images/html_css_js.png';
import PHP from '/assets/styles/images/php-mysql.png';
import Symfo from '/assets/styles/images/logo-symfony.png';
import ReactLogo from '/assets/styles/images/react.png';
import ReduxLogo from '/assets/styles/images/reduxLogo.png';
import Opquast from '/assets/styles/images/OpQuast_KHLU4V.svg';
import France from '/assets/styles/images/France.png';
import UK from '/assets/styles/images/United_Kingdom.png';

const Parcours = () => {
    
    return (
        <div className="parcours-container">

            <img
                className="img-ornata"
                src={Ornata}
                alt="img-ornata"
            />

            <div className="top">
                <img
                    className="img-cora"
                    src={Cora}
                    alt="coralie photo"
                />
                <div className="who">
                    <h1 className="who-name">GARGOT Coralie</h1>
                    <h2 className="who-title title">Développeuse web junior</h2>
                    <p className="who-objective">en recherche de contrat d&apos;apprentissage (avec RQTH)</p>
                </div>
            </div>

            <div className="content">
                <div className="left">
                    <div className="profil">
                        <h3 className="profil-title title">Profil</h3>
                        <p>Passionnée par l’informatique depuis mon plus jeune âge, j’ai choisi de me reconvertir dans le développement web. J’aime apprendre et chercher, et ce domaine en perpétuelle évolution me correspond tout à fait.</p>
                        <p>J’ai suivi une formation intensive de 6 mois au métier de développeur web fullstack avec l’école O’Clock.</p>
                        <p>Je souhaite maintenant poursuivre dans cette voie et me former en alternance pendant un an pour préparer le Titre Professionnel de « Concepteur Développeur d’applications ».</p>
                    </div>
                    <div className="competences">
                        <h3 className="competences-title title">Compétences techniques</h3>
                        <div className="technos">
                            <img
                                className="miniature"
                                id="hcj-logo"
                                src={HCJ}
                                alt="HTML-CSS-JS logos"
                            />
                            <img
                                className="miniature"
                                id="php-logo"
                                src={PHP}
                                alt="PHP logo"
                            />
                            <img
                                className="miniature"
                                id="symfo-logo"
                                src={Symfo}
                                alt="Symfony logo"
                            />
                            <a href="https://directory.opquast.com/fr/certificat/KHLU4V/" target="_blank" rel="noreferrer">
                                <img
                                    className="miniature"
                                    id="opquast-certif"
                                    src={Opquast}
                                    alt="Opquast certification"
                                />
                            </a>
                            <img
                                className="miniature"
                                id="react-logo"
                                src={ReactLogo}
                                alt="React logo"
                            />
                            <img
                                className="miniature"
                                id="redux-logo"
                                src={ReduxLogo}
                                alt="Redux logo"
                            />
                        </div>
                        <div className="languages">
                            <figure className="flag">
                                <img
                                    className="miniature"
                                    id="france-logo"
                                    src={France}
                                    alt="France flag"
                                />
                                <figcaption>Maternelle</figcaption>
                            </figure>
                            <figure className="flag">
                                <img
                                    className="miniature"
                                    id="uk-logo"
                                    src={UK}
                                    alt="United-Kingdom flag"
                                />
                                <figcaption>Intermédiaire</figcaption>
                            </figure>
                        </div>
                    </div>
                    <div className="other">
                        <h3 className="other-title title">Et aussi</h3>
                        <p><strong>Permis B</strong> + véhicule</p>
                        <p><strong>Passions :</strong> Équitation, aquariophilie, jeux vidéos</p>
                    </div>
                </div>
                <div className="right">
                    <div className="experiences">
                        <h3 className="experiences-title title">Expériences professionnelles</h3>
                        <ul>
                            <li>
                                <h4 className="what">Développeur web Front (projet de fin de formation)</h4>
                                <div className="where-when"><p className="where">Ecole O&apos;Clock</p><p className="when">03/2020</p></div>
                                <p className="description">Création d’une application web et mobile en équipe, «MuseO» sur la découverte et le recensement du patrimoine local</p>
                                <p className="description">Conception du cahier des charges, wireframes</p>
                                <p className="how">[HTML, CSS, PHP, JavaScript, SQL, Symfony, API, React-Redux, SASS, Agile – Scrum, Git - GitHub]</p>
                            </li>
                            <li>
                                <h4 className="what">Développeur web (stage)</h4>
                                <div className="where-when"><p className="where">CELIA / CNRS (Talence – 33)</p><p className="when">06/2019</p></div>
                                <p className="description">Création d’un annuaire et d’un module d’emprunt de matériel pour l’intranet</p>
                                <p className="how">[HTML, CSS, PHP, Javascript, AJAX, jQuery, SQL]</p>
                            </li>
                        </ul>
                    </div>
                    <div className="formations">
                        <h3 className="formations-title title">Formations</h3>
                            <ul>
                                <li>
                                    <h4 className="what">Concepteur développeur d’applications en alternance</h4>
                                    <div className="where-when"><p className="where">Wild Code School</p><p className="when">du 14/09/2021 au 13/09/2022</p></div>
                                    <p className="description">3 semaines en entreprise et 1 semaine en formation</p>
                                    <p className="how">[SCRUM, React, NodeJS, Typescript, NoSql (MongoDb), MySQL, API, GraphQL, Docker, Tests (JEST), Flutter/React Native]</p>
                                </li>
                                <li>
                                    <h4 className="what">Développeur web - Spécialisation Symfony</h4>
                                    <div className="where-when"><p className="where">Base Ecole O’Clock</p><p className="when">02/2021</p></div>
                                    <p className="how">[Symfony, PHP, Twig, Doctrine, API]</p>
                                </li>
                                <li className="opquast">
                                    <h4 className="what">Certification Opquast</h4>
                                    <div className="where-when"><p className="where">Niveau expert (<a href="https://directory.opquast.com/fr/certificat/KHLU4V/" target="_blank" rel="noreferrer">authentification KHLU4V</a>)</p><p className="when">04/2020</p></div>
                                    <p className="description">«Maitrise de la qualité en projet web»</p>
                                </li>
                                <li>
                                    <h4 className="what">Développeur web - Spécialisation React / Redux</h4>
                                    <div className="where-when"><p className="where">Ecole O’Clock</p><p className="when">02/2020</p></div>
                                    <p className="how">[JavaScript, React, React-Redux, React-Router, Axios, SASS]</p>
                                </li>
                                <li>
                                    <h4 className="what">Développeur web et web mobile</h4>
                                    <div className="where-when"><p className="where">Ecole O’Clock</p><p className="when">10/2019 – 01/2020</p></div>
                                    <p className="description">Projets en groupes et en solo</p>
                                    <p className="how">[HTML, CSS, PHP, POO, JavaScript, SQL, BDD (MySQL), API, Bootstrap, MVC, SEO, WordPress, Git – GitHub, Linux]</p>
                                </li>
                            </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

Parcours.propTypes = {
};

export default Parcours;