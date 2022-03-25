import React from 'react';
import { Button, Form, InputGroup } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import { Controller, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useToasts } from 'react-toast-notifications';
import { changeStatusOrderThunk } from '../../redux/orderSlice';

export default ({ show, handleClose, order,search }) => {
    let dispatch = useDispatch();
    const { control, handleSubmit, formState: { errors } } = useForm();
    let { addToast } = useToasts();
    let changeStatus = async (form) => {
        let response = await dispatch(changeStatusOrderThunk(order._id, {status: form.status}));
        if (response) {
            addToast("Success", { appearance: 'success', autoDismiss: 1000 });
            search()
            handleClose()
        }
    }
    return (
        <>
            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Cập nhập trạng thái</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Controller
                        control={control}
                        name="status"
                        render={({
                            field: { onChange, onBlur, value }
                        }) => (
                            <InputGroup style={{ border: errors.title?.type === "required" && '1px solid red' }}>
                                <Form.Control autoFocus required type="text" onChange={e => onChange(e.target.value)}
                                    onBlur={onBlur}
                                    value={value}
                                />
                            </InputGroup>
                        )}
                        rules={{
                            required: true
                        }}
                        defaultValue={order?.status}
                    />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => {

                        handleClose()
                    }}>
                        Đóng
                    </Button>
                    <Button variant="primary" onClick={handleSubmit(changeStatus)}>
                        Lưu
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}