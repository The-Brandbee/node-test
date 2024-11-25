import React, { useEffect } from 'react';

const ElevenLabsConvAI = ({ agentId }) => {
  useEffect(() => {
    // Create script element
    const script = document.createElement('script');
    script.src = 'https://elevenlabs.io/convai-widget/index.js';
    script.async = true;
    script.type = 'text/javascript';
    
    // Create widget element
    const widget = document.createElement('elevenlabs-convai');
    widget.setAttribute('agent-id', agentId);
    
    // Add widget to designated container
    const container = document.getElementById('elevenlabs-widget-container');
    if (container) {
      container.appendChild(widget);
    }
    
    // Add script to document
    document.body.appendChild(script);

    // Cleanup function
    return () => {
      document.body.removeChild(script);
      if (container && container.contains(widget)) {
        container.removeChild(widget);
      }
    };
  }, [agentId]); // Re-run effect if agentId changes

  return <div id="elevenlabs-widget-container"></div>;
};

export default ElevenLabsConvAI;