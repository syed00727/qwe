import React from 'react';
import EmailChart from './EmailChart';
import SalesChart from './SalesChart';
import UserBehaviorChart from './UserBehaviorChart';
import Tasks from './Tasks';
import Nasdaq from '../Charts/Nasdaq';
import TabGroup from '../Components/Panels/TabGroup';
// import checkImage from 'assets/images/checkbox-check.svg';
const Dashboard = () => (
  <div className="content">
    <div className="container-fluid">
      <div className="col-md-6">
        <TabGroup />
      </div>

      {/* <div className="row"> */}
        {/* <div className="col-md-4">
          <EmailChart />
        </div>
        <div className="col-md-8">
          <SalesChart />
        </div> */}
      {/* </div> */}
      <div className="col-md-6">
          <Nasdaq />
       </div>

    </div>
  </div>
);

export default Dashboard;