import React from 'react';

class searchBar extends React.Component{
    state = {term:''};

    onFormSubmit=(event)=>{
        event.preventDefault();
        this.props.onSubmit(this.state.term);
    }
    render(){
        return (
            <div id="search-bar">
                <form onSubmit={this.onFormSubmit} className="search-form">
                       <label htmlFor="text-input"><h6>Film vagy sorozat gyors keresése</h6></label>
                   <div className="input-group">
                      <input className="form-control" name="text-input" type='text' value={this.state.term} onChange={e => this.setState({term: e.target.value})} placeholder="Írd be a keresett film vagy sorozat nevét..." />
                      <button className="btn btn-secondary" type="submit">Keresés</button>
                    </div>
                    <div className="form-check">
                        <div className="form-check-inline">
                          <input className="form-check-input" type="radio" name="filmvsorozat"/>
                          <label className="form-check-label">film</label>
                        </div>
                        <div className="form-check-inline">
                          <input className="form-check-input" type="radio" name="filmvsorozat"/>
                          <label className="form-check-label">sorozat</label>
                        </div>
                  </div>                
                </form>
            </div>
        )
    }
}

export default searchBar;