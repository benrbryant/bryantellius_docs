import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import Layout from "../components/layout";

const IndexPage = () => {
  return (
    <Layout>
      <main>
        <h1>Title</h1>
        <p>Some text...</p>
        <StaticImage
          src="../images/lucius-fox.png"
          alt="A computer screen with Lucius Fox's name being typed out."
        />
      </main>
    </Layout>
  );
};

export default IndexPage;
