import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import PetGulp from "./PetGulp/PetGulp";

const App = () => {
  return (
    <ChakraProvider>
      <PetGulp />
    </ChakraProvider>
  );
};

export default App;
