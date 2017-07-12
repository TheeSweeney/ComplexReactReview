import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar'
import VideoList from './components/video_list'
import config from './config.js';

const API_KEY = config.key;

class App extends Component {
	constructor(props){
		super(props)

		this.state = {
			videos : []
		}


		YTSearch({key: API_KEY, term: 'complex media'}, (videos) => {
			this.setState({ videos })
		})
	}

	render(){
		return (
			<div>
				<SearchBar />
				<VideoList videos={this.state.videos} />
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector('.container'));