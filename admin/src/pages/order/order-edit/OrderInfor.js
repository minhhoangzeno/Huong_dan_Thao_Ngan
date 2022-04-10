import { faBox } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Col, Container, Row } from '@themesberg/react-bootstrap';
import React from 'react';
export default ({ order, setOrder }) => {

    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'space-between', background: '#00000008' }} className="p-3" >
                <div><FontAwesomeIcon icon={faBox} /> Thông tin hàng hóa</div>
                <div>
                    Quản lý danh sách hàng hóa
                </div>
            </div>
            <div className='bg-white p-4 boxShadow'>
                <Container className='p-0' >
                    <Row>
                        <Col className='col-12  mt-3' >
                            <div style={{ display: 'flex', justifyContent: 'space-between' }} >
                                <div>
                                    Tên hàng:
                                </div>
                                <textarea style={{ width: '80%' }}
                                    onChange={(e) => {
                                        setOrder({
                                            ...order,
                                            title: e.target.value
                                        })
                                    }}
                                    value={order?.title}
                                />
                            </div>
                        </Col>
                        <Col className='col-12 mt-3 ' >
                            <div style={{ display: 'flex', justifyContent: 'space-between' }} >
                                <div>
                                    Số lượng:
                                </div>
                                <input style={{ width: '80%' }}
                                    onChange={(e) => {
                                        setOrder({
                                            ...order,
                                            amount: e.target.value
                                        })
                                    }}
                                    value={order?.amount}
                                />
                            </div>

                        </Col>
                        <Col className='col-12 mt-3 ' >
                            <div style={{ display: 'flex', justifyContent: 'space-between' }} >
                                <div>
                                    Trọng lượng:
                                </div>
                                <input style={{ width: '80%' }}
                                    onChange={(e) => {
                                        setOrder({
                                            ...order,
                                            weight: e.target.value
                                        })
                                    }}
                                    value={order?.weight}
                                />
                            </div>
                        </Col>
                        <div style={{ height: 10 }} ></div>
                        <Col className='col-12  mt-3' >
                            <div style={{ display: 'flex', justifyContent: 'space-between' }} >
                                <div>
                                    Ghi chú:
                                </div>
                                <textarea style={{ width: '80%' }}
                                    onChange={(e) => {
                                        setOrder({
                                            ...order,
                                            note: e.target.value
                                        })
                                    }}
                                    value={order?.note}
                                />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}