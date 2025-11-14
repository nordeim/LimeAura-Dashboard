// src/components/showcase/MilestoneShowcase.tsx
import { Card } from '@/components/ui/Card/Card';
import { MilestoneCard } from '@/components/ui/Milestone/MilestoneCard';
import { SectionHeader } from '@/components/layout/SectionHeader';

export function MilestoneShowcase() {
  return (
    <Card>
      <SectionHeader 
        title="Milestone Cards" 
        subtitle="Project milestones with progress tracking and assignees" 
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <MilestoneCard
          title="Amber Website Redesign"
          dueDate="Dec 15, 2025"
          progress={75}
          assignees={[
            { src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100", alt: "Sarah" },
            { src: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=100", alt: "Mike" },
            { fallback: "J", alt: "John" }
          ]}
          tags={["UI Design", "Frontend"]}
        />
        
        <MilestoneCard
          title="Design System Documentation"
          dueDate="Jan 30, 2026"
          progress={45}
          assignees={[
            { src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100", alt: "Lisa" },
            { fallback: "E", alt: "Emma" }
          ]}
          tags={["Documentation", "Components"]}
        />
        
        <MilestoneCard
          title="User Research Analysis"
          dueDate="Nov 28, 2025"
          progress={95}
          assignees={[
            { src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100", alt: "John" }
          ]}
          tags={["Research", "Analytics"]}
        />
        
        <MilestoneCard
          title="Mobile App Prototype"
          dueDate="Feb 15, 2026"
          progress={30}
          assignees={[
            { src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100", alt: "Emma" },
            { src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100", alt: "Tom" },
            { fallback: "A", alt: "Alex" },
            { fallback: "B", alt: "Brian" }
          ]}
          tags={["Prototype", "Mobile"]}
        />
      </div>
    </Card>
  );
}
