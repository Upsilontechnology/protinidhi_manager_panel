/* eslint-disable react/no-unescaped-entities */
import login from './Login.module.scss';
import '../global_style/global_style.css';
import TopBar from '../tobBar/TopBar';
import { allLoginInputs } from './allLoginInput';
import useLogin from './useLogin';
import { useNavigate } from 'react-router-dom';
const Login = () => {
    const navigate = useNavigate();
    const  {open, setOpen, check, setCheck, data, setData} = useLogin();
    allLoginInputs[1].type = open ? 'text' : 'password';

    const handleLogin = (e) => {
        e.preventDefault();

       if(data.email && data.password) navigate('/dashboard')
    }

    return (
        <div className={login.main}>
        <TopBar/>
        <div className={`${login.container}  flex_center`}>
            <form onSubmit={handleLogin} action="">
                <div className={`${login.login_part} flex_top`}>
                    <div className={`${login.login_part_container} `}>
                        {
                            allLoginInputs?.map((input, index) => {
                                return (
                                    <input className={login.input} key={index + 1} placeholder={input.placeHolder} type={input.type} 
                                    onChange={(e) => setData({...data, [input.value]: e.target.value})}
                                    />
                                )
                            })
                        }
                        <i onClick={() => setOpen(!open)} className={`${login.eye} ${open ? 'uil uil-eye': 'uil uil-eye-slash'}`}></ i>
                        <div onClick={() => setCheck(!check)} className={`${login.checkInput} flex_around`}>
                        <div style={{backgroundColor: `${check ? 'rgba(215, 26, 33, 1)' : '' }`}} ></div>
                        <i style={{color: `${check ? 'white' : ''}`, display: `${check ? 'block' : 'none'}`}} className="uil uil-check"></i>
                        <span>Remember Me</span>
                        </div>

                    <input className={`${login.signIn} loginSigninBtn`} type="submit" value="Log In" />

                    <p className={`${login.footer_title}`}>Don't have an Account?<span onClick={() => navigate('/')}>Register Now</span></p>
                    </div>
                </div>
            </form>
        </div>
    </div>
    );
};

export default Login;