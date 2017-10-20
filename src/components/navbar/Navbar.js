import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Toolbar, ToolbarGroup,  MenuItem, IconMenu, RaisedButton, ToolbarTitle, IconButton, Avatar} from 'material-ui';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import './navbar.css';
import Person from 'material-ui/svg-icons/social/person';


class Navbar extends Component {
    render() {
        let user = false;
        return (
            <div className="navbar">
                <Toolbar>
                   <ToolbarGroup>
                       <Link to="/" className="link-nav">
                           <ToolbarTitle text="Scientific-NW" />
                       </Link>
                   </ToolbarGroup>
                    {user ?
                        <ToolbarGroup>

                            <Link to="/register" className="link-nav">
                                <RaisedButton label="Regístrate" primary={true} />
                            </Link>
                            <span className="separador-nav">|</span>
                            <Link to="/logIn" className="link-nav">
                                <RaisedButton label="Inicia" primary={true} />
                            </Link>
                        </ToolbarGroup>
                        :
                        <ToolbarGroup>
                            <Link to="/news" className="link-nav">
                                <RaisedButton label="Descubre" primary={true} />
                            </Link>
                            <span className="separador-nav">|</span>
                            <Avatar
                                icon={<Person />}
                                size={50}
                            />
                            <IconMenu
                            iconButtonElement={
                                <IconButton touch={true}>
                                    <NavigationExpandMoreIcon />
                                </IconButton>
                            }
                                >
                                <Link to="/userprofile" className="link-nav">
                                    <MenuItem primaryText="Perfil" />
                                </Link>
                                <Link to="/chat" className="link-nav">
                                    <MenuItem primaryText="Chat" />
                                </Link>
                                <MenuItem primaryText="Cerrar Sesión" />
                            </IconMenu>
                        </ToolbarGroup>}
                </Toolbar>
            </div>
        )
    }
}

export default Navbar;