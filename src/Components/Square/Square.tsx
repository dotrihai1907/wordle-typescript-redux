/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import "./square.css";
import { motion } from "framer-motion";
import { rootState } from "../interface";
import { useSelector } from "react-redux";

interface IProps {
  value: string;
  squareIndex: number;
}
const Square: React.FC<IProps> = (props) => {
  const { value, squareIndex } = props;

  //redux state
  const correctWord = useSelector(
    (state: rootState) => state.board.correctWord
  );
  const position = useSelector((state: rootState) => state.board.position);
  const reduxRow = useSelector((state: rootState) => state.board.row);

  //state
  const [correct, setCorrect] = useState<boolean>(false);
  const [almost, setAlmost] = useState<boolean>(false);
  const [wrong, setWrong] = useState<boolean>(false);

  let currentPositionPerRow = (position - 1) % 5;

  const variants = {
    filled: () => ({
      scale: [1.2, 1],
      transition: {
        duration: 0.2,
      },
    }),
    unfilled: () => ({
      scale: [1.2, 1],
      transition: {
        duration: 0.2,
      },
    }),
  };

  useEffect(() => {
    if (correctWord[currentPositionPerRow] === value) {
      setCorrect(true);
    } else if (!correct && value !== "" && correctWord.includes(value)) {
      setAlmost(true);
    } else if (!correct && value !== "" && !correctWord.includes(value)) {
      setWrong(true);
    }
    return () => {
      //cleanup function
      setCorrect(false);
      setAlmost(false);
      setWrong(false);
    };
  }, [value]);

  const status: any =
    Math.floor(squareIndex / 5) < reduxRow &&
    (correct ? "correct" : almost ? "almost" : wrong ? "wrong" : "");

  return (
    <motion.div animate={value ? "filled" : "unfilled"} variants={variants}>
      <div className="square" id={status ? status : undefined}>
        {value}
      </div>
    </motion.div>
  );
};

export default Square;
