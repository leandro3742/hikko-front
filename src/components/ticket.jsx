import React from 'react'
import { RED, VIOLET } from '../colors';
import arrow from '../images/arrow.png';
import '../styles/ticket.css';

function Ticket(props) {
    const { data } = props;
    return (
        <div className='ticket lineBottom py-3'>
            <div className='header d-flex justify-content-between mx-2'>
                <div>
                    <span>De: {data.from}</span>
                </div>
                <div>
                    <span>Enviado: {data.date}</span>
                </div>
            </div>
            <div className='mt-1 d-flex justify-content-between align-items-center mx-2'>
                <div className=''>
                    <div className='d-flex'>
                        <div style={{ backgroundColor: data.status === 'NEW' ? RED : VIOLET }} className='status d-flex align-items-center rounded-3 px-3'>
                            <span className=''><b>{data.status}</b></span>
                        </div>
                        <div className='mx-2'>
                            <span><b>{data.subject}</b></span>
                        </div>
                    </div>
                    <div className='mx-1 mt-1 text-secondary'>
                        <span>{data.body}</span>
                    </div>
                </div>
                <div>
                    <img src={arrow} style={{ transform: 'rotate(-90deg)', width: '20px', cursor: 'pointer' }} alt='' />
                </div>
            </div>

        </div>
    )
}

export default Ticket