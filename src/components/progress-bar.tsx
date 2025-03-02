import * as Progress from '@radix-ui/react-progress';

interface ProgressBarProps {
  value: number;
  max: number;
}

export default function ProgressBar({ value, max }: ProgressBarProps) {
  const percentage = Math.round((value / max) * 100);

  return (
    <div className="w-full">
      <Progress.Root
        className="h-3 w-full overflow-hidden rounded-full bg-gray-200"
        value={percentage}
      >
        <Progress.Indicator
          className="h-full bg-green-500 transition-all duration-500 ease-in-out"
          style={{ width: `${percentage}%` }}
        />
      </Progress.Root>
      <div className="text-right text-sm text-gray-600 mt-1">
        {value}/{max}
      </div>
    </div>
  );
}
