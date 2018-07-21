import React from 'react';
import { Link } from 'react-router-dom';

const AlbumCard = ({ album, match }) => <Link to={`${match.url}/${album.id}`} className="column card">
    <img src={album.cover} alt="" />
    <p className="albums-card-name">{album.name}</p>
    <p className="albums-card-bandname">{album.albumname}</p>
    <div className="albums-card-divider"></div>
    <div className="albums-card-info">
        <div>
            <p>{album.year}</p>
            <span>Year</span>
        </div>
        <div>
            <p>{album.genre}</p>
            <span>Genre</span>
        </div>
        <div>
            <p>{album.totaltime}</p>
            <span>Playing time</span>
        </div>
    </div>
</Link>;

export default AlbumCard;