import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import data from "../data/dummyData.json"
import '../index.css'


const {chats,messages} = data
export default function ChatWindow({chatId}) {
    const id  = chatId;
    const summary = chats.find(c => c.id == id)?.summary
    const [showAiOutput, setShowAiOutput] = useState(false);
    const [aiOutput, setAiOutput] = useState(summary);

    useEffect(() => {
    setAiOutput(chats.find(c => c.id == id)?.summary);
    setShowAiOutput(false); // hide AI output on chat switch
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
        <div className="flex-1 flex flex-col-reverse overflow-y-auto p-4 space-y-2">
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
        <div className="p-3 mb-3 bg-yellow-100 rounded-lg">{aiOutput}</div>
        )}

        <div className="flex py-3 gap-2 mt-auto">
            <input type="text" placeholder={`AI Suggestion: ${chats.find(c => c.id == id)?.Ai_suggestion}`}
            className="flex-1 border rounded-lg px-3 py-2 focus:outline-none  focus:ring-blue-400"></input>

            <button className="px-3 py-2 bg-blue-500 text-white rounded-lg">
                Send
            </button>

            <button
            onClick={toggleAiOutput}
            className="px-3 py-2 bg-green-500 text-white rounded-lg"
        >
            Summarize Thread
        </button>

        </div>
        
    </div>
    </div>
    );
}
