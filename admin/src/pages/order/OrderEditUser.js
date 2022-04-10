import { Col, Container, Row } from '@themesberg/react-bootstrap';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { getFeeThunk } from '../../redux/feeSlice';
import { convertPriceAddress } from '../../utils/priceAddress';
import OrderInfor from './order-edit/OrderInfor';
import PeopleRecieve from './order-edit/PeopleRecieve';
import PeopleSend from './order-edit/PeopleSend';
import SerivceSelect from './order-edit/ServiceSelect';
import TotalPrice from './order-edit/TotalPrice';
export default () => {
  const [feeNM, setFeeNM] = useState();
  const [feeBT, setFeeBT] = useState();
  const [feeBN, setFeeBN] = useState();
  const [feeTN, setFeeTN] = useState();
  const location = useLocation();
  const orderEdit = location.state;
  let user = JSON.parse(localStorage.getItem("user"));

  const [peopleSend, setPeopleSend] = useState({
    city: orderEdit?.peopleSend?.city,
    district: orderEdit?.peopleSend?.district,
    fullName: orderEdit?.peopleSend?.fullName,
    phoneNumber: orderEdit?.peopleSend?.phoneNumber,
    address: orderEdit?.peopleSend?.address
  });
  const [peopleRecieve, setPeopleRecieve] = useState({
    city: orderEdit?.peopleRecieve?.city,
    district: orderEdit?.peopleRecieve?.district,
    fullName: orderEdit?.peopleRecieve?.fullName,
    phoneNumber: orderEdit?.peopleRecieve?.phoneNumber,
    address: orderEdit?.peopleRecieve?.address
  });
  let dispatch = useDispatch();
  let searchFee = async () => {
    let dataFee = await dispatch(getFeeThunk());
    if (dataFee) {
      let dataFeeNM = dataFee.filter(item => item.title == "Nội miền")[0]?.price;
      let dataFeeBT = dataFee.filter(item => item.title == "Bắc - Trung")[0]?.price;
      let dataFeeBN = dataFee.filter(item => item.title == "Bắc - Nam")[0]?.price;
      let dataFeeTN = dataFee.filter(item => item.title == "Trung - Nam")[0]?.price;
      setFeeNM(dataFeeNM);
      setFeeBT(dataFeeBT);
      setFeeBN(dataFeeBN);
      setFeeTN(dataFeeTN);
    }
  }
  useEffect(() => {
    searchFee() // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const [price, setPrice] = useState();
  let handlePrice = () => {
    setPrice(convertPriceAddress(Number(peopleSend.city), Number(peopleRecieve.city), feeNM, feeBT, feeBN, feeTN))
  }
  useEffect(() => {
    handlePrice()
  }, [convertPriceAddress(Number(peopleSend.city), Number(peopleRecieve.city), feeNM, feeBT, feeBN, feeTN)])

  const [service, setService] = useState(orderEdit?.service?.priceService);
  const [ecommerce, setEcommerce] = useState(orderEdit?.ecommerce);
  const [order, setOrder] = useState({
    title: orderEdit?.title,
    amount: orderEdit?.amount,
    weight: orderEdit?.weight,
    note: orderEdit?.note
  });


  return (
    <>
      <Container>
        <Row>
          <h3 className="mb-3">Sửa đơn hàng</h3>

          <Col className="lg-6" >
            <Row>
              <Col className='lg-12' >
                <PeopleSend
                  setPeopleSend={setPeopleSend} peopleSend={peopleSend}
                  user={user}
                />
              </Col>
              <div style={{ height: 30 }} >

              </div>
              <Col className='lg-12' >
                <PeopleRecieve
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
        orderId={orderEdit._id}
        peopleSend={peopleSend}
        peopleRecieve={peopleRecieve}
      />
    </>
  )
}