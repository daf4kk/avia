import React, {useState, useEffect, Dispatch, SetStateAction} from 'react';
import '../styles/avia.css';
import { ITicket } from '../types/ticket';


interface Props{
    setTicket: Dispatch<SetStateAction<ITicket | null>>
}

const AviaPage:React.FC<Props> = ({setTicket}) => {

    const [isFormValid, setIsFormValid] = useState(false);

    const [validObject, setValidObject] = useState({
        departure: null,
        arrival: null,
        depDate: null,
        arrDate: null,
        arrTime: '09:20',   //Стадартные значения для одного билеты
        depTime: '11:05'
    })
    const checkDateForValidate = (date:string) => {
        if (date.length === 8){
            const toArr = date.split('.');  //Избавляемся от точек
            let validString = '';   //Тут у нас будет лежать строка, в которую будут приходить валидные части даты
            toArr.forEach((item) => { 
                if (item.length === 2){
                    validString+=item
                }
            })
            if (validString.length === 6 && Number(validString)){   //Если у нас длина строки !== 6 и её нельзя конвертировать в number,                                            
                return true                                         //значит пользователь где то ввёл некорректные данные
            }else{
                return false
            }
        }else{
            return false
        }
    }

    const changeHandler = (e:React.ChangeEvent<HTMLInputElement>) => {
        setValidObject({
            ...validObject,
            [e.currentTarget.name]: e.currentTarget.value
        })
    }

    useEffect(()=>{
        const {departure, arrival, depDate, arrDate} = validObject;
        if (departure && arrival && depDate && checkDateForValidate(depDate)){  //Если с * полями всё хорошо
            setIsFormValid(true)
            if(arrDate && checkDateForValidate(arrDate)){
                setIsFormValid(true)
            }else if (arrDate && checkDateForValidate(arrDate) === false){
                setIsFormValid(false)
                return
            }
        }else{
            setIsFormValid(false)
        }          

    },[validObject])
    
    
    return (
        <form onSubmit={(e) => {
            e.preventDefault()
            if (isFormValid){
                setTicket(validObject);
            }
        }}>
            <div className='header'>
            <div className="inputs header__inputs">
                <div className='inputs-form'>
                    <label htmlFor = 'text' className='label'>Откуда</label>
                    <input type = 'text' id = '' placeholder='Город вылета' className='input' name = 'departure'
                    onChange={changeHandler}></input>
                </div>
                <div className='inputs-form'>
                    <label htmlFor = 'text' className='label'>Куда</label>
                    <input type = 'text' placeholder='Город прилёта' className='input' name = 'arrival'
                    onChange={changeHandler}></input>
                </div>
                <div className='inputs-form'>
                    <label htmlFor = 'text' className='label'>Туда</label>
                    <input type = 'text' placeholder = 'дд.мм.гг' className='input' id = 'date' name = 'depDate'
                    onChange={changeHandler}></input>
                </div>
                <div className='avia-line'></div>
                <div className='inputs-form'>
                    <label htmlFor = 'text' className='label'>Обратно</label>
                    <input type = 'text' placeholder='дд.мм.гг' className='input' id = 'date' name = 'arrDate'
                    onChange={changeHandler}></input>
                </div>
            </div>
            </div>
            {isFormValid ? <button type = 'submit' className='button button_active'>Найти билеты</button> : <button type = 'submit' className='button'>Найти билеты</button>}
        </form>
    );
};

export default AviaPage;