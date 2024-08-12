import React from 'react';
import ChatContainer from './components/ChatContainer';
import MarkdownEditor from './components/chatComponents/MarkDownEditor';

const App: React.FC = () => {
  return (
    <div className="h-screen w-screen bg-black text-white">
      <ChatContainer />
    </div>
  );
};

export default App;
