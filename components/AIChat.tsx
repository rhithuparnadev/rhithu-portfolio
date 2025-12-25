
import React, { useState, useRef, useEffect } from 'react';
import { chatWithPortfolio } from '../services/geminiService';
import { ChatMessage } from '../types';

const AIChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'assistant', text: "Yo! I'm Rhithuparnadev's AI. What's the move? Ask me anything about his work, fr." }
  ]);
  const [input, setInput] = useState('');
  const [isAITyping, setIsAITyping] = useState(false);
  const [isUserTyping, setIsUserTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Smooth scroll to bottom when messages or typing states change
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }
  }, [messages, isAITyping, isUserTyping]);

  const handleSend = async () => {
    if (!input.trim() || isAITyping || isUserTyping) return;

    const userMsg = input.trim();
    setInput('');
    
    // Step 1: Show User "Typing" / Sending indicator
    setIsUserTyping(true);
    // Simulate a brief delay to show the "Sending" state as requested
    await new Promise(resolve => setTimeout(resolve, 600));
    
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsUserTyping(false);

    // Step 2: Show AI "Typing" / Thinking indicator
    setIsAITyping(true);
    const response = await chatWithPortfolio(userMsg);
    
    setMessages(prev => [...prev, { role: 'assistant', text: response || "I couldn't quite get that. No cap, try asking something else!" }]);
    setIsAITyping(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      {isOpen ? (
        <div className="w-80 md:w-96 h-[500px] flex flex-col glass rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 transform">
          {/* Header */}
          <div className="p-4 bg-black text-white flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="font-bold">Portfolio AI fr</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white hover:text-red-500 transition-colors focus:outline-none">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          {/* Chat area */}
          <div ref={scrollRef} className="flex-1 p-4 space-y-4 overflow-y-auto custom-scrollbar bg-black/40">
            {messages.map((m, i) => (
              <div 
                key={i} 
                className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'} animate-message`}
                style={{ animationDelay: `${i * 0.05}s` }}
              >
                <div className={`max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed shadow-sm ${m.role === 'user' ? 'bg-red-600 text-white rounded-tr-none' : 'bg-white/10 text-white rounded-tl-none border border-white/10'}`}>
                  {m.text}
                </div>
              </div>
            ))}

            {/* User Typing/Sending Indicator */}
            {isUserTyping && (
              <div className="flex justify-end animate-typing-indicator">
                <div className="bg-red-600/40 p-3 rounded-2xl rounded-tr-none text-white flex items-center space-x-1 backdrop-blur-sm border border-white/5">
                  <span className="text-[10px] font-black uppercase opacity-60 mr-1 tracking-wider">Sending it fr</span>
                  <div className="w-1 h-1 bg-white rounded-full animate-bounce"></div>
                  <div className="w-1 h-1 bg-white rounded-full animate-bounce [animation-delay:0.2s]"></div>
                  <div className="w-1 h-1 bg-white rounded-full animate-bounce [animation-delay:0.4s]"></div>
                </div>
              </div>
            )}

            {/* AI Typing/Thinking Indicator */}
            {isAITyping && (
              <div className="flex justify-start animate-typing-indicator">
                <div className="bg-white/10 p-3 rounded-2xl rounded-tl-none border border-white/10 text-white flex items-center space-x-1 backdrop-blur-sm">
                  <span className="text-[10px] font-black uppercase opacity-60 mr-1 tracking-wider">Cooking</span>
                  <div className="w-1 h-1 bg-white rounded-full animate-bounce"></div>
                  <div className="w-1 h-1 bg-white rounded-full animate-bounce [animation-delay:0.2s]"></div>
                  <div className="w-1 h-1 bg-white rounded-full animate-bounce [animation-delay:0.4s]"></div>
                </div>
              </div>
            )}
          </div>

          {/* Input Area */}
          <div className="p-4 glass-light border-t border-white/10 bg-black/20">
            <div className="flex space-x-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="What's the move?"
                className="flex-1 bg-white/5 border border-white/10 rounded-full px-4 py-2 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-red-500 transition-all text-sm"
                disabled={isAITyping || isUserTyping}
              />
              <button 
                onClick={handleSend}
                disabled={isAITyping || isUserTyping || !input.trim()}
                className="p-2 bg-red-600 rounded-full text-white hover:bg-red-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed group"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="group flex items-center space-x-3 bg-white text-red-600 px-6 py-4 rounded-full shadow-2xl hover:bg-black hover:text-white transition-all duration-300 font-bold transform hover:scale-105 active:scale-95"
        >
          <span className="hidden md:inline">Vibe check my AI</span>
          <div className="w-10 h-10 bg-red-600 group-hover:bg-white rounded-full flex items-center justify-center transition-colors shadow-lg">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white group-hover:text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
            </svg>
          </div>
        </button>
      )}
    </div>
  );
};

export default AIChat;
