import React, { useState } from 'react';
import './FileUpload.css'
const FileUploadPage: React.FC = () => {
    const [file, setFile] = useState<File | null>(null);
    const [uploading, setUploading] = useState(false);
    const [progress, setProgress] = useState(0);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = e.target.files && e.target.files[0];
        if (selectedFile) {
            setFile(selectedFile);
        }
    };

    const handleUpload = () => {
        if (file) {
            setUploading(true);
            simulateUpload();
        }
    };

    const simulateUpload = () => {
        let currentProgress = 0;
        const interval = setInterval(() => {
            currentProgress += 10;
            if (currentProgress >= 100) {
                clearInterval(interval);
                setUploading(false);
                setProgress(0);
                setFile(null);
            } else {
                setProgress(currentProgress);
            }
        }, 500);
    };

    return (
        <div className="container p-5 w-50">
            <h2>File Upload</h2>
            <input type="file" onChange={handleFileChange} />
            <button className="green rounded" onClick={handleUpload}>Upload</button>
            {uploading && (
                <div className="progress">
                    <div
                        className="progress-bar green"
                        role="progressbar"
                        style={{ width: `${progress}%` }}
                        aria-valuenow={progress}
                        aria-valuemin={0}
                        aria-valuemax={100}
                    >
                        {progress}%
                    </div>
                </div>
            )}
        </div>
    );
};

export default FileUploadPage;
