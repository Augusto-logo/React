interface SquareProps {
  value: string | null;
  onSquareClick: () => void;
  isSquareWinner?: boolean;
}

export default function Square({
  value,
  onSquareClick,
  isSquareWinner,
}: SquareProps) {
  return (
    <button
      className={`h-10 w-10 rounded-none border border-gray-400 p-1 text-center text-2xl font-bold text-black ${isSquareWinner ? "bg-amber-200" : "bg-white"}`}
      onClick={onSquareClick}
    >
      {value}
    </button>
  );
}
