import React, { useState } from "react";

interface User {
   id: number;
   name: string;
}

interface ChatProps {
   currentUser: User;
}

const Chat: React.FC<ChatProps> = ({ currentUser }) => {
   // Data pesan contoh
   const [messages, setMessages] = useState<{ user_id: number; message: string }[]>([
      { user_id: 1, message: "Hi, how are you?" },
      { user_id: 2, message: "I'm good, thanks! How about you?" },
      { user_id: 1, message: "I'm great! Working on a new project." },
   ]);

   const [message, setMessage] = useState("");

   // Fungsi untuk mengirim pesan baru
   const sendMessage = () => {
      const newMessage = {
         user_id: currentUser.id,
         message: message,
      };

      // Tambahkan pesan baru ke state messages
      setMessages([...messages, newMessage]);
      setMessage("");
   };

   return (
      <div className="flex flex-col h-screen max-w-md mx-auto border border-gray-300 rounded-lg overflow-hidden">
         <div className="flex-1 p-4 overflow-y-auto bg-gray-100">
            {messages.map((msg, index) => (
               <div
                  key={index}
                  className={`flex ${msg.user_id === currentUser.id ? "justify-end" : "justify-start"} mb-2`}
               >
                  <div
                     className={`max-w-xs px-4 py-2 rounded-lg text-sm ${
                        msg.user_id === currentUser.id
                           ? "bg-green-200 text-right rounded-br-none"
                           : "bg-white text-left rounded-bl-none"
                     }`}
                  >
                     {msg.message}
                  </div>
               </div>
            ))}
         </div>
         <div className="p-4 border-t border-gray-300 bg-white flex items-center">
            <input
               type="text"
               value={message}
               onChange={(e) => setMessage(e.target.value)}
               placeholder="Type a message"
               className="flex-grow px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring focus:border-blue-300"
            />
            <button
               onClick={sendMessage}
               disabled={!message.trim()} // Nonaktifkan tombol jika pesan kosong
               className={`ml-2 px-4 py-2 rounded-full ${
                  message.trim() ? "bg-green-500 text-white hover:bg-green-600" : "bg-gray-300 text-gray-500 cursor-not-allowed"
               }`}
            >
               Send
            </button>
         </div>
      </div>
   );
};

export default Chat;
