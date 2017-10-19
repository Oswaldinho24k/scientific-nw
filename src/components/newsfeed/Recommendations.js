import React from 'react';
import {List, ListItem, Divider, Subheader, Avatar} from 'material-ui';
import Add from 'material-ui/svg-icons/content/add-circle';

const Recommendations = ({props}) => {
    return (
        <div>
            <Subheader>Deberías Seguir a...</Subheader>
            <List>
                <ListItem
                    primaryText="Oswaldo" rightIcon={<Add />}
                    leftAvatar={<Avatar
                        src="https://scontent.fmex5-1.fna.fbcdn.net/v/t31.0-8/18891870_1543998225611670_8032322982945740932_o.jpg?oh=b39d97a57807da61fbccf20c9301a70d&oe=5A78D305" />}/>
                <ListItem
                    primaryText="Bliss" rightIcon={<Add />}
                    leftAvatar={<Avatar src="https://scontent.fmex5-1.fna.fbcdn.net/v/t1.0-9/21557454_10214289061678366_2061811084061617122_n.jpg?oh=e4f4748d22179ef2cf8e5d44b53a0884&oe=5A66C49E" />}/>
                <ListItem
                    primaryText="Brenda" rightIcon={<Add />}
                    leftAvatar={<Avatar src="https://scontent.fmex5-1.fna.fbcdn.net/v/t1.0-9/12227223_877633965665326_4250458589751884486_n.jpg?oh=7fcb7fac010ede12bc5cbacd996f27d3&oe=5A77D8B1" />}/>
                <ListItem
                    primaryText="Smily" rightIcon={<Add />}
                    leftAvatar={<Avatar src="https://static.pexels.com/photos/355956/pexels-photo-355956.jpeg" />}/>
                <ListItem
                    primaryText="Saul" rightIcon={<Add />}
                    leftAvatar={<Avatar src="https://scontent.fmex5-1.fna.fbcdn.net/v/t1.0-9/16142841_740372726122044_8142325000326938887_n.jpg?oh=0dc0d24476b0385d65a8df29aab1b37e&oe=5A6D7BCD" />}/>
            </List>
            <Divider/>
            <Subheader>Usuarios Destacados</Subheader>
            <List>
                <ListItem
                    primaryText="Oswaldo" rightIcon={<Add />}
                    leftAvatar={<Avatar
                        src="https://scontent.fmex5-1.fna.fbcdn.net/v/t31.0-8/18891870_1543998225611670_8032322982945740932_o.jpg?oh=b39d97a57807da61fbccf20c9301a70d&oe=5A78D305" />}/>
                <ListItem
                    primaryText="Bliss" rightIcon={<Add />}
                    leftAvatar={<Avatar src="https://scontent.fmex5-1.fna.fbcdn.net/v/t1.0-9/21557454_10214289061678366_2061811084061617122_n.jpg?oh=e4f4748d22179ef2cf8e5d44b53a0884&oe=5A66C49E" />}/>
                <ListItem
                    primaryText="Brenda" rightIcon={<Add />}
                    leftAvatar={<Avatar src="https://scontent.fmex5-1.fna.fbcdn.net/v/t1.0-9/12227223_877633965665326_4250458589751884486_n.jpg?oh=7fcb7fac010ede12bc5cbacd996f27d3&oe=5A77D8B1" />}/>


            </List>
        </div>
    )
};

export default Recommendations;