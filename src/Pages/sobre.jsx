import BarraNavega from "../Components/barraNavega";
import ListaHabilidades from "../Components/cardHabilidades";

function Sobre() {
  return (
    <div className="pt-16">
      <BarraNavega />
      <div className="bg-gray-950 rounded-xl shadow-lg p-6 md:p-10 max-w-5xl mx-auto mt-10 ">
        <h2 className="text-2xl font-semibold mb-6 border-b border-emerald-800 inline-block">
          Sobre mim
        </h2>
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
          <img
            src="/Public/minhaFoto.jpg"
            alt="Avatar"
            className="w-40 h-40 rounded-full object-cover shadow-md"
          />
          <div className="text-sm md:text-base space-y-4">
            <p>
              oi
            </p>
            <p>
         oi
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
    </div>
  );
}

export default Sobre;
