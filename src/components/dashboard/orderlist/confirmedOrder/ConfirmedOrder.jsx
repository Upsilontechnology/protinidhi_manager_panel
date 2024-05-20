import confirm from './ConfirmedOrder.module.scss';

import { orderIndex } from "../orderlistBtn";
import Pagination from "../pagination/Pagination";

const ConfirmedOrder = () => {
    return (
        <div className={`${confirm.part2}`}>
        <div className={`${confirm.part2_searchbar} flex_center`}>
            <input type="text" name="" id="" placeholder='Search with Phone no' />
        </div>
        <div className={`${confirm.part2_all_orders}`}>
            {
                orderIndex.map((order,index) => {
                    return (
                        <div key={index+1} className={`${confirm.part2_order_container}`}>
                            <table>
                                <tr>
                                    <td className={`${confirm.width_5}`}><p>0{index+1}</p></td>
                                    <td className={`${confirm.width_10}`}>
                                        <div className={`${confirm.part2_profile}`}>

                                        </div>
                                    </td>
                                    <td className={`${confirm.width_30}`}>
                                    <div>
                                            <p title={order.name} className={`${confirm.part2_namePhone}`}>{order.name}</p>
                                            <p className={`${confirm.part2_namePhone}`}>{order.phone}</p>
                                    </div>
                                    </td>
                                    <td className={`${confirm.width_30}`}>
                                        <p title={order.address}>{order?.address?.length > 57 ? order?.address + '...' : order?.address}</p>
                                    </td>
                                    <td className={`${confirm.width_30}`}>
                                        <div className='flex_center'>
                                            <span className={`${confirm.part2_viewBtn}`}>{order.orderBtn2}</span>
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

export default ConfirmedOrder;