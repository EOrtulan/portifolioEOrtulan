import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

function Contato() {
  return (
    <div className="flex gap-6 justify-center items-center py-6">
      <a
        href="https://www.linkedin.com/in/eduardo-ortulan-roberto-2435b51b5/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-2xl text-emerald-600 hover:text-emerald-400 transition"
      >
        <FaLinkedin />
      </a>

      <a
        href="https://github.com/EOrtulan"
        target="_blank"
        rel="noopener noreferrer"
        className="text-2xl text-emerald-600 hover:text-emerald-400 transition"
      >
        <FaGithub />
      </a>

      <a
        href="eduortulan@gmail.com"
        className="text-2xl text-emerald-600 hover:text-emerald-400 transition"
      >
        <FaEnvelope />
      </a>
    </div>
  );
}

export default Contato;
