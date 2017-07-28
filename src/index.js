import _ from 'lodash';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTPrebaruvanje from 'youtube-api-search';
import Prebaruvac from './komponenti/prebaruvac';
import VideoLista from './komponenti/video_lista';
import VideoDetal from './komponenti/video_detal';
const APIKluc = 'AIzaSyDxugy2nMEHhW_6s9jeHFPIAxKb-k7rG3U';

class App extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			videa: [],
			selektiranoVideo: null
		};

		this.videoPrebaruvac('Leb i sol full album');
	}

	videoPrebaruvac(termin) {
				YTPrebaruvanje({key: APIKluc, term:termin}, (videa) => {
			this.setState({
				videa:videa,
				selektiranoVideo: videa[0]
			});
		});
	}

	render() {

		const videoPrebaruvac = _.debounce((termin) => {this.videoPrebaruvac(termin) }, 300);

		return (
			<div>
				<Prebaruvac naPromenaTermin={videoPrebaruvac} />
				<VideoDetal video={this.state.selektiranoVideo} />
				<VideoLista 
					naSelektiranoVideo={selektiranoVideo => this.setState({selektiranoVideo})}
					videa={this.state.videa} />
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector('.sodrzina'))