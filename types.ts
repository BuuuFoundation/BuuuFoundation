
// Fix: Import React to provide the React namespace for React.ReactNode
import React from 'react';

export interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
  instagram?: string;
  linkedin?: string;
}

export interface Activity {
  id: string;
  initiativeId: string; // Links to the ID in INITIATIVES (e.g., 'shelter')
  title: string;
  category: 'Ashram' | 'Animal Welfare' | 'Medical' | 'Education' | string;
  description: string;
  images: string[];
  date: string;
  location?: string;
  fundsProvided?: string;
}

export interface SupportArea {
  title: string;
  description: string;
  icon: React.ReactNode;
  image: string;
  requirements?: string[];
}
