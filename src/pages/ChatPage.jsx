import { useState } from "react";   
import { Link } from "react-router-dom";
import ChatList from "./ChatList"
import ChatWindow from "./ChatWindow"
import data from "../data/dummyData.json"
export default function ChatPage() {
    const {chats, messages} = data
    const [selectedChatId, setSelectedChatId] = useState(0);
    return(
        
        <div className="flex h-screen w-screen ">
            <div className="w-1/5 max-w-[500px] border-r border-gray-200 overflow-y-auto">
                <ChatList
                chats={data.chats}
                selectedChatId={selectedChatId}
                onSelectChat={setSelectedChatId}
                />
                <div className="flex mt-auto p-2">
                <Link to="/new" className=" bg-blue-500 text-white px-4 py-2 rounded-full shadow " >
                    + New Chat
                </Link>
        </div>
            </div>

            <div className="flex-1">
                <ChatWindow chatId={selectedChatId} />
            </div>
            
        </div>
    )
}
