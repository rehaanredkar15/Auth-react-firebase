import React from "react";
import Navbar from "./Navbar";
import AddFolderButton from "./AddFolderButton";
import { Container } from "react-bootstrap";
import { useFolder } from "../hooks/useFolder";
import Folder from "./Folder";
import { useParams } from "react-router-dom";
import FolderBreadcrumbs from "./FolderBreadcrumbs";

export default function Dashboard() {
  const { folderId } = useParams();
  const { folder, childFolders } = useFolder(folderId);

  console.log();
  return (
    <div>
      <Navbar />
      <Container fluid>
        <div className="d-flex align-items-center">
          <FolderBreadcrumbs currentFolder={folder} />
          <AddFolderButton currentFolder={folder} />
        </div>
        {childFolders.length > 0 && (
          <div className="d-flex flex-wrap">
            {childFolders.map((childFolder) => (
              <div
                key={childFolder.id}
                style={{ maxWidth: "250px" }}
                className="p-2"
              >
                <Folder folder={childFolder} />
              </div>
            ))}
          </div>
        )}
      </Container>
    </div>
  );
}
