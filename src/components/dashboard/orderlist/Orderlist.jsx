import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import orderlist from './Orderlist.module.scss';
import { titleButton } from './orderlistBtn';

const Orderlist = () => {
    const navigate = useNavigate();
    const location = useLocation()?.pathname;
  
    const handleActive = (link) => {
        return location === link ? `${orderlist.active}` : '' 
    }

    return (
        <div className={`${orderlist.main}`}>
            <div className={`${orderlist.part1} flex_center`}>
                <div className={`${orderlist.part1_container} flex_between`}>
                    {
                        titleButton.map((btn, index) => {
                            return (
                                <div onClick={() => navigate(`${btn?.link}`)} className={`${orderlist.titleBtn} ${handleActive(btn.link)} flex_center`} key={index+ 1}>
                                    <p>{btn.value}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <Outlet/>
        </div>
    );
};

export default Orderlist;