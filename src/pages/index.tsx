import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold mb-6">
          Hello, SOME SENTENCE With LOVELY Letter
        </h1>
        <Link href="/learn">
          <Image
            src="/images/logo-test.png"
            alt="Learn a new language"
            width={600}
            height={600}
            className="mx-auto cursor-pointer rounded-lg shadow-lg hover:opacity-90 transition"
          />
        </Link>

        <Link href="/learn">
          <span className="inline-block bg-green-500 text-white font-bold py-4 px-8 rounded-2xl text-lg hover:bg-green-600 transition mt-6">
            Get Started
          </span>
        </Link>
      </div>
    </div>
  );
}
