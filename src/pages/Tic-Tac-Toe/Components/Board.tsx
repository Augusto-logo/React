import { useState } from "react";
import Square from "./Square";

interface BoardProps {
  xIsNext: boolean;
  squares: Array<string | null>;
  onPlay: (nextSquares: Array<string | null>) => void;
}

export default function Board({ squares, onPlay, xIsNext }: BoardProps) {
  const [status, setStatus] = useState("Next Player: X");
  const [hasWinner, setHasWinner] = useState(false);

  const handleClick = (i: number) => {
    if (squares[i] || hasWinner) return;

    const newSquares = squares.slice();
    if (xIsNext) {
      newSquares[i] = "X";
    } else {
      newSquares[i] = "O";
    }

    onPlay(newSquares);

    const winner = calculateWinner(newSquares);
    if (winner) {
      setStatus(`Winner: ${winner}`);
      setHasWinner(true);
      return;
    } else {
      setStatus(`Next Player: ${!xIsNext ? "X" : "O"}`);
    }
  };

  const calculateWinner = (squares: Array<string | null>) => {
    const winningLines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    let winner = "";

    const isWinner = winningLines.some((winningPossibility) => {
      const [sqr1, sqr2, sqr3] = winningPossibility;
      if (
        squares[sqr1] &&
        squares[sqr1] === squares[sqr2] &&
        squares[sqr1] === squares[sqr3]
      ) {
        winner = squares[sqr1];
        return squares[sqr1];
      }
    });

    if (isWinner) return winner;
    return null;
  };

  return (
    <>
      <div>{status}</div>
      <div className="flex border-0">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="flex border-0">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="flex border-0">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
}
