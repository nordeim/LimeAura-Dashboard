// src/app/page.tsx
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { CardsShowcase } from '@/components/showcase/CardsShowcase';
import { ButtonsShowcase } from '@/components/showcase/ButtonsShowcase';
import { ProfileShowcase } from '@/components/showcase/ProfileShowcase';
import { NotificationShowcase } from '@/components/showcase/NotificationShowcase';
import { CalendarShowcase } from '@/components/showcase/CalendarShowcase';
import { ProgressShowcase } from '@/components/showcase/ProgressShowcase';
import { MilestoneShowcase } from '@/components/showcase/MilestoneShowcase';
import { IntegrationShowcase } from '@/components/showcase/IntegrationShowcase';
import { ToggleShowcase } from '@/components/showcase/ToggleShowcase';
import { AvatarShowcase } from '@/components/showcase/AvatarShowcase';
import { BadgeShowcase } from '@/components/showcase/BadgeShowcase';
import { TagShowcase } from '@/components/showcase/TagShowcase';
import { BrandPillShowcase } from '@/components/showcase/BrandPillShowcase';

export default function Home() {
  return (
    <DashboardLayout title="LimeAura Design System Showcase">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        <CardsShowcase />
        <ButtonsShowcase />
        <ProfileShowcase />
        <NotificationShowcase />
        <CalendarShowcase />
        <ProgressShowcase />
        <MilestoneShowcase />
        <IntegrationShowcase />
        <ToggleShowcase />
        <AvatarShowcase />
        <BadgeShowcase />
        <TagShowcase />
        <BrandPillShowcase />
      </div>
    </DashboardLayout>
  );
}
