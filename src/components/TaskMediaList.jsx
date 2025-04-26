import React, { useEffect, useState } from "react";
import axios from "axios";
import "./TaskMediaList.css";

const TaskMediaList = ({ taskId }) => {
  const [mediaList, setMediaList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("all"); // "all", "audio", "video"

  useEffect(() => {
    const fetchMedia = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/media/task/${taskId}`);
        setMediaList(response.data);
      } catch (error) {
        console.error("Error fetching task media:", error);
      } finally {
        setLoading(false);
      }
    };

    if (taskId) fetchMedia();
  }, [taskId]);

  const filteredMedia = mediaList.filter(media => {
    if (filter === "audio") return media.fileType.startsWith("audio");
    if (filter === "video") return media.fileType.startsWith("video");
    return true; // show all
  });

  return (
    <div className="media-list-container">
      <h3 style={{margin:"20px 0"}}>Uploaded Media</h3>

      {/* Toggle Buttons */}
      <div className="media-toggle-buttons">
        <button
          className={filter === "all" ? "active" : ""}
          onClick={() => setFilter("all")}
        >
          All
        </button>
        <button
          className={filter === "audio" ? "active" : ""}
          onClick={() => setFilter("audio")}
        >
          🎵 Audio
        </button>
        <button
          className={filter === "video" ? "active" : ""}
          onClick={() => setFilter("video")}
        >
          🎬 Video
        </button>
      </div>
      <br />

      {loading ? (
        <p>Loading media...</p>
      ) : filteredMedia.length === 0 ? (
        <p>No media available for selected type.</p>
      ) : (
        <div className="media-grid">
          {filteredMedia.map((media) => (
            <div className="media-card" key={media.id}>
              {media.fileType.startsWith("video") ? (
                <video width="50%" controls>
                  <source
                    src={`http://localhost:8080/api/media/files/${media.fileName}`}
                    type={media.fileType}
                  />
                  Your browser does not support the video tag.
                </video>
              ) : media.fileType.startsWith("audio") ? (
                <audio controls>
                  <source
                    src={`http://localhost:8080/api/media/files/${media.fileName}`}
                    type={media.fileType}
                  />
                  Your browser does not support the audio element.
                </audio>
              ) : (
                <p>Unsupported media type</p>
              )}
              <p>{media.fileName}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TaskMediaList;
