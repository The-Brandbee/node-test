// pages/your-page.tsx
import ElevenLabsWidget from './ElevenLabsWidget';

const YourPage = () => {
  const handleWidgetLoad = () => {
    console.log('Convai widget loaded successfully');
  };

  return (
    <div>
     
      <ElevenLabsWidget 
        agentId="ovxM39shfsztQvLmKTuz"  // Replace with your actual agent ID
        onLoad={handleWidgetLoad}  // Optional callback on load
      />
    </div>
  );
};

export default YourPage;