import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import '../index.css'

export default function NewChat() {
    const [name, setName] = useState("");
    const [icebreaker, setIcebreaker] = useState("");
    const navigate = useNavigate();

    return (
        <div className="p-4">
        <Link to="/" className="text-blue-500 mb-4 inline-block">← Back</Link>
        <h2 className="text-xl font-bold mb-4">Start a New Chat</h2>

        <input
        type="text"
        value={name}
        onChange={e => setName(e.target.value)}
        placeholder="Enter participant name"
        className="border p-2 rounded w-full mb-3"
        />

        {icebreaker && (
        <div className="p-3 mb-3 bg-yellow-100 rounded-lg">{icebreaker}</div>
        )}

        <div className="flex gap-2">
        <button
        onClick={() => setIcebreaker(`Hi ${name || "there"}, how’s your day going?`)}
        className="px-3 py-2 bg-green-500 text-white rounded-lg"
        >
        Generate Icebreaker
        </button>
        <button
        onClick={() => navigate("/")}
        className="px-3 py-2 bg-blue-500 text-white rounded-lg"
        >
            Start Chat
        </button>
        </div>
    </div>
    );
}
