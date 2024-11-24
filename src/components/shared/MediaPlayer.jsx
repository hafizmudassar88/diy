"use client";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Lottie from "lottie-react";

const MediaPlayer = ({ src, loop = true, autoplay = true, className = "" }) => {
  const [animationData, setAnimationData] = useState(null);
  const [error, setError] = useState(false);
  const fileType = src.split(".").pop(); // Determine the file extension

  useEffect(() => {
    const loadMedia = async () => {
      if (fileType === "json") {
        try {
          const response = await fetch(src);
          if (!response.ok)
            throw new Error(`Failed to fetch: ${response.statusText}`);
          const data = await response.json();
          setAnimationData(data);
        } catch (err) {
          setError(true);
          console.error(err);
        }
      }
    };

    loadMedia();
  }, [src, fileType]);

  return (
    <div className={className}>
      {error ? (
        <p className="text-red-500">
          Failed to load media. Please try again later.
        </p>
      ) : fileType === "json" && animationData ? (
        <Lottie animationData={animationData} loop={loop} autoplay={autoplay} />
      ) : fileType === "mp4" ? (
        <video
          src={src}
          controls
          loop={loop}
          autoPlay={autoplay}
          className="w-full h-auto"
        />
      ) : (
        <p className="text-red-500">Unsupported media type: {fileType}</p>
      )}
    </div>
  );
};

export default dynamic(() => Promise.resolve(MediaPlayer), { ssr: false });
