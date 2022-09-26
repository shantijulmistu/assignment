import './Guest.css';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

const Guest = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div className=" d-flex justify-content-center mt-4">
            <div >
                <Button variant="primary" onClick={handleShow}>
                    Keyway Solutions Private Limited
                </Button>

                <Modal show={show} onHide={handleClose} animation={false}>
                    <Modal.Header closeButton>
                        <Modal.Title>Keyway Solutions Private Limited</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Keyway Solutions wants to bring an extensive saas application that provides communication services for schools. We aim for eliminating the communication gap among school stakeholders by providing a seamless flow of information with the use of technology.</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleClose}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </div>
    );
};

export default Guest;