import React from 'react';
import VideoListaPredmet from './video_lista_predmet';

const VideoLista = (props) => {

	const VideoPredmeti = props.videa.map((video) => {
		return (
			<VideoListaPredmet 
				naSelektiranoVideo={props.naSelektiranoVideo}
				key={video.etag} 
				video={video} 
			/>
		);
	});

	return (
		<ul className="col-md-4 list-group">
			{VideoPredmeti}
		</ul>
	);
};

export default VideoLista;