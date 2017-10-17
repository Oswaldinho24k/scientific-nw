import React, {Component} from 'react';
import Background from "./Background";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Parallax from './Parallax';

class HomePage extends Component {
    render() {
        //let video = "https://firebasestorage.googleapis.com/v0/b/functions-3452e.appspot.com/o/Techknow%20-%20The%20Science%20of%20the%20Senses%20promo.mp4?alt=media&token=88329c07-0d42-431e-8335-108ad850473d";
        let video = "https://firebasestorage.googleapis.com/v0/b/functions-3452e.appspot.com/o/Rick%20and%20Morty%20Exquisite%20Corpse%20-%20Rick%20and%20Morty%20-%20Adult%20Swim.mp4?alt=media&token=75a781a4-a13e-4bae-a7cf-5ace90811510";
        return (
            <div>
                <Background video={video}/>
                <Section1/>
                <Parallax/>
                <Section2/>
            </div>
        )
    }
}
export default HomePage;