import { Link } from "react-router-dom";
import data from "../data/dummyData.json";
import '../index.css'

const { chats, messages } = data;

export default function ChatList() {
    return (
    <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Chats</h1>
        <div className="space-y-2">
        {chats.map(chat => (
            <div>
                <div className="font-semibold">{chat.name}</div>
                <div className="text-gray-600">{chat.lastMessage}</div>
                <div className="text-gray-400 text-sm">{chat.time}</div>
            </div>
            
        ))}
        </div>

        <Link
        to="/new"
        className="fixed bottom-6 right-6 bg-blue-500 text-white px-4 py-2 rounded-full shadow"
        >
        + New Chat
        </Link>
    </div>
    );
}
