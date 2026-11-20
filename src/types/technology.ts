export type TechCategory =
  | "Frontend"
  | "Backend"
  | "Database"
  | "Language"
  | "Styling"
  | "DevOps"
  | "Tools";

export type TechDifficulty =
  | "Beginner-Friendly"
  | "Intermediate"
  | "Advanced";

export interface ITechnology {
  id: string;
  name: string;
  category: TechCategory | string;
  description: string;
  icon: string;
  rating: number;
  difficulty: TechDifficulty | string;
  badge: string;
}
