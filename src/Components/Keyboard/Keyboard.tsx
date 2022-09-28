import React from "react";
import Key from "../Key/Key";
import "./keyboard.css";
import { useSelector, useDispatch } from "react-redux";
import { rootState } from "../interface";
import {
  decreasePosition,
  increaseRow,
  setBoard,
} from "../../redux/boardSlice";

const Keyboard: React.FC = () => {
  const rows: string[] = [
    "q w e r t y u i o p",
    "a s d f g h j k l",
    "z x c v b n m",
  ];

  const dispatch = useDispatch();

  const position = useSelector((state: rootState) => state.board.position);
  const board = useSelector((state: rootState) => state.board.board);
  const row = useSelector((state: rootState) => state.board.row);

  const clickBack = () => {
    if (Math.floor((position - 1) / 5) < row) return;
    const newBoard = [...board];
    newBoard[position - 1] = "";
    dispatch(setBoard(newBoard));
    dispatch(decreasePosition());
  };

  const clickEnter = () => {
    if (position % 5 === 0 && position !== 0) {
      dispatch(increaseRow());
    }
  };

  return (
    <div className="keyboard-container">
      {rows.map((row, index) => (
        <div className="row" key={index}>
          {index === 2 && (
            <span className="letter-row" onClick={clickEnter}>
              Enter
            </span>
          )}
          {row.split(" ").map((letter, index) => (
            <div className="letter-row" key={index}>
              <Key letter={letter.toUpperCase()} />
              {letter === "m" && <span onClick={clickBack}>Back</span>}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Keyboard;
