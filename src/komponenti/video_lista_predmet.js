import React from 'react';

const VideoListaPredmet = ({video, naSelektiranoVideo}) => {

	const slikickaUrl = video.snippet.thumbnails.default.url;

	return (
		<li
			onClick={() => naSelektiranoVideo(video)}
			className="list-group-item">
			<div className="video-list media">
				<div className="media-left">
					<img 
						className="media-object" 
						src={slikickaUrl} 
					/>
				</div>

				<div className="media-body">
					<div className="media-heading">
						{video.snippet.title}
					</div>
				</div>
			</div>
		</li>
	);
};

export default VideoListaPredmet;