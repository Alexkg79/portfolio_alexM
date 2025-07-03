import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, A11y } from 'swiper/modules';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../styles/ProjectModal.scss';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEscKey);
    return () => window.removeEventListener('keydown', handleEscKey);
  }, [onClose]);

  if (!project) return null;

  return ReactDOM.createPortal(
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-button" onClick={onClose}>
          <FontAwesomeIcon icon={faTimes} />
        </button>
        {/* --- PARTIE HAUTE : LE CARROUSEL D'IMAGES --- */}
        <div className="modal-gallery-container">
          <Swiper
              modules={[Navigation, Pagination, A11y]}
              slidesPerView={1}
              spaceBetween={20}
              navigation
              pagination={{ clickable: true }}
              className="modal-gallery"
          >
              {project.images.map((image, index) => (
                  <SwiperSlide key={index}>
                      <img src={image} alt={`Aperçu ${index + 1} du projet ${project.title}`} />
                  </SwiperSlide>
              ))}
          </Swiper>
        </div>

        {/* --- PARTIE BASSE : LE CONTENU TEXTUEL --- */}
        <div className="modal-text-content">
            <h2 className="modal-title">{project.title}</h2>
            
            <div className="modal-section">
                <h3>Description</h3>
                <p>{project.description}</p>
            </div>
            
            <div className="modal-section">
                <h3>Technologies Utilisées</h3>
                <div className="card-tags modal-tags">
                    {project.technologies.map(tech => <span key={tech}>{tech}</span>)}
                </div>
            </div>

            <div className="modal-section">
              <h3>Ce que ce projet m'a apporté</h3>
                  <ul className="learnings-list">
                    {project.learnings.map((learning, index) => (
                      <li key={index}>
                        <FontAwesomeIcon icon={faCheckCircle} className="check-icon" />
                        <span>{learning}</span>
                      </li>
                    ))}
                  </ul>
            </div>

            <div className="modal-section modal-actions">
               <a href={project.liveDemo} className="btn btn-primary" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faExternalLinkAlt} /> Démo Live</a>
               <a href={project.sourceCode} className="btn btn-secondary" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /> Code Source</a>
            </div>
        </div>
      </div>
    </div>,
    document.body
  );
}