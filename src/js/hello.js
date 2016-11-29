/**
 * Created by MyPC on 10/9/2016.
 */
import React, {Component} from 'react';
import  "../css/css1.css";
var axios = require('axios');
import image1 from "../images/2.jpg"

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
    var apiUrl = `${apiRoot}${apiCategory}?${apiKey}`;
    var session_id = "";
    var request_token ="";
    var username = "nhatthanh510";
    var password = "shadowfiendhai2";

    axios.get(`https://api.themoviedb.org/3/authentication/token/new?api_key=${apiKey}`)
        .then((response) => {
            console.log(response.data);
            request_token = response.data.request_token;
            axios.get(`https://api.themoviedb.org/3/authentication/token/validate_with_login?api_key=${apiKey}&username=${username}&password=${password}&request_token=${request_token}`)
                .then((response) => {
                    console.log(response.data);
                    request_token = response.data.request_token;
                });
            axios.get(`https://api.themoviedb.org/3/authentication/session/new?api_key=${apiKey}&request_token=${request_token}`)
                .then((response) => {
                    console.log(response.data);
                    session_id = response.data.session_id;
                });
        });

    axios.get(apiUrl)
        .then((response) => {
            console.log(response.data);
            console.log(response.status);
            this.setState({data: response.results, loading: "loaded"});
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
    return(
        <div>
            {props.images.map((image)=>
                <img key ={image.title}
                     src={image.poster_path}
                     style={{height:"200px"}}/>)}
        </div>
    )
}
export default App;