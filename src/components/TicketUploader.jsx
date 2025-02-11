import { useState } from "react";
import "../index.css";

const TicketUploader = ({ onUpload }) => {
  const [image, setImage] = useState(null);
  const [uploadedUrl, setUploadedUrl] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleImageUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    setImage(file);
    setLoading(true);
    setError("");

    const formData = new FormData();
    formData.append("file", file);
    formData.append(
      "upload_preset",
      import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET
    );

    try {
      const response = await fetch(
        `https://api.cloudinary.com/v1_1/${
          import.meta.env.VITE_CLOUDINARY_CLOUD_NAME
        }/image/upload`,
        { method: "POST", body: formData }
      );

      if (!response.ok) {
        throw new Error(
          `Upload failed: ${response.status} - ${response.statusText}`
        );
      }

      const data = await response.json();
      if (!data.secure_url) {
        throw new Error("No secure URL received from Cloudinary.");
      }

      setUploadedUrl(data.secure_url);
      onUpload(data.secure_url);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Hide Ticket Upload if an Image is Uploaded */}
      {!uploadedUrl && (
        <div className="ticket-upload">
          <label htmlFor="file" className="upload-label">
            Drag & drop or click to upload
            <input
              type="file"
              id="file"
              accept="image/*"
              onChange={handleImageUpload}
              style={{ display: "none" }}
            />
          </label>
        </div>
      )}

      {loading && <p style={{color:"#fff", fontWeight:"bold", fontSize:"20px"}}>Uploading...</p>}
      {error && <p className="error-message">{error}</p>}

      {/* Clickable Uploaded Image for Re-upload */}
      {uploadedUrl && (
        <div onClick={() => document.getElementById("file").click()} style={{ cursor: "pointer" }}>
          <img
            src={uploadedUrl}
            alt="Uploaded Profile"
            className="uploaded-profile-image"
          />
        </div>
      )}

      {/* Hidden File Input for Re-upload */}
      <input
        type="file"
        id="file"
        accept="image/*"
        onChange={handleImageUpload}
        style={{ display: "none" }}
      />
    </>
  );
};

export default TicketUploader;
