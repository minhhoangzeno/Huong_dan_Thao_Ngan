import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useToasts } from 'react-toast-notifications';
import { addOrderThunk } from '../../../redux/orderSlice';
import { Routes } from '../../../routes';
import ModalSuccess from './ModalSuccess';
export default ({ price, ecommerce, service, order, peopleSend, peopleRecieve }) => {
    function makeid(length) {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        for (var i = 0; i < length; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));

        return text;
    }
    let data = {
        code: makeid(4),
        peopleSend,
        peopleRecieve,
        weight: order?.weight,
        title: order?.title,
        amount: order?.amount,
        note: order?.note,
        priceNotIncludeService: (order?.weight && order?.amount) ? (price + 5000 * (order?.weight * order?.amount)) : (price),
        service: service === 20000 ? {
            priceService: 20000,
            serviceName: "Giao nhanh"
        } : {
            priceService: 11000,
            serviceName: "Giao tiết kiệm"
        },
        ecommerce: Number(ecommerce),
        totalPrice: (order?.weight && order?.amount) ? (price + service + 5000 * (order?.weight * order?.amount) + Number(ecommerce)) : (price + service + Number(ecommerce))
    }
    let { addToast } = useToasts();
    let [check, setCheck] = useState(false)
    let history = useHistory();
    let dispatch = useDispatch();
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);


    let addOrder = async () => {
        if (check) {
            let response = await dispatch(addOrderThunk(data));
            if (response) {
                setShow(true)
            }
        } else {
            addToast("Bạn cần đồng ý với điều khoản của chúng tôi!", { appearance: 'info', autoDismiss: 1000 });

        }
    }
    return (
        <>
            <div className='totalPrice' >
                <ModalSuccess show={show} handleClose={handleClose} code={data.code} />
                <div className='totalPrice__item' >
                    <label>Tổng cước</label>
                    <div>{(order?.weight && order?.amount) ? (price + service + 5000 * (order?.weight * order?.amount)) : (price + service)} đ</div>
                </div>
                <div className='totalPrice__item'>
                    <label>Tổng tiền thu hộ</label>
                    <div>{ecommerce} đ</div>
                </div>
                <div className='totalPrice__item'>
                    <label>Tổng tiền cần thanh toán</label>
                    <div>
                        {(order?.weight && order?.amount) ? (price + service + 5000 * (order?.weight * order?.amount) + Number(ecommerce)) : (price + service + Number(ecommerce))} đ
                    </div>
                </div>
                <div className='totalPrice__item'>
                    <div>
                        <input type="checkbox"
                            value={check}
                            onChange={() => {
                                setCheck(!check)
                            }}
                        /> Tôi đã đọc và đồng ý với Điều khoản quy định
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }} >
                        <div className='btn' style={{ background: 'green', marginRight: 10 }}
                            onClick={() => {
                                history.push(Routes.Order.path)
                            }}
                        >
                            Quay lại
                        </div>
                        <div className='btn'
                            onClick={() => {
                                addOrder()
                            }}
                        >
                            Gửi ngay
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}