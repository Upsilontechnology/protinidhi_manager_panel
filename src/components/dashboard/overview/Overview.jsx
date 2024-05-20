import overview from './Overview.module.scss';
import mainicon from '../../../icons/overviewMain.png';
import { overviewCart } from './overviewCart';
import cartView from '../../../icons/cart-view.png';
import { useNavigate } from 'react-router-dom';
const Overview = () => {
    const navigate = useNavigate();
    return (
        <div className={`${overview.main}`}>
           <div className={`${overview.part1} flex_bottom`}>
                <div className={`${overview.part1_container} flex_center_alignment`}>
                    <img src={mainicon} alt="" />
                    <div>
                        <h2>Welcome to Manager Dashboard</h2>
                        <p>Insights management tools and add product-all in one place</p>
                    </div>
                </div>
           </div>
           <div className={`${overview.part2}`}>
                <div className={`${overview.part2_title} flex_between`}>
                    <p>Total Summary</p>
                    <img src={cartView} alt="" />
                </div>
                <div className={`${overview.cart_container}`}>
                    {
                        overviewCart?.map((cart, index) => {
                            return (
                                <div onClick={() => navigate(cart?.link)} className={overview.cart} key={index + 1}>
                                    <div className={`${overview.cart_1} flex_center_alignment`}>
                                        <img src={cart.icon} alt="" />
                                        <p>{cart.title}</p>
                                    </div>
                                    <div className={`${overview.cart_2}`}>
                                        <h3>{cart.amount} {cart?.currency}</h3>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                
           </div>
        </div>
    );
};

export default Overview;