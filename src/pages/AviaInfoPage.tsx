import React, {Dispatch, SetStateAction} from 'react';
import { ITicket } from '../types/ticket';
import '../styles/info.css';
import Card from '../components/Card';
interface Props{
    ticket: ITicket | null,
    setTicket: Dispatch<SetStateAction<ITicket | null>>
}
const AviaInfoPage:React.FC<Props> = ({ticket, setTicket}) => {
    console.log(ticket)
    return (
        <>
        <button onClick={() => setTicket(null)}>Назад</button>
        <div className='cards'>
            <Card ticket = {ticket} setTicket = {setTicket}/>
        </div>
        </>
    );
};

export default AviaInfoPage;