import React from 'react';
import {List, ListItem, Divider, Subheader} from 'material-ui';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentSend from 'material-ui/svg-icons/content/send';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import ActionInfo from 'material-ui/svg-icons/action/info';


const MenuGroups = ({props}) => {
    return (
        <div>
            <Subheader>Explora</Subheader>
            <List>
                <ListItem primaryText="Inbox" leftIcon={<ContentInbox />} rightIcon={<ActionInfo />}/>
                <ListItem primaryText="Starred" leftIcon={<ActionGrade />} rightIcon={<ActionInfo />}/>
                <ListItem primaryText="Sent mail" leftIcon={<ContentSend />} rightIcon={<ActionInfo />}/>
                <ListItem primaryText="Drafts" leftIcon={<ContentDrafts />} rightIcon={<ActionInfo />}/>
                <ListItem primaryText="Inbox" leftIcon={<ContentInbox />} rightIcon={<ActionInfo />}/>
            </List>
            <Divider/>
            <Subheader>Grupos</Subheader>
            <List>
                <ListItem primaryText="Inbox" leftIcon={<ContentInbox />} rightIcon={<ActionInfo />}/>
                <ListItem primaryText="Starred" leftIcon={<ActionGrade />} rightIcon={<ActionInfo />}/>
                <ListItem primaryText="Sent mail" leftIcon={<ContentSend />} rightIcon={<ActionInfo />}/>

            </List>

        </div>
    )
};

export default MenuGroups;