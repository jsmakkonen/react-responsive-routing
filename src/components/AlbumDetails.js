import React from 'react';
import AlbumCard from './AlbumCard';

const AlbumDetails = ({ album, match }) => <div className="album-details">
    <h3 className="is-size-3 has-text-centered">Details</h3>
    <AlbumCard album={album} match={match} />
</div>;

export default AlbumDetails;