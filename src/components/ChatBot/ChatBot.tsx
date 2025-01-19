//src/components/ChatBot/ChatBot.tsx
import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Paper,
  IconButton,
  Typography,
  Drawer,
  useTheme,
  useMediaQuery,
  Fab,
} from '@mui/material';
import {
  Close,
  ChatBubble,
  SmartToy,
} from '@mui/icons-material';
import { v4 as uuidv4 } from 'uuid';

import ChatMessage from './ChatMessage';
import ChatInput from './ChatInput';
import { Message, ChatBotProps, QuickReply } from './types';
import { 
  chatbotResponses, 
  navigationMap, 
  findResponseByKeywords, 
  getDefaultResponse 
} from './chatbotLogic';

const ChatBot: React.FC<ChatBotProps> = ({
  onSendMessage,
  isOpen: propIsOpen,
  onClose,
}) => {
  const navigate = useNavigate();
  const [messages, setMessages] = useState<Message[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    if (propIsOpen !== undefined) {
      setIsOpen(propIsOpen);
    }
  }, [propIsOpen]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const greeting = chatbotResponses.greeting;
      const greetingMessage: Message = {
        id: uuidv4(),
        content: greeting.content,
        sender: 'bot',
        timestamp: new Date(),
        quickReplies: greeting.quickReplies,
      };
      setMessages([greetingMessage]);
    }
  }, [isOpen, messages.length]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleNavigation = (action: string) => {
    const route = navigationMap[action];
    if (route) {
      navigate(route);
      setIsOpen(false);
    }
  };

  const handleSendMessage = (content: string) => {
    const userMessage: Message = {
      id: uuidv4(),
      content,
      sender: 'user',
      timestamp: new Date(),
    };
    setMessages(prev => [...prev, userMessage]);
    onSendMessage?.(content);

    // Find appropriate response
    const response = findResponseByKeywords(content) || getDefaultResponse();
    
    const botMessage: Message = {
      id: uuidv4(),
      content: response.content,
      sender: 'bot',
      timestamp: new Date(),
      quickReplies: response.quickReplies,
    };

    setTimeout(() => {
      setMessages(prev => [...prev, botMessage]);
    }, 500);
  };

  const handleQuickReplyClick = (reply: QuickReply) => {
    // Handle navigation actions
    if (reply.action.startsWith('navigate_')) {
      handleNavigation(reply.action);
      return;
    }

    // Add user message for the quick reply
    const userMessage: Message = {
      id: uuidv4(),
      content: reply.text,
      sender: 'user',
      timestamp: new Date(),
    };
    setMessages(prev => [...prev, userMessage]);

    // Get bot response for the action
    const response = chatbotResponses[reply.action] || getDefaultResponse();
    const botMessage: Message = {
      id: uuidv4(),
      content: response.content,
      sender: 'bot',
      timestamp: new Date(),
      quickReplies: response.quickReplies,
    };

    setTimeout(() => {
      setMessages(prev => [...prev, botMessage]);
    }, 500);
  };

  const toggleChat = () => {
    setIsOpen(prev => !prev);
  };

  const handleClose = () => {
    setIsOpen(false);
    onClose?.();
  };

  const chatContent = (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        width: isMobile ? '100%' : '400px',
      }}
    >
      {/* Header */}
      <Box
        sx={{
          p: 2,
          bgcolor: 'primary.main',
          color: 'white',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <SmartToy />
          <Typography variant="h6">Chat Assistant</Typography>
        </Box>
        <IconButton onClick={handleClose} sx={{ color: 'white' }}>
          <Close />
        </IconButton>
      </Box>

      {/* Messages */}
      <Box
        sx={{
          flex: 1,
          overflow: 'auto',
          p: 2,
          bgcolor: 'background.default',
        }}
      >
        {messages.map((message) => (
          <ChatMessage
            key={message.id}
            message={message}
            onQuickReplyClick={handleQuickReplyClick}
          />
        ))}
        <div ref={messagesEndRef} />
      </Box>

      {/* Input */}
      <ChatInput onSendMessage={handleSendMessage} />
    </Box>
  );

  return (
    <>
      {!isMobile ? (
        <Paper
          sx={{
            position: 'fixed',
            bottom: 20,
            right: 20,
            width: isOpen ? 400 : 'auto',
            height: isOpen ? 600 : 'auto',
            overflow: 'hidden',
            transition: 'all 0.3s ease',
            zIndex: 1000,
          }}
        >
          {isOpen ? (
            chatContent
          ) : (
            <Fab
              color="primary"
              onClick={toggleChat}
              sx={{ m: 1 }}
            >
              <ChatBubble />
            </Fab>
          )}
        </Paper>
      ) : (
        <>
          <Drawer
            anchor="bottom"
            open={isOpen}
            onClose={handleClose}
            PaperProps={{
              sx: { height: '100%' },
            }}
          >
            {chatContent}
          </Drawer>
          {!isOpen && (
            <Fab
              color="primary"
              onClick={toggleChat}
              sx={{
                position: 'fixed',
                bottom: 20,
                right: 20,
                zIndex: 1000,
              }}
            >
              <ChatBubble />
            </Fab>
          )}
        </>
      )}
    </>
  );
};

export default ChatBot;


////
