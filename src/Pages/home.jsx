import BarraNavega from "../Components/barraNavega";

function Home() {
  return (
    <div>
      <BarraNavega />
      <div className="flex flex-col md:flex-row justify-evenly items-center h-screen text-center md:text-left gap-6 px-4">
        <div>
          <p className="text-sm">Olá, eu sou</p>
          <h2 className="text-4xl font-bold">Eduardo Ortulan</h2>
          <p>Desenvolvedor Front-end</p>
        </div>
        <div>
          <img
            src="/Public/minhaFoto.jpg"
            alt=""
            className="border-4 border-emerald-800 w-56 md:w-72 aspect-square rounded-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;