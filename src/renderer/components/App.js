import React, { PureComponent } from 'react';
import spotify from 'spotify-node-applescript';

class App extends PureComponent {
  state = {
    track: {},
  };

  componentWillMount() {
    this.getCurrentTrack();
  }

  getCurrentTrack = () => {
    spotify.getTrack((err, track) => {
      if (err) {
        return console.log('err:', err);
      }

      return this.setState({
        track,
      });
    });
  };

  render() {
    return (
      <div>
        <h1>Music {this.state.track.artist} - {this.state.track.name}</h1>
      </div>
    );
  }
}

export default App;
