import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';

const KEY = 'AIzaSyB6Sx1NOW_vLYe-9d-zl8R2Lp6I9NhpUzM';

class App extends React.Component {
  state = { videos: [] };

  onTermSubmit = async term => {
    const response = await youtube.get('/search', {
      params: {
        q: term,
        part: 'snippet',
        type: 'video',
        maxResults: '10',
        key: KEY
      }
    })
    this.setState({ videos: response.data.items })
  }

  render() {
    return (
      <div className='ui container'>
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <VideoList videos={this.state.videos} />
      </div>
    )
  }
}

export default App;