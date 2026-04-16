import './index.css';

import cbs from '../../../public/images/tecnologia/MotorDTS-i.jpg';
import het from '../../../public/images/tecnologia/SistemaExhausTEC.jpg';
import pgmfi from '../../../public/images/tecnologia/SistemaSNS.jpg';
import idling from '../../../public/images/tecnologia/ABSdoblecanal.jpeg';

const data = [
  {
    img: cbs,
    title: 'Motor DTS-i (Digital Twin/Triple Spark Ignition)',
    text: 'Sistema de encendido con doble o triple bujía que mejora la combustión, aumentando la potencia, reduciendo emisiones y optimizando el consumo de combustible.',
  },
  {
    img: het,
    title: 'Sistema ExhausTEC (Torque Expansion Chamber)',
    text: 'Cámara de expansión en el escape que incrementa el torque a bajas revoluciones y mejora la eficiencia del motor en conducción urbana.',
  },
  {
    img: pgmfi,
    title: 'Sistema SNS (Spring-in-Spring Suspension)',
    text: 'Suspensión con doble resorte que distribuye los impactos de forma inteligente, brindando mayor confort, estabilidad y absorción en diferentes tipos de terreno.',
  },
  {
    img: idling,
    title: 'ABS doble canal y modos de conducción',
    text: 'Sistema avanzado de frenado que evita el bloqueo de ambas ruedas e integra modos de manejo y control de tracción en modelos recientes, mejorando la seguridad y el control en diferentes condiciones.',
  },
];

export default function TecnologiaHonda() {
  return (
    <section className="tecnologia">
      <h2>
      Tecnologías Bajaj Motocicletas
      </h2>

      <div className="tecnologia-grid">
        {data.map((item, index) => (
          <div className="tech-card" key={index}>
            <div className="tech-img">
              <img src={item.img} alt={item.title} />
            </div>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
