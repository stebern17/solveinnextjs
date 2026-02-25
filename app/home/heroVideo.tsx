export default function HeroVideo() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <video
        src="/videos/hero_video.webm"
        autoPlay
        loop
        muted
        className="w-full h-full object-cover rounded-lg shadow-lg"
      />
    </div>
  );
}
