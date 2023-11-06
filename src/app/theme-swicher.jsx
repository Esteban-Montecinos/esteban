'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import Switcher from '@/components/switcher';
import SwitcherItem from '@/components/switcher-item';
import { IconDeviceDesktop, IconMoon, IconSun,  } from '@tabler/icons-react';

export default function ThemeSwitcher () {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <Switcher>
      <SwitcherItem
        icon={<IconDeviceDesktop size={16} />}
        onClick={() => setTheme('system')}
        active={theme === 'system'}
      />
      <SwitcherItem
        icon={<IconSun size={18} />}
        onClick={() => setTheme('light')}
        active={theme === 'light'}
      />
      <SwitcherItem
        icon={<IconMoon size={16} />}
        onClick={() => setTheme('dark')}
        active={theme === 'dark'}
      />
    </Switcher>
  );
}