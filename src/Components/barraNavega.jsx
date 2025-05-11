import { useLocation, Link } from "react-router-dom";

function BarraNavega() {
  const location = useLocation(); // Retorna algo como "/sobre"
  const path = location.pathname;

  return (
    <div className="fixed top-0 left-0 w-full z-50 shadow-md">
      <div className="flex justify-evenly py-4">
        <Link
          to="/"
          className={` ${
            path === "/" ? "underline decoration-4 decoration-emerald-800" : ""
          }`}
        >
          Home
        </Link>

        <Link
          to="/sobre"
          className={` ${
            path === "/sobre"
              ? "underline decoration-4 decoration-emerald-800"
              : ""
          }`}
        >
          Sobre
        </Link>

        <Link
          to="/projetos"
          className={` ${
            path === "/projetos"
              ? "underline decoration-4 decoration-emerald-800"
              : ""
          }`}
        >
          Projetos
        </Link>
      </div>
    </div>
  );
}

export default BarraNavega;
