import { Button, Container, Form, InputGroup, Row } from '@themesberg/react-bootstrap';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

export default () => {
    let location = useLocation();
    let order = location.state;
    const [locationData, setLocationData] = useState();
    let history = useHistory();
    let searchLocation = async () => {
        let responsive = await axios.get('https://provinces.open-api.vn/api/?depth=2');
        if (responsive.status === 200) {
            setLocationData(responsive.data)
        }
    }
    useEffect(() => {
        searchLocation()
    }, [])
    let city = locationData?.filter(item => item.code == order?.peopleSend?.city)[0]
    let districtSend = city?.districts?.filter(item => item.code == order?.peopleSend?.district)[0]?.name;
    let cityRecieve = locationData?.filter(item => item.code == order?.peopleRecieve?.city)[0]
    let districRecieve = cityRecieve?.districts?.filter(item => item.code == order?.peopleRecieve?.district)[0]?.name;
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
                                <th>SĐT người gửi</th>
                                <th>Người nhận</th>
                                <th>Nơi nhận</th>
                                <th>Địa chỉ nhận</th>
                                <th>SĐT người nhận</th>
                            </thead>
                            <tbody>
                                <td>{order?.peopleSend.fullName}</td>
                                <td>{districtSend} - {city?.name}</td>
                                <td>{order?.peopleSend.address}</td>
                                <td>{order?.peopleSend?.phoneNumber}</td>
                                <td>{order?.peopleRecieve.fullName}</td>
                                <td> {districRecieve} - {cityRecieve?.name}</td>
                                <td>{order?.peopleRecieve?.address}</td>
                                <td>{order?.peopleRecieve?.phoneNumber}</td>
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