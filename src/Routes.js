import React from 'react';
import {Switch, Route} from 'react-router-dom';
import UserProfilePage from "./components/userprofile/UserProfilePage";
import HomePage from "./components/home/HomePage";
import LoginPage from "./components/login/LoginPage";
import NewsfeedPage from "./components/newsfeed/NewsfeedPage";
import NewPostPage from "./components/newsfeed/NewPostPage";
import ChatPage from './components/chat/ChatPage';
//import Register from "./components/login/Register";


export const Routes = () => (
    <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/userprofile' component={UserProfilePage}/>
        <Route path='/logIn' component={LoginPage}/>
        <Route path='/register' component={LoginPage}/>
        <Route exact path="/new" component={NewPostPage}/>
        <Route path='/news' component={NewsfeedPage}/>
        <Route path='/chat' component={ChatPage}/>


    </Switch>
);

