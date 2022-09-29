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
import workList from "../../words.json";

const Keyboard: React.FC = () => {
  const rows: string[] = [
    "q w e r t y u i o p",
    "a s d f g h j k l",
    "z x c v b n m",
  ];

  const allWords: string[] = workList.words;

  const dispatch = useDispatch();

  const position = useSelector((state: rootState) => state.board.position);
  const board = useSelector((state: rootState) => state.board.board);
  const row = useSelector((state: rootState) => state.board.row);
  const correctWord = useSelector(
    (state: rootState) => state.board.correctWord
  );

  let board5Words: string = `${board[position - 5]}${board[position - 4]}${
    board[position - 3]
  }${board[position - 2]}${board[position - 1]}`.toLowerCase();

  const clickBack = () => {
    if (Math.floor((position - 1) / 5) < row) return;
    const newBoard = [...board];
    newBoard[position - 1] = "";
    dispatch(setBoard(newBoard));
    dispatch(decreasePosition());
  };

  const clickEnter = () => {
    if (allWords.includes(board5Words) === false) {
      alert("Invalid words");
    } else if (allWords.includes(board5Words)) {
      if (position % 5 === 0 && position !== 0) {
        dispatch(increaseRow());
      }
    }
    if (position === 30 && allWords.includes(board5Words)) {
      alert("The correct word is: " + correctWord);
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
