
import React from 'react';
import '../App.css';

import axios from 'axios';

import Home from './Home';
import Search from './Search';
import Results from './Results'

import { Route, HashRouter as Router, Link } from "react-router-dom";


// const FLICKR_BASE_URL = 'https://www.flickr.com/services/rest/';
// const FLICKR_API_KEY  = '2f5ac274ecfac5a455f38745704ad084';

// const generateImageUrl = (p) => {
//     return `https://live.staticflickr.com/${p.server}/${p.id}_${p.secret}_q.jpg`;
// }; // generateImageUrl()


class FlickrSearch extends React.Component {
    
    
    // state = {
        
    //     resultPhotos: [], // the actual response data
    //     loading: true, // controls whether or not to show loading message
    //     error: null, // whether or not to show error message
        
    // };
    
    // performSearch = (query) => {

    //     console.log('FlickrSearch::performSearch()', query);

    //     // When you convert this into a Router-based project,
    //     // the search results page should be a distinct route,
    //     // which means as soon as it is mounted, you
    //     // should perform a search... i.e., the axios.get()
    //     // should be triggered within componentDidMount()
        
    //     axios.get( FLICKR_BASE_URL, {
            
    //         params: {
    //           // These key-value pairs turn into querystring &key=value pairs
    //           method: 'flickr.photos.search',
    //           api_key: FLICKR_API_KEY,
    //           format: 'json',
    //           nojsoncallback: 1,
    //           text: query
    //         }
        
    //     })
    //     .then( res => {
    //         console.log( 'response', res.data );
    //         console.log('test');
            
    //         this.setState({
    //             resultPhotos: res.data.photos.photo,
    //             loading: false,
    //         })
    //     })
    //     .catch( err => {
    //         console.log( 'Error loading results from API:', err );
    //         this.setState({ error: err });
    //     });

    // }

    render(){

        // Handle the special case where there is an error
        // with an early return
        // if( this.state.error !== null ){
        //     return <p>Sorry, there was an error loading your results - Try again</p>;
        //     // Neater, but stops us rendering ANY of the main template, including heading, search form, etc
        // }

        return (

            <div className="App">
                <Router>
                <header>
                <h1>Flickr Search</h1>
                <nav>
                    <hr />
                    <Link to='/'>Home</Link>
                    {' '}|{' '}
                    <Link to='/search'>Search</Link>
                    {' '}|{' '}
                    <Link to='/results'>Results</Link>
                    <br />
                    <hr />
                
                </nav>
                
                {/* <hr />

                <Search onSubmit={ this.performSearch } />

                <hr /> */}
                </header>

                {/* {
                    this.state.resultPhotos.map( p => <img key={p.id} src={generateImageUrl(p)} alt={ p.title } /> )
                } */}

                <Route exact path="/"           component={ Home } />
                <Route exact path="/search"     component={ Search } />
                <Route exact path="/results/:query"    component={ Results } />

                

                <footer>
                <hr />
                &copy; Questionable Flickr Searches 2022
                </footer>
                </Router>
            </div>

        );

    } // render

} // class FlickrSearch

export default FlickrSearch;