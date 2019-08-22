
import React from 'react';
import axios from 'axios';

class AllReviews extends React.Component {
    state = {
        movies: []
    }

    componentDidMount() {
        axios.get('https://localhost:44375/api/movies')
            .then(res => {
                this.setState({
                movies: res.data
                });

                return axios.get('https://localhost:44375/api/images/')  
            })
            .then(res => {
                this.setState((prevState) => ({
                movies: prevState.movies.map(movie => {
                    const image = res.data.find(img => img.imageId === movie.imageId)
                    if(image){
                        return {
                            ...movie,
                            image: `data:image;base64,${image.img}`
                        }
                    }
                    return movie
                })
                }));
            })
    }

    render() {
        return (
            <div>
                {this.state.movies.map(movie => {
                    const {movieId, title, genre, userRating, imdbRating, time, image} = movie;
                    return (
                        <div key={movieId}>
                            <p>Titel: {title}</p>
                            <p>Genre: {genre}</p>
                            <p>Rating från användare: {userRating}</p>
                            <p>Rating från IMDB: {imdbRating}</p>
                            <p>Tid:{time}</p>
                            {image &&
                            <img src={image} />
                            }
                        </div>
                    );
                })}
            </div>
        )
    }
}

export default AllReviews;