import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increasePosition, setBoard } from "../../redux/boardSlice";
import { rootState } from "../interface";
import "./key.css";

interface IProps {
  letter: string;
}

const Key: React.FC<IProps> = (props) => {
  const dispatch = useDispatch();

  const { letter } = props;

  const board = useSelector((state: rootState) => state.board.board);
  const position = useSelector((state: rootState) => state.board.position);
  const row = useSelector((state: rootState) => state.board.row);

  let currentRow = Math.floor(position / 5);

  const chooseLetter = () => {
    if (position >= 30) return;
    if (currentRow > row) return;

    const newBoard = [...board];
    newBoard[position] = letter;
    dispatch(setBoard(newBoard));
    dispatch(increasePosition());
  };

  return (
    <div className="letter" onClick={chooseLetter}>
      {letter}
    </div>
  );
};

export default Key;
