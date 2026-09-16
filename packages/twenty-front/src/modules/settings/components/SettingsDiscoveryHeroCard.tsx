import { type SettingsCustomizeVideoModalTab } from '@/settings/components/SettingsCustomizeVideoModal';
import { styled } from '@linaria/react';
import { type ReactNode } from 'react';
import { Card } from 'twenty-ui/surfaces';
import { themeCssVariables } from 'twenty-ui/theme-constants';

const StyledFooter = styled.div`
  background: ${themeCssVariables.background.secondary};
  border-top: 1px solid ${themeCssVariables.border.color.medium};
`;

// The cover artwork and walkthrough videos are hosted by the upstream project,
// so only the footer actions are rendered. The media props stay on the type to
// keep call sites unchanged.
type SettingsDiscoveryHeroCardProps = {
  lightSrc: string;
  darkSrc: string;
  instanceIdPrefix: string;
  tabs: SettingsCustomizeVideoModalTab[];
  coverHeight?: number;
  footer?: ReactNode;
  playButtonAriaLabel?: string;
};

export const SettingsDiscoveryHeroCard = ({
  footer,
}: SettingsDiscoveryHeroCardProps) => {
  if (footer === undefined || footer === null) {
    return null;
  }

  return (
    <Card rounded>
      <StyledFooter>{footer}</StyledFooter>
    </Card>
  );
};
