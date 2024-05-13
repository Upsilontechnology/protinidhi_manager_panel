import '../global_style/global_style.css';
import reg from './Registration.module.scss';
import { allInputs } from './allInput';
import useRegistration from './useRegistration';
import TopBar from '../tobBar/TopBar';


const Registration = () => {
    const  {open, setOpen, check, setCheck} = useRegistration();
    allInputs[2].type = open ? 'text' : 'password'
    return (
        <div className={reg.main}>
            <TopBar/>
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
                    <div onClick={() => setCheck(!check)} className={`${reg.checkInput} flex_around`}>
                        <div style={{backgroundColor: `${check ? 'rgba(215, 26, 33, 1)' : '' }`}} ></div>
                        <i style={{color: `${check ? 'white' : ''}`, display: `${check ? 'block' : 'none'}`}} className="uil uil-check"></i>
                        <span>Remember Me</span>
                    </div>

                    <input className={`${reg.signIn} loginSigninBtn`} type="submit" value="Sign In" />

                    <p className={`${reg.footer_title}`}>Already have an Account?<span>Log In</span></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration;