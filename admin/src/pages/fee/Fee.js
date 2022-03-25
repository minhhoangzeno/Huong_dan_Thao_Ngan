import { faEdit, faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, ButtonGroup, Card, Container, Dropdown, Row, Table } from '@themesberg/react-bootstrap';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFeeThunk } from '../../redux/feeSlice';
import EditFee from './EditFee';

export default () => {
    let fee = useSelector(state => state.fee.data);
    let dispatch = useDispatch();
    let search = () => {
        dispatch(getFeeThunk())
    }
    useEffect(() => {
        search() // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <Container>
                <Row>
                    <Card border="light" className="table-wrapper table-responsive shadow-sm">
                        <Card.Body className="pt-0">
                            <Table hover className="user-table align-items-center">
                                <thead>
                                    <tr>
                                        <th className="border-bottom">#</th>
                                        <th className="border-bottom">Tiêu đề</th>
                                        <th className="border-bottom">Giá (VNĐ)</th>
                                        <th className="border-bottom">Cài đặt</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {fee && fee.map((feeItem, index) => {
                                        return (
                                            <TableItem index={index + 1} fee={feeItem} key={index}
                                                search={search}
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


function TableItem({ index, fee, search }) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);

    return (
        <>
            <EditFee show={show} handleClose={handleClose} fee={fee} search={search} />
            <tr>
                <td>
                    <Card.Link href="#" className="text-primary fw-bold">{index}</Card.Link>
                </td>
                <td>
                    <Card.Link href="#" className="text-primary fw-bold">{fee?.title}</Card.Link>
                </td>
                <td>{fee.price}</td>
                <td>
                    <Dropdown as={ButtonGroup}>
                        <Dropdown.Toggle as={Button} split variant="link" className="text-dark m-0 p-0">
                            <span className="icon icon-sm">
                                <FontAwesomeIcon icon={faEllipsisH} className="icon-dark" />
                            </span>
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item onClick={() => setShow(true)} >
                                <FontAwesomeIcon icon={faEdit} className="me-2" /> Sửa
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </td>

            </tr>
        </>
    );
}   
