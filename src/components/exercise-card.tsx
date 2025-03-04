import { useState } from 'react';
import { Exercise } from '../types';

interface ExerciseCardProps {
  exercise: Exercise;
  onCorrect: () => void;
  onIncorrect: () => void;
}

export default function ExerciseCard({
  exercise,
  onCorrect,
  onIncorrect,
}: ExerciseCardProps) {
  const [answer, setAnswer] = useState('');
  const [feedback, setFeedback] = useState<'correct' | 'incorrect' | null>(
    null
  );

  const handleSubmit = () => {
    if (answer.trim().toLowerCase() === exercise.correctAnswer.toLowerCase()) {
      setFeedback('correct');
      setTimeout(() => {
        onCorrect();
        setAnswer('');
        setFeedback(null);
      }, 1500);
    } else {
      setFeedback('incorrect');
      setTimeout(() => {
        onIncorrect();
        setFeedback(null);
      }, 1500);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6 max-w-2xl mx-auto">
      <h3 className="text-lg font-medium mb-6">{exercise.question}</h3>

      {exercise.type === 'multiple-choice' && exercise.options && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {exercise.options.map((option) => (
            <button
              key={option}
              className={`p-3 rounded-lg border-2 text-left transition ${
                answer === option
                  ? 'border-blue-500 bg-blue-50'
                  : 'border-gray-300 hover:border-gray-400'
              }`}
              onClick={() => setAnswer(option)}
            >
              {option}
            </button>
          ))}
        </div>
      )}

      {exercise.type === 'translation' && (
        <div className="mb-6">
          <input
            type="text"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            placeholder="Enter your translation"
          />
        </div>
      )}

      {feedback === 'correct' && (
        <div className="mb-6 p-4 bg-green-100 text-green-800 rounded-lg">
          Correct 🎉
        </div>
      )}

      {feedback === 'incorrect' && (
        <div className="mb-6 p-4 bg-red-100 text-red-800 rounded-lg">
          Wrong. The correct answer is &quot;{exercise.correctAnswer}&quot;.
        </div>
      )}

      <button
        className={`w-full py-3 px-6 rounded-lg font-medium ${
          answer
            ? 'bg-green-500 text-white hover:bg-green-600'
            : 'bg-gray-300 text-gray-500 cursor-not-allowed'
        }`}
        onClick={handleSubmit}
        disabled={!answer}
      >
        Submit
      </button>
    </div>
  );
}
