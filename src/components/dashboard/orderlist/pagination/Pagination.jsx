import { useState } from 'react';
import pagination from './Pagination.module.scss';

const Pagination = () => {
    const [count, setCount] = useState(1);
    const [position, setPosition] = useState(1)
    return (
        <div className={`${pagination.main} flex_center`}>
           <div className='only_flex'>
                <p onClick={(() => {
                    if(count > 1){
                        setCount((prevcount) => prevcount - 1)
                    }
                })} className='flex_center'>
                    <i className={`${pagination.icon} uil uil-arrow-left`}></i>
                </p>

                <p
                    onClick={() => setPosition((count * 1))} 
                    className={`${position === count ? `${pagination.gray}` : `${pagination.lightGray}`} flex_center`}>
                        {(count * 1)}
                </p>
                <p 
                    onClick={() => setPosition(count + 1)} 
                    className={`${position === (count + 1) ? `${pagination.gray}` : `${pagination.lightGray}`} flex_center`}>
                    {(count * 1) + 1}
                </p>

                <p onClick={(() => setCount((prevcount) => prevcount + 1))} className='flex_center'>
                    <i className={`${pagination.icon} uil uil-arrow-right`}></i>
                </p>
           </div>
        </div>
    );
};

export default Pagination;