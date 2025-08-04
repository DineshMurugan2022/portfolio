import React from 'react';
import styled from 'styled-components';

const Card = () => {
  return (
    <StyledWrapper>
      <div className="card-container">
        {/* CARD 1 */}
        <div className="card">
          <img
            src="https://via.placeholder.com/350x200"
            alt="Project screenshot"
            className="card__image"
          />
          <div className="card__content">
            <p className="card__title">Project Name</p>
            <p className="card__description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit...
            </p>
            <a href="https://example.com" target="_blank" rel="noopener noreferrer">
              <button className="card__button">Live Demo</button>
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <button className="card__button secondary">Source Code</button>
            </a>
          </div>
        </div>

        {/* Duplicate more cards below if needed */}
        {/* CARD 2 */}
        <div className="card">
          <img
            src="https://via.placeholder.com/350x200"
            alt="Project screenshot"
            className="card__image"
          />
          <div className="card__content">
            <p className="card__title">Project Name</p>
            <p className="card__description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit...
            </p>
            <a href="https://example.com" target="_blank" rel="noopener noreferrer">
              <button className="card__button">Live Demo</button>
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <button className="card__button secondary">Source Code</button>
            </a>
          </div>
        </div>
         {/* CARD 3 */}
         <div className="card">
          <img
            src="https://via.placeholder.com/350x200"
            alt="Project screenshot"
            className="card__image"
          />
          <div className="card__content">
            <p className="card__title">Project Name</p>
            <p className="card__description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit...
            </p>
            <a href="https://example.com" target="_blank" rel="noopener noreferrer">
              <button className="card__button">Live Demo</button>
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <button className="card__button secondary">Source Code</button>
            </a>
          </div>
        </div>
         {/* CARD 4 */}
         <div className="card">
          <img
            src="https://via.placeholder.com/350x200"
            alt="Project screenshot"
            className="card__image"
          />
          <div className="card__content">
            <p className="card__title">Project Name</p>
            <p className="card__description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit...
            </p>
            <a href="https://example.com" target="_blank" rel="noopener noreferrer">
              <button className="card__button">Live Demo</button>
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <button className="card__button secondary">Source Code</button>
            </a>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .card-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2rem;
    padding: 2rem;
  }

  .card {
    position: relative;
    width: 350px;
    aspect-ratio: 16/9;
    background-color: #f2f2f2;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    perspective: 1000px;
    box-shadow: 0 0 0 5px #ffffff80;
    transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  .card:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 16px rgba(255, 255, 255, 0.2);
  }

  .card__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: all 0.6s ease;
  }

  .card__content {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 20px;
    box-sizing: border-box;
    background-color: #f2f2f2;
    transform: rotateX(-90deg);
    transform-origin: bottom;
    transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
  }

  .card:hover .card__content {
    transform: rotateX(0deg);
  }

  .card__title {
    margin: 0;
    font-size: 20px;
    color: #333;
    font-weight: 700;
  }

  .card__description {
    font-size: 12px;
    color: #777;
    line-height: 1.4;
  }

  .card__button {
    padding: 12px;
    border-radius: 8px;
    background: #777;
    border: none;
    color: white;
    cursor: pointer;
    margin-right: 10px;
    width: fit-content;
  }

  .secondary {
    background: transparent;
    color: #777;
    border: 1px solid #777;
  }

  a {
    text-decoration: none;
  }

  @media (max-width: 768px) {
    .card {
      width: 90%;
    }
  }
`;

export default Card;
