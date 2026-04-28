"use client";

import { useEffect, useRef, useState } from "react";

type Obstacle = {
  x: number;
  y: number;
  width: number;
  height: number;
  label: string;
};

export default function EndlessRunner() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const spriteRef = useRef<HTMLImageElement | null>(null);
  const backgroundRef = useRef<HTMLImageElement | null>(null);
  const [started, setStarted] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [finalScore, setFinalScore] = useState(0);
  const [gameSeed, setGameSeed] = useState(0);

  useEffect(() => {
    const sprite = new Image();
    sprite.src = "/images/CharacterSprint.png";
    sprite.onload = () => {
      spriteRef.current = sprite;
    };

    const background = new Image();
    background.src = "/images/GameBackground.png";
    background.onload = () => {
      backgroundRef.current = background;
    };

    return () => {
      sprite.onload = null;
      background.onload = null;
    };
  }, []);

  useEffect(() => {
    if (!started) return;

    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;

    canvas.width = 800;
    canvas.height = 400;

    let animationId: number;
    const gravity = 0.6;
    let running = true;

    const groundHeight = 60;
    const groundY = canvas.height - groundHeight;

    const player = {
      x: 100,
      y: groundY - 60,
      width: 60,
      height: 60,
      velocityY: 0,
      jumping: false,
    };

    const obstacles: Obstacle[] = [];
    let frame = 0;
    let score = 0;
    const frameHold = 6;
    const topRowFrames = 7;
    const totalFrames = 12;
    const backgroundSpeed = 2;
    let backgroundOffset = 0;
    const challengeLabels = [
      "Low engagement",
      "No views",
      "No likes",
      "Low sales",
      "Weak reach",
      "Poor conversions",
    ];

    function spawnObstacle() {
      const label =
        challengeLabels[Math.floor(Math.random() * challengeLabels.length)];
      obstacles.push({
        x: canvas.width,
        y: groundY - 45,
        width: 45,
        height: 45,
        label,
      });
    }

    function update() {
      frame++;
      score++;

      // gravity
      player.velocityY += gravity;
      player.y += player.velocityY;

      if (player.y > groundY - player.height) {
        player.y = groundY - player.height;
        player.velocityY = 0;
        player.jumping = false;
      }

      // spawn obstacle
      if (frame % 120 === 0) {
        spawnObstacle();
      }

      // move obstacles
      obstacles.forEach((obs, index) => {
        obs.x -= 5;

        // collision
        if (
          player.x < obs.x + obs.width &&
          player.x + player.width > obs.x &&
          player.y < obs.y + obs.height &&
          player.y + player.height > obs.y
        ) {
          running = false;
          setFinalScore(score);
          setGameOver(true);
          return;
        }

        if (obs.x + obs.width < 0) {
          obstacles.splice(index, 1);
        }
      });
    }

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const background = backgroundRef.current;
      if (background) {
        const bgScale = canvas.height / background.height;
        const bgWidth = background.width * bgScale;
        const bgHeight = canvas.height;
        backgroundOffset = (backgroundOffset + backgroundSpeed) % bgWidth;

        ctx.drawImage(background, -backgroundOffset, 0, bgWidth, bgHeight);
        ctx.drawImage(
          background,
          -backgroundOffset + bgWidth,
          0,
          bgWidth,
          bgHeight,
        );
      }

      // ground
      ctx.fillStyle = "#222";
      ctx.fillRect(0, groundY, canvas.width, groundHeight);
      ctx.fillStyle = "rgba(255, 255, 255, 0.12)";
      ctx.fillRect(0, groundY, canvas.width, 2);

      // player
      const sprite = spriteRef.current;
      if (sprite) {
        const frameIndex = Math.floor(frame / frameHold) % totalFrames;
        const frameWidth = sprite.width / topRowFrames;
        const frameHeight = sprite.height / 2;
        const sx =
          frameIndex < topRowFrames
            ? frameIndex * frameWidth
            : (frameIndex - topRowFrames) * frameWidth;
        const sy = frameIndex < topRowFrames ? 0 : frameHeight;

        ctx.drawImage(
          sprite,
          sx,
          sy,
          frameWidth,
          frameHeight,
          player.x,
          player.y,
          player.width,
          player.height,
        );
      } else {
        ctx.fillStyle = "#ff6f00";
        ctx.fillRect(player.x, player.y, player.width, player.height);
      }

      // obstacles
      const drawRoundedRect = (
        x: number,
        y: number,
        width: number,
        height: number,
        radiusTop: number,
        radiusBottom: number,
      ) => {
        const rt = Math.min(radiusTop, width / 2, height / 2);
        const rb = Math.min(radiusBottom, width / 2, height / 2);
        ctx.beginPath();
        ctx.moveTo(x + rt, y);
        ctx.lineTo(x + width - rt, y);
        ctx.quadraticCurveTo(x + width, y, x + width, y + rt);
        ctx.lineTo(x + width, y + height - rb);
        ctx.quadraticCurveTo(x + width, y + height, x + width - rb, y + height);
        ctx.lineTo(x + rb, y + height);
        ctx.quadraticCurveTo(x, y + height, x, y + height - rb);
        ctx.lineTo(x, y + rt);
        ctx.quadraticCurveTo(x, y, x + rt, y);
        ctx.closePath();
      };

      obstacles.forEach((obs) => {
        const gradient = ctx.createLinearGradient(
          obs.x,
          obs.y,
          obs.x + obs.width,
          obs.y + obs.height,
        );
        gradient.addColorStop(0, "#ff6f00");
        gradient.addColorStop(1, "#b93800");

        ctx.save();
        drawRoundedRect(obs.x, obs.y, obs.width, obs.height, 10, 0);
        ctx.fillStyle = gradient;
        ctx.fill();
        ctx.strokeStyle = "rgba(255, 255, 255, 0.35)";
        ctx.lineWidth = 2;
        ctx.stroke();

        ctx.shadowColor = "rgba(255, 111, 0, 0.35)";
        ctx.shadowBlur = 12;
        drawRoundedRect(obs.x, obs.y, obs.width, obs.height, 10, 0);
        ctx.strokeStyle = "rgba(255, 111, 0, 0.6)";
        ctx.lineWidth = 1;
        ctx.stroke();
        ctx.restore();

        const text = obs.label;
        const paddingX = 10;
        const paddingY = 6;
        ctx.font = "16px Arial";
        const textWidth = ctx.measureText(text).width;
        const boxWidth = textWidth + paddingX * 2;
        const boxHeight = 24;
        const boxX = obs.x + obs.width / 2 - boxWidth / 2;
        const boxY = obs.y - boxHeight - paddingY;

        ctx.fillStyle = "rgba(0, 0, 0, 0.75)";
        ctx.fillRect(boxX, boxY, boxWidth, boxHeight);
        ctx.strokeStyle = "rgba(255, 255, 255, 0.2)";
        ctx.strokeRect(boxX, boxY, boxWidth, boxHeight);
        ctx.fillStyle = "#ffffff";
        ctx.fillText(text, boxX + paddingX, boxY + 16);
      });

      // score
      ctx.fillStyle = "#000";
      ctx.font = "20px Arial";
      ctx.fillText("Score: " + score, 20, 30);
    }

    function gameLoop() {
      if (!running) return;
      update();
      if (!running) return;
      draw();
      animationId = requestAnimationFrame(gameLoop);
    }

    function handleJump() {
      if (!player.jumping) {
        player.velocityY = -12;
        player.jumping = true;
      }
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === "Space") {
        handleJump();
      }
    };

    const handleCanvasClick = () => {
      handleJump();
    };

    window.addEventListener("keydown", handleKeyDown);
    canvas.addEventListener("click", handleCanvasClick);

    gameLoop();

    return () => {
      running = false;
      window.removeEventListener("keydown", handleKeyDown);
      canvas.removeEventListener("click", handleCanvasClick);
      cancelAnimationFrame(animationId);
    };
  }, [started, gameSeed]);

  function startGame() {
    setFinalScore(0);
    setGameOver(false);
    setStarted(true);
  }

  function restartGame() {
    setGameOver(false);
    setFinalScore(0);
    setStarted(true);
    setGameSeed((prev) => prev + 1);
  }

  return (
    <div className="relative w-full max-w-3xl mx-auto flex items-center justify-center px-2 sm:px-0">
      {/* Canvas */}
      <canvas
        ref={canvasRef}
        className="w-full h-[220px] sm:h-[320px] lg:h-[400px] rounded-2xl bg-background"
      />

      {/* START BUTTON OVERLAY */}
      {!started && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/50 rounded-2xl p-4 text-center overflow-auto">
          <h5 className="text-white text-base sm:text-lg mb-4 font-zalando uppercase tracking-wide">
            "Click To Jump"
          </h5>
          <button
            type="button"
            onClick={startGame}
            className="
            relative inline-flex items-center justify-center
            px-8 py-3 rounded-full border border-white
            text-white overflow-hidden group
            transition-transform duration-300
            hover:scale-105 active:scale-95
          "
          >
            {/* Fill */}
            <span
              className="
              absolute inset-0
              bg-[#ff6f00]
              translate-y-full
              group-hover:translate-y-0
              transition-transform duration-500 ease-out
            "
            />
            <span className="relative z-10 font-semibold uppercase tracking-wide cursor-pointer text-sm sm:text-base">
              Start Your Brand Journey
            </span>
          </button>
        </div>
      )}

      {/* GAME OVER MODAL */}
      {gameOver && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm rounded-2xl p-4 overflow-auto">
          <div className="w-full max-w-md rounded-2xl border border-zinc-700 bg-background text-foreground shadow-xl p-6 sm:p-8 text-center flex flex-col gap-4 max-h-[80vh] overflow-auto">
            <h3 className="font-zalando text-xl sm:text-2xl uppercase text-white">
              Journey Paused
            </h3>

            <p className="text-base sm:text-lg text-white">
              Your score: {finalScore}
            </p>

            <h2 className="text-base sm:text-lg font-semibold text-white">
              Looks like the algorithm won this round.
            </h2>

            <p className="text-sm text-white leading-relaxed">
              Growing on social media takes strategy, speed, and the right
              moves. Ready to let Solvein handle it?
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
              {/* START OVER */}
              <button
                type="button"
                onClick={restartGame}
                className="
                relative inline-flex items-center justify-center
                px-6 py-3 rounded-full border border-white
                text-white overflow-hidden group
                transition-transform duration-300
                hover:scale-105 active:scale-95 cursor-pointer
              "
              >
                <span
                  className="
                  absolute inset-0
                  bg-[#ff6f00]
                  translate-y-full
                  group-hover:translate-y-0
                  transition-transform duration-500 ease-out
                "
                />
                <span className="relative z-10 font-semibold uppercase text-sm sm:text-base">
                  Start Over
                </span>
              </button>

              {/* CONTACT */}
              <a
                href="/contactUs"
                className="
                relative inline-flex items-center justify-center
                px-6 py-3 rounded-full border border-[#ff6f00]
                text-[#ff6f00] overflow-hidden group
                transition-transform duration-300
                hover:scale-105 active:scale-95
              "
              >
                <span
                  className="
                  absolute inset-0
                  bg-[#ff6f00]
                  translate-y-full
                  group-hover:translate-y-0
                  transition-transform duration-500 ease-out
                "
                />
                <span className="relative z-10 font-semibold uppercase text-sm sm:text-base group-hover:text-white transition-colors duration-300">
                  Contact Us
                </span>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
