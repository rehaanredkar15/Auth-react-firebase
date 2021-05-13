import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolderPlus } from "@fortawesome/free-solid-svg-icons";

export default function AddFolderButton() {
  const [open, setOpen] = useState();
  const [name, setName] = useState("");
  function openModal() {
    setOpen(true);
  }

  function closeModal() {
    setOpen(false);
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
              <Button varaiant="secondary" onClick={closeModal}>
                Add Folder
              </Button>
            </Modal.Footer>
          </Modal.Body>
        </Form>
      </Modal>
    </>
  );
}
