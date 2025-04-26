import React, { useState } from "react";
import axios from "axios";


const TaskMediaUpload = ({ taskId }) => {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const uploadMedia = async () => {
    if (!file || !taskId) {
      setMessage("Please select a file.");
      return;
    }
    console.log("Uploading file for Task ID:", taskId);


    const formData = new FormData();
    formData.append("file", file);
    formData.append("taskId", taskId);

    try {
      const res = await axios.post("http://localhost:8080/api/media/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setMessage(res.data);
    } catch (error) {
            console.error("Upload error:", error);
            if (error.response && error.response.data && error.response.data.message) {
              alert("Upload failed: " + error.response.data.message);
            } else {
              alert("Upload failed: " + error.message);
            }
          
    }
  };

  return (
    <div style={{background:"#3B4F71",padding:"0.6rem",borderRadius:"1rem"}}>
      <input style={{fontSize:"1rem"}} type="file" accept="audio/*,video/*" onChange={handleFileChange} />
      <button style={{fontSize:"1rem",padding:"5px 10px",border:"None",borderRadius:"0.5rem",background:"#F3F4F6"}} onClick={uploadMedia}>Upload</button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default TaskMediaUpload;
