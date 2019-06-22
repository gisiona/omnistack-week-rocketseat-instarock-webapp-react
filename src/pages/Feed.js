import React , { Component } from 'react';
import io from 'socket.io-client';

import api from '../services/api';
import '../pages/Feed.css';

import more from '../assets/more.svg'
import like from '../assets/like.svg'
import comment from '../assets/comment.svg'
import send from '../assets/send.svg'




class Feed extends Component{

    state = {
        feed: [],
    };

   async componentDidMount(){
       this.registerToSocket();

        const response = await api.get('posts');
        
        this.setState({feed: response.data.posts });
        console.log(this.state.feed );
    }


    registerToSocket = () => {
        const socket = io('http://localhost:3001/');
        
        // ouvir as chaves configuradas no back-end (post e like)
        socket.on('post', newPost => {
            this.setState({feed: [newPost], ... this.state.feed })
        });


        socket.on('like', newLike => {
            this.setState({
                feed: this.state.feed.map(post => 
                                            post._id === newLike._id ? newLike : post )
            })
        });
    }


    handleLike = id => {
        const data = api.post(`/posts/${id}/like`);
        console.log(data);

    }

    render(){
        return (
            <section id="post-list">
               { this.state.feed.map( post => (
                    <article key={post._id}>
                    <header>
                        <div className="user-info">
                            <span>{ post.autor } </span>
                            <span className="place"> {post.place } </span>
                        </div>

                        <img src={more} alt="Mais" />
                    </header>

                    <img src={`http://localhost:3001/files/perfil.jpg`} alt="Imagem" />

                    <footer>
                        <div className="actions">
                            <button type="button" onClick={() => this.handleLike(post._id) }>
                                <img src={like} alt="" />
                            </button>
                            
                            <img src={comment} alt="" />
                            <img src={send} alt="" />
                        </div>

                        <strong> { post.likes } curtidas</strong>

                        <p>
                           {post.description }
                            <span>  {post.hashtags} </span>
                        </p>
                    </footer>

                </article>
               )) }
            </section>
        );
    }
}

export default Feed;