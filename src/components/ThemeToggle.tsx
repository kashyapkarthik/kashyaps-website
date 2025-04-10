
import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { Switch } from '@/components/ui/switch';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <div className="flex items-center space-x-2">
      <Sun size={16} className="text-muted-foreground" />
      <Switch
        checked={theme === 'light'}
        onCheckedChange={toggleTheme}
        aria-label="Toggle theme"
      />
      <Moon size={16} className="text-muted-foreground" />
    </div>
  );
};

export default ThemeToggle;
