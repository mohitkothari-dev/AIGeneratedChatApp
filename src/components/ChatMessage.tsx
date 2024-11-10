import React from 'react';
import { Bot, User } from 'lucide-react';
import { Message } from '../types/chat';

interface ChatMessageProps {
  message: Message;
}

export function ChatMessage({ message }: ChatMessageProps) {
  const { isBot, text, isThinking } = message;
  
  return (
    <div className={`flex items-start gap-4 ${isBot ? 'bg-gray-50' : 'bg-white'} p-4 rounded-lg animate-fade-in`}>
      <div className={`p-2 rounded-full ${isBot ? 'bg-blue-100' : 'bg-green-100'}`}>
        {isBot ? <Bot size={24} className="text-blue-600" /> : <User size={24} className="text-green-600" />}
      </div>
      <div className="flex-1">
        {isThinking ? (
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
            <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
            <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
          </div>
        ) : (
          <p className="text-sm text-gray-900 whitespace-pre-wrap">{text}</p>
        )}
      </div>
    </div>
  );
}