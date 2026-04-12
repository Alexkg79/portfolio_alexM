import React, { useState, Suspense} from 'react';
import TitleCard from './TitleCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import project1Image1 from '../assets/projet/pr_react1.webp';
import project1Image2 from '../assets/projet/pr_react2.webp';
import project1Image3 from '../assets/projet/pr_react3.webp';
import project2Image1 from '../assets/projet/pr_be1.webp';
import project2Image2 from '../assets/projet/pr_be2.webp';
import project2Image3 from '../assets/projet/pr_be3.webp';
import project3Image1 from '../assets/projet/pr_int1.webp';
import project4Image1 from '../assets/projet/pr_blog1.webp';
import project4Image2 from '../assets/projet/pr_blog2.webp';
import project4Image3 from '../assets/projet/pr_blog3.webp';
import project4Image4 from '../assets/projet/pr_blog4.webp';
import project5Image1 from '../assets/projet/pr_vite1.webp';
import project5Image2 from '../assets/projet/pr_vite2.webp';
import project5Image3 from '../assets/projet/pr_vite3.webp';
import project5Image4 from '../assets/projet/pr_vite4.webp';
import project6Image1 from '../assets/projet/pr_atelier1.webp';
import project6Image2 from '../assets/projet/pr_atelier2.webp';
import project6Image3 from '../assets/projet/pr_atelier3.webp';
import project6Image4 from '../assets/projet/pr_atelier4.webp';
import project7Image1 from '../assets/projet/pr_taxiaibd_1.webp';
import project7Image2 from '../assets/projet/pr_taxiaibd_2.webp';
import project7Image3 from '../assets/projet/pr_taxiaibd_3.webp';
import project7Image4 from '../assets/projet/pr_taxiaibd_4.webp';
import project7Image5 from '../assets/projet/pr_taxiaibd_5.webp';
import project8Image1 from '../assets/projet/pr_ageona_qbiome.webp';
import project8Image2 from '../assets/projet/pr_ageona_qbiome2.webp';
import project8Image3 from '../assets/projet/pr_ageona_qbiome3.webp';
import project8Image4 from '../assets/projet/pr_ageona_qbiome4.webp';

import '../styles/Projects.scss'; 
const ProjectModal = React.lazy(() => import('./ProjectModal'));

// Data for projects
const projectsData = [
      { id: 1, 
        title: 'Ageona & QBiome', 
        images: [project8Image1, project8Image2, project8Image3, project8Image4], 
        descriptionShort: "Développement sur-mesure d’un site vitrine et d’une application naturaliste.", 
        description: "Développement complet du site Ageona ainsi que de l’interface de l’application QBiome. J’ai conçu un site vitrine moderne avec une page d’accueil, une section projets dynamique (avec ouverture en modal) et une page de contact. Un panel administrateur sur-mesure permet au client d’ajouter et gérer ses projets en toute autonomie. \n\nPour QBiome, j’ai développé une interface dédiée avec un système de navigation par header switch, incluant une page d’accueil et une section de téléchargement.\n\nL’ensemble a été développé en PHP, HTML, CSS et JavaScript sous WordPress avec une logique entièrement personnalisée, optimisée pour la performance, la simplicité d’utilisation et l’évolutivité.", 
        technologies: ['HTML', 'CSS', 'JS', 'PHP', 'WordPress'], 
        liveDemo: 'https://ageona-cartographie.fr/', 
        learnings: [
          "Création d’un système de gestion de contenu sur-mesure via un panel admin personnalisé.",
          "Développement d’interfaces dynamiques avec modals et navigation avancée (header switch).",
          "Amélioration de mes compétences en architecture de projet WordPress custom.",
          "Expérience dans la conception d’un produit combinant site vitrine et application.",
        ] 
    },
    { id: 2, title: 'Taxi-AIBD', 
      images: [project7Image1, project7Image2, project7Image3, project7Image4, project7Image5], 
      descriptionShort: "Refonte site WordPress sur-mesure avec thème personnalisé.", 
      description: "Refonte complète du site WordPress Taxi-AIBD avec une approche mobile-first et un design moderne, professionnel et élégant. J’ai développé un thème sur-mesure intégrant un système de réservation personnalisé et la creation d'un panel admin avec des shortcodes dynamiques afin de donner au client une autonomie totale dans la gestion de ses contenus. Le site est optimisé pour la performance, la sécurité et le SEO de base, tout en offrant une expérience fluide sur PC, tablette et mobile.", 
      technologies: ['HTML', 'CSS', 'JS', "PHP", "WordPress", "SEO"], 
      liveDemo: 'https://taxi-aibd.com/', 
      sourceCode: 'https://github.com/Alexkg79/taxi-dakar-template', 
      learnings: [
            "Pratique avancée du développement WordPress custom (thème, shortcodes, back-office sur mesure).",
            "Amélioration de ma capacité à penser en termes d’UX/UI et parcours utilisateur pour booster la conversion.",
            "Expérience dans la création d’interfaces professionnelles et élégantes adaptées aux besoins d’un client.",
            "Développement de compétences en gestion de projet client (recueil du besoin, ajustements, livrable clé en main).",
        ] },
    { id: 3, title: 'Atelier', 
      images: [project6Image1, project6Image4, project6Image3, project6Image2], 
      descriptionShort: "Site vitrine Next.js, Tailwind CSS & TypeScript.", 
      description: "Ce projet perso a consisté à la création d'un site vitrine front-end sur mesure, dédié à un atelier de haute couture. L'objectif était de traduire l'élégance et le raffinement du domaine de la mode en une expérience numérique fluide et esthétique. Le site intègre des sections dédiées aux collections, au portfolio de réalisations, à la philosophie de l'atelier, ainsi qu'une page de contact pour des demandes personnalisées. Une attention particulière a été portée à la réactivité sur tous les appareils, aux animations subtiles, et à une navigation intuitive pour offrir une immersion complète dans l'univers de la marque.", 
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', "Next/Image"], 
      liveDemo: 'https://styliste-vitrine.vercel.app/', 
      sourceCode: 'https://github.com/Alexkg79/styliste-vitrine', 
      learnings: [
            "Maîtrise du développement Front-end avec Next.js",
            "Développement d'interfaces utilisateur immersives",
            "Organisation et modularité du code",
            "Application avancée de Tailwind CSS pour le design",
        ] },
    { id: 4, title: 'Crypto Folio', images: [project5Image1, project5Image2, project5Image3, project5Image4], descriptionShort: "Suivi de cryptomonnaies en React/Vite.", description: "Conception et développement d'une application web front-end, CryptoFolio, centrée sur l'intégration avancée d'une API de données en temps réel. L'application permet aux utilisateurs de suivre les marchés, de gérer un portefeuille virtuel et de créer une watchlist personnalisée. Le projet met en œuvre une interface réactive et une architecture résiliente, optimisée pour la performance et la gestion des limitations d'une API externe (rate limiting, erreurs).", technologies: ['HTML', 'SCSS', 'JavaScript', "React", "Vite", "Chart.js", "Jest", "API REST"], liveDemo: 'https://crypto-comparator-sepia.vercel.app/', sourceCode: 'https://github.com/Alexkg79/crypto-comparator', learnings: [
            "Gestion avancée des API externes",
            "Mise en place d'une stratégie de tests complète",
            "Optimisation de l'expérience utilisateur (UX)",
            "Maîtrise des Hooks React pour la gestion d'état complexe"
        ] },
    { id: 5, title: 'Techno Chronicle', images: [project4Image1, project4Image2, project4Image3, project4Image4], descriptionShort: "Blog tech et web, développé avec React.", description: "Développement complet du front-end d'un blog d'actualité dédié aux technologies et au développement web. Ce projet inclut la création d'une interface dynamique et immersive, pensée pour une navigation fluide et une consommation de contenu optimale. L'architecture est modulaire, permettant une gestion efficace de multiples types de contenu : articles, tutoriels et ressources.", technologies: ['HTML', 'CSS', 'React', "JSON"], liveDemo: 'https://techno-chronicles.vercel.app/', sourceCode: 'https://github.com/Alexkg79/Theme-Blog-1', learnings: [
            "Conception d'une architecture de contenu dynamique",
            "Implémentation d'un filtrage avancé",
            "Création de composants réutilisables complexes",
            "Gestion d'une navigation responsive de pointe"
        ] },
    { id: 6, title: 'Kasa App', images: [project1Image1, project1Image2, project1Image3], descriptionShort: "Application web moderne, développée avec React.", description: "Développement complet du front-end pour une application web de location immobilière en utilisant React. Ce projet inclut l'implémentation d'un routage côté client avec React Router pour une navigation fluide entre les pages. La création d'une interface dynamique et responsive a nécessité le développement de plusieurs composants réutilisables, notamment une galerie d'images et des menus déroulants animés en CSS. Le style a été géré de manière modulaire avec SASS.", technologies: ['HTML', 'CSS', 'React'], liveDemo: 'https://kasa-app-six.vercel.app/', sourceCode: 'https://github.com/Alexkg79/kasa-app', learnings: [
            "Maîtrise des React Hooks pour un state complexe",
            "Intégration 'pixel-perfect' de maquettes Figma",
            "Création de composants réutilisables (Carrousel, Accordéon)",
            "Logique de routing avancée avec React Router"
        ] },
    { id: 7, title: 'Mon vieux grimoire', images: [project2Image1, project2Image2, project2Image3], descriptionShort: "Plateforme de gestion de livres.", description: "Développement de l'API RESTful pour un site de notation de livres. Le projet inclut la mise en place d'un système d'authentification sécurisé pour les utilisateurs, la gestion des opérations CRUD complètes pour les livres et leurs notations, ainsi qu'un middleware pour l'optimisation à la volée des images. L'architecture de l'application est structurée selon le modèle MVC pour assurer la maintenabilité du code.", technologies: ['Node.js', 'Express', 'MongoDB'], liveDemo: 'https://mon-vieux-grimoire-frontend-auz1.onrender.com/', sourceCode: 'https://github.com/Alexkg79/Back-end-Book', learnings: [
            "Construction d'une API RESTful complète de A à Z",
            "Sécurisation des routes via authentification par token",
            "Manipulation d'une base de données NoSQL (MongoDB)",
            "Optimisation d'images avec un middleware (Sharp)"
        ] },
    { id: 8, title: 'Booki Intégration', images: [project3Image1], descriptionShort: "Intégration d'une maquette Figma.", description: "Intégration d'une maquette Figma pour réaliser la page d'accueil d'une agence de voyage, entièrement en HTML et CSS. Le projet est centré sur la création d'une interface entièrement responsive, garantissant un affichage parfait et une expérience utilisateur cohérente sur mobile, tablette et desktop. La mission a impliqué une analyse précise des maquettes et la production d'un code sémantique et maintenable.", technologies: ['HTML', 'CSS'], liveDemo: 'https://alexkg79.github.io/booki-starter-code/', sourceCode: 'https://github.com/Alexkg79/booki-starter-code', learnings: [
            "Maîtrise des fondamentaux HTML5 et CSS3",
            "Mise en page complexe avec Flexbox et Grid",
            "Application d'une approche 'mobile-first'",
            "Respect des normes d'accessibilité web"
        ] },
];

export default function Projects2() {
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };
  return (
    <section id="projets" className="projects-section">
      <div className="projects-content">
        <TitleCard title="Mes Projets" />
        <div className="swiper-container-wrapper">
            <Swiper
              modules={[Navigation, Pagination, A11y]}
              spaceBetween={30}
              slidesPerView={1}
              navigation={{
                nextEl: '.custom-swiper-button-next',
                prevEl: '.custom-swiper-button-prev',
              }}
              pagination={{ clickable: true }}
              a11y={{ prevSlideMessage: 'Projet précédent', nextSlideMessage: 'Projet suivant' }}
              breakpoints={{
                768: { slidesPerView: 2, spaceBetween: 40 },
                1024: { slidesPerView: 2, spaceBetween: 50 },
              }}
            >
              {projectsData.map((project) => (
                <SwiperSlide key={project.id}>
                   <div className="project-card" onClick={() => openModal(project)}>
                      <div className="card-image">
                          <img src={project.images[0]} loading="lazy" alt={`Aperçu du projet ${project.title}`} />
                      </div>
                      <div className="card-content">
                          <h3 className="card-title">{project.title}</h3>
                          <p className="card-description">{project.descriptionShort}</p>
                          <div className="card-tags">
                              {project.technologies.map((tech) => (<span key={tech}>{tech}</span>))}
                          </div>
                          <div className="card-actions">
                              <a href={project.liveDemo} className="btn btn-primary" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faExternalLinkAlt} /> Démo</a>
                              {project.sourceCode && (
                                <a href={project.sourceCode} className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
                                  <FontAwesomeIcon icon={faGithub} /> Code
                                </a>
                              )}                          </div>
                      </div>
                  </div>
                        <Suspense fallback={<div className="loading-spinner">Chargement...</div>}>
                          {selectedProject && <ProjectModal project={selectedProject} onClose={closeModal} />}
                        </Suspense>
                </SwiperSlide>
              ))}
            </Swiper>
        </div>
      </div>
    </section>
  );
}