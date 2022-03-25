import { faEye } from '@fortawesome/free-regular-svg-icons';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, ButtonGroup, Card, Col, Container, Dropdown, Row, Table } from '@themesberg/react-bootstrap';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useToasts } from 'react-toast-notifications';
import { deleteOrderThunk, getOrderByUserThunk, getOrderThunk } from '../../redux/orderSlice';
import { Routes } from "../../routes";

export default () => {
    let history = useHistory();
    const [order, setOrder] = useState([]);
    let { addToast } = useToasts();
    let user = JSON.parse(localStorage.getItem("user"))
    let dispatch = useDispatch();
    let search = async () => {
        let data = await dispatch(getOrderByUserThunk(user._id));
        setOrder(data)
    }
    useEffect(() => {
        search() // eslint-disable-next-line react-hooks/exhaustive-deps
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
                    <Col>
                        <Button variant="warning" onClick={() => history.push(Routes.OrderAdd.path)} >Tạo</Button>
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
                                            />
                                        )
                                    })}
                                </tbody>
                            </Table>
                            {/* <Card.Footer className="px-3 border-0 d-lg-flex align-items-center justify-content-between">
                        <Nav>
                            <Pagination className="mb-2 mb-lg-0">
                                <Pagination.Prev>
                                    Previous
                                </Pagination.Prev>
                                <Pagination.Item active>1</Pagination.Item>
                                <Pagination.Item>2</Pagination.Item>
                                <Pagination.Item>3</Pagination.Item>
                                <Pagination.Item>4</Pagination.Item>
                                <Pagination.Item>5</Pagination.Item>
                                <Pagination.Next>
                                    Next
                                </Pagination.Next>
                            </Pagination>
                        </Nav>
                        <small className="fw-bold">
                            Showing <b>{totalTransactions}</b> out of <b>25</b> entries
                        </small>
                    </Card.Footer> */}
                        </Card.Body>
                    </Card>
                </Row>
            </Container>
        </>
    )
}


function TableItem({ index, order, deleteOrder, routerDetailOrder, search }) {

    return (
        <>
            <tr>
                <td>
                    <Card.Link href="#" className="text-primary fw-bold">{index}</Card.Link>
                </td>
                <td>
                    <Card.Link href="#" className="text-primary fw-bold">{order?.code}</Card.Link>
                </td>
                <td>{order?.peopleSend?.district} - {order.peopleSend?.city}</td>
                <td>{order.peopleRecieve?.district} - {order.peopleRecieve?.city}</td>
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
                        </Dropdown.Menu>
                    </Dropdown>
                </td>

            </tr>
        </>
    );
}   