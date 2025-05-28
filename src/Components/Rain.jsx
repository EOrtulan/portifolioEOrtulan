import { useEffect, useRef } from "react";

const Rain = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const letters = ".·*";
    const dropCount = 200;

    // Cada gota tem x, y, tamanho, velocidade e opacidade
    const drops = Array.from({ length: dropCount }).map(() => {
      const size = Math.random() * 2 + 1; // 1px a 3px (tamanho = profundidade)
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size,
        speedX: (Math.random() - 0.5) * 0.4 * size, // inclinação proporcional
        speedY: 0.5 + size * 1.5, // mais próximas caem mais rápido
        opacity: 0.3 + size * 0.2, // mais próximas são mais visíveis
      };
    });

    const draw = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      drops.forEach((drop) => {
        const char = letters[Math.floor(Math.random() * letters.length)];
        ctx.fillStyle = `rgba(200, 230, 255, ${drop.opacity})`; // azul suave com opacidade
        ctx.font = `${10 + drop.size * 4}px monospace`; // fonte proporcional ao tamanho
        ctx.fillText(char, drop.x, drop.y);

        drop.x += drop.speedX;
        drop.y += drop.speedY;

        // Reinicia quando sai da tela
        if (drop.y > canvas.height || drop.x > canvas.width || drop.x < 0) {
          drop.x = Math.random() * canvas.width;
          drop.y = 0;
        }
      });
    };

    const interval = setInterval(draw, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full z-[-1] bg-black"
    />
  );
};

export default Rain;
