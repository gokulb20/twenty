import { createContext } from 'react';
import { type ExtendedUIMessage } from 'crewm8-shared/ai';

export type AgentChatContextValue = {
  messages: ExtendedUIMessage[];
  isStreaming: boolean;
  isLoading: boolean;
  error?: Error;

  handleSendMessage: () => Promise<void>;

  handleRetry: () => void;
};

export const AgentChatContext = createContext<AgentChatContextValue | null>(
  null,
);
