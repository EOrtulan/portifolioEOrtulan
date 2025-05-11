function ProjectCard({ imgSrc, title, description, tech, link }) {
  return (
    <div className="bg-gray-900 text-white rounded-xl p-4 shadow-md hover:shadow-lg transition">
      <img src={imgSrc} alt={title} className="rounded-md mb-4 h-40 w-full object-cover" />
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-gray-300 text-sm mt-2 mb-4">{description}</p>
      <div className="flex justify-between items-center text-xs text-gray-400">
        <span>{tech}</span>
        <a href={link} target="_blank" rel="noopener noreferrer">
          <svg className="w-5 h-5 hover:text-emerald-400" fill="none" stroke="currentColor" strokeWidth="2"
            viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round"
              d="M14 3h7m0 0v7m0-7L10 14m-1 5h4m-4 0a1 1 0 01-1-1v-4m5-5L3 21" />
          </svg>
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;