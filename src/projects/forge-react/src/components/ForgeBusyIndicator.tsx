import { useEffect } from 'react';
import { useForgeBusyIndicator, ForgeBusyIndicatorOptions } from '../hooks/useForgeBusyIndicator';

export type ForgeBusyIndicatorProps = {
  open: boolean;
  options: ForgeBusyIndicatorOptions;
};

export const ForgeBusyIndicator = ({ open, options }: ForgeBusyIndicatorProps): null => {
  const [showBusyIndicator, hideBusyIndicator] = useForgeBusyIndicator();

  useEffect(() => {
    if (open) {
      showBusyIndicator(options);
    } else {
      hideBusyIndicator();
    }
  }, [open]);

  return null;
};
