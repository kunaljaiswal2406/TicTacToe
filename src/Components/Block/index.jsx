import styles from "./block.module.scss";
import { oImage, crossImage } from "../../constants";
import { findNextMove } from "../../engine";

const Block = ({ row, col, board, setBoard, renderBoard, setRenderBoard }) => {
  return (
    <div
      className={styles.block}
      onClick={() => {
        if (board[row][col] !== "") return;
        board[row][col] = "X";

        let botMove = findNextMove(board);

        if (botMove !== undefined && botMove.i !== undefined) {
          board[botMove.i][botMove.j] = "O";
        }

        setBoard(board);

        setRenderBoard(!renderBoard);
      }}
    >
      <div className={styles.imageContainer}>
        {board[row][col] === "X" && (
          <img src={crossImage} className={styles.image} alt="" />
        )}
        {board[row][col] === "O" && (
          <img src={oImage} className={styles.image} alt="" />
        )}
      </div>
    </div>
  );
};
export default Block;
