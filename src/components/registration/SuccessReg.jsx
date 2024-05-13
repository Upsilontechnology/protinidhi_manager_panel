import successReg from './SuccessReg.module.scss';
import '../global_style/global_style.css';
import TopBar from '../tobBar/TopBar';
import congrass from '../../icons/congratulation.png';
const SuccessReg = () => {
    return (
        <div className={`${successReg.main} full_width`}>
            <TopBar/>
            <div className={`${successReg.container} full_width flex_center`}>
                <div className={`${successReg.congratulationBox} flex_center`}>
                    <div className={`${successReg.congratulationBox_container}`}>
                        <img src={congrass} alt="" />
                        <p>Congratulations!</p>
                        <p>Account Registration Successfull.</p>
                        <p>Waiting for the admin approval to access Manager Panel.</p>

                        <input className={`${successReg.loginBtn} loginSigninBtn`} type="submit" value='Log In' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SuccessReg;