import React from 'react';
import ChatContainer from './components/ChatContainer';
import MarkdownEditor from './components/chatComponents/MarkDownEditor';
import { Toaster } from 'react-hot-toast';

const App: React.FC = () => {
  return (
    <div className="h-screen w-screen bg-black text-white">
      <Toaster/>
      <ChatContainer />
    </div>
  );
};

export default App;
