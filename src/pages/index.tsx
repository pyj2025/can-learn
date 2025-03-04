import Link from 'next/link';
import LanguageSelector from '../components/language-selector';

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold mb-6">
          The Best Way to Learn a Language
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Learn a new language for free with fun and effective lessons.
        </p>

        <Link href="/learn">
          <span className="inline-block bg-green-500 text-white font-bold py-4 px-8 rounded-2xl text-lg hover:bg-green-600 transition">
            Get Started
          </span>
        </Link>
      </div>

      <div className="mt-16">
        <h2 className="text-2xl font-bold text-center mb-8">
          Choose the Language You Want to Learn
        </h2>
        <LanguageSelector />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
        <div className="bg-white p-6 rounded-xl shadow text-center">
          <div className="text-4xl mb-4">🎯</div>
          <h3 className="text-xl font-bold mb-2">Personalized Learning</h3>
          <p className="text-gray-600">
            Lessons tailored to your learning style and goals
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow text-center">
          <div className="text-4xl mb-4">🎮</div>
          <h3 className="text-xl font-bold mb-2">Game-Like Experience</h3>
          <p className="text-gray-600">
            Learn languages in a fun, interactive way
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow text-center">
          <div className="text-4xl mb-4">📱</div>
          <h3 className="text-xl font-bold mb-2">Learn Anywhere</h3>
          <p className="text-gray-600">Study freely on mobile and desktop</p>
        </div>
      </div>
    </div>
  );
}
