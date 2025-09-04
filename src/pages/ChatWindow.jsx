import { Tooltip } from "react-tooltip";
import { useState, useEffect } from "react";
import data from "../data/dummyData.json"
import { TbBulbFilled } from "react-icons/tb";
import { LuText } from "react-icons/lu";
import { IoSend } from "react-icons/io5";
import '../index.css'


const {chats,messages} = data
export default function ChatWindow({chatId}) {
    const id  = chatId;
    const summary = chats.find(c => c.id == id)?.summary
    const [showAiOutput, setShowAiOutput] = useState(false);
    const [aiOutput, setAiOutput] = useState(summary);

    const [inputText, setInputText] = useState("");


    const aiSuggestion = chats.find(c => c.id == id)?.Ai_suggestion;

    const handleAiSuggestion = () => {
        setInputText(aiSuggestion); 
    };

    useEffect(() => {
    setAiOutput(chats.find(c => c.id == id)?.summary);
    setShowAiOutput(false); 
    setInputText("")
    
    }, [id]);

    const toggleAiOutput = () => {
        setShowAiOutput(prev => !prev); 
    };
    const msgs = messages[id] || [];
    const chatName = chats.find(c => c.id == id)?.name || "Chat";
    const profilePic = chats.find(c => c.id == id)?.profile_picture;

    return (
    <div>
        <div className="flex flex-col h-screen p-4">
        <div className="flex items-center gap-3 p-4 border-b">
        <h2 className="text-lg font-bold">{chatName}</h2>
        </div>
        <div className="flex-1 flex flex-col overflow-y-auto p-4 space-y-2">
        {msgs.map((m, i) => (
            <div
            key={i}
            className={`flex items-center  gap-1 p-2 rounded-lg ${m.from === "Me" ? "bg-blue-100 self-end" : "bg-gray-100 self-start"} `}
            >
                {m.from === "Me" && <img src="/src/assets/me.jpg" alt="" className="w-10 h-10 rounded-full object-cover"/>}
                {m.from !== "Me" && <img src={profilePic} alt="" className="w-10 h-10 rounded-full object-cover"/>}
                
            <strong> </strong>{m.text}
            </div>
        ))}
        </div>

        {showAiOutput && aiOutput  && (
        <div className="flex p-3 mb-3 bg-green-100 rounded-lg gap-2"><LuText className="w-6 h-6" />{aiOutput}</div>
        )}

        <div className="flex items-center border rounded-lg p-2 bg-white shadow-md ">
            <input type="text" value={inputText} onChange={(e) => setInputText(e.target.value)} 
            placeholder="Type Something..."
            className="flex-grow outline-none px-2 py-1"></input>
            <div className="flex space-x-2">
                <Tooltip id= "send"/>
                <button data-tooltip-id="send"data-tooltip-content="Send Message"
                className="p-3  rounded-lg">
                    <IoSend className="w-6 h-6" />
                </button>
                <Tooltip id= "AI"/>
                <button data-tooltip-id="AI" data-tooltip-content="Generate AI reply"
                onClick={handleAiSuggestion} className="p-3  rounded-lg">
                    <TbBulbFilled className="w-6 h-6" />
                </button>
                <Tooltip id= "summary" />
                <button data-tooltip-id="summary" data-tooltip-content="Summary"
                onClick={toggleAiOutput} className="p-3  rounded-lg">
                    <LuText className="w-6 h-6" />
                </button>
            </div>
        </div>
        
    </div>
    </div>
    );
}
