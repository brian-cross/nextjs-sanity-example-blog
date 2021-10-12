import Layout from "../components/Layout";
import { useRouter } from "next/router";
import Container from "../components/Container";
import MainContent from "../components/MainContent";

export default function Page() {
  const router = useRouter();

  return (
    <Layout>
      <Container>
        <MainContent>
          <h1>{router.query.page}</h1>
        </MainContent>
      </Container>
    </Layout>
  );
}
