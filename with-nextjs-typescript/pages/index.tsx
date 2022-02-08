import type { NextPage } from "next";
import { LoginForm } from "../components/LoginForm";
import { useAppTheme } from "../lib/theme";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const theme = useAppTheme();

  console.log(theme);
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 style={{ fontWeight: theme.fontWeight.big }}>Login</h1>
        <LoginForm />
      </main>
    </div>
  );
};

export default Home;
