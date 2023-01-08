import {FaUserCircle} from 'react-icons/fa';
import { useState } from 'react';

export default function RecitersScreen({reciters, reciterHandler}) {

    const [activeId, setActiveId] = useState('') 
    return(
        <div className="min-vh-100 shadow-lg p-3 bg-red"> 
            <h1 className="fs-5 fw-bold text-center">Qorilar</h1><hr/>
            <ul className="list-group text-start">
                {reciters && reciters.length > 0 ? (
                    reciters.map(reciter => (
                        <div key={reciter.id}>
                            <li onClick={(e) => {
                                reciterHandler(reciter)
                                setActiveId(reciter.id)}} className={`list-group-item bg-transparent border-0 text-light py-0 curser fs-6 ps-0 ${reciter.id === activeId && 'active'}`}>
                                <FaUserCircle className="fs-6 me-3"/>
                                <span className='fs-6'>{reciter.name}</span>
                            </li>
                        <hr/>
                        </div> 
                    ))
                ):(
                    <div className="text-center">
                        <spam className="spinner-border"></spam>
                    </div>
                )}  
            </ul>
        </div>
    )
}