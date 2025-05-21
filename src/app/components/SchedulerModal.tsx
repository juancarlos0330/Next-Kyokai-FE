'use client';

import React, { useEffect, useRef, useState } from 'react';

export default function SchedulerModal({
  url,
  onClose,
  type,
}: {
  url: string;
  onClose: () => void;
  type: 'free' | 'pay' | '';
}) {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [currentUrl, setCurrentUrl] = useState(url);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setCurrentUrl(url);
    setIsLoading(true); // reset loading when a new URL is opened
  }, [url]);

  const handleIframeLoad = () => {
    const iframe = iframeRef.current;
    setIsLoading(false); // loading complete

    try {
      const iframeUrl = iframe?.contentWindow?.location.href;
      if (iframeUrl?.includes('confirmed=1')) {
        onClose(); // close on success
      }
    } catch (err) {
      // Cross-origin access likely; fallback logic or ignore
    }
  };

  if (!url) return null;

  return (
    <div className="scheduler-modal fixed inset-0 bg-white bg-opacity-50 flex items-center justify-center z-[9999]">
      <div
        className="relative w-[90%] h-[90%] rounded-lg shadow-lg overflow-hidden"
        style={{
          backgroundColor:
            type === 'pay' ? '#fdf3f3' : type === 'free' ? '#f1fdf3' : '#ffffff',
        }}
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-4 text-2xl font-bold text-gray-700 z-10"
        >
          ×
        </button>

        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-80 z-10">
            <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-20 w-20 animate-spin border-t-blue-500"></div>
          </div>
        )}

        <iframe
          ref={iframeRef}
          onLoad={handleIframeLoad}
          src={currentUrl}
          className="w-full h-full border-none"
        />
      </div>
    </div>
  );
}