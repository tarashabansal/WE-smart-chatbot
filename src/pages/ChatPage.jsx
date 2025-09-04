import { Link } from "react-router-dom";
import { useState } from "react";   
import ChatList from "./ChatList"
import ChatWindow from "./ChatWindow"
import data from "../data/dummyData.json"
export default function ChatPage() {
    const {chats, messages} = data
    const [selectedChatId, setSelectedChatId] = useState(chats[0]?.id);
    return(
        
        <div className="flex h-screen w-screen ">
            <div className="w-1/5 max-w-[500px] border-r border-gray-200 overflow-y-auto">
                <ChatList
                chats={data.chats}
                selectedChatId={selectedChatId}
                onSelectChat={setSelectedChatId}
                />
            </div>

            <div className="flex-1">
                <ChatWindow chatId={selectedChatId} />
            </div>
            
        </div>
    )
}
