export default function HeroVideo() {
  return (
    <div className="relative w-full min-h-[60vh] sm:min-h-screen overflow-hidden">
      <video
        src="/videos/hero_video.webm"
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover"
      />
    </div>
  );
}
