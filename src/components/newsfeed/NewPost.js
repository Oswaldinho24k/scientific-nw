import React from 'react';
import {Card, CardHeader, CardTitle, CardText} from 'material-ui/Card';
import {RaisedButton, IconButton} from 'material-ui';
import ActionHome from 'material-ui/svg-icons/action/home';
import Photo from 'material-ui/svg-icons/image/photo-camera';
import Video from 'material-ui/svg-icons/av/videocam';
import File from 'material-ui/svg-icons/editor/attach-file';
import './newsfeed.css';

const NewPost = ({props}) => {
    return (
        <div className='new-post'>
            <Card>
                <CardHeader
                    title="Qué descubriste hoy?"
                    subtitle='Comparte una foto, artículo o lo que quieras!'
                    avatar="https://static.pexels.com/photos/355956/pexels-photo-355956.jpeg"
                />

                <CardText>
                    <div className='post-actions'>
                        <IconButton>
                            <Photo/>
                        </IconButton>
                        <IconButton>
                            <Video/>
                        </IconButton>
                        <IconButton>
                            <File/>
                        </IconButton>
                        <IconButton>
                            <ActionHome/>
                        </IconButton>
                    </div>
                    <RaisedButton fullWidth={true}>Publicar</RaisedButton>
                </CardText>

            </Card>
        </div>
    )
};

export default NewPost;