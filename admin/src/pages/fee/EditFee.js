import React from 'react';
import { Button, Form, InputGroup } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import { Controller, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useToasts } from 'react-toast-notifications';
import { editFeeThunk } from '../../redux/feeSlice';

export default ({ show, handleClose, fee, search }) => {
    let dispatch = useDispatch();
    const { control, handleSubmit, formState: { errors } } = useForm();
    let { addToast } = useToasts();
    let changeFee = async (form) => {
        let response = await dispatch(editFeeThunk(fee._id, { price: form.price }));
        if (response) {
            if (response.title === "Bắc - Trung") {
                localStorage.setItem("priceBT", response?.price);
            } else if (response.title === "Bắc - Nam") {
                localStorage.setItem("priceBN", response?.price);
            }
            else if (response.title === "Trung - Nam") {
                localStorage.setItem("priceNT", response?.price);
            }
            else if (response.title === "Nội miền") {
                localStorage.setItem("priceNM", response?.price);
            }
            addToast("Success", { appearance: 'success', autoDismiss: 1000 });
            search()
            handleClose()
        }
    }
    return (
        <>
            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Thay đổi phí</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Controller
                        control={control}
                        name="price"
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
                        defaultValue={fee?.price}
                    />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => {
                        handleClose()
                    }}>
                        Đóng
                    </Button>
                    <Button variant="primary" onClick={handleSubmit(changeFee)}>
                        Lưu
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}