import { faRedRiver } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Col, Container, Row } from '@themesberg/react-bootstrap';
import React, { useState } from 'react';
export default ({ priceService, setPriceService, ecommerce, setEcommerce, price }) => {
    const [checkEcommerce, setCheckEcommerce] = useState(false);
    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'space-between', background: '#00000008' }} className="p-3" >
                <div><FontAwesomeIcon icon={faRedRiver} /> Chọn dịch vụ</div>
            </div>
            <div className='bg-white p-4 boxShadow'>
                <Container className='p-0' >
                    <Row>
                        <Col className='col-12  mt-3' >
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <div>
                                    <input type="radio" name='service' value={20000}
                                        defaultChecked={priceService === 20000}
                                        onClick={() => setPriceService(20000)}
                                    /> Giao nhanh
                                </div>
                                <div>
                                    <input type="radio" name='service'
                                        value={11000}
                                        onClick={() => setPriceService(11000)}
                                        defaultChecked={priceService === 11000}
                                    /> Giao tiết kiệm
                                </div>
                            </div>
                            <div>Cước phí: {priceService + price} đ</div>
                        </Col>
                        <Col className='col-12 mt-3 ' >
                            <div style={{ display: 'flex', justifyContent: 'space-between' }} >
                                <div>
                                    Tiền thu hộ
                                </div>
                                <div>
                                    <input type="checkbox"
                                        value={checkEcommerce}
                                        onChange={() => {
                                            if (checkEcommerce) {
                                                setEcommerce(0)
                                                setCheckEcommerce(false)
                                            } else {
                                                setCheckEcommerce(true)
                                            }
                                        }}
                                    /> Thu hộ bằng tiền hàng
                                </div>
                            </div>
                        </Col>
                        {checkEcommerce && <Col className='col-12 mt-3 ' >
                            <div>
                                <input value={ecommerce} onChange={e => setEcommerce(e.target.value)} />
                            </div>
                        </Col>}
                    </Row>
                </Container>
            </div>
        </>
    )
}