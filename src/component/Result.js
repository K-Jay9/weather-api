import React, { Component } from 'react'


class Result extends Component {

    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          items: [],
          value : this.props.value
        };
    }
        componentDidMount(){
            const base = process.env.REACT_APP_BASE_URL
            const key = process.env.REACT_APP_API_KEY

            const url = `${base}current?access_key=${key}&query=${this.state.value[0]}`
        
            fetch(url)
                .then(res => res.json())
                .then((result) => {
                    this.setState({
                      isLoaded: true,
                      items: result.current,
                      locate: result.location,
                    }); 
                  },
                  // Note: it's important to handle errors here
                  // instead of a catch() block so that we don't swallow
                  // exceptions from actual bugs in components.
                  (error) => {
                    this.setState({
                      isLoaded: true,
                      error
                    });
                  }
                  )

        }
        
        render() {
            const { error, isLoaded, items, locate } = this.state;
          
            if (error) {
            return <div>Error: {error.message}</div>;
          } else if (!isLoaded) {
            return <div>Loading...</div>;
          } else {
            return (
            <div className="container">

                <div className="card result">
                    <div className="card-body grey">
                        <h5 className="card-title align-center">Current Weather</h5>
                        <img src={items.weather_icons[0]}  alt='weather icon' className='rounded'></img>
                    </div>
                        <span className='text-muted right'>Observation Time : {items.observation_time}</span>
                        <span className='text-muted right'>
                            Location: {locate.name}, {locate.country} </span>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            Description :  {items.weather_descriptions[0]}
                        </li>
                        <li className="list-group-item">
                            Temperature :  {items.temperature}
                        </li>
                        <li className="list-group-item">
                            Cloudcover : {items.cloudcover}
                        </li>
                        <li className="list-group-item">
                            Humidity :  {items.humidity}
                        </li>
                        <li className="list-group-item">
                            Precipitation : {items.precip}
                        </li>
                        <li className="list-group-item">
                            Visibility : {items.visibility}
                        </li>
                        <li className="list-group-item">
                            Wind Degree :  {items.wind_degree}
                        </li>
                        <li className="list-group-item">
                            Wind Direction :  {items.wind_dir}
                        </li>
                        <li className="list-group-item">
                            Wind Speed : {items.wind_speed}
                        </li>
                    </ul>
                </div>
            </div>
        )
        }
    }
}

export default Result
