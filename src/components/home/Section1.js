import React from 'react';
import {GridList, GridTile} from 'material-ui';

const Section1 = ({props}) => {
    return (
        <div className="section1">
            <h2>This is for you!</h2>
            <GridList cellHeight={'auto'}>
                <GridTile>
                    <div className="img-cont-s1">
                        <img className="img-s1" src="https://static.pexels.com/photos/287227/pexels-photo-287227.jpeg" alt=""/>
                    </div>
                </GridTile>
                <GridTile>
                    <h3>You can</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquid, aut debitis distinctio eum fugit harum hic itaque libero nostrum obcaecati perferendis porro praesentium quaerat quas quod similique tempora tempore.</p>
                </GridTile>
            </GridList>
            <GridList cellHeight={'auto'}>
                <GridTile>
                    <h3>You can</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aspernatur autem consectetur corporis ex excepturi, fugiat harum, ipsum laborum laudantium magnam maiores odit porro quasi quibusdam rerum velit. Inventore, itaque.</p>
                </GridTile>
                <GridTile>
                    <div className="img-cont-s1">
                        <img className="img-s1" src="https://static.pexels.com/photos/287227/pexels-photo-287227.jpeg" alt=""/>
                    </div>
                </GridTile>
            </GridList>
            <GridList cellHeight={'auto'}>
                <GridTile>
                    <div className="img-cont-s1">
                        <img className="img-s1" src="https://static.pexels.com/photos/287227/pexels-photo-287227.jpeg" alt=""/>
                    </div>
                </GridTile>
                <GridTile>
                    <h3>You can</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid amet architecto beatae consequatur ducimus eius, iste mollitia quas quidem reiciendis. Aspernatur dolore facere fugit modi nihil numquam optio rem sint.</p>
                </GridTile>
            </GridList>
        </div>
    )
};

export default Section1;