import { Button, Container, Form, InputGroup, Row } from '@themesberg/react-bootstrap';
import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';

export default () => {
    let location = useLocation();
    let order = location.state;

    let history = useHistory()

    return (
        <Container>
            <Row>
                <h3 className="mb-3">Chi tiết đơn hàng</h3>
                <Form>
                    <div className='order__detail' >
                        <label>Thông tin người nhận - người gửi</label>
                        <table>
                            <thead>
                                <th>Người gửi</th>
                                <th>Nơi gửi</th>
                                <th>Địa chỉ gửi</th>
                                <th>Người nhận</th>
                                <th>Nơi nhận</th>
                                <th>Địa chỉ nhận</th>
                            </thead>
                            <tbody>
                                <td>{order?.peopleSend.fullName}</td>
                                <td>{order?.peopleSend.district} - {order?.peopleSend.city}</td>
                                <td>{order?.peopleSend.address}</td>
                                <td>{order?.peopleRecieve.fullName}</td>
                                <td>{order?.peopleRecieve.district} - {order?.peopleRecieve.city}</td>
                                <td>{order?.peopleRecieve.address}</td>
                            </tbody>
                        </table>
                        <div style={{ height: 50 }} ></div>
                        <label>Thông tin hàng gửi</label>

                        <table>
                            <thead>
                                <th>Tên hàng</th>
                                <th>Số lượng</th>
                                <th>Trọng lượng (kg)</th>
                                <th>Cước phí</th>
                                <th>Thu hộ</th>
                            </thead>
                            <tbody>
                                <td>{order?.title}</td>
                                <td>{order?.amount}</td>
                                <td>{order?.weight}</td>
                                <td>{order?.service.serviceName} : {order?.service.priceService}</td>
                                <td>{order?.ecommerce}</td>
                            </tbody>
                        </table>
                    </div>
                    <div style={{ height: 50 }} ></div>
                    <label>Trạng thái</label>
                    <InputGroup >
                        <Form.Control autoFocus required type="text"
                           
                            value={order?.status}
                            disabled
                        />
                    </InputGroup>
                    <div style={{ height: 50 }} ></div>
                    <label>Ghi chú</label>
                    <InputGroup >
                        <Form.Control autoFocus required type="text"
                           
                            value={order?.note}
                            disabled
                        />
                    </InputGroup>

                    <Button variant="secondary" type="button" className="m-3"
                        onClick={() => history.goBack()}>
                        Quay lại
                    </Button>
                </Form>
            </Row>
        </Container>
    )
}