import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          className="flex gap-4 items-center rounded-full border-4 border-gray-300 shadow-lg"
          src="/profile.jpeg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <p>
            Hello, nice to meet you! My name is Leandro and this is my personal website.
          </p>
        </div>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <p>
            NOTE: IT IS STILL UNDER DEVELOPMENT.
          </p>
        </div>

      </main>

      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://www.linkedin.com/in/leandro-alves-de-oliveira/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to my GitHub Portfolio →
        </a>
      </footer>

    </div>
  );
}
