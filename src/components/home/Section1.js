import React from 'react';
import {GridList, GridTile} from 'material-ui';

const Section1 = ({props}) => {
    return (
        <div className="section1">
            <h2>SNW es muy fácil de usar!</h2>
            <p>en serio, muy fácil</p>
            <br/><br/>
            <GridList cellHeight={'auto'}>
                <GridTile>
                    <div className="img-cont-s1">
                        <img className="img-s1" src="https://static.pexels.com/photos/7096/people-woman-coffee-meeting.jpg" alt=""/>
                    </div>
                </GridTile>
                <GridTile>
                    <h3>No es cualquier red social</h3>
                    <p>
                        SNW es una red social enfocada en compartir conocimiento a partir de las experiencias y estudios de profesionales que ya están registrados
                    </p>
                </GridTile>
            </GridList>
            <GridList cellHeight={'auto'}>
                <GridTile>
                    <h3>Comparte lo que quieras</h3>
                    <p>
                        Puedes publicar texto, Imágenes, Video, Archivos, Enlaces, Citas y hasta chatear.
                    </p>
                </GridTile>
                <GridTile>
                    <div className="img-cont-s1">
                        <img className="img-s1" src="https://static.pexels.com/photos/351265/pexels-photo-351265.jpeg" alt=""/>
                    </div>
                </GridTile>
            </GridList>
            <GridList cellHeight={'auto'}>
                <GridTile>
                    <div className="img-cont-s1">
                        <img className="img-s1" src="https://static.pexels.com/photos/24576/pexels-photo.jpg" alt=""/>
                    </div>
                </GridTile>
                <GridTile>
                    <h3>Contenido Pro</h3>
                    <p>
                        Encuentra toda información relacionada a tus gustos o gente que tu conoces y ayuda a compartirla para que mas personas la vean
                    </p>
                </GridTile>
            </GridList>
        </div>
    )
};

export default Section1;