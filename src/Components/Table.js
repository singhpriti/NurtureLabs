import React, { useEffect, useState } from 'react'
import FiberManualRecordTwoToneIcon from '@material-ui/icons/FiberManualRecordTwoTone';
import { Button } from '@material-ui/core';
import './style.css'

const Table = () => {
    const [info, setInfo] = useState([])
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/akshita151199/Termmonitor-APIs/main/dashboard').then(res => res.json()).then(list => setInfo(list.data))

    }, [])

    return (
        <>
            <div className="table_info_div">
                <div><h3> The terms you are tracking</h3></div>
                <div><h5>The data will refresh every 5 min</h5></div>
            </div>
            <div>
                <table>
                    <thead >
                        <tr className="row">
                            <th>Keywords</th>
                            <th>Goal</th>
                            <th>Matches</th>
                            <th>search status</th>
                            <th>Delete Keywords</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            info && info.map((item, index) => {
                                return (
                                    <>
                                        <tr className="row" key={index}>
                                            <td>{item.keyword}</td>
                                            <td>{item.goal}</td>
                                            <td>{item.matches}</td>
                                            <td>{item.search_status}</td>
                                            <td><FiberManualRecordTwoToneIcon /></td>
                                        </tr>

                                    </>
                                )
                            })
                        }
                    </tbody>
                </table>

            </div>
            <div className="View_btn">
                <Button style={{ backgroundColor: '#3F0E40', color: 'white', borderRadius: '8px' }} variant="contained" color="primary">VIEW RESULTS</Button>
            </div>

        </>
    )
}

export default Table;
