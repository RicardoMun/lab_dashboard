import "../Home/style.css"

import Navbar from '../../components/Navbar/Navbar'
import AboutUsText from "../../components/Text/AboutUs"

function HomePage() {
  return (
    // a home page with info about the app
    <div className="container">
      <Navbar />

      <section className="titleSection">
        <div className="titleSection">
          <h1 className="title">Cristina Vela Laboratorio Clínico Especializado</h1>
          <AboutUsText />
        </div>
      </section>


      <section className="imgSection">

        <div className="images">
          <img src="img/chequeo.png" alt="orina" />
        </div>

        <div className="images">
          <img src="img/panelOrinas.png" alt="panelOrina" />
        </div>

        <div className="images">
          <img src="img/chequeo.png" alt="panelOrina" />
        </div>

        <div className="images">
          <img src="img/panelOrinas.png" alt="panelOrina" />
        </div>

        <div className="images">
          <img src="img/chequeo.png" alt="panelOrina" />
        </div>

      </section>

      <section id="aboutUsSection">
        <h2 className="title">Sobre Nosotros</h2>
        <AboutUsText />
      </section>

      <section id="cardSection">
        
        <div className="profileCard">
          <div className="profile">
            
            <img src="img/avatars/avatar1.png" alt="fotoPerfil" />
            <div className="profileInfo">
              <h3 className="profileName">Ricardo</h3>
              <p className="profileDescription">Fundador y Director General</p>
            </div>

          </div>
        </div>

        
      </section>


      <section id="contact">
        <h2 className="title">Contacto</h2>
        <p>Puedes ponerte en contacto con nosotros a través de los siguientes medios:</p>
        <ul>
          <li><b>Email:</b> cristinaLab@email.com</li>
          <li><b>WhatsApp:</b> (+57) 123 456 789</li>
          <li><b>Dirección:</b> San Pablo Nariño</li>
        </ul>
      </section>

    </div >
  )
}

export default HomePage
