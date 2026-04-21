import React from 'react';
import './carousel.css';
import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
function CarouselPeque({ op = '' }) {
  const rutalogin = useNavigate();

  const jsonItemsTecnicos = [
    {
      titulo: 'images/BannerAburraMotosBajaj-01.jpg',
    }
  ];
const jsonServicio =[
  {
    titulo: 'images/servicios/garantia_1.jpeg'
  },
  {
    titulo: 'images/servicios/garantia_2.jpeg'
  },
  {
    titulo: 'images/servicios/garantia_3.jpeg'
  },
  {
    titulo: 'images/servicios/garantia_4.jpeg'
  }
]
const imagenes = op === '1' ? jsonItemsTecnicos : jsonServicio;
const carouselId = `carouseContenido-${op}`;
  return (
    <div id={carouselId} className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators" style={{ maxHeight: '550px' }}>
        {imagenes.map((_, index) => (
          <button
            key={index}
            type="button"
            data-bs-target={`#${carouselId}`}
            data-bs-slide-to={index}
            className={index === 0 ? 'active' : ''}
            aria-current={index === 0}
            aria-label={`Slide ${index + 1}`}
          ></button>
        ))}
      </div>
      <div className="carousel-inner">
        {imagenes.map((slide, index) => (
          <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
            <div className="carousel-img-wrapper">
              <img src={slide.titulo} className="d-block w-100 carousel__Imagen" alt={slide.titulo} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CarouselPeque;
