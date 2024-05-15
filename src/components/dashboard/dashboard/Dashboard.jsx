import { Outlet } from "react-router-dom";
import TopBar from "../../tobBar/TopBar";
import dash from './Dashboard.module.scss';

const Dashboard = () => {
    return (
        <div className={`${dash.main}`}>
            <TopBar/>
           <div className={`${dash.container} flex_between`}>
                <div className={`${dash.partOne}`}>

                </div>
                <div className={`${dash.partTwo}`}>
                    <Outlet/>
                </div>
           </div>
        </div>
    );
};

export default Dashboard;