import '../global_style/global_style.css';
import reg from './Registration.module.scss';
import logo from '../../icons/Layer_1.png';
import { allInputs } from './allInput';
import useRegistration from './useRegistration';
import checkboxLogo from '../../icons/Rectangle 21.png';
const Registration = () => {
    const  {open, setOpen} = useRegistration();
    allInputs[2].type = open ? 'text' : 'password'
    return (
        <div className={reg.main}>
            <div className={`${reg.top_bar} flex_center `}>
                <img src={logo} alt="" />
            </div>
            <div className={`${reg.container}  flex_center`}>
                <div className={`${reg.registration_part} flex_top`}>
                    <div className={`${reg.registration_part_container} `}>
                    {
                        allInputs?.map((input, index) => {
                            return (
                                <input className={reg.input} key={index + 1} placeholder={input.placeHolder} type={input.type} />
                            )
                        })
                    }
                    <i onClick={() => setOpen(!open)} className={`${reg.eye} ${open ? 'uil uil-eye': 'uil uil-eye-slash'}`}></ i>
                    <div className={`${reg.checkInput} flex_around`}>
                        <img src={checkboxLogo} alt="" />
                        <span>Remember Me</span>
                    </div>

                    <input className={`${reg.signIn}`} type="submit" value="Sign In" />

                    <p className={`${reg.footer_title}`}>Already have an Account?<span>Log In</span></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration;