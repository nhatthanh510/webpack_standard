/**
 * Created by MyPC on 10/9/2016.
 */
import React, {Component} from 'react';
import  "../css/css1.css";
var axios = require('axios');

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {data:[],
            loading:"Please click the 'Random Images' button"}
        this.loadMovies = this.loadMovies.bind(this);
    }

    loadMovies() {
    var apiKey = '7b51cd830fc4c738968af32a4d6e13b2';
    var apiRoot = 'https://api.themoviedb.org/3';
    var apiCategory = '/discover/movie';
    var apiUrl = `${apiRoot}${apiCategory}?api_key=${apiKey}`;
    var session_id = "";
    var request_token ="";
    var username = "nhatthanh510";
    var password = "shadowfiendhai2";

    axios.get(apiUrl)
        .then((response) => {
            console.log(response.data.results);
            console.log(response.status);
            this.setState({data: response.data.results, loading: "loaded"});
        });
    }

    render() {
        console.log('GetMovies.render()');
        return (
        <div>
            <button onClick={this.loadMovies}>
                Random Images></button>
            <MovieList images={this.state.data}/>
        </div>
        );
    }
}

function MovieList(props) {
    var imgRootPath = 'https://image.tmdb.org/t/p/';
    var size = 'w342';
    return(
        <div>
            {props.images.map((image)=>
                <img key ={image.title}
                     src={`${imgRootPath}${size}${image.poster_path}`}
                     style={{height:"200px"}}/>)}
        </div>
    )
}
export default App;