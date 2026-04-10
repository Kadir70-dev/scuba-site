export function FeaturedExperiences() {
  return (
    <section className="relative w-full h-[650px] overflow-hidden">

      {/* VIDEO */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/vid1.mp4" type="video/mp4" />
      </video>

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/45" />

      {/* TEXT CONTENT */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">

        <p className="text-white/80 text-xl mb-4 font-light tracking-wide">
          Special Projects
        </p>

        <h2 className="text-white text-4xl md:text-6xl font-bold max-w-5xl leading-tight uppercase">
          LET’S MAKE YOUR EVENT OR PROJECT EXTRAORDINARY
        </h2>

      </div>

    </section>
  );
}