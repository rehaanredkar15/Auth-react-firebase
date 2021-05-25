import React from "react";
import Navbar from "./Navbar";
import AddFolderButton from "./AddFolderButton";
import AddFileButton from "./AddFileButton";
import { Container, Jumbotron } from "react-bootstrap";
import { useFolder } from "../hooks/useFolder";
import Folder from "./Folder";
import File from "./File";
import { useParams, useLocation } from "react-router-dom";
import FolderBreadcrumbs from "./FolderBreadcrumbs";
import "../../App.css";
export default function Dashboard() {
  const { folderId } = useParams();
  const { state = {} } = useLocation();
  const { folder, childFolders, childFiles } = useFolder(
    folderId,
    state.folder
  );

  console.log(childFolders.length);
  console.log(childFiles);
  return (
    <>
      <Navbar />
      <Container fluid>
        <div className="d-flex align-items-center ">
          <FolderBreadcrumbs currentFolder={folder} />
          <AddFileButton currentFolder={folder} />
          <AddFolderButton currentFolder={folder} />
        </div>
        {/* <div id="intro" class="view"> */}
        <Jumbotron>
          <h5>Your Folders </h5>
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

          {childFolders.length > 0 && childFiles.length > 0 && <hr />}

          <h5>Your Files </h5>
          {childFiles.length > 0 && (
            <div className="d-flex flex-wrap">
              {childFiles.map((childFile) => (
                <div
                  key={childFile.id}
                  style={{ maxWidth: "250px" }}
                  className="p-2"
                >
                  <File file={childFile} />
                </div>
              ))}
            </div>
          )}
          <div className="text-center">
            <h4 className="text-light text-bold">Hello, secret Keeper!</h4>
            <p className="text-light">
              This is your select box , All of your private documents are Safe
              here
            </p>
          </div>
        </Jumbotron>

        {/* </div> */}
      </Container>
    </>
  );
}
