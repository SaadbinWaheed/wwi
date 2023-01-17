import React from 'react'
import '../../Styles/TabButton.css'

export const TabButton = ({tabId, setCurrentTab, currentTab, title,children}) =>{

    return (
        <div className='tabButton'>
            <li onClick={()=>setCurrentTab(tabId)} className={currentTab===tabId? 'active':''}>{title}</li>
            <div className="dropdown-content">
                {children}
            </div>
        </div>
    )
}