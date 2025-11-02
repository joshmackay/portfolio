export type ProjectDetail = {
  id: number;
  name: string;
  image?: string;
  description: string;
  tools: string[];
  links?: {
    github?: string,
    site?: string
  };
}