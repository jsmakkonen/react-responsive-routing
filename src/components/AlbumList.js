import React from 'react';
import AlbumCard from './AlbumCard';

const listOfAlbumsPerRow = (albums, row, itemsPerRow, match) =>
    albums
        .slice((row - 1) * itemsPerRow, row * itemsPerRow)
        .map(album => <AlbumCard album={album} key={album.id} match={match} />);

const listOfRows = (albums, itemsPerRow, match) => {
    const numberOfAlbums = albums.length;
    const rows = Math.ceil(numberOfAlbums / itemsPerRow);

    return Array(rows)
        .fill().map((val, rowIndex) => (
            <div className="columns">
                {listOfAlbumsPerRow(albums, rowIndex + 1, itemsPerRow, match)}
            </div>
        ));
};

const AlbumList = ({ albums, itemsPerRow = 2, match }) => (
    <div className="cards">
        <h3 className="is-size-3 has-text-centered">Albums</h3>
        {listOfRows(albums, itemsPerRow, match)}
    </div>
);

export default AlbumList;