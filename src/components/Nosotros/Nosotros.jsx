import React from 'react';
import './Nosotros.css';

const Nosotros = () => {
  return (
    <div className="nosotros-container">
      <section className="nosotros-section">
        <div className="nosotros-text">
          <h2 className="nosotros-title">Quiénes Somos</h2>
          <p className="nosotros-description">
            En <strong>Vision AG</strong>, nos dedicamos a ofrecer los mejores componentes electrónicos 
            para que puedas armar tu PC a medida. Ya sea para gaming, trabajo o cualquier otra necesidad, 
            contamos con una amplia gama de productos de calidad. Nuestra misión es brindarte una experiencia 
            de compra única, con asesoramiento personalizado y los mejores precios del mercado.
          </p>
          <p className="nosotros-description">
            Desde procesadores hasta tarjetas gráficas, pasando por placas madre y sistemas de refrigeración, 
            tenemos todo lo que necesitas para armar tu máquina ideal. Además, te ofrecemos envíos rápidos y seguros 
            a todo el país.
          </p>
        </div>
        <img 
          src='https://itusers.today/wp-content/uploads/2019/07/LAWGAMERS-inauguro%CC%81-nueva-tienda.jpg'
          alt="Quiénes Somos"
          className="nosotros-img"
        />
      </section>

      <section className="nosotros-section reverse">
        <img 
          src="https://lawgamers.com/wp-content/uploads/2023/12/nuestra-tienda-mobile.webp" 
          alt="Nuestro Compromiso"
          className="nosotros-img"
        />
        <div className="nosotros-text">
          <h2 className="nosotros-title">Nuestro Compromiso</h2>
          <p className="nosotros-description">
            En <strong>Vision AG</strong>, nos apasiona ofrecer productos de alta calidad y un excelente servicio al cliente. 
            Creemos en la satisfacción total de nuestros clientes, por eso trabajamos con las marcas más prestigiosas del sector 
            y siempre estamos atentos a las últimas innovaciones tecnológicas.
          </p>
          <p className="nosotros-description">
            Nos importa que cada componente que adquieras para tu PC funcione perfectamente, y por ello ofrecemos soporte técnico 
            especializado para resolver cualquier duda que tengas durante el proceso de armado o posterior uso de los productos.
          </p>
        </div>
      </section>

      <section className="nosotros-section">
        <div className="nosotros-text">
          <h2 className="nosotros-title">Compra en Línea</h2>
          <p className="nosotros-description">
            Puedes visitar nuestra tienda en línea y elegir los componentes que necesites. Te garantizamos precios competitivos, 
            seguridad en tus compras y la mejor experiencia de compra desde la comodidad de tu hogar.
          </p>
        </div>
        <img 
          src="https://gestion.pe/resizer/T1cMFYtII0YQ15_Aq6VMP_orc8A=/1200x900/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/TYDIJG4KVZHWRLB34PZYIKFK7U.jpg" 
          alt="Compra en Línea"
          className="nosotros-img"
        />
      </section>
    </div>
  );
};

export default Nosotros;
