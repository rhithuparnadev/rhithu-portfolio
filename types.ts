
export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  link: string;
}

export interface Skill {
  name: string;
  category: 'Frontend' | 'Backend' | 'Design' | 'AI';
  level: number; // 1-100
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  text: string;
}
