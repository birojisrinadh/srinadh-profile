import React, { useEffect, useState } from "react";

const CURSOR_SIZE = 600;

const MouseFollow = () => {
  const [cursorStyle, setCursorStyle] = useState({
    left: "0px",
    top: "0px",
    opacity: 0,
  });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX: x, clientY: y } = e;
      setCursorStyle({
        left: `${x - CURSOR_SIZE / 2}px`,
        top: `${y - CURSOR_SIZE / 2}px`,
      });
    };

    const handleMouseEnter = () => {
      setCursorStyle((prevStyle) => ({
        ...prevStyle,
        opacity: 1,
      }));
    };

    const handleMouseLeave = () => {
      setCursorStyle((prevStyle) => ({
        ...prevStyle,
        opacity: 0,
      }));
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div
      className="bg-cursor-light dark:bg-cursor-dark pointer-events-none fixed z-50 rounded-full transition-opacity duration-500"
      style={{
        left: cursorStyle.left,
        top: cursorStyle.top,
        opacity: cursorStyle.opacity,
        width: `${CURSOR_SIZE}px`,
        height: `${CURSOR_SIZE}px`,
      }}
    ></div>
  );
};

export default MouseFollow;
