import React from 'react';
import axios from 'axios';
import Header from '../Header/Header';
import css from './AddReview.module.css';

class AddReview extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedFile: null,
            yourRating: '',
            imdbRating: '',
            time: '',
            title: '',
            genre: '',
            imageId: '',
            genres: [],
        }
        this._handleUpdateImdb = this._handleUpdateImdb.bind(this);
        this._handleUpdateYour = this._handleUpdateYour.bind(this);
        this._handleUpdateTime = this._handleUpdateTime.bind(this);
        this._handleUpdateTitle = this._handleUpdateTitle.bind(this);
        this._handleUpdateGenre = this._handleUpdateGenre.bind(this);
    }

     componentDidMount() {
    axios.get(`https://localhost:44375/api/genre`)
      .then(res => {
        const genres = res.data;
        this.setState({ genres });
      })
  }

    _handleUpdateYour(e) {
        if(e.target.validity.valid) {
            this.setState({ yourRating: e.target.value });
        }
    }
    _handleUpdateImdb(e) {
        if(e.target.validity.valid) {
            this.setState({ imdbRating: e.target.value });
        }
    }
    _handleUpdateTime(e) {
        if(e.target.validity.valid) {
            this.setState({ time: e.target.value });
        }
    }
    _handleUpdateTitle(e) {
            this.setState({ title: e.target.value });
        }
    _handleUpdateGenre(e) {
        this.setState({ genre: e.target.value });
    }
    _handleUpdateImage = (e) => {
        this.setState({
            selectedFile: e.target.files[0],
            loaded: 0,
        })
        // console.log(e.target.files[0].name)
    }

    handleFileSelect = (e) => {
        e.preventDefault();
        let reader = new FileReader();
        reader.onload = ((theFile) => {
          return (e) => {
            var binaryData = e.target.result;
            var base64String = window.btoa(binaryData);            
            axios({
                method: 'POST',
                url: 'https://localhost:44375/api/images',
                data: {img: base64String},
                headers: {
                    'Content-Type': 'application/json'
                }})
            .then(res => {
                console.log(this.state.genre);
                return axios({
                    method: 'POST',
                    url:'https://localhost:44375/api/movies',
                    data: {
                                genre: this.state.genre,
                                title: this.state.title,
                                userRating: this.state.yourRating,
                                imdbRating: this.state.imdbRating,
                                time: this.state.time,
                                imageId: res.data.imageId
                            },
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }) 


            })
            .then(res => {
                console.log(res.data);
                this.props.history.push({
                    pathname: '/',
                });
            })
            .catch(error => {
                console.log(error)
            })
          };
        })(this.state.selectedFile);
        reader.readAsBinaryString(this.state.selectedFile);
      }

    render() {
        return (
            <div>     
                <Header/> 
               
                <form onSubmit={(e) => this.handleFileSelect(e)}>
                <label>
                    <input type="text" name="title" value={this.state.title} onChange={this._handleUpdateTitle}/>
                    Titel
                </label><br/>
                <label>
                    {/* <input type="text" name="genre" value={this.state.genre} onChange={this._handleUpdateGenre}/>
                    Genre */}
                     <select name="genre" className={css.test}>
                        { this.state.genres.map(genre => <option value={genre.name}>{genre.name}</option>)}
                    </select>
                    Genre
                </label><br/>
                <label>
                    <input type="number" name="rating" value={this.state.yourRating} onChange={this._handleUpdateYour} step="any"/>
                    Ditt betyg
                </label><br/>        
                <label>
                    <input type="number" name="imdbrating" value={this.state.imdbRating} onChange={this._handleUpdateImdb} step="any"/>
                    IMDB betyg
                </label><br/>
                <label>
                    <input type="number" name="time" value={this.state.time} onChange={this._handleUpdateTime} step="any"/>
                    Tid i minuter
                </label><br/>   
                <label>
                <input type="file" name="img" id="img" onChange={this._handleUpdateImage}/>
                </label><br/>   
                <input type="submit" value="Submit"/>
                </form>                
            </div>
        )
    }
}

export default AddReview; 