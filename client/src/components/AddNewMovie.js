import axios from 'axios'
import React, { useState } from 'react'
import { useHistory, Link } from 'react-router-dom'
const AddNewMovie = (props) => {
    const { push } = useHistory()
    const [movie, setMovie] = useState(
        {
            title: '',
            director: "",
            genre: '',
            metascore: '',
            description: '',

        }
    )
    const handleChange = (event) => {
        const { name, value } = event.target
        setMovie({
            ...movie,
            [name]: value
        })
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        axios.push('http://localhost:5000/api/movies', movie)
            .then(response => {
                props.setMovies(response.data)
                push('/movies')

            })
    }
    return (
        <div>
            <h1>add new movie</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor='title'>Title:</label>
                <input id='title' name='title' onChange={handleChange} type='text' value={movie.title} />
                <label htmlFor='director'>Director:</label>
                <input id='director' name='director' onChange={handleChange} type='text' value={movie.director} />
                <label htmlFor='genre'>Genre:</label>
                <input id='genre' name='genre' onChange={handleChange} type='text' value={movie.genre} />
                <label htmlFor='metascore'>Metascore:</label>
                <input id='metascore' name='metascore' onChange={handleChange} type='text' value={movie.metascore} />
                <label htmlFor='description'>Description:</label>
                <input id='description' name='description' onChange={handleChange} type='text' value={movie.description} />
                <button type='submit'>add movie</button>
                <div className="modal-footer">
                    <input type="submit" className="btn btn-info" value="Save" />
                    <Link to={`/movies/1`}><input type="button" className="btn btn-default" value="Cancel" /></Link>
                </div>
            </form>

        </div>
    )
}

export default AddNewMovie
