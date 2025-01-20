

import React from 'react';
import { Typography } from '@mui/material';
import { SmartToy, Person } from '@mui/icons-material';
import { Message, QuickReply } from './types';

interface ChatMessageProps {
  message: Message;
  onQuickReplyClick?: (reply: QuickReply) => void;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message, onQuickReplyClick }) => {
  const isBot = message.sender === 'bot';

  return (
    <div className="chatbot-message">
      <div className="chatbot-message-content">
        {isBot && (
          <SmartToy className="chatbot-message-avatar" />
        )}
        <div className={`chatbot-message-bubble ${isBot ? 'bot' : 'user'}`}>
          <Typography variant="body1">{message.content}</Typography>
        </div>
        {!isBot && (
          <Person className="chatbot-message-avatar" />
        )}
      </div>

      {message.quickReplies && (
        <div className="chatbot-quick-replies" style={{ 
          justifyContent: isBot ? 'flex-start' : 'flex-end' 
        }}>
          {message.quickReplies.map((reply) => (
            <div
              key={reply.id}
              className="chatbot-quick-replies-chip"
              onClick={() => onQuickReplyClick?.(reply)}
            >
              {reply.text}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ChatMessage;