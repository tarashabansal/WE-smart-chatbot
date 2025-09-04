import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ChatPage from './pages/ChatPage'
import NewChat from './pages/NewChat'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ChatPage />} />
        <Route path="/new" element={<NewChat />} />
      </Routes>
    </Router>
  );
}
