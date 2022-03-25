import { Col, Container, Row } from '@themesberg/react-bootstrap';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getFeeThunk } from '../../redux/feeSlice';
import { convertPriceAddress } from '../../utils/priceAddress';
import OrderInfor from './order-add/OrderInfor';
import PeopleRecieve from './order-add/PeopleRecieve';
import PeopleSend from './order-add/PeopleSend';
import SerivceSelect from './order-add/SerivceSelect';
import TotalPrice from './order-add/TotalPrice';
export default () => {
    const [fee, setFee] = useState(fee);
    let dispatch = useDispatch();
    let searchFee = async () => {
        let dataFee = await dispatch(getFeeThunk());
        console.log(dataFee)
        // if (dataFee) {
        //     setFee(dataFee)
        // }
    }
    useEffect(() => {
        searchFee() // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    const [codeAddress, setCodeAddress] = useState({
        idSend: 1,
        idRecieve: 1
    });
    const [price, setPrice] = useState(convertPriceAddress(codeAddress.idSend, codeAddress.idRecieve));
    // let handlePrice = () => {
    //     let priceNM = fee?.filter(item => item.title == "Nội miền")?.[0]?.price;
    //     let priceBN = fee?.filter(item => item.title == "Bắc - Nam")?.[0]?.price;
    //     let priceBT = fee?.filter(item => item.title == "Bắc - Trung")?.[0]?.price;
    //     let priceTN = fee?.filter(item => item.title == "Trung - Nam")?.[0]?.price;
    //     console.log(priceNM, priceBN, priceBT, priceTN)
    // }
  
    const [service, setService] = useState(20000);
    const [ecommerce, setEcommerce] = useState(0);
    const [order, setOrder] = useState();
    let user = JSON.parse(localStorage.getItem("user"));
    const [peopleSend, setPeopleSend] = useState({
        city: user.city,
        district: user.district,
        fullName: user.fullName,
        phoneNumber: user.phoneNumber
    });
    const [peopleRecieve, setPeopleRecieve] = useState({
        city: 1,
        district: 1
    });

    return (
        <>
            <Container>
                <Row>
                    <h3 className="mb-3">Tạo đơn hàng</h3>
                    <Col className="lg-6" >
                        <Row>
                            <Col className='lg-12' >
                                <PeopleSend setCodeAddress={setCodeAddress} codeAddress={codeAddress}
                                    setPeopleSend={setPeopleSend} peopleSend={peopleSend}
                                    user={user}
                                />
                            </Col>
                            <div style={{ height: 30 }} >

                            </div>
                            <Col className='lg-12' >
                                <PeopleRecieve setCodeAddress={setCodeAddress} codeAddress={codeAddress}
                                    peopleRecieve={peopleRecieve} setPeopleRecieve={setPeopleRecieve}
                                />
                            </Col>
                        </Row>
                    </Col>
                    <Col className="lg-6" >
                        <Row>
                            <Col className='lg-12' >
                                <OrderInfor
                                    setOrder={setOrder} order={order}
                                />
                            </Col>
                            <div style={{ height: 30 }} >
                            </div>
                            <Col className='lg-12' >
                                <SerivceSelect priceService={service} setPriceService={setService}
                                    ecommerce={ecommerce} setEcommerce={setEcommerce}
                                    setOrder={setOrder} order={order}
                                    price={price}
                                />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
            <div style={{ height: 50 }} >
            </div>
            <TotalPrice price={price} ecommerce={ecommerce} service={service}
                order={order}
                peopleSend={peopleSend}
                peopleRecieve={peopleRecieve}
            />
        </>
    )
}