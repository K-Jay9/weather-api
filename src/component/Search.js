import React from 'react'

const Search = () => {
 
        return (
            <div className='container'>
                <div className="card mb-3 search">
                    <div className="card-body text-primary">
                        <h5 className="card-title text-center"> Weather App</h5>

                        <div className='search-button'>
                            <form className="form-inline">
                                <input className="form-control" type="search" 
                                name="location"
                                placeholder="Enter Location" aria-label="Search"
                                 ></input>

                                <button className="btn btn-primary " type="submit"
                                >
                                <i className="fa fa-search"></i></button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
}

export default Search
