import "../Home/style.css"

import Navbar from '../../components/Navbar/Navbar'

function HomePage() {
  return (
    // a home page with info about the app
    <div className="container">
      <Navbar />
      <div className="titleSection">
        <h1 className="title">Cristina Vela Laboratorio Clínico Especializado</h1>
      </div>


      <section id="about-us">
        <h2 className="title">Sobre Nosotros</h2>
        <p className="aboutUs">En <b>Cristina Vela Laboratorio Clínico Especializado</b>, nos dedicamos a brindar servicios de diagnóstico de vanguardia con un enfoque centrado en la precisión y la atención al paciente.
          Con años de experiencia en el campo de la salud, nuestro equipo de profesionales altamente calificados trabaja incansablemente para ofrecer resultados de laboratorio confiables y oportunos.
          Nos enorgullece ser un referente en la industria, destacándonos por la tecnología de última generación que utilizamos y nuestro compromiso inquebrantable con la excelencia en el servicio. 
          Estamos dedicados a proporcionar a médicos y pacientes la información crucial que necesitan para tomar decisiones informadas sobre la salud.
          En cada análisis y prueba que realizamos, nos esforzamos por superar las expectativas, contribuyendo así al bienestar general de la comunidad a la que servimos.</p>
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
