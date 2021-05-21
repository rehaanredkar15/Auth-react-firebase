import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fafolder } from "@fortawesome/free-solid-svg-icons";

export default function Folder({ folder }) {
  return (
    <Button variant="outline-dark" className="text-truncate w-100" as={Link}>
      <FontAwesomeIcon icon={fafolder} className="mr-2" />
      {folder.name}
    </Button>
  );
}
