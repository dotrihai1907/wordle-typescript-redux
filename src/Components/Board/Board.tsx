import React from "react";
import Keyboard from "../Keyboard/Keyboard";
import Square from "../Square/Square";
import "./board.css";

interface IProps {
  board: string[];
}

const Board: React.FC<IProps> = (props) => {
  const { board } = props;
  return (
    <div>
      <div className="board">
        {board.map((square, index) => (
          <div key={index}>
            <Square value={square} squareIndex={index} />
          </div>
        ))}
      </div>

      <div className="keyboard">
        <Keyboard />
      </div>
    </div>
  );
};

export default Board;
