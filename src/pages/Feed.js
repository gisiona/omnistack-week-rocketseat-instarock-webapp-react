import React , { Component } from 'react';
import './Feed.css';

import more from '../assets/more.svg'
import like from '../assets/like.svg'
import comment from '../assets/comment.svg'
import send from '../assets/send.svg'
import image from '../assets/image.jpg'



class Feed extends Component{
    render(){
        return (
            <section id="post-list">
                <article>
                    <header>
                        <div className="user-info">
                            <span>Gisiona Costa </span>
                            <span className="place"> São Paulo SP </span>
                        </div>
                    </header>

                    <img src={more} alt="Mais" />
                </article>

                <img src={image} alt="Imagem" />

                <footer>
                    <div>
                        <img src={like} alt="" />
                        <img src={comment} alt="" />
                        <img src={send} alt="" />
                    </div>

                    <strong>1000 curtidas </strong>

                    <p>
                        Um post muito legal.
                        <span>#react, #omnistack #top </span>
                    </p>


                </footer>
            </section>
        );
    }
}

export default Feed;