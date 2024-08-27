import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { Carousel } from 'react-responsive-carousel';
import { CSSTransition } from 'react-transition-group';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import icon1 from '../assets/icons/computer.webp';
import icon2 from '../assets/icons/battery.webp';
import icon3 from '../assets/icons/wifi.webp';
import icon2Dark from '../assets/icons/battery_n.webp';
import icon3Dark from '../assets/icons/wifi_n.webp';
import noteIcon from '../assets/icons/note.webp';
import '../styles/ProjectCard.scss';

Modal.setAppElement('#root');

const ProjectCard = ({ title, images = [], liveDemo, sourceCode, description, isDarkMode }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [notepadModalIsOpen, setNotepadModalIsOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const noteIconElement = document.querySelector('.note-icon');
      if (noteIconElement) {
        noteIconElement.classList.add('wobble-animation');
        
        setTimeout(() => {
          noteIconElement.classList.remove('wobble-animation');
        }, 1300);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const openNotepadModal = (e) => {
    e.stopPropagation();
    setNotepadModalIsOpen(true);
  };

  const closeNotepadModal = () => {
    setNotepadModalIsOpen(false);
  };

  return (
    <>
      <div className="project-card-container">
        <div className="project-card" onClick={openModal}>
          <div className="title-bar">
            <div className="buttons">
              <div className="close"></div>
              <div className="minimize"></div>
              <div className="maximize"></div>
            </div>
            <span className="title">{title}</span>
          </div>
          {images.length > 0 ? (
            <img src={images[0]} alt={title} className="project-image" loading="lazy"/>
          ) : (
            <div className="project-image-placeholder">No image available</div>
          )}
          <div className="task-bar">
            <div className="task-icons left">
              <img src={icon1} alt="Icône Windows" className="task-icon" loading="lazy"/>
            </div>
            <div className="task-icons right">
              <img src={isDarkMode ? icon3Dark : icon3} alt="Icône wifi" className="task-icon" loading="lazy"/>
              <img src={isDarkMode ? icon2Dark : icon2} alt="Icône battery" className="task-icon" loading="lazy"/>
            </div>
          </div>
        </div>
        <div className="project-links">
          <a href={liveDemo} target="_blank" rel="noopener noreferrer">Démo en direct</a>
          <a href={sourceCode} target="_blank" rel="noopener noreferrer">Code source</a>
        </div>
      </div>

      <CSSTransition
        in={modalIsOpen}
        timeout={300}
        classNames="modal"
        unmountOnExit
      >
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Project Modal"
          className="project-modal"
          overlayClassName="project-modal-overlay"
        >
          <div className="title-bar">
            <div className="buttons">
              <div className="close" onClick={closeModal}></div>
              <div className="minimize"></div>
              <div className="maximize"></div>
            </div>
            <span className="title">{title}</span>
          </div>
          {images.length > 0 ? (
            <Carousel showThumbs={false} showStatus={false}>
              {images.map((image, index) => (
                <div key={index}>
                  <img src={image} alt={`${title} ${index + 1}`} className="project-image" loading="lazy"/>
                </div>
              ))}
            </Carousel>
          ) : (
            <div className="project-image-placeholder">No images available</div>
          )}
          <div className="task-bar">
            <div className="task-icons left">
              <img src={icon1} alt="Icône Windows" className="task-icon" loading="lazy"/>
              <img src={noteIcon} alt="Icône Bloc-notes" className="note-icon" onClick={openNotepadModal} loading="lazy"/>
            </div>
            <div className="task-icons right">
              <img src={isDarkMode ? icon3Dark : icon3} alt="Icône wifi" className="task-icon" loading="lazy"/>
              <img src={isDarkMode ? icon2Dark : icon2} alt="Icône battery" className="task-icon" loading="lazy"/>
            </div>
          </div>
        </Modal>
      </CSSTransition>

      <CSSTransition
        in={notepadModalIsOpen}
        timeout={300}
        classNames="notepad-modal"
        unmountOnExit
      >
        <Modal
          isOpen={notepadModalIsOpen}
          onRequestClose={closeNotepadModal}
          contentLabel="Notepad Modal"
          className="notepad-modal"
          overlayClassName="notepad-modal-overlay"
        >
          <div className="notepad-title-bar">
            <div className="buttons">
              <div className="close" onClick={closeNotepadModal}></div>
            </div>
            <span className="title">Description</span>
          </div>
          <div className="notepad-content">
            <p>{description}</p>
          </div>
        </Modal>
      </CSSTransition>
    </>
  );
};

export default ProjectCard;
