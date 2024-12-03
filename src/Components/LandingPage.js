import React from 'react';
import Navbar from './Navbar';

const LandingPage = () => {
  return (
    <div className="bg-gray-50 font-sans leading-normal tracking-normal">
    
      <Navbar />
      
      <section className="bg-blue-600 text-white text-center py-20">
        <h1 className="text-4xl font-bold mb-4">Emprende tu Futuro</h1>
        <p className="text-xl mb-8">Plataforma para emprendedores, conecta, comparte y crece.</p>
        <a
          href="/dashboard"
          className="bg-white text-blue-600 px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition"
        >
          Comienza Ahora
        </a>
      </section>

      <section id="services" className="py-20 bg-white text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-12">Nuestros Servicios</h2>
        <div className="flex justify-center gap-12">
          <div className="bg-gray-100 p-8 rounded-lg shadow-md w-80">
            <h3 className="text-2xl font-semibold text-blue-600 mb-4">Mentoría</h3>
            <p className="text-gray-600">Recibe asesoría de expertos para hacer crecer tu emprendimiento.</p>
          </div>
          <div className="bg-gray-100 p-8 rounded-lg shadow-md w-80">
            <h3 className="text-2xl font-semibold text-blue-600 mb-4">Red de Contactos</h3>
            <p className="text-gray-600">Conéctate con otros emprendedores y comparte experiencias.</p>
          </div>
          <div className="bg-gray-100 p-8 rounded-lg shadow-md w-80">
            <h3 className="text-2xl font-semibold text-blue-600 mb-4">Recursos Exclusivos</h3>
            <p className="text-gray-600">Accede a herramientas y materiales que te ayudarán a crecer.</p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-blue-50">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">Lo que Dicen Nuestros Emprendedores</h2>
        <div className="flex justify-center gap-12">
          <div className="bg-white p-8 rounded-lg shadow-md w-80">
            <p className="text-gray-600 mb-4">"Una plataforma increíble, me ha ayudado a expandir mi negocio y conocer nuevas oportunidades."</p>
            <h4 className="font-semibold text-gray-800">Juan Pérez</h4>
            <p className="text-gray-500">Emprendedor, Startup Tech</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md w-80">
            <p className="text-gray-600 mb-4">"Gracias a los recursos y mentoría, pude mejorar mi modelo de negocio y atraer más clientes."</p>
            <h4 className="font-semibold text-gray-800">Laura Gómez</h4>
            <p className="text-gray-500">Fundadora, E-commerce</p>
          </div>
        </div>
      </section>

      <section className="bg-blue-600 text-white text-center py-20">
        <h2 className="text-3xl font-bold mb-4">¿Estás Listo para Emprender?</h2>
        <p className="text-xl mb-8">Únete a nosotros y comienza a construir tu futuro hoy.</p>
        <a
          href="/register"
          className="bg-white text-blue-600 px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition"
        >
          Regístrate Ahora
        </a>
      </section>

      <footer className="bg-gray-800 text-white text-center py-6">
        <p>&copy; 2024 EmprendeTuFuturo. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default LandingPage;