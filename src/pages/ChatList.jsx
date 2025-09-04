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
            <div className="flex items-center gap-3 p-4 rounded-lg shadow hover:bg-gray-100">
                <img src={chat.profile_picture} alt="" className="w-10 h-10 rounded-full object-cover"/>
                <div className="flex-1">
                <div className="flex items-center gap-2">
                    <span className="font-semibold">{chat.name}</span>
                    <span className="text-gray-400 text-xs">{chat.time}</span>
                </div>
                <div className="text-gray-600 text-sm">{chat.lastMessage}</div>
            </div>
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
