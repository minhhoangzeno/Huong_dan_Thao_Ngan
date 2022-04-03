import { faEye, faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faEdit, faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Col } from '@themesberg/react-bootstrap';
import { Button, ButtonGroup, Card, Container, Dropdown, Row, Table } from '@themesberg/react-bootstrap';
import axios from 'axios';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useToasts } from 'react-toast-notifications';
import { deleteOrderThunk, getOrderThunk } from '../../redux/orderSlice';
import { Routes } from "../../routes";
import OrderEdit from './OrderEdit';

export default () => {
    let history = useHistory();
    let order = useSelector(state => state.order.data);
    let { addToast } = useToasts();
    const [textSearch, setTextSearch] = useState("");
    let dispatch = useDispatch();
    const [locationData, setLocationData] = useState();
    let searchLocation = async () => {
        let responsive = await axios.get('https://provinces.open-api.vn/api/?depth=2');
        if (responsive.status === 200) {
            setLocationData(responsive.data)
        }
    }

    let search = () => {
        dispatch(getOrderThunk({
            textSearch: textSearch
        }))
    }
    useEffect(() => {
        search(textSearch) // eslint-disable-next-line react-hooks/exhaustive-deps
        searchLocation()
    }, []);

    let deleteOrder = async (orderId) => {
        await dispatch(deleteOrderThunk(orderId));
        dispatch(getOrderThunk());
        addToast("Delete Success", { appearance: 'success', autoDismiss: 1000 })
    }



    let routerDetailOrder = (data) => {
        history.push({
            pathname: Routes.OrderDetail.path,
            state: data
        })
    }

    return (
        <>
            <Container>
                <Row className="mb-4" >
                    <Col className='col-9' >
                        <input placeholder='Tìm kiếm ...'
                            style={{
                                width: '100%',
                                padding: 10

                            }}
                            value={textSearch}
                            onChange={e => setTextSearch(e.target.value)}
                        />
                    </Col>
                    <Col className='col-3' >
                        <Button variant="success" onClick={() => search(textSearch)} >
                            <FontAwesomeIcon icon={faSearch} />
                        </Button>
                    </Col>
                </Row>
                <Row>
                    <Card border="light" className="table-wrapper table-responsive shadow-sm">
                        <Card.Body className="pt-0">
                            <Table hover className="user-table align-items-center">
                                <thead>
                                    <tr>
                                        <th className="border-bottom">#</th>
                                        <th className="border-bottom">Mã đơn hàng</th>
                                        <th className="border-bottom">Địa chỉ gửi</th>
                                        <th className="border-bottom">Nơi nhận</th>
                                        <th className="border-bottom">Giá (VNĐ)</th>
                                        <th className="border-bottom">Trạng thái</th>
                                        <th className="border-bottom">Ngày</th>
                                        <th className="border-bottom">Cài đặt</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {order && order.map((orderItem, index) => {
                                        return (
                                            <TableItem index={index + 1} order={orderItem} key={index}
                                                deleteOrder={deleteOrder}
                                                routerDetailOrder={routerDetailOrder}
                                                search={search}
                                                locationData={locationData}
                                            />
                                        )
                                    })}
                                </tbody>
                            </Table>
                        </Card.Body>
                    </Card>
                </Row>
            </Container>
        </>
    )
}


function TableItem({ index, order, deleteOrder, routerDetailOrder, search, locationData }) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    let city = locationData?.filter(item => item.code == order?.peopleSend?.city)[0]
    let districtSend = city?.districts?.filter(item => item.code == order?.peopleSend?.district)[0]?.name;
    let cityRecieve = locationData?.filter(item => item.code == order?.peopleRecieve?.city)[0]
    let districRecieve = cityRecieve?.districts?.filter(item => item.code == order?.peopleRecieve?.district)[0]?.name;
    return (
        <>
            <OrderEdit show={show} handleClose={handleClose} order={order} search={search} />
            <tr>
                <td>
                    <Card.Link href="#" className="text-primary fw-bold">{index}</Card.Link>
                </td>
                <td>
                    <Card.Link href="#" className="text-primary fw-bold">{order?.code}</Card.Link>
                </td>
                <td>
                    {districtSend} - {city?.name}
                </td>
                <td>
                    {districRecieve} - {cityRecieve?.name}
                </td>
                <td>{order.totalPrice}</td>
                <td>{order.status}</td>
                <td>{moment(order?.createdAt).format("HH:mm DD-MM-YYYY")}</td>
                <td>
                    <Dropdown as={ButtonGroup}>
                        <Dropdown.Toggle as={Button} split variant="link" className="text-dark m-0 p-0">
                            <span className="icon icon-sm">
                                <FontAwesomeIcon icon={faEllipsisH} className="icon-dark" />
                            </span>
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item onClick={() => routerDetailOrder(order)} >
                                <FontAwesomeIcon icon={faEye} className="me-2" /> Xem
                            </Dropdown.Item>
                            <Dropdown.Item onClick={() => setShow(true)} >
                                <FontAwesomeIcon icon={faEdit} className="me-2" /> Sửa
                            </Dropdown.Item>
                            <Dropdown.Item className="text-danger" onClick={() => deleteOrder(order._id)}  >
                                <FontAwesomeIcon icon={faTrashAlt} className="me-2" /> Xóa
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </td>

            </tr>
        </>
    );
}   
