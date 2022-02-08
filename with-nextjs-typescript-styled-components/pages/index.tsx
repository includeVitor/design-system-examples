import type { NextPage } from "next";
import Head from "next/head";
import { LoginForm } from "../components/LoginForm";
import { useAppTheme } from "../lib/theme";
import { Container, Main, Title } from "../styles/styles";

const Home: NextPage = () => {
  const theme = useAppTheme();
  console.log(theme);
  return (
    <Container>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main>
        <Title>Login</Title>
        <LoginForm />
      </Main>
    </Container>
  );
};

export default Home;