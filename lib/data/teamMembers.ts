import {
  Lightbulb,
  Palette,
  Code,
  BarChart3,
  Users,
  Zap,
  Target,
} from 'lucide-react';

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  icon: typeof Lightbulb;
}

export const teamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'Alex Chen',
    role: 'Chef de Projet & Analyste Stratégique',
    icon: Lightbulb,
  },
  {
    id: '2',
    name: 'Sofia Rodriguez',
    role: 'Conceptrice Visuelle',
    icon: Palette,
  },
  {
    id: '3',
    name: 'Marcus Thompson',
    role: 'Développeur Frontend',
    icon: Code,
  },
  {
    id: '4',
    name: 'Priya Patel',
    role: 'Analyste de Données',
    icon: BarChart3,
  },
  {
    id: '5',
    name: 'James Wilson',
    role: 'Stratégiste Marketing',
    icon: Target,
  },
  {
    id: '6',
    name: 'Emma Watson',
    role: 'Chercheuse UX',
    icon: Users,
  },
  {
    id: '7',
    name: 'David Kim',
    role: 'Spécialiste du Contenu',
    icon: Zap,
  },
];
