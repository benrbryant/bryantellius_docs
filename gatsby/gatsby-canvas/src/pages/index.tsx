import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";

const IndexPage = () => {
  return (
    <main>
      <h1>Title</h1>
      <p>Some text...</p>
      <StaticImage
        src="../images/lucius-fox.png"
        alt="A computer screen with Lucius Fox's name being typed out."
      />
    </main>
  );
};

export default IndexPage;
