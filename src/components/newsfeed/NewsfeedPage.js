import React, {Component} from 'react';
import PostCard from "./PostCard";
import {GridList, GridTile} from 'material-ui';
import './newsfeed.css';
import NewPost from "./NewPost";
import MenuGroups from "./MenuGroups";
import Recommendations from "./Recommendations";

class NewsfeedPage extends Component {
    render() {
        return (
            <div className='newsfeed'>
               <GridList cellHeight={'auto'} cols={4} className='news-sections'>
                   <div className='menu-left-section'>
                       <GridTile cols={1} >
                           <MenuGroups/>
                       </GridTile>
                   </div>
                   <GridTile cols={2} className='posts-section'>
                       <NewPost/>
                       <PostCard
                           image={'https://static.pexels.com/photos/262577/pexels-photo-262577.jpeg'}
                           text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n' +
                               '                   #science #newtwork'}/>
                       <PostCard text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n' +
                       '                    Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.\n' +
                       '                    Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.\n' +
                       '                    Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.'}/>
                       <PostCard image={'https://static.pexels.com/photos/414860/pexels-photo-414860.jpeg'}/>
                   </GridTile>
                   <div className='menu-right-section'>
                       <GridTile cols={1} >
                           <Recommendations/>
                       </GridTile>
                   </div>
               </GridList>
            </div>
        )
    }
}

export default NewsfeedPage;