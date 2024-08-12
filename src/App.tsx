import React from 'react';
import ChatContainer from './components/ChatContainer';

const App: React.FC = () => {
  return (
    <div className="h-screen w-screen bg-black text-white">
      <ChatContainer />
    </div>
  );
};

export default App;
