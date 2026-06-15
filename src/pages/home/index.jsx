import styles from "./styles.module.css";
import Header from "../../components/header";
// import CategoryCardList from "../../components/categoryCardList";
import Main from "../../components/main";

function Home() {
  return 
  (
    <div className={styles.homeContainer}>
      <Header />
      <Main />
    </div>
  );
}

export default Home;
