import { useNavigate } from 'react-router-dom';
import './index.css';

export default function SeccionMotoDetallada() {

  const handlePagina = (ruta, seccionId = null) => {
    localStorage.setItem('producto', '');
    if (ruta === '/' && seccionId) {
    
      setTimeout(() => {
        const elemento = document.getElementById(seccionId);
        if (elemento) {
          elemento.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 500);
    } 
  };
  return (

    <section className="cb190">
      {/* Overlay oscuro */}
   

      <div className="container cb190-content">
        <span className="cb190-subtitle">
          RENDIMIENTO Y ECONOMÍA
        </span>

        <h2 className="cb190-title">
          Motos Bajaj
        </h2>

        <p className="cb190-description">
          Las motos Bajaj se han consolidado como una de las opciones más
          confiables y accesibles en Colombia, gracias a la combinación de
          rendimiento, economía y comodidad que ofrecen en cada modelo.
          Su diseño moderno y su estilo versátil permiten que se adapten
          tanto a quienes buscan un medio de transporte ágil en la ciudad
          como a los que disfrutan de recorrer largas distancias.
        </p>

        <p className="cb190-description">
          Uno de los principales atributos de las motos Bajaj es su motor
          eficiente, pensado para brindar potencia sin sacrificar la
          economía de combustible, lo que las convierte en una alternativa
          ideal para quienes buscan calidad a un precio competitivo.
          Además, cada modelo está diseñado con especial atención al diseño
          y la comodidad, ofreciendo una experiencia de conducción superior
          que se adapta a distintos estilos de vida.
        </p>

        <button className="cb190-button" onClick={() => handlePagina('/', 'catalogo-motos')}>
          Ver motos
        </button>
      </div>
    </section>
  );
}