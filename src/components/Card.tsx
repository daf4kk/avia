import React, {Dispatch, SetStateAction} from 'react';
import { ITicket } from '../types/ticket';
import '../styles/info.css';
import logo from '../imgs/logo.svg';
import line from '../imgs/line.svg';
import baggage from '../imgs/baggage.svg'
interface Props{
    ticket: ITicket | null
    setTicket: Dispatch<SetStateAction<ITicket | null>>
}
const Card:React.FC<Props> = ({ticket, setTicket}) => {
    const timesArray = ['09:20-11:05', '10:20-12:05', '11:20-13:05'];
    function changeTicketTime(timeid:number){
        const buttons = document.querySelectorAll('.times p')
        buttons.forEach((btn) => {
            btn.classList.remove('active-time')
        })
        buttons[timeid].classList.add('active-time')

        const interval = timesArray[timeid]
        const departureTime = interval.substr(0,5)
        const arriveTime = interval.substr(6,5);
        if (ticket){
            setTicket({...ticket, arrTime: arriveTime, depTime: departureTime})
        }
    }
    return (
        <>
            {ticket?.arrDate ? 
            <div className='double-ticket'>
                <div className='db-ticket double'>
                <div className='avia-company'>
                    <div className='type'>Невозвратный</div>
                    <div className='company-info'>
                        <img src = {logo} alt = 'logo'></img>
                        <h1 className='company-name'>S7 Airlines</h1>
                    </div>
                </div>
                <div className='ticket-info'>
                    <div className='info'>
                        <h1 className='time'>{ticket?.depTime}</h1>
                        <div className='town-date'>
                            <h3>{ticket?.departure}</h3>
                            <h2>{ticket?.depDate}</h2>
                        </div>
                    </div>
                    <img className='line' src = {line} alt = 'line'></img>
                    <div className='info'>
                        <h1 className='time'>{ticket?.arrTime}</h1>
                        <div className='town-date'>
                            <h3>{ticket?.arrival}</h3>
                            <h2>{ticket?.depDate}</h2>
                        </div>
                    </div>
                </div>
                <img src = {baggage} alt = 'baggage' className='baggage'></img>
            </div> 

            <div className='db-ticket double second-ticket'>
                <div className='avia-company'>
                    <div className='type'>Невозвратный</div>
                    <div className='company-info'>
                        <img src = {logo} alt = 'logo'></img>
                        <h1 className='company-name'>S7 Airlines</h1>
                    </div>
                </div>
                <div className='ticket-info second'>
                    <div className='info'>
                        <h1 className='time'>{ticket?.arrTime}</h1>
                        <div className='town-date'>
                            <h3>{ticket?.arrival}</h3>
                            <h2>{ticket?.arrDate}</h2>
                        </div>
                    </div>
                    <img className='line' src = {line} alt = 'line'></img>
                    <div className='info'>
                        <h1 className='time'>{ticket?.depTime}</h1>
                        <div className='town-date'>
                            <h3>{ticket?.departure}</h3>
                            <h2>{ticket?.arrDate}</h2>
                        </div>
                    </div>
                </div>
                <img src = {baggage} alt = 'baggage' className='baggage'></img>
                
            </div> 
            <div className='double-ticket-price'>9 300 ₽</div>
            </div> 
            : 
            <div className='ticket solo'>
                <div className='avia-company'>
                    <div className='type'>Невозвратный</div>
                    <div className='company-info'>
                        <img src = {logo} alt = 'logo'></img>
                        <h1 className='company-name'>S7 Airlines</h1>
                    </div>
                </div>

                <div className='ticket-info'>
                    <div className='info'>
                        <h1 className='time'>{ticket?.depTime}</h1>
                        <div className='town-date'>
                            <h3>{ticket?.departure}</h3>
                            <h2>{ticket?.depDate}</h2>
                        </div>
                    </div>

                    <img className='line' src = {line} alt = 'line'></img>

                    <div className='info'>
                        <h1 className='time'>{ticket?.arrTime}</h1>
                        <div className='town-date'>
                            <h3>{ticket?.arrival}</h3>
                            <h2>{ticket?.depDate}</h2>
                        </div>
                    </div>
                </div>
                <img src = {baggage} alt = 'baggage' className='baggage'></img>
                <div className='ticket-price'>4 150 ₽</div>
                <div className='times'>
                    <p className='active-time' id = '1' onClick={() => changeTicketTime(0)}>09:20 - <span className='arr-time'>11:05</span></p>
                    <p id = '2' onClick={() => changeTicketTime(1)}>10:20 - <span className='arr-time'>12:05</span></p>
                    <p id = '3' onClick={() => changeTicketTime(2)}>11:20 - <span className='arr-time'>13:05</span></p>
                </div>
            </div> 
            }
        </>
    );
};

export default Card;