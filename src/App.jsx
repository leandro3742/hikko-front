import { useState, useEffect } from 'react'
import './styles/app.css';
import 'bootstrap/dist/css/bootstrap.css';
import arrow from './images/arrow.png';
import Ticket from './components/ticket';
import tiendamia from './images/tiendamia.png';
import { BACKGROUND } from './colors';

function App() {
    const [tickets, setTickets] = useState([]);

    const getTickets = async () => {
        let response = await fetch('http://localhost:3001/getTickets', { method: 'GET' });
        return await response.json();
    }
    useEffect(() => {
        getTickets().then(response => setTickets(response))
    }, []);
    const a = [
        {
            "ticketId": "xk3d03",
            "subject": "Hola, mi item esta roto",
            "date": "2020-03-01 01:30:00Z",
            "from": "Joaquin Perez",
            "status": "SOLVED",
            "body": "Mi producto llego roto, no funciona como debería"
        },
        {
            "ticketId": "xx35",
            "subject": "Hola, mi item no llego",
            "date": "2020-03-02 05:30:00Z",
            "from": "Romina Esperanto",
            "status": "NEW",
            "body": "Mi producto no llegó, cuando debería llegar?"
        }
    ]

    return (
        <div className='row m-0'>
            <div id='box' style={{ height: "100vh", backgroundColor: BACKGROUND }} className='col-lg-4 col-md-6  col-12 shadow-sm'>
                <div className='d-flex m-1' style={{ cursor: 'pointer' }}>
                    <img src={arrow} style={{ transform: 'rotate(90deg)', width: '20px' }} alt='' />
                    <span className='mx-1'>Volver</span>
                </div>
                <div style={{ backgroundColor: "white" }} className='m-2 rounded-3 shadow py-4 px-1'>
                    <div className='lineBottom' >
                        <span className='m-3' style={{ fontSize: "21px" }}><b>Tickets</b></span>
                    </div>
                    {tickets.length > 0 ?
                        <div>{tickets.map((elem, index) => {
                            return (
                                <Ticket key={index} data={elem} />
                            )
                        })}
                        </div>
                        :
                        <div className='text-center'>
                            <span className='text-secondary'>No hay tickets dipsonibles</span>
                        </div>
                    }
                </div>
                <div className='footer'>
                    <img src={tiendamia} style={{ width: '150px' }} alt='' />
                </div>
            </div>
        </div>
    )
}

export default App
