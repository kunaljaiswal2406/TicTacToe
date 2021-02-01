import styles from "./board.module.scss";
import Block from "../Block/";
import { useState, useEffect } from "react";
import { oImage, crossImage } from "../../constants";
import { checkWinner } from "../../engine";

const Board = () => {
  const [board, setBoard] = useState([
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
  ]);

  const [renderBoard, setRenderBoard] = useState(false);

  useEffect(() => {
    let result = checkWinner(board);
    if (result !== null) {
      setTimeout(() => {
        if (result === "tie") alert("Tie!!!");
        else alert(`${result} Wins!!`);

        setBoard([
          ["", "", ""],
          ["", "", ""],
          ["", "", ""]
        ]);
      }, 100);
    }
  }, [renderBoard]);

  const renderBlock = (row, col) => {
    return (
      <Block
        row={row}
        col={col}
        board={board}
        setBoard={setBoard}
        setRenderBoard={setRenderBoard}
        renderBoard={renderBoard}
      />
    );
  };
  return (
    <>
      <div className={styles.boardContainer}>
        <div className={styles.board}>
          <div className={styles.row}>
            {renderBlock(0, 0)}

            <div className={styles.seperatorCol} />
            {renderBlock(0, 1)}
            <div className={styles.seperatorCol} />
            {renderBlock(0, 2)}
          </div>
          <div className={styles.seperatorRow} />
          <div className={styles.row}>
            {renderBlock(1, 0)}
            <div className={styles.seperatorCol} />
            {renderBlock(1, 1)}
            <div className={styles.seperatorCol} />
            {renderBlock(1, 2)}
          </div>
          <div className={styles.seperatorRow} />
          <div className={styles.row}>
            {renderBlock(2, 0)}
            <div className={styles.seperatorCol} />
            {renderBlock(2, 1)}
            <div className={styles.seperatorCol} />
            {renderBlock(2, 2)}
          </div>
        </div>
      </div>
    </>
  );
};
export default Board;
