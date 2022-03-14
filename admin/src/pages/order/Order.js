import { faEye, faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import { faEdit, faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, ButtonGroup, Card, Container, Dropdown, Row, Table } from '@themesberg/react-bootstrap';
import moment from 'moment';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useToasts } from 'react-toast-notifications';
import { deleteOrderThunk, getOrderThunk } from '../../redux/orderSlice';
import { Routes } from "../../routes";

export default () => {
    let history = useHistory();
    let order = useSelector(state => state.order.data);
    let { addToast } = useToasts()
    let dispatch = useDispatch();
    useEffect(() => {
        dispatch(getOrderThunk()) // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    let deleteOrder = async (orderId) => {
        await dispatch(deleteOrderThunk(orderId));
        dispatch(getOrderThunk());
        addToast("Delete Success", { appearance: 'success', autoDismiss: 1000 })
    }

    let routerEditOrder = (data) => {
        history.push({
            pathname: Routes.OrderEdit.path,
            state: data
        })
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
                    {/* <Col>
                        <Button variant="warning" onClick={() => history.push(Routes.ProductAdd.path)} >Add</Button>
                    </Col> */}
                </Row>
                <Row>
                    <Card border="light" className="table-wrapper table-responsive shadow-sm">
                        <Card.Body className="pt-0">
                            <Table hover className="user-table align-items-center">
                                <thead>
                                    <tr>
                                        <th className="border-bottom">#</th>
                                        <th className="border-bottom">Full Name</th>
                                        <th className="border-bottom">Address</th>
                                        <th className="border-bottom">Phone Number</th>
                                        <th className="border-bottom">Price (VNĐ)</th>
                                        <th className="border-bottom">Status</th>
                                        <th className="border-bottom">Date</th>
                                        <th className="border-bottom">Settings</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {order && order.map((orderItem, index) => {
                                        return (
                                            <TableItem index={index + 1} order={orderItem} key={index}
                                             routerEditOrder={routerEditOrder} deleteOrder={deleteOrder}
                                             routerDetailOrder={routerDetailOrder}
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


function TableItem({ index, order, routerEditOrder, deleteOrder,routerDetailOrder }) {
    return (
        <>
            <tr>
                <td>
                    <Card.Link href="#" className="text-primary fw-bold">{index}</Card.Link>
                </td>
                <td>{order.fullName}</td>
                <td>{order.address}</td>
                <td>{order.phoneNumber}</td>
                <td>{order.price}</td>
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
                                <FontAwesomeIcon icon={faEye} className="me-2" /> View Details
                            </Dropdown.Item>
                            <Dropdown.Item onClick={() => routerEditOrder(order)} >
                                <FontAwesomeIcon icon={faEdit} className="me-2" /> Edit
                            </Dropdown.Item>
                            <Dropdown.Item className="text-danger" onClick={() => deleteOrder(order._id)}  >
                                <FontAwesomeIcon icon={faTrashAlt} className="me-2" /> Remove
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </td>

            </tr>
        </>
    );
}   
