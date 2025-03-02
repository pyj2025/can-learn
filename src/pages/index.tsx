import Link from 'next/link';
import LanguageSelector from '../components/language-selector';

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold mb-6">
          언어를 배우는 가장 좋은 방법
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          재미있고 효과적인 레슨으로 새로운 언어를 무료로 배워보세요.
        </p>

        <Link href="/learn">
          <span className="inline-block bg-green-500 text-white font-bold py-4 px-8 rounded-2xl text-lg hover:bg-green-600 transition">
            시작하기
          </span>
        </Link>
      </div>

      <div className="mt-16">
        <h2 className="text-2xl font-bold text-center mb-8">
          배우고 싶은 언어를 선택하세요
        </h2>
        <LanguageSelector />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
        <div className="bg-white p-6 rounded-xl shadow text-center">
          <div className="text-4xl mb-4">🎯</div>
          <h3 className="text-xl font-bold mb-2">개인화된 학습</h3>
          <p className="text-gray-600">
            당신의 학습 스타일과 목표에 맞춰진 레슨
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow text-center">
          <div className="text-4xl mb-4">🎮</div>
          <h3 className="text-xl font-bold mb-2">게임같은 경험</h3>
          <p className="text-gray-600">재미있는, 게임같은 방식으로 언어 학습</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow text-center">
          <div className="text-4xl mb-4">📱</div>
          <h3 className="text-xl font-bold mb-2">어디서나 학습</h3>
          <p className="text-gray-600">모바일과 데스크톱에서 자유롭게 학습</p>
        </div>
      </div>
    </div>
  );
}
