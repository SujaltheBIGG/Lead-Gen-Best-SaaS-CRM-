import { type ClientConfig } from '@/client-config/types/ClientConfig';
import { createAtomState } from '@/ui/utilities/state/jotai/utils/createAtomState';

export const domainConfigurationState = createAtomState<
  Pick<
    ClientConfig,
    | 'frontDomain'
    | 'defaultSubdomain'
    | 'isWorkspaceSubdomainRoutingDisabled'
    | 'publicFunctionDomain'
  >
>({
  key: 'domainConfiguration',
  defaultValue: {
    frontDomain: '',
    defaultSubdomain: undefined,
    isWorkspaceSubdomainRoutingDisabled: false,
    publicFunctionDomain: undefined,
  },
});
