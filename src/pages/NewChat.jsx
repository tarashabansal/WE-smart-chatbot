import { useState } from "react";
import { IoSend } from "react-icons/io5";
import { TbBulbFilled } from "react-icons/tb";
import { TiMessages } from "react-icons/ti";
import { Tooltip } from "react-tooltip";
import { Link, useNavigate} from "react-router-dom";
import "../index.css";

export default function NewChat() {
    const [username, setUsername] = useState("");
    const [chatStarted, setChatStarted] = useState(false);
    const [inputText, setInputText] = useState("");

    const aiIcebreaker = "Hey! Excited to connect with you.";

    const handleStartChat = () => {
        if (username.trim()) {
            setChatStarted(true);
        }
    };
    const navigate = useNavigate();
    const handleSend = () => {
        if (!inputText.trim()) return;
        console.log(`Message to ${username}:`, inputText);
        setInputText("");
        navigate("/");

    };

    const handleAiIcebreaker = () => {
        setInputText(aiIcebreaker); 
    };

    return (
        <div className="h-screen w-full flex flex-col p-6">
            <div className="flex items-center gap-3 p-4 ">
                <button
                    onClick={() => navigate("/")} 
                    className="text-blue-500 font-semibold"
                >
                    ← Back
                </button>
            </div>

            {!chatStarted ? (
                <div className="flex flex-col items-center justify-center flex-1 space-y-4 w-full max-w-md mx-auto">
                    <h2 className="text-xl font-semibold">Start a New Chat</h2>
                    <input
                        type="text"
                        placeholder="Enter participant name..."
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="w-full border rounded-lg px-4 py-2 outline-none"
                    />
                    <button
                        onClick={handleStartChat}
                        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                    >
                        Start Chat
                    </button>
                </div>
            ) : (
                <div className="flex flex-col flex-1">
                    <div className="flex items-center gap-3 p-4 border-b">
                        <h1 className="text-lg font-bold">{username}</h1>
                    </div>
                    <div className="flex-1 flex flex-col justify-center items-center text-center space-y-2">
                        <TiMessages className="w-20 h-20 text-gray-400" />
                        <h4 className="text-lg font-bold">No Messages</h4>
                        <p className="text-gray-500">
                            Start a conversation to see your messages here
                        </p>
                    </div>

                    {/* Input Bar */}
                    <div className="flex items-center border rounded-lg p-2 bg-white shadow-md">
                        <input
                            type="text"
                            value={inputText}
                            onChange={(e) => setInputText(e.target.value)}
                            placeholder="Type Something..."
                            className="flex-grow outline-none px-2 py-1"
                        />
                        <div className="flex space-x-2">
                            <Tooltip id="send" />
                            <button
                                data-tooltip-id="send"
                                data-tooltip-content="Send Message"
                                onClick={handleSend}
                                className="p-3 rounded-lg hover:bg-gray-100"
                            >
                                <IoSend className="w-6 h-6" />
                            </button>

                            <Tooltip id="AI" />
                            <button
                                data-tooltip-id="AI"
                                data-tooltip-content="Generate AI reply"
                                onClick={handleAiIcebreaker}
                                className="p-3 rounded-lg hover:bg-gray-100"
                            >
                                <TbBulbFilled className="w-6 h-6" />
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
