import { faUser } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container, Col, Row } from '@themesberg/react-bootstrap';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
export default ({ setCodeAddress, codeAddress, peopleRecieve, setPeopleRecieve }) => {
    const [city, setCity] = useState([]);
    const [district, setDistrict] = useState([]);
    const [citySelect, setCitySelect] = useState();
    const [districtSelect, setDistrictSelect] = useState();

    let searchLocation = async () => {
        let responsive = await axios.get('https://provinces.open-api.vn/api/?depth=2');
        if (responsive.status === 200) {
            setCity(responsive.data);
            setCitySelect(responsive.data[0].code)
            setDistrict(responsive.data[0].districts);
            setDistrictSelect(responsive.data[0]?.districts?.[0]?.code)
        }
    }
    let handleSelectCity = (e) => {
        setCitySelect(e.target.value);
        let cityDistricts = city.filter(item => item.code == e.target.value)?.[0];
        setDistrict(cityDistricts.districts);
        setDistrictSelect(cityDistricts.districts?.[0]?.code);
        setPeopleRecieve({
            ...peopleRecieve,
            city: e.target.value,
            district: cityDistricts.districts?.[0]?.code
        })
    }
    let handleSelectDistrict = (e) => {
        setDistrictSelect(e.target.value)
        setPeopleRecieve({
            ...peopleRecieve,
            district: e.target.value
        })
    }
    useEffect(() => {
        searchLocation()
    }, [])
    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'space-between', background: '#00000008' }} className="p-3" >
                <div><FontAwesomeIcon icon={faUser} /> Người nhận &nbsp; <FontAwesomeIcon icon={faChevronLeft} /> </div>
                <div>
                    Quản lý thông tin người nhận
                </div>
            </div>
            <div className='bg-white p-4 boxShadow'  >
                <Container className='p-0' >
                    <Row>
                        <Col className='col-12  mt-3' >
                            <div style={{ display: 'flex', justifyContent: 'space-between' }} >
                                <div>
                                    Họ tên:
                                </div>
                                <input style={{ width: '80%' }}
                                    onChange={e => {
                                        setPeopleRecieve({
                                            ...peopleRecieve,
                                            fullName: e.target.value
                                        })
                                    }}
                                />
                            </div>
                        </Col>
                        <Col className='col-12 mt-3 ' >
                            <div style={{ display: 'flex', justifyContent: 'space-between' }} >
                                <div>
                                    Điện thoại:
                                </div>
                                <input style={{ width: '80%' }}
                                    onChange={e => {
                                        setPeopleRecieve({
                                            ...peopleRecieve,
                                            phoneNumber: e.target.value
                                        })
                                    }}
                                />
                            </div>

                        </Col>
                        <Col className='col-12 mt-3' >
                            <div style={{ display: 'flex', justifyContent: 'space-between' }} >
                                <div>
                                    Tỉnh/Thành phố:
                                </div>
                                <select
                                    onChange={e => handleSelectCity(e)}
                                    value={citySelect}
                                >
                                    {city.map((item, index) => {
                                        return (
                                            <option key={index} value={item.code} >{item.name}</option>
                                        )
                                    })}
                                </select>
                            </div>
                        </Col>
                        <Col className='col-12 mt-3' >
                            <div style={{ display: 'flex', justifyContent: 'space-between' }} >
                                <div>
                                    Huyện:
                                </div>
                                <select
                                    onChange={e => handleSelectDistrict(e)}
                                    value={districtSelect}
                                >
                                    {district?.map((item, index) => {
                                        return (
                                            <option key={index} value={item.code} >{item.name}</option>
                                        )
                                    })}
                                </select>
                            </div>
                        </Col>
                        <Col className='col-12 mt-3' >
                            <div style={{ display: 'flex', justifyContent: 'space-between' }} >
                                <div>
                                    Địa chỉ:
                                </div>
                                <input style={{ width: '80%' }}
                                    onChange={e => {
                                        setPeopleRecieve({
                                            ...peopleRecieve,
                                            address: e.target.value
                                        })
                                    }} />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}