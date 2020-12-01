import React, { Component } from 'react'


class Result extends Component {
    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          items: []
        };
      }
    
    
    componentDidMount(){
        const base = process.env.REACT_APP_BASE_URL
        const key = process.env.REACT_APP_API_KEY
        const url = `${base}current?access_key=${key}&query= New York`
        fetch(url)
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result);
                    this.setState({
                        isLoaded : true,
                        items : result.current
                    })
                },
                (error) => {
                    this.setState({
                      isLoaded: true,
                      error
                    })
                }
            )
    }
    render() {
        const { error, isLoaded, items } = this.state;
        if (error) {
          return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
          return <div>Loading...</div>;
        } else {
        return (
            <div className="container">

            <div className="card">
                <div className="card-body">
                    <h5 className="card-title align-center">Current Weather</h5>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        Temperature : {items.temperature} &#8451;
                    </li>
                    <li className="list-group-item">
                        Cloudcover : {items.cloudcover} oktas
                    </li>
                    <li className="list-group-item">
                        Humidity : {items.humidity} g.m<sup>-3</sup>
                    </li>
                    <li className="list-group-item">
                        Precipitation : {items.precip} mm
                    </li>
                    <li className="list-group-item">
                        Visibility : {items.visibility} M
                    </li>
                    <li className="list-group-item">
                        Wind Degree : {items.wind_degree} &#9702;
                    </li>
                    <li className="list-group-item">
                        Wind Direction : {items.wind_dir}
                    </li>
                    <li className="list-group-item">
                        Wind Speed : {items.wind_speed} Km/h
                    </li>
                </ul>
            </div>
            </div>
        )
        }
    }
}

export default Result
