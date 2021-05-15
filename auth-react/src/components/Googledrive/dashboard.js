import React from "react";
import Navbar from "./Navbar";
import AddFolderButton from "./AddFolderButton";
import { Container } from "react-bootstrap";
import { useFolder } from "../hooks/useFolder";
export default function Dashboard() {
  const { folder } = useFolder();

  console.log(folder);
  return (
    <div>
      <Navbar />
      <Container flud>
        <AddFolderButton currentFolder={folder} />
      </Container>
    </div>
  );
}
