import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolderPlus } from "@fortawesome/free-solid-svg-icons";
import { database } from "../../firebase";
import { useAuth } from "../../Contexts/AuthContext";
import { ROOT_FOLDER } from "../hooks/useFolder";

export default function AddFolderButton({ currentFolder }) {

  const [open, setOpen] = useState();
  const [name, setName] = useState("");
  const { currentUser } = useAuth();
  function openModal() {
    setOpen(true);
  }

  function closeModal() {
    setOpen(false);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (currentFolder == null) {
      return;
    }

    const path = [...currentFolder.path];
    if (currentFolder !== ROOT_FOLDER) {
      path.push({ name: currentFolder.name, id: currentFolder.id });
    }

    //creating a folder in the databaseURL
    database.folders.add({
      name: name,
      parentid: currentFolder.id,
      userId: currentUser.uid,
      path: path,
      createdAt: database.getCurrentTimeStamp(),
    });
    setName("");
    closeModal();
  }
  return (
    <>
      <Button onClick={openModal} variant="outline-success" size="sn">
        <FontAwesomeIcon icon={faFolderPlus} />
      </Button>
      <Modal show={open} onHide={closeModal}>
        <Form onSubmit={handleSubmit}>
          <Modal.Body>
            <Form.Group>
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                requrired
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
            <Modal.Footer>
              <Button varaiant="secondary" type="submit">
                Add Folder
              </Button>
            </Modal.Footer>
          </Modal.Body>
        </Form>
      </Modal>
    </>
  );
}
