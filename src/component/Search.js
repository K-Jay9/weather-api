import React, { Component } from 'react'

class Search extends Component {

    constructor(props){
        super(props)

        this.state = { value: ''}

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange(e){
        this.setState({value: e.target.value})
    }
    handleSubmit(e){
        e.preventDefault()
    }



    render() {
        return (
            <div className='container'>
                <div className="card mb-3 search">
                    <div className="card-body text-primary">
                        <h5 className="card-title text-center"> Weather App</h5>

                        <div className='search-button'>
                            <form className="form-inline"
                            onSubmit={this.handleSubmit}>
                                <input className="form-control" type="search" 
                                name="location"
                                placeholder="Enter Location" aria-label="Search"
                                value={this.state.value} 
                                onChange={this.handleChange}></input>

                                <button className="btn btn-primary " type="submit">
                                <i className="fa fa-search"></i></button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Search
