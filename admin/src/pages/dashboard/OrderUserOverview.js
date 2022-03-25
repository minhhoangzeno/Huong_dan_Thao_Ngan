import { faGlobeEurope, faMoneyBill, faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Card, Col, Row } from '@themesberg/react-bootstrap';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getDashboardByOrderThunk } from '../../redux/dashboardSlice';

export default () => {
    const [data, setData] = useState([]);
    const [totalPrice,setTotalPrices] = useState(0)
    let dispatch = useDispatch();
    let user = JSON.parse(localStorage.getItem("user"));
    let search = async () => {
        let res = await dispatch(getDashboardByOrderThunk(user._id));
        if (res) {
            setData(res);
            let total = 0;
            res.forEach(item => {
                total += item.totalPrice;
            })
            setTotalPrices(total);
        }
    }
    

    useEffect(() => {
        search() // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    let date = new Date();

    return (
        <Col xs={12} sm={6} xl={4} className="mb-4">
            <CounterWidget
                category="Order User"
                title={data?.length}
                period={moment(date).format("DD-MM-YYYY")}
                percentage={totalPrice}
                icon={faPlay}
                iconColor="shape-secondary"
            />
        </Col>

    )
}
const CounterWidget = (props) => {
    const { icon, iconColor, category, title, period, percentage } = props;

    return (
        <Card border="light" className="shadow-sm">
            <Card.Body>
                <Row className="d-block d-xl-flex align-items-center">
                    <Col xl={5} className="text-xl-center d-flex align-items-center justify-content-xl-center mb-3 mb-xl-0">
                        <div className={`icon icon-shape icon-md icon-${iconColor} rounded me-4 me-sm-0`}>
                            <FontAwesomeIcon icon={icon} />
                        </div>
                        <div className="d-sm-none">
                            <h5>{category}</h5>
                            <h3 className="mb-1">{title} đơn hàng</h3>
                        </div>
                    </Col>
                    <Col xs={12} xl={7} className="px-xl-0">
                        <div className="d-none d-sm-block">
                            <h5>{category}</h5>
                            <h3 className="mb-1">{title}</h3>
                        </div>
                        <small><FontAwesomeIcon icon={faGlobeEurope} size="xs" /> {period}</small>
                        <div className="small mt-2">
                            <FontAwesomeIcon icon={faMoneyBill} className={`red me-1`} />
                            <span className={`red fw-bold`}>
                                {percentage}
                            </span>
                        </div>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
};