import React from 'react'
import './style.css'
import SearchIcon from '@material-ui/icons/Search';
import { Button } from '@material-ui/core';
import Table from './Table';

const Main = () => {
    return (
        <div className="container">
            <div className="navbar">
                <div ><h1 className="keywords" >KEYWORDS</h1></div>
                <div ><input className="submit" type="text" placeholder="Submit" />
                    <span>A</span>
                </div>

            </div>
            <div className="content">
                <div className="info_div">
                    <div> <h3>Add another Keywords <span style={{ backgroundColor: "#3F0E40", color: "white", padding: '4px' }}> 1/3</span> UPGRADE</h3>  </div>
                    <div><h3>Advance Search</h3></div>
                </div>
                <div className="search_div">
                    <div>
                        <span><SearchIcon /></span>
                        <input type="text" placeholder="Enter your filters here" />
                    </div>
                    <div>
                        <Button style={{ backgroundColor: '#3F0E40', color: 'white', borderRadius: '8px' }} variant="contained" >SAVE FILTER</Button>
                    </div>
                </div>
                <div>
                    <Table />
                </div>


            </div>


        </div>

    )
}

export default Main
