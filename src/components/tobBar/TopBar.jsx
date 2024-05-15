import topBar from './TopBar.module.scss';
import logo from '../../icons/Layer_1.png';
import { useLocation } from 'react-router-dom';
const TopBar = () => {
    const location = useLocation()?.pathname?.slice(0,10)
    return (
        <div className={`${topBar.top_bar}  `}>
               <div className={`${topBar.container} flex_${location === '/dashboard' ? 'between' : 'center'}`}>
                    <img src={logo} alt="" />
                        {
                            location === '/dashboard'
                            &&
                            <div className={`${topBar.logoutBtn} flex_center`}>
                                <p>Log Out</p>
                            </div>
                        }
                </div>
        </div>
    );
};

export default TopBar;