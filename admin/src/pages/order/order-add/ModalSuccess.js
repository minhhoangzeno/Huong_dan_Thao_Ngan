import Modal from 'react-bootstrap/Modal';
import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { Routes } from '../../../routes';

export default ({ show, handleClose, code }) => {
    let history = useHistory();
    return (
        <>
            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Thành công</Modal.Title>
                </Modal.Header>
                <Modal.Body>Bạn đã tạo đơn hàng : <strong>{code}</strong> thành công!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => {
                        handleClose();
                        history.push(Routes.OrderUser.path);

                    }}>
                        Đóng
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}