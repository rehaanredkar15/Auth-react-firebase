import React from "react";
import Navbar from "./Navbar";
import AddFolderButton from "./AddFolderButton";
import { Container } from "react-bootstrap";
import { useFolder } from "../hooks/useFolder";
export default function Dashboard() {
  const { state } = useFolder();

  console.log("the state is ");
  console.log(state);
  return (
    <div>
      <Navbar />
      <Container flud>
        <AddFolderButton />
      </Container>
    </div>
  );
}
