import React, { useEffect, useState } from "react";
import YouTube from "react-youtube";
import { getLatestVideos } from "../../api/YoutubeData";
import { formatDate } from "../../utils/formatDate";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import "./Programs.css"

const LatestVideo = () => {
  const [videos, setVideos] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLatest = async () => {
      try {
        const latestVideos = await getLatestVideos(3);
        setVideos(latestVideos);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchLatest();
  }, []);

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="latest-videos">
        <h2 className="title__latestVideo">Video Terbaru</h2>
        <div className="wrapper-latestVideo">
            {videos.length > 0 ? (
                videos.map((video) => (
                <div key={video.id.videoId} className="latest-video__card">
                    <p className="subtitle-video">
                    {formatDate(video.snippet.publishedAt)}
                    </p>
                    <YouTube
                    className="latest-video"
                    videoId={video.id.videoId}
                    opts={{
                        height: "230",
                        width: "300",
                        playerVars: {
                            autoplay: 0,
                        },
                    }}
                        />
                    <h3 className="title-video">{video.snippet.title}</h3>
                </div>
                ))
            ) : (
                <p>Loading Videos...</p>
            )}
            <a href="https://www.youtube.com/@Apmexplorereborn" target="__blank" className="wrapper-seeAll-video">
                <FaRegArrowAltCircleRight className="icon-seeAll-video" />
                <span className="title-seeAll-video">Lihat Semua</span>
            </a>
        </div>
    </div>
  );
};

export default LatestVideo;
