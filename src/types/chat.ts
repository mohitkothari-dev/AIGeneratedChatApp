export interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: number;
  isThinking?: boolean;
}

export interface ChatError {
  message: string;
  code?: string;
}