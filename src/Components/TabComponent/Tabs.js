import * as React from 'react';
import { TabButton } from '../Common/TabButton';

const Tabs = ({currentTab, setCurrentTab}) => {
    return (
        <div className="Tabs">
          {/* Tab nav */}
          <ul className="nav">
          <TabButton tabId={1} setCurrentTab={setCurrentTab} currentTab={currentTab} title={'About Us'}>
            <div>
              <a href="#">Vission and Mission</a>
              <a href="#">Global Advisory Council</a>
              <a href="#">Management</a>
              <a href="#">Academic Partner</a>
            </div>
          </TabButton>
          <TabButton tabId={2} setCurrentTab={setCurrentTab} currentTab={currentTab} title={'Join Us'}>
            <div>
              <a href="#">Employers</a>
              <a href="#">Investors and Donors</a>
            </div>
          </TabButton>
          <TabButton tabId={3} setCurrentTab={setCurrentTab} currentTab={currentTab} title={'Methodology'}>
            <div>
              <a href="#">Index Methodology</a>
              <a href="#">Company Coverage</a>
            </div>
          </TabButton>
            <li onClick={()=>setCurrentTab(4)} className={currentTab===4? 'active':''}>Volunteer</li>
            <li onClick={()=>setCurrentTab(5)} className={currentTab===5? 'active':''}>Contact Us</li>
          </ul>
          <div className="outlet">
            {/* content will be shown here */}
          </div>
        </div>
      );
  };
  export default Tabs;