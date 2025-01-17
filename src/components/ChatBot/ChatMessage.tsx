//src/components/ChatBot/ChatMessage.tsx
import React from 'react';
import { Box, Typography, Paper, Chip } from '@mui/material';
import { SmartToy, Person } from '@mui/icons-material';
import { Message, QuickReply } from './types';

interface ChatMessageProps {
  message: Message;
  onQuickReplyClick?: (reply: QuickReply) => void;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message, onQuickReplyClick }) => {
  const isBot = message.sender === 'bot';

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: isBot ? 'flex-start' : 'flex-end',
        mb: 2,
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'flex-end', gap: 1 }}>
        {isBot && (
          <SmartToy
            sx={{
              bgcolor: 'primary.main',
              color: 'white',
              p: 0.5,
              borderRadius: '50%',
              width: 32,
              height: 32,
            }}
          />
        )}
        <Paper
          sx={{
            p: 2,
            backgroundColor: isBot ? 'grey.100' : 'primary.main',
            color: isBot ? 'text.primary' : 'white',
            maxWidth: '70%',
            borderRadius: 2,
            boxShadow: 1,
          }}
        >
          <Typography variant="body1">{message.content}</Typography>
        </Paper>
        {!isBot && (
          <Person
            sx={{
              bgcolor: 'primary.main',
              color: 'white',
              p: 0.5,
              borderRadius: '50%',
              width: 32,
              height: 32,
            }}
          />
        )}
      </Box>

      {message.quickReplies && (
        <Box sx={{ 
          display: 'flex', 
          gap: 1, 
          mt: 1, 
          flexWrap: 'wrap',
          justifyContent: isBot ? 'flex-start' : 'flex-end',
          maxWidth: '90%'
        }}>
          {message.quickReplies.map((reply) => (
            <Chip
              key={reply.id}
              label={reply.text}
              onClick={() => onQuickReplyClick?.(reply)}
              sx={{
                cursor: 'pointer',
                bgcolor: 'background.paper',
                '&:hover': {
                  bgcolor: 'primary.light',
                  color: 'white',
                },
                transition: 'all 0.2s ease-in-out',
              }}
            />
          ))}
        </Box>
      )}
    </Box>
  );
};

export default ChatMessage;
