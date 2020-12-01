import React, { Component } from 'react'


class Result extends Component {

    

    render() {

       
        return (
            <div className="container">

                <div className="card result">
                    <div className="card-body grey">
                        <h5 className="card-title align-center">Current Weather</h5>
                        <img  alt='weather icon' className='rounded'></img>
                    </div>
                        <span className='text-muted right'>
                            Observation Time : </span>
                        <span className='text-muted right'>
                            Location: </span>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            Description : 
                        </li>
                        <li className="list-group-item">
                            Temperature : 
                        </li>
                        <li className="list-group-item">
                            Cloudcover :
                        </li>
                        <li className="list-group-item">
                            Humidity : 
                        </li>
                        <li className="list-group-item">
                            Precipitation :
                        </li>
                        <li className="list-group-item">
                            Visibility :
                        </li>
                        <li className="list-group-item">
                            Wind Degree : 
                        </li>
                        <li className="list-group-item">
                            Wind Direction : 
                        </li>
                        <li className="list-group-item">
                            Wind Speed :
                        </li>
                    </ul>
                </div>
            </div>
        )
        }
    
}

export default Result
