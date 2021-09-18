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
import JavaLogo from '/assets/styles/images/java.png';
import PythonLogo from '/assets/styles/images/python.png';
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
                    <h1 className="who-name">Coralie GARGOT</h1>
                    <h2 className="who-title title">Conceptrice Développeuse d&apos;Applications</h2>
                    <p className="who-objective">en recherche d&apos;un stage non rémunéré du 19 avril au 13 juillet 2022</p>
                </div>
            </div>

            <div className="content">
                <div className="left">
                    <div className="profil">
                        <h3 className="profil-title title">Profil</h3>
                        <p>Passionnée par l’informatique depuis toujours, j’ai choisi de me reconvertir dans le développement.</p>
                        <p>Je suis curieuse, rigoureuse et autonome, j’aime les défis, chercher, apprendre, et ce domaine en perpétuelle évolution me correspond tout à fait.</p>
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
                            <img
                                className="miniature"
                                id="java-logo"
                                src={JavaLogo}
                                alt="Java logo"
                            />
                            <img
                                className="miniature"
                                id="python-logo"
                                src={PythonLogo}
                                alt="Python logo"
                            />
                            <a href="https://directory.opquast.com/fr/certificat/KHLU4V/" target="_blank" rel="noreferrer">
                                <img
                                    className="miniature"
                                    id="opquast-certif"
                                    src={Opquast}
                                    alt="Opquast certification"
                                />
                            </a>
                        </div>
                        <div className="languages">
                            <figure className="flag">
                                <img
                                    className="miniature"
                                    id="france-logo"
                                    src={France}
                                    alt="France flag"
                                />
                                <figcaption>Langue maternelle</figcaption>
                            </figure>
                            <figure className="flag">
                                <img
                                    className="miniature"
                                    id="uk-logo"
                                    src={UK}
                                    alt="United-Kingdom flag"
                                />
                                <figcaption>Anglais technique</figcaption>
                            </figure>
                        </div>
                    </div>
                    <div className="other">
                        <h3 className="other-title title">Et aussi</h3>
                        <p><strong>Permis B</strong> + véhicule personnel</p>
                        <p><strong>Passions :</strong> Équitation, aquariophilie, jeux vidéos</p>
                        <p><strong>Reconnue travailleur handicapé (RQTH)</strong></p>
                    </div>
                </div>
                <div className="right">
                    <div className="experiences">
                        <h3 className="experiences-title title">Expériences professionnelles</h3>
                        <ul>
                            <li>
                                <h4 className="what">Développeur web Front (projet de fin de formation)</h4>
                                <div className="where-when"><h5 className="where">Ecole O&apos;Clock</h5><p className="when">03/2020</p></div>
                                <p className="description">J&apos;ai créé une application web et mobile en équipe, « MuseO » sur la découverte et le recensement du patrimoine local.</p>
                                <p className="description">J&apos;ai participé à la conception du cahier des charges et des wireframes.</p>
                                <p className="how">[HTML, CSS, PHP, JavaScript, SQL, Symfony, API, React-Redux, SASS, Agile – Scrum, Git - GitHub]</p>
                            </li>
                            <li>
                                <h4 className="what">Développeur web (stage)</h4>
                                <div className="where-when"><h5 className="where">CELIA / CNRS (Talence – 33)</h5><p className="when">06/2019</p></div>
                                <p className="description">J&apos;ai créé un annuaire du personnel ainsi qu&apos;un module d&apos;inventaire et d&apos;emprunt de matériel pour l&apos;intranet.</p>
                                <p className="how">[HTML, CSS, PHP, Javascript, AJAX, jQuery, SQL]</p>
                            </li>
                        </ul>
                    </div>
                    <div className="formations">
                        <h3 className="formations-title title">Formations</h3>
                            <ul className="formations-list">
                                <li  className="formations-list-item">
                                    <h4 className="what">Concepteur développeur d’applications</h4>
                                    <div className="where-when">
                                        <h5 className="where">AFPA</h5>
                                        <p className="when">du 30/08/2021 au 05/08/2022</p>
                                    </div>
                                    <ul className="what-list">
                                        <li className="what-more">
                                            <h6 className="what-content">HTML5 / CSS3 <span className="what-content-details">[Conception, Bootstrap, UX, Mise en ligne]</span></h6>
                                            <p className="description">Balisage, mise en page, frameworks css, DOM et normes W3C.</p>
                                        </li>
                                        <li className="what-more">
                                            <h6 className="what-content">PHP / MYSQL <span className="what-content-details">[Algorithmique, BDD, MVC, POO, Symfony]</span></h6>
                                            <p className="description">Fonctions utilisateurs, gestion des bases de données, frameworks php.</p>
                                        </li>
                                        <li className="what-more">
                                            <h6 className="what-content">PHP / WORDPRESS <span className="what-content-details">[ACF, Timber, Twig]</span></h6>
                                            <p className="description">Création de thème Wordpress et développement avancé.</p>
                                        </li>
                                        <li className="what-more">
                                            <h6 className="what-content">JAVASCRIPT / MONGODB <span className="what-content-details">[VueJS, jQuery, React, NodeJS]</span></h6>
                                            <p className="description">Exploration de différentes solutions relatives aux phases de tests, à la finalisation et à la mise en production de projets numériques.</p>
                                        </li>
                                        <li className="what-more">
                                            <h6 className="what-content">TESTS ET DÉPLOIEMENT <span className="what-content-details">[Testing, Hosting, Monitoring]</span></h6>
                                            <p className="description">Création de différents projets à l&apos;aide de javascript et des outils proposés en open source.</p>
                                        </li>
                                        <li className="what-more">
                                            <h6 className="what-content">TASK RUNNERS & TOOLCHAINS <span className="what-content-details">[GIT, Gulp, Babel, npm, composer]</span></h6>
                                            <p className="description">Mise en place et découverte d&apos;outils de développement avancés.</p>
                                        </li>
                                        <li className="what-more">
                                            <h6 className="what-content">PYTHON / LINUX <span className="what-content-details">[Raspberry, Micro:Bit, Robotique, IoT]</span></h6>
                                            <p className="description">Création et exploration autour de projets libres et open source basés sur les technologies actuelles de programmation grand public.</p>
                                        </li>
                                    </ul>
                                    {/*
                                    <p className="description">Concevoir et développer des composants d&apos;interface utilisateur en intégrant les recommandations de sécurité.</p>
                                    <p className="description">Concevoir et développer la persistance des données en intégrant les recommandations de sécurité.</p>
                                    <p className="description">Concevoir et développer une application multicouche répartie en intégrant les recommandations de sécurité.</p>
                                    <p className="how">[HTML, CSS, PHP, JavaScript, SQL, Symfony, API, React, Python, Java, Git - GitHub]</p>
                                    */}
                                </li>
                                <li>
                                    <h4 className="what">Développeur web - Spécialisation Symfony</h4>
                                    <div className="where-when"><h5 className="where">Base Ecole O’Clock</h5><p className="when">02/2021</p></div>
                                    <p className="how">[Symfony, PHP, Twig, Doctrine, API]</p>
                                </li>
                                <li className="opquast">
                                    <h4 className="what">Certification Opquast</h4>
                                    <div className="where-when"><h5 className="where">Niveau expert (<a href="https://directory.opquast.com/fr/certificat/KHLU4V/" target="_blank" rel="noreferrer">authentification KHLU4V</a>)</h5><p className="when">04/2020</p></div>
                                    <p className="description">«Maitrise de la qualité en projet web»</p>
                                </li>
                                <li>
                                    <h4 className="what">Développeur web - Spécialisation React / Redux</h4>
                                    <div className="where-when"><h5 className="where">Ecole O’Clock</h5><p className="when">02/2020</p></div>
                                    <p className="how">[JavaScript, React, React-Redux, React-Router, Axios, SASS]</p>
                                </li>
                                <li>
                                    <h4 className="what">Développeur web et web mobile</h4>
                                    <div className="where-when"><h5 className="where">Ecole O’Clock</h5><p className="when">10/2019 – 01/2020</p></div>
                                    <p className="description">Développer la partie front-end d’une application web ou web mobile en intégrant les recommandations de sécurité.</p>
                                    <p className="description">Développer la partie back-end d’une application web ou web mobile en intégrant les recommandations de sécurité.</p>
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