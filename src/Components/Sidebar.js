import React from 'react'
import './style.css'
import HomeIcon from '@material-ui/icons/Home';
import GroupIcon from '@material-ui/icons/Group';
import PaymentIcon from '@material-ui/icons/Payment';
import StarIcon from '@material-ui/icons/Star';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const Sidebar = () => {
    return (
        <>
            <div className="Sidebar">
                <div className="Items item_head">
                    <h3 ><span> <AccountCircleIcon style={{ fontSize: "2rem" }} /></span>TermMonitor </h3>
                </div>

                <div className="Items item_active">

                    <p><span> <HomeIcon /></span>Add Keywords</p>
                </div>
                <div className="Items">
                    <p> <span> <GroupIcon /></span>Matches</p>
                </div>
                <div className="Items">

                    <p> <span> <PaymentIcon /></span>Manage Sources</p>
                </div>
                <div className="Items">

                    <p> <span> <PaymentIcon /></span>Integration</p>
                </div>
                <div className="Items">

                    <p><span>  <PaymentIcon /></span>Alerts</p>
                </div>
                <div className="Items">

                    <p><span> <StarIcon /></span>Setting</p>
                </div>
            </div >
        </>
    )
}

export default Sidebar
