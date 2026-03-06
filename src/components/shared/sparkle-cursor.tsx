import { useEffect, useRef } from "react";

export function SparkleCursor() {
  const lastSpawn = useRef(0);

  useEffect(() => {
    function spawnStars(x: number, y: number) {
      const count = 2 + Math.floor(Math.random() * 2);

      for (let i = 0; i < count; i++) {
        const star = document.createElement("span");
        star.className = "sparkle-star";

        const offsetX = (Math.random() - 0.5) * 10;
        const offsetY = (Math.random() - 0.5) * 10;
        star.style.left = `${x + offsetX}px`;
        star.style.top = `${y + offsetY + window.scrollY}px`;

        const angle = Math.random() * Math.PI * 2;
        const distance = 20 + Math.random() * 30;
        const dx = Math.cos(angle) * distance;
        const dy = Math.sin(angle) * distance + 10 + Math.random() * 15;
        star.style.setProperty("--dx", `${dx}px`);
        star.style.setProperty("--dy", `${dy}px`);

        const duration = 0.4 + Math.random() * 0.4;
        star.style.animationDuration = `${duration}s`;

        const size = 2 + Math.random() * 4;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;

        document.getElementById("sparkle-layer")?.appendChild(star);
        star.addEventListener("animationend", () => star.remove());
      }
    }

    function handleMouseMove(e: MouseEvent) {
      const target = e.target as HTMLElement;
      if (!target.closest("[data-sparkle]")) return;

      const now = Date.now();
      if (now - lastSpawn.current < 40) return;
      lastSpawn.current = now;
      spawnStars(e.clientX, e.clientY);
    }

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      id="sparkle-layer"
      style={{
        position: "fixed",
        inset: 0,
        pointerEvents: "none",
        zIndex: 9999,
        overflow: "visible",
      }}
    />
  );
}
