import React , { Component } from 'react';
import api from '../services/api';

import '../pages/Feed.css';

import more from '../assets/more.svg'
import like from '../assets/like.svg'
import comment from '../assets/comment.svg'
import send from '../assets/send.svg'
import image from '../assets/image.jpg'



class Feed extends Component{

    state = {
        feed: [],
    };

   async componentDidMount(){
        const response = await api.get('posts');
        
        this.setState({feed: response.data.posts });
        console.log(this.state.feed );
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
                            <img src={like} alt="" />
                            <img src={comment} alt="" />
                            <img src={send} alt="" />
                        </div>

                        <strong> { post.like } </strong>

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