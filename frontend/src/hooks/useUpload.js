import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function useUpload() {
  const navigate = useNavigate();

  const fileInputRef = useRef(null);

  const [selectedFile, setSelectedFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);

  const openFinder = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    setSelectedFile(file);

    startFakeUpload();
  };

  const startFakeUpload = () => {
    setUploading(true);

    let value = 0;

    const interval = setInterval(() => {

      value += 10;

      setProgress(value);

      if (value >= 100) {

        clearInterval(interval);

        setTimeout(() => {

          navigate("/processing");

        }, 1000);

      }

    }, 300);
  };

  return {
    fileInputRef,
    selectedFile,
    uploading,
    progress,
    openFinder,
    handleFileChange,
  };
}