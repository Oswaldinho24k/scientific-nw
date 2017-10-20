import React, {Component} from 'react';
import './chat.css';
import {GridTile, GridList, List, ListItem, Subheader, Avatar, Paper, Card, CardHeader, CardText, TextField} from 'material-ui';
import Bubble from 'material-ui/svg-icons/communication/chat-bubble';
import Person from 'material-ui/svg-icons/social/person';
import Dots from 'material-ui/svg-icons/navigation/more-vert';
import Face from 'material-ui/svg-icons/image/tag-faces';
import Mic from 'material-ui/svg-icons/hardware/keyboard-voice';




class ChatPage extends Component{
	render(){
		return(
			<div className="chat-page">
				<GridList  cols={3}  cellHeight={'auto'}>
					<GridTile cols={1} className="contacts-list">

					<div className="div-lista">
						<ListItem
							disabled
							primaryText="Usuario" rightIcon={<Dots />}
							leftAvatar={<Avatar icon={<Person/>} />}/>

						<Subheader>Contactos</Subheader>
						<List>

							<ListItem
								isKeyboardFocused={true}
								secondaryText="bla bla bla bla"
								primaryText="Oswaldo" rightIcon={<Bubble />}
								leftAvatar={<Avatar
									src="https://scontent.fmex5-1.fna.fbcdn.net/v/t31.0-8/18891870_1543998225611670_8032322982945740932_o.jpg?oh=b39d97a57807da61fbccf20c9301a70d&oe=5A78D305" />}/>
							<ListItem
								secondaryText="bla bla bla bla"
								primaryText="Bliss" rightIcon={<Bubble />}
								leftAvatar={<Avatar src="https://scontent.fmex5-1.fna.fbcdn.net/v/t1.0-9/21557454_10214289061678366_2061811084061617122_n.jpg?oh=e4f4748d22179ef2cf8e5d44b53a0884&oe=5A66C49E" />}/>
							<ListItem
								secondaryText="bla bla bla bla"
								primaryText="Brenda" rightIcon={<Bubble />}
								leftAvatar={<Avatar src="https://scontent.fmex5-1.fna.fbcdn.net/v/t1.0-9/12227223_877633965665326_4250458589751884486_n.jpg?oh=7fcb7fac010ede12bc5cbacd996f27d3&oe=5A77D8B1" />}/>
							<ListItem
								secondaryText="bla bla bla bla"
								primaryText="Oswaldo" rightIcon={<Bubble />}
								leftAvatar={<Avatar
									src="https://scontent.fmex5-1.fna.fbcdn.net/v/t31.0-8/18891870_1543998225611670_8032322982945740932_o.jpg?oh=b39d97a57807da61fbccf20c9301a70d&oe=5A78D305" />}/>
							<ListItem
								secondaryText="bla bla bla bla"
								primaryText="Bliss" rightIcon={<Bubble />}
								leftAvatar={<Avatar src="https://scontent.fmex5-1.fna.fbcdn.net/v/t1.0-9/21557454_10214289061678366_2061811084061617122_n.jpg?oh=e4f4748d22179ef2cf8e5d44b53a0884&oe=5A66C49E" />}/>
							<ListItem
								secondaryText="bla bla bla bla"
								primaryText="Brenda" rightIcon={<Bubble />}
								leftAvatar={<Avatar src="https://scontent.fmex5-1.fna.fbcdn.net/v/t1.0-9/12227223_877633965665326_4250458589751884486_n.jpg?oh=7fcb7fac010ede12bc5cbacd996f27d3&oe=5A77D8B1" />}/>
							<ListItem
								secondaryText="bla bla bla bla"
								primaryText="Oswaldo" rightIcon={<Bubble />}
								leftAvatar={<Avatar
									src="https://scontent.fmex5-1.fna.fbcdn.net/v/t31.0-8/18891870_1543998225611670_8032322982945740932_o.jpg?oh=b39d97a57807da61fbccf20c9301a70d&oe=5A78D305" />}/>
							<ListItem
								secondaryText="bla bla bla bla"
								primaryText="Bliss" rightIcon={<Bubble />}
								leftAvatar={<Avatar src="https://scontent.fmex5-1.fna.fbcdn.net/v/t1.0-9/21557454_10214289061678366_2061811084061617122_n.jpg?oh=e4f4748d22179ef2cf8e5d44b53a0884&oe=5A66C49E" />}/>
							<ListItem
								secondaryText="bla bla bla bla"
								primaryText="Brenda" rightIcon={<Bubble />}
								leftAvatar={<Avatar src="https://scontent.fmex5-1.fna.fbcdn.net/v/t1.0-9/12227223_877633965665326_4250458589751884486_n.jpg?oh=7fcb7fac010ede12bc5cbacd996f27d3&oe=5A77D8B1" />}/>


							<ListItem
								secondaryText="bla bla bla bla"
								primaryText="Oswaldo" rightIcon={<Bubble />}
								leftAvatar={<Avatar
									src="https://scontent.fmex5-1.fna.fbcdn.net/v/t31.0-8/18891870_1543998225611670_8032322982945740932_o.jpg?oh=b39d97a57807da61fbccf20c9301a70d&oe=5A78D305" />}/>
							<ListItem
								secondaryText="bla bla bla bla"
								primaryText="Bliss" rightIcon={<Bubble />}
								leftAvatar={<Avatar src="https://scontent.fmex5-1.fna.fbcdn.net/v/t1.0-9/21557454_10214289061678366_2061811084061617122_n.jpg?oh=e4f4748d22179ef2cf8e5d44b53a0884&oe=5A66C49E" />}/>
							<ListItem
								secondaryText="bla bla bla bla"
								primaryText="Brenda" rightIcon={<Bubble />}
								leftAvatar={<Avatar src="https://scontent.fmex5-1.fna.fbcdn.net/v/t1.0-9/12227223_877633965665326_4250458589751884486_n.jpg?oh=7fcb7fac010ede12bc5cbacd996f27d3&oe=5A77D8B1" />}/>
							<ListItem
								secondaryText="bla bla bla bla"
								primaryText="Oswaldo" rightIcon={<Bubble />}
								leftAvatar={<Avatar
									src="https://scontent.fmex5-1.fna.fbcdn.net/v/t31.0-8/18891870_1543998225611670_8032322982945740932_o.jpg?oh=b39d97a57807da61fbccf20c9301a70d&oe=5A78D305" />}/>
							<ListItem
								secondaryText="bla bla bla bla"
								primaryText="Bliss" rightIcon={<Bubble />}
								leftAvatar={<Avatar src="https://scontent.fmex5-1.fna.fbcdn.net/v/t1.0-9/21557454_10214289061678366_2061811084061617122_n.jpg?oh=e4f4748d22179ef2cf8e5d44b53a0884&oe=5A66C49E" />}/>
							<ListItem
								secondaryText="bla bla bla bla"
								primaryText="Brenda" rightIcon={<Bubble />}
								leftAvatar={<Avatar src="https://scontent.fmex5-1.fna.fbcdn.net/v/t1.0-9/12227223_877633965665326_4250458589751884486_n.jpg?oh=7fcb7fac010ede12bc5cbacd996f27d3&oe=5A77D8B1" />}/>
							<ListItem
								secondaryText="bla bla bla bla"
								primaryText="Oswaldo" rightIcon={<Bubble />}
								leftAvatar={<Avatar
									src="https://scontent.fmex5-1.fna.fbcdn.net/v/t31.0-8/18891870_1543998225611670_8032322982945740932_o.jpg?oh=b39d97a57807da61fbccf20c9301a70d&oe=5A78D305" />}/>
							<ListItem
								secondaryText="bla bla bla bla"
								primaryText="Bliss" rightIcon={<Bubble />}
								leftAvatar={<Avatar src="https://scontent.fmex5-1.fna.fbcdn.net/v/t1.0-9/21557454_10214289061678366_2061811084061617122_n.jpg?oh=e4f4748d22179ef2cf8e5d44b53a0884&oe=5A66C49E" />}/>
							<ListItem
								secondaryText="bla bla bla bla"
								primaryText="Brenda" rightIcon={<Bubble />}
								leftAvatar={<Avatar src="https://scontent.fmex5-1.fna.fbcdn.net/v/t1.0-9/12227223_877633965665326_4250458589751884486_n.jpg?oh=7fcb7fac010ede12bc5cbacd996f27d3&oe=5A77D8B1" />}/>


						</List>
					</div>
						
					</GridTile>
					<GridTile cols={2} >
						<div className="chat-box">
							<Paper zDepth={2}>
							<ListItem
			                	secondaryText="última vez hoy 10:15"
			                    primaryText="Oswaldo" rightIcon={<Dots />}
			                    leftAvatar={<Avatar
			                        src="https://scontent.fmex5-1.fna.fbcdn.net/v/t31.0-8/18891870_1543998225611670_8032322982945740932_o.jpg?oh=b39d97a57807da61fbccf20c9301a70d&oe=5A78D305" />}/>
			                
						   
						    
						  
						    
						    
					    	<div className="caja-texto">
					    		<div className="text text-left">
					    			lalalalala
					    		</div>
					    		<div className="text text-right">
					    			lolololoolololo
					    		</div>
					    		<div className="text text-left">
					    			lalalalala
					    		</div>
					    		<div className="text text-right">
					    			lolololoolololo
					    		</div>
					    		<div className="text text-left">
					    			lalalalala
					    		</div>
					    		<div className="text text-right">
					    			lolololoolololo
					    		</div>

					    	</div>
					    	<div className="caja-mensaje">
					    		<div>
					    			<Face/>
					    		</div>
					    		<div className="el-input">
					    			<TextField
					    			multiLine={true}
					    			fullWidth={true}/>
					    		</div>
					    		<div>
					    			<Mic/>
					    		</div>
					    	</div>
						    
						    
						  </Paper>
						</div>
					</GridTile>
				</GridList>
			</div>
		)
	}
}

export default ChatPage;