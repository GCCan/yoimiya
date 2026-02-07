export interface LinkItem {
  id: string;
  title: string;
  url: string;
  icon: string;
  color: string;
}

export interface FeatureItem {
  title: string;
  description: string;
  icon: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: number;
}