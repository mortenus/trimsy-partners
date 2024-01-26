import React from 'react';

export default function useHideScrollOnTrue(stateBool: boolean) {
  React.useEffect(() => {
    if (stateBool) {
      document.documentElement.style.setProperty('overflow', `hidden`);
    } else {
      document.documentElement.style.removeProperty('overflow');
    }

    return () => {
      document.documentElement.style.removeProperty('overflow');
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stateBool]);
}
