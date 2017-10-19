import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import './post_card.css';

const PostCard = ({image, text, video}) => {
    return (
        <div className="post-card">
            <Card>
                <CardHeader
                    title="Nombre del Usuario"
                    subtitle="Fecha del post"
                    avatar="https://static.pexels.com/photos/355956/pexels-photo-355956.jpeg"
                />
                <CardMedia>
                    <img src={image} alt="" />
                </CardMedia>

                <CardText>
                    {text}
                </CardText>

            </Card>

        </div>
    )
};

export default PostCard;