import { orderIndex } from '../orderlistBtn';
import Pagination from '../pagination/Pagination';
import pending from './PandingOrder.module.scss';

const PendingOrder = () => {
    return (
        <div className={`${pending.part2}`}>
            <div className={`${pending.part2_searchbar} flex_center`}>
                <input type="text" name="" id="" placeholder='Search with Phone no' />
            </div>
            <div className={`${pending.part2_all_orders}`}>
                {
                    orderIndex.map((order,index) => {
                        return (
                            <div key={index+1} className={`${pending.part2_order_container}`}>
                                <table>
                                    <tr>
                                        <td className={`${pending.width_5}`}><p>0{index+1}</p></td>
                                        <td className={`${pending.width_10}`}>
                                            <div className={`${pending.part2_profile}`}>

                                            </div>
                                        </td>
                                        <td className={`${pending.width_30}`}>
                                        <div>
                                                <p title={order.name} className={`${pending.part2_namePhone}`}>{order.name}</p>
                                                <p className={`${pending.part2_namePhone}`}>{order.phone}</p>
                                        </div>
                                        </td>
                                        <td className={`${pending.width_30}`}>
                                            <p title={order.address}>{order?.address?.length > 57 ? order?.address + '...' : order?.address}</p>
                                        </td>
                                        <td className={`${pending.width_30}`}>
                                            <div className='flex_center'>
                                                <span className={`${pending.part2_viewBtn}`}>{order.orderBtn}</span>
                                                <img className={`${pending.part2_deleteIcon}`} src={order.orderIcon} alt="" />
                                            </div>
                                        </td>
                                    </tr>
                                </table>           
                            </div>
                        )
                    })
                }
            </div>
        <Pagination/>
        </div>
    );
};

export default PendingOrder;