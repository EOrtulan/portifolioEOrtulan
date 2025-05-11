import habilidades from "../Data/habilidades.json"

function ListaHabilidades() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 p-4 max-w-4xl mx-auto">
      {habilidades.map((skill, index) => (
        <div
          key={index}
          className="flex items-center gap-3 p-3 border border-emerald-800 rounded-md bg-gray-900 hover:bg-gray-800 transition"
        >
          <img src={skill.icon} alt={skill.name} className="w-6 h-6" />
          <span className="text-white font-medium">{skill.name}</span>
        </div>
      ))}
    </div>
  );
}

export default ListaHabilidades;