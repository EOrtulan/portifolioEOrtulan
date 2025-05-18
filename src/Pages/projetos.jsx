import BarraNavega from "../Components/barraNavega";
import projetos from "../Data/projetos.json"
import ProjectCard from "../Components/cardProjetos";
import Contato from "../Components/Contato";

function Projetos() {
  return (
    <div className="pt-16">
      <BarraNavega />
      <div className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-2xl text-white font-bold mb-6 text-center">Experiência de projetos passados</h2>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {projetos.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgSrc={project.imgSrc}
            tech={project.tech}
            link={project.link}
          />
        ))}
      </div>
    </div>
    <Contato />
    </div>
  );
}

export default Projetos;
