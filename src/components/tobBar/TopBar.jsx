import topBar from './TopBar.module.scss';
import logo from '../../icons/Layer_1.png';
const TopBar = () => {
    return (
        <div className={`${topBar.top_bar} flex_center `}>
                <img src={logo} alt="" />
            </div>
    );
};

export default TopBar;