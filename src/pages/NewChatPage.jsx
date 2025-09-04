import { useState } from "react";   
import ChatList from "./ChatList"
import NewChat from "./NewChat"
import data from "../data/dummyData.json"
export default function NewChatPage() {
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
                <NewChat  />
            </div>
            
        </div>
    )
}
