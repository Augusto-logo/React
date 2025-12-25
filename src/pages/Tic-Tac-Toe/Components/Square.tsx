interface SquareProps {
  value: string | null;
  onSquareClick: () => void;
}

export default function Square({ value, onSquareClick }: SquareProps) {
  return (
    <button
      className="h-10 w-10 rounded-none border border-gray-400 bg-white p-1 text-center text-2xl font-bold text-black"
      onClick={onSquareClick}
    >
      {value}
    </button>
  );
}
