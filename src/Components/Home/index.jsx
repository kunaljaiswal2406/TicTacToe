import styles from "./home.module.scss";
import Particles from "../Particles/Particle";
import Board from "../Board/index";
import Header from "../Header/index";

const Home = () => {
  return (
    <>
      <div className={styles.background}>
        <Particles />
        <Header />

        <Board />
      </div>
    </>
  );
};

export default Home;
