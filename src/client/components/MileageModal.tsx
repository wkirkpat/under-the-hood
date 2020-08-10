import * as React from "react";
import { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import { User, json } from "../utils/api";

const MileageModal: React.FC<IMileageModalProps> = (props) => {
  const [show, setShow] = useState(false);
  const [mileage, setMileage] = useState(0);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleMileage = (e: any) => {
    setMileage(e.target.value);
    console.log(e.target.value);
  };
  const handleSave = async () => {
    try {
      let newMileage = {
        mileage,
      };
      let results = json(
        `/api/vehicles/mileage/${props.carId}`,
        "PUT",
        newMileage
      );
      setShow(false);
    } catch (e) {
      throw e;
    } 
  };

  return (
    <>
      <button className="badge badge-pill badge-secondary" onClick={handleShow}>
        Update Mileage
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Enter New Mileage</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input type="number" onChange={handleMileage} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

interface IMileageModalProps {
  carId: number;
  handler: any;
}

export default MileageModal;
