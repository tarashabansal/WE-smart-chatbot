import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ChatList from './pages/ChatList'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ChatList />} />
      </Routes>
    </Router>
  );
}
