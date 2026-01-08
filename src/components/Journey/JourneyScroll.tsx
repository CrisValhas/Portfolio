import React from 'react';
import { useOnboarding } from '../../context/OnboardingContext';
import { JourneyTimeline } from './JourneyTimeline';

export const JourneyScroll: React.FC = () => {
  const { isOnboarding } = useOnboarding();

  if (!isOnboarding) return null;

  return <JourneyTimeline />;
};