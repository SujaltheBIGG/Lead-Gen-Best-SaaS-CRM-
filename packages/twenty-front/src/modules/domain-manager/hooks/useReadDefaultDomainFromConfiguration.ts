import { isMultiWorkspaceEnabledState } from '@/client-config/states/isMultiWorkspaceEnabledState';
import { domainConfigurationState } from '@/domain-manager/states/domainConfigurationState';
import { useAtomStateValue } from '@/ui/utilities/state/jotai/hooks/useAtomStateValue';

export const useReadDefaultDomainFromConfiguration = () => {
  const domainConfiguration = useAtomStateValue(domainConfigurationState);
  const isMultiWorkspaceEnabled = useAtomStateValue(
    isMultiWorkspaceEnabledState,
  );

  // Without subdomain routing every workspace shares the frontend hostname,
  // so the sign-in page lives on that hostname rather than a default subdomain.
  const usesDefaultSubdomain =
    isMultiWorkspaceEnabled &&
    domainConfiguration.isWorkspaceSubdomainRoutingDisabled !== true;

  const defaultDomain = usesDefaultSubdomain
    ? `${domainConfiguration.defaultSubdomain}.${domainConfiguration.frontDomain}`
    : domainConfiguration.frontDomain;

  return {
    defaultDomain,
  };
};
