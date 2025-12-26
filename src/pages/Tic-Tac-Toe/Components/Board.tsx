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
  const [theWinningLine, setTheWinningLine] = useState<Array<number | null>>([
    null,
    null,
    null,
  ]);

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
        setTheWinningLine(winningPossibility);
        winner = squares[sqr1];
        return squares[sqr1];
      }
    });

    if (isWinner) return winner;
    return null;
  };

  //building squares
  const rows = [];
  for (let i = 0; i < 3; i++) {
    const cols = [];
    for (let j = 0; j < 3; j++) {
      const k = i * 3 + j;
      const isSquareWinner = theWinningLine.includes(k) ? true : false;
      cols.push(
        <Square
          isSquareWinner={isSquareWinner}
          key={k}
          value={squares[k]}
          onSquareClick={() => handleClick(k)}
        />,
      );
    }
    rows.push(
      <div key={i} className="flex border-0">
        {cols}
      </div>,
    );
  }

  return (
    <>
      <div>{status}</div>
      {rows}
    </>
  );
}
