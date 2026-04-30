import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen w-full flex items-center justify-center px-4 py-12">
      <div className="flex flex-col items-center justify-center gap-6 text-center max-w-2xl">
        {/* 404 Number */}
        <div className="text-8xl sm:text-9xl font-zalando font-bold text-[#ff6f00]/20">
          404
        </div>

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-zalando font-semibold uppercase mb-2">
          Page Not Found
        </h1>

        {/* Description */}
        <p className="text-base sm:text-lg text-gray-600 max-w-md">
          Oops! We couldn't find the page you're looking for. The page might
          have been moved or deleted.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <Link
            href="/"
            className="inline-flex items-center justify-center px-6 py-3 bg-[#ff6f00] text-white font-zalando font-semibold uppercase rounded-lg hover:bg-[#ff6f00]/90 transition-colors duration-300 shadow-lg"
          >
            Back to Home
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center justify-center px-6 py-3 border-2 border-[#ff6f00] text-[#ff6f00] font-zalando font-semibold uppercase rounded-lg hover:bg-[#ff6f00]/10 transition-colors duration-300"
          >
            Explore Services
          </Link>
        </div>

        {/* Decorative Element */}
        <div className="mt-12 opacity-10">
          <svg className="w-48 h-48" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
          </svg>
        </div>
      </div>
    </main>
  );
}
