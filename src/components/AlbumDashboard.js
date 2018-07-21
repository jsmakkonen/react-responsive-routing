import React from 'react';
import { Route } from 'react-router-dom';
import AlbumList from './AlbumList';
import AlbumDetails from './AlbumDetails';

const AlbumDashboard = ({ albums, album, match }) => (
    <div className="columns">
        <div className="column">
            <AlbumList albums={albums} match={match} />
        </div>
        <div className="column">
            <Route
                path={match.url + '/:id'}
                render={props => (
                    <AlbumDetails
                        album={
                            albums.filter(
                                album => album.id === parseInt(props.match.params.id, 10)
                            )[0]
                        }
                        match={match}
                    />
                )}
            />
        </div>
    </div>
);

export default AlbumDashboard;