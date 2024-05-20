import orderlist from './Orderlist.module.scss';
import { orderIndex, titleButton } from './orderlistBtn';
import Pagination from './pagination/Pagination';
const Orderlist = () => {
    return (
        <div className={`${orderlist.main}`}>
            <div className={`${orderlist.part1} flex_center`}>
                <div className={`${orderlist.part1_container} flex_between`}>
                    {
                        titleButton.map((btn, index) => {
                            return (
                                <div className={`${orderlist.titleBtn} flex_center`} key={index+ 1}>
                                    <p>{btn.value}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className={`${orderlist.part2}`}>
                <div className={`${orderlist.part2_searchbar} flex_center`}>
                    <input type="text" name="" id="" placeholder='Search with Phone no' />
                </div>
                <div className={`${orderlist.part2_all_orders}`}>
                    {
                        orderIndex.map((order,index) => {
                            return (
                                <div key={index+1} className={`${orderlist.part2_order_container}`}>
                                    <table>
                                        <tr>
                                            <td className={`${orderlist.width_5}`}><p>0{index+1}</p></td>
                                            <td className={`${orderlist.width_10}`}>
                                                <div className={`${orderlist.part2_profile}`}>

                                                </div>
                                            </td>
                                            <td className={`${orderlist.width_30}`}>
                                               <div>
                                                    <p title={order.name} className={`${orderlist.part2_namePhone}`}>{order.name}</p>
                                                    <p className={`${orderlist.part2_namePhone}`}>{order.phone}</p>
                                               </div>
                                            </td>
                                            <td className={`${orderlist.width_30}`}>
                                                <p title={order.address}>{order?.address?.length > 57 ? order?.address + '...' : order?.address}</p>
                                            </td>
                                            <td className={`${orderlist.width_30}`}>
                                                <div className='flex_center'>
                                                    <span className={`${orderlist.part2_viewBtn}`}>{order.orderBtn}</span>
                                                    <img className={`${orderlist.part2_deleteIcon}`} src={order.orderIcon} alt="" />
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
        </div>
    );
};

export default Orderlist;