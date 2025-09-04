import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ChatPage from './pages/ChatPage'
import NewChatPage from './pages/NewChatPage.jsx'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ChatPage />} />
        <Route path="/new" element={<NewChatPage />} />
      </Routes>
    </Router>
  );
}
