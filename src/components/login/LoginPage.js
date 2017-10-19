import React, {Component} from 'react';
import { RaisedButton} from 'material-ui';
import './login.css';

class LoginPage extends Component {

    render() {
        console.log(this.props.match)
        return (
            <div className="login">
               <div className='login-box'>
                   {this.props.match.path==="/logIn"?<h2>Inicia Sesión</h2>:<h2>Regístrate</h2>}
                   <br/><br/>
                   <RaisedButton label="Facebook" primary={true} fullWidth={true} />
                   <br/><br/>
                   ó
                   <br/><br/>
                   <RaisedButton label="Google" secondary={true} fullWidth={true}/>


                   {/*<TextField
                       hintText="os@fixter.org"
                       floatingLabelText="Correo"
                   /><br />
                   <TextField
                       type="password"
                       hintText="*******"
                       floatingLabelText="Contraseña"
                   /><br />
                   <RaisedButton label="Inicia"  fullWidth={true}/>*/}
               </div>
            </div>
        )
    }
}

export default LoginPage;