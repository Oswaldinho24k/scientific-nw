import React, {Component} from 'react';
import {GridTile, GridList, Avatar, Paper, Subheader, List, ListItem, Divider} from 'material-ui';
import './userprofile.css';
import Person from 'material-ui/svg-icons/social/person';
import PostCard from "../newsfeed/PostCard";
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentSend from 'material-ui/svg-icons/content/send';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import ActionInfo from 'material-ui/svg-icons/action/info';

class UserProfilePage extends Component {
    render() {
        return (
            <div className="userprofile">

                <GridList cellHeight={'auto'} cols={3}>
                    <GridTile cols={2} className="left-side">
                        <Paper zDepth={2} className='main-profile'>
                            <Avatar icon={<Person/>} size={100} className="main-avatar"/>
                            <div className="main-portada"></div>
                            <div className="main-texto">
                                <h2>Nombre del Usuario</h2>
                                <h3>Cargo Actual</h3>
                                <h4>Profesión</h4>
                                <br/>
                                <p> Ad, cupiditate dolore dolorum ea eos et exercitationem, iure minus mollitia nihil possimus quae reprehenderit sequi soluta temporibus, voluptatem voluptates. Eveniet, facilis?</p>
                            </div>
                        </Paper>
                    </GridTile>
                    <GridTile cols={1} className="right-side">
                        <Paper zdepth={2} >
                            <Subheader>Explora</Subheader>
                            <List>
                                <ListItem primaryText="Inbox" leftIcon={<ContentInbox />} rightIcon={<ActionInfo />}/>
                                <ListItem primaryText="Starred" leftIcon={<ActionGrade />} rightIcon={<ActionInfo />}/>
                                <ListItem primaryText="Sent mail" leftIcon={<ContentSend />} rightIcon={<ActionInfo />}/>
                                <ListItem primaryText="Drafts" leftIcon={<ContentDrafts />} rightIcon={<ActionInfo />}/>
                                <ListItem primaryText="Inbox" leftIcon={<ContentInbox />} rightIcon={<ActionInfo />}/>
                            </List>
                        </Paper>

                    </GridTile>
                </GridList>
            </div>
        )
    }
}

export default UserProfilePage;