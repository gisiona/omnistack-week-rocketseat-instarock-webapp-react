import React ,{ Component } from 'react';
import '../pages/New.css';
import api from '../services/api';


class New extends Component{

    state={
        image: null,
        autor: '',
        place: '',
        description: '',
        hashtags: '',
    };


    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }


    handleImageChange = e => {
        this.setState({ image: e.target.files[0] })
    }

    handleSubmit = async e => {
        e.preventDefault();

        const data = new FormData();
        data.append('image', this.state.image );
        data.append('autor', this.state.autor );
        data.append('place', this.state.place );
        data.append('description', this.state.description );
        data.append('hashtags', this.state.hashtags );
        
        await api.post('posts', data);

        this.props.history.push('/');
        
        console.log(this.state);
    }


    render(){
        return (
            <form id="new-post"  onSubmit={this.handleSubmit}>
                <input type="file" 
                        name="image" 
                        placeholder="Selecione uma foto" 
                        onChange={this.handleImageChange}
                        />
                        
                <input type="text" 
                        name="autor" 
                        placeholder="Digite o Autor do Post"
                        onChange={this.handleChange}
                        value={this.state.autor }/>
                        
                <input type="text" 
                        name="place" 
                        placeholder="Digite o local do Post"
                        onChange={this.handleChange}
                        value={this.state.place }/>

                <input type="text" 
                        name="description" 
                        placeholder="Digite a descrição do Post"
                        onChange={this.handleChange}
                        value={this.state.description }/>
                
                <input type="text" 
                        name="hashtags" 
                        placeholder="Digite as hashtags do Post"
                        onChange={this.handleChange}
                        value={this.state.hashtags }/>
                        
                <button type="submit">Enviar</button>
            </form>
        );
    }
}

export default New;