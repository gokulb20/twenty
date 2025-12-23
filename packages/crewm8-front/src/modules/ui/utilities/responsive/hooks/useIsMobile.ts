import { useMediaQuery } from 'react-responsive';
import { MOBILE_VIEWPORT } from 'crewm8-ui/theme';

export const useIsMobile = () =>
  useMediaQuery({ query: `(max-width: ${MOBILE_VIEWPORT}px)` });
