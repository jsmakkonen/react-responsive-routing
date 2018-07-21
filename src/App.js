import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Media from 'react-media';
import Header from './components/Header';
import Footer from './components/Footer';
import AlbumList from './components/AlbumList';
import AlbumDetails from './components/AlbumDetails';
import AlbumDashboard from './components/AlbumDashboard';
import './App.css';

export default class App extends Component {
  state = {
    title: 'React responsive routing',
    subtitle: 'React App - 2018',
    albums: [
      {
        id: 2,
        avatar: 'https://upload.wikimedia.org/wikipedia/fi/4/47/Eclipse-albumi.jpg',
        name: 'Amorphis',
        albumname: 'Eclipse',
        year: '2006',
        genre: 'Melodic metal',
        totaltime: '42 minutes'
      },
      {
        id: 3,
        avatar: 'https://upload.wikimedia.org/wikipedia/fi/thumb/1/1d/Ghost_Reveries-cover.jpg/260px-Ghost_Reveries-cover.jpg',
        name: 'Opeth',
        albumname: 'Ghost Reveries',
        year: '2005',
        genre: 'Progressive metal',
        totaltime: '66 minutes'
      },
      {
        id: 4,
        avatar: 'https://upload.wikimedia.org/wikipedia/fi/thumb/9/98/Amorphis_-_Queen_of_Time.jpg/260px-Amorphis_-_Queen_of_Time.jpg',
        name: 'Amorphis',
        albumname: 'Queen of Time',
        year: '2018',
        genre: 'Melodic metal',
        totaltime: '58 minutes'
      },
      {
        id: 5,
        avatar: 'https://upload.wikimedia.org/wikipedia/fi/thumb/7/78/Behemoth_Demigod.jpg/260px-Behemoth_Demigod.jpg',
        name: 'Behemoth',
        albumname: 'Demigod',
        year: '2004',
        genre: 'Death metal',
        totaltime: '41 minutes'
      }
    ]
  };

  render() {
    return (
      <div className="App">
      <Header title={this.state.title} />
        <Media query="(max-width: 599px)">
          {matches =>
            matches ? (
                <Switch>
                <Route
                  exact
                  path="/albums"
                  render={props => (
                    <AlbumList albums={this.state.albums} {...props} />
                  )}
                />
            <Route
                  path="/albums/:id"
                  render={props => (
                    <AlbumDetails
                      album={
                        this.state.albums.filter(
                          album =>
                            album.id === parseInt(props.match.params.id, 10)
                        )[0]
                      }
                      {...props}
                    />
                  )}
                />
                <Redirect from="/" to="/albums"/>
                <Redirect from="/dashboard" to="/albums"/>
              </Switch>
            ) : (
              <Switch>
                <Route
                  path="/dashboard"
                  render={props => (
                    <AlbumDashboard albums={this.state.albums} {...props} />
                  )}
                />
                <Redirect from="/" to="/dashboard"/>
                <Redirect from="/albums" to="/dashboard"/>
              </Switch>
            )
          }
        </Media>
        <Footer subtitle={this.state.subtitle} />
      </div>
    );
  }
}