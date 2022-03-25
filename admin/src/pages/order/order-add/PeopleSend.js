import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Col, Container, Row } from '@themesberg/react-bootstrap';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
export default ({ peopleSend, setPeopleSend, user }) => {
    const [city, setCity] = useState([]);
    const [district, setDistrict] = useState([]);
    const [citySelect, setCitySelect] = useState();
    const [districtSelect, setDistrictSelect] = useState();

    let searchLocation = async () => {
        let responsive = await axios.get('https://provinces.open-api.vn/api/?depth=2');
        if (responsive.status === 200) {
            let cityDistricts = responsive.data.filter(item => item.code == user.city)[0];
            setCity(responsive.data);
            setCitySelect(user.city);
            setDistrict(cityDistricts.districts);
            setDistrictSelect(user.district)
        }
    }
    useEffect(() => {
        searchLocation() // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    let handleSelectCity = (e) => {
        setCitySelect(e.target.value);
        let cityDistricts = city.filter(item => item.code == e.target.value)?.[0];
        setDistrict(cityDistricts.districts);
        setDistrictSelect(cityDistricts.districts?.[0]?.code);
        setPeopleSend({
            ...peopleSend,
            city: e.target.value,
            district: cityDistricts.districts?.[0]?.code
        })
    }
    let handleSelectDistrict = (e) => {
        setDistrictSelect(e.target.value)
        setPeopleSend({
            ...peopleSend,
            district: e.target.value
        })
    }
    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'space-between', background: '#00000008' }} className="p-3" >
                <div><FontAwesomeIcon icon={faUser} /> Người gửi &nbsp; <FontAwesomeIcon icon={faChevronRight} /> </div>
                <div>
                    Quản lý thông tin người gửi
                </div>
            </div>
            <div className='bg-white p-4 boxShadow'>

                <Container className='p-0' >
                    <Row>
                        <Col className='col-12  mt-3' >
                            <div style={{ display: 'flex', justifyContent: 'space-between' }} >
                                <div>
                                    Họ tên:
                                </div>
                                <input style={{ width: '80%' }}
                                    onChange={e => {
                                        setPeopleSend({
                                            ...peopleSend,
                                            fullName: e.target.value
                                        })
                                    }}
                                    value={peopleSend.fullName}
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
                                        setPeopleSend({
                                            ...peopleSend,
                                            phoneNumber: e.target.value
                                        })
                                    }}
                                    value={peopleSend.phoneNumber}
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
                                <textarea style={{ width: '80%' }}
                                    onChange={e => {
                                        setPeopleSend({
                                            ...peopleSend,
                                            address: e.target.value
                                        })
                                    }}
                                />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}