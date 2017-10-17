import React, {Component} from 'react';
import {GridTile, GridList} from 'material-ui';
import './userprofile.css';

class UserProfilePage extends Component {
    render() {
        return (
            <div className="userprofile">
                <GridList cellHeight={'auto'} cols={3}>
                    <GridTile cols={1}>
                        La foto
                    </GridTile>
                    <GridTile cols={2}>
                        mas datitos
                    </GridTile>
                </GridList>
            </div>
        )
    }
}

export default UserProfilePage;