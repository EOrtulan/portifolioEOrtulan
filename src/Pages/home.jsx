import BarraNavega from "../Components/barraNavega";

function Home() {
  return (
    <div>
      <BarraNavega />
      <div className="flex justify-evenly items-center h-screen">
        <div>
          <p className="text-sm">Olá, eu sou</p>
          <h2 className="text-4xl font-bold">Eduardo Ortulan</h2>
          <p>Desenvolvedor Front-end</p>
        </div>
        <div>
          <img
            src="/Public/minhaFoto.jpg"
            alt=""
            className="border-3 border-emerald-800 w-55 h-55 rounded-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
