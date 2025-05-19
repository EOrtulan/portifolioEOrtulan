import BarraNavega from "../Components/barraNavega";
import ListaHabilidades from "../Components/cardHabilidades";
import Contato from "../Components/Contato";

const minhaFoto = "/assets/minhaFoto.jpg";

function Sobre() {
  return (
    <div className="pt-16">
      <BarraNavega />
      <div className="bg-gray-900 rounded-xl shadow-lg p-6 md:p-10 max-w-5xl mx-auto mt-10 ">
        <h2 className="text-2xl font-semibold mb-6 border-b border-emerald-800 inline-block">
          Sobre mim
        </h2>
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
          <img
            src={minhaFoto}
            alt="Avatar"
            className="w-40 aspect-square rounded-full object-cover shadow-md"
          />
          <div className="text-sm md:text-base space-y-4">
            <p>
            Sou formado em Desenvolvimento Web pela Trybe, uma escola de tecnologia que oferece formação intensiva com foco
             em habilidades técnicas e comportamentais.
             Durante minha trajetória, desenvolvi projetos práticos nas áreas de Front-End e Back-End, utilizando tecnologias
              como HTML, CSS, JavaScript, React, Node.js e MySQL.
            </p>
            <p>
            Embora ainda não tenha atuado profissionalmente na área, 
            estou em constante aprendizado e aprimoramento, buscando minha primeira oportunidade como desenvolvedor.
            </p>
          </div>
        </div>
      </div>
      <div className=" p-6 md:p-10 max-w-5xl mx-auto mt-10">
        <h2 className="text-2xl font-semibold mb-6 border-b border-emerald-800 inline-block">
          Habilidades
        </h2>
        <ListaHabilidades />
      </div>
      <Contato />
    </div>
  );
}

export default Sobre;
