import React, {Component, Fragment} from 'react'
import Result from './Result'


 class Search extends Component {

    state = {
        value : 'New York',
    }

    onChange = (e) => {
        this.setState({
            value : e.target.value
        })
    }
    onSubmit = (e) => {
        e.preventDefault()
    }
    render() {
        return (
            <Fragment>
                <div className='container'>
                    <div className="card mb-3 search">
                        <div className="card-body text-primary">
                            <h5 className="card-title text-center"> Weather App</h5>
                            <div className='search-button'>

                                <form className="form-inline"
                                onSubmit={this.onSubmit}>
                                    <input className="form-control" type="search" 
                                    name="location"
                                    placeholder="Enter Location" aria-label="Search"
                                    onChange={this.onChange}
                                    ></input>

                                    <button className="btn btn-primary " type="submit"
                                    >
                                    <i className="fa fa-search"></i></button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            <Result value={this.state.value}/>
        </Fragment>
        )
    }
}

export default Search
