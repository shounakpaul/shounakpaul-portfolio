import { useEffect, useState } from "react";

export function useActiveSection(sectionIds) {
  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;
      const marker = window.scrollY + 140;
      let current = null;

      for (const id of sectionIds) {
        const section = document.getElementById(id);
        if (section && section.offsetTop <= marker) {
          current = id;
        }
      }

      const atBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 4;

      if (atBottom) {
        current = sectionIds[sectionIds.length - 1];
      }

      setActiveSection(current);
    };

    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [sectionIds]);

  return activeSection;
}
