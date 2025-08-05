import React, { useEffect, useRef } from 'react';

const GlowingBackground = ({
  glowCount = 5, // More glows for more chaos
  grainOpacity = 0.3, // GRAINY AS FUCK
  blurAmount = 50,
}) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    // Inject CSS styles dynamically for independent moving glows
    const styleSheet = document.createElement('style');
    styleSheet.innerHTML = `
      .glowing-background {
        position: fixed;
        top: -10px;
        left: -10px;
        width: calc(100vw + 20px);
        height: calc(100vh + 20px);
        overflow: hidden;
        filter: blur(${blurAmount}px);
        opacity: 0.9;
        z-index: 1;
        background: #000;
      }

      .glow {
        position: absolute;
        mix-blend-mode: screen;
        animation-iteration-count: infinite;
        animation-timing-function: ease-in-out;
      }

      /* Glow 1: Blue, irregular oval shape - BIGGER */
      .glow1 {
        width: 600px;
        height: 400px;
        background: radial-gradient(ellipse 60% 40% at center, rgba(0, 100, 255, 0.8), rgba(0, 0, 0, 0));
        border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
        top: 10%;
        left: 5%;
        animation: move1 60s infinite;
      }

      @keyframes move1 {
        0% { transform: translate(0, 0) scale(1) rotate(0deg); }
        25% { transform: translate(20vw, 15vh) scale(1.3) rotate(45deg); }
        50% { transform: translate(40vw, -10vh) scale(0.8) rotate(90deg); }
        75% { transform: translate(15vw, 20vh) scale(1.1) rotate(135deg); }
        100% { transform: translate(0, 0) scale(1) rotate(180deg); }
      }

      /* Glow 2: Purple, stretched ellipse - BIGGER */
      .glow2 {
        width: 500px;
        height: 650px;
        background: radial-gradient(ellipse 80% 30% at center, rgba(128, 0, 255, 0.7), rgba(0, 0, 0, 0));
        border-radius: 40% 60% 60% 40% / 20% 80% 20% 80%;
        top: 40%;
        left: 50%;
        animation: move2 80s infinite reverse;
      }

      @keyframes move2 {
        0% { transform: translate(0, 0) scale(1) rotate(0deg); }
        30% { transform: translate(-30vw, -20vh) scale(1.4) rotate(-60deg); }
        60% { transform: translate(15vw, -35vh) scale(0.7) rotate(-120deg); }
        100% { transform: translate(0, 0) scale(1) rotate(-180deg); }
      }

      /* Glow 3: Cyan, irregular blob - BIGGER */
      .glow3 {
        width: 550px;
        height: 450px;
        background: radial-gradient(ellipse 70% 50% at 30% 70%, rgba(0, 200, 255, 0.6), rgba(0, 0, 0, 0));
        border-radius: 70% 30% 50% 50% / 40% 60% 40% 60%;
        top: 20%;
        left: 25%;
        animation: move3 70s infinite;
      }

      @keyframes move3 {
        0% { transform: translate(0, 0) scale(1) rotate(0deg); }
        50% { transform: translate(10vw, 30vh) scale(1.5) rotate(180deg); }
        100% { transform: translate(0, 0) scale(1) rotate(360deg); }
      }

      /* Glow 4: Magenta, distorted oval - BIGGER */
      .glow4 {
        width: 700px;
        height: 350px;
        background: radial-gradient(ellipse 50% 80% at 20% 40%, rgba(255, 0, 150, 0.7), rgba(0, 0, 0, 0));
        border-radius: 80% 20% 40% 60% / 30% 70% 30% 70%;
        top: -5%;
        left: 60%;
        animation: move4 90s infinite;
      }

      @keyframes move4 {
        0% { transform: translate(0, 0) scale(1) rotate(0deg); }
        25% { transform: translate(-25vw, 30vh) scale(1.2) rotate(90deg); }
        50% { transform: translate(-40vw, 50vh) scale(0.8) rotate(180deg); }
        75% { transform: translate(-15vw, 15vh) scale(1.4) rotate(270deg); }
        100% { transform: translate(0, 0) scale(1) rotate(360deg); }
      }

      /* Glow 5: Turquoise, organic shape - BIGGER */
      .glow5 {
        width: 600px;
        height: 500px;
        background: radial-gradient(ellipse 90% 60% at 60% 30%, rgba(0, 255, 200, 0.6), rgba(0, 0, 0, 0));
        border-radius: 50% 50% 80% 20% / 60% 40% 80% 20%;
        top: 55%;
        left: 0%;
        animation: move5 100s infinite;
      }

      @keyframes move5 {
        0% { transform: translate(0, 0) scale(1) rotate(0deg); }
        40% { transform: translate(35vw, -40vh) scale(1.6) rotate(144deg); }
        80% { transform: translate(50vw, -30vh) scale(0.6) rotate(288deg); }
        100% { transform: translate(0, 0) scale(1) rotate(360deg); }
      }

      .noise-canvas {
        position: fixed;
        top: -10px;
        left: -10px;
        width: calc(100vw + 20px);
        height: calc(100vh + 20px);
        pointer-events: none;
        opacity: ${grainOpacity};
        mix-blend-mode: overlay;
        z-index: 2;
      }
    `;
    document.head.appendChild(styleSheet);

    // Cleanup on unmount
    return () => {
      if (document.head.contains(styleSheet)) {
        document.head.removeChild(styleSheet);
      }
    };
  }, [glowCount, grainOpacity, blurAmount]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');

    // Resize canvas to full screen
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', resize);
    resize();

    // Generate SUPER GRAINY noise
    const generateNoise = () => {
      const w = canvas.width;
      const h = canvas.height;
      const imgData = ctx.createImageData(w, h);
      const data = imgData.data;

      // Make it GRAINY AS FUCK - higher frequency, more random variation
      for (let i = 0; i < data.length; i += 4) {
        const noise = Math.random() * 255;
        const variation = (Math.random() - 0.5) * 100; // More variation
        const finalNoise = Math.max(0, Math.min(255, noise + variation));
        
        data[i] = finalNoise;     // R
        data[i + 1] = finalNoise; // G
        data[i + 2] = finalNoise; // B
        data[i + 3] = 255;        // A (full opacity for grain)
      }

      ctx.putImageData(imgData, 0, 0);
    };

    // Generate noise once - no animation, only glows move
    generateNoise();

    // Cleanup
    return () => {
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <>
      <div className="glowing-background">
        <div className="glow glow1"></div>
        <div className="glow glow2"></div>
        <div className="glow glow3"></div>
        <div className="glow glow4"></div>
        <div className="glow glow5"></div>
      </div>
      <canvas ref={canvasRef} className="noise-canvas" />
    </>
  );
};

export default GlowingBackground;
