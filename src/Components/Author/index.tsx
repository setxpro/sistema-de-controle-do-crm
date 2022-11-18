import React from "react";

import * as C from "./styles";

const Author: React.FC = () => {
  return (
    <C.ContainerAuthors>
      <p>
        Template created with 🤍 by{" "}
        <a
          href="mailto:patrick.anjos@bagaggio.com.br"
          target="_blank"
          rel="noreferrer"
        >
          Patrick Anjos
        </a>{" "}
        2022
      </p>
    </C.ContainerAuthors>
  );
};

export default Author;
