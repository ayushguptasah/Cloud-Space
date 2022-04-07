import React from 'react'
import '../../styles/SidebarItem.css'

import ArrowRightIcon from '@material-ui/icons/ArrowRight';

const SidebarItem = ({ arrow, icon, label }) => {
    return (
        <div className='sidebarItem'>
            <div className="sidebarItem_arrow">
                {arrow && (<ArrowRightIcon />)}
            </div>
            
            <div className='sidebarItem_main'>
                {icon}
                <p>{label}</p>
            </div>
        </div>

    );
}

export default SidebarItem;
