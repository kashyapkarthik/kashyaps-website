
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  FileText, 
  User, 
  Youtube, 
  BookOpen, 
  HelpCircle, 
  ChevronDown,
  Menu
} from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const isMobile = useIsMobile();
  
  // Auto-close sidebar on mobile
  React.useEffect(() => {
    if (isMobile) {
      setSidebarOpen(false);
    } else {
      setSidebarOpen(true);
    }
  }, [isMobile]);

  const navItems = [
    { path: '/', label: 'About Me', icon: <User size={16} /> },
    { path: '/cv', label: 'CV', icon: <FileText size={16} /> },
    { path: '/youtube', label: 'YouTube', icon: <Youtube size={16} /> },
    { path: '/tutoring', label: 'Tutoring', icon: <BookOpen size={16} /> },
    { path: '/advice', label: 'Advice', icon: <HelpCircle size={16} /> },
  ];

  // Get current file name based on route
  const getCurrentFile = () => {
    const current = navItems.find(item => item.path === location.pathname);
    return current ? current.label : 'About Me';
  };

  return (
    <div className="h-screen flex flex-col overflow-hidden">
      {/* Editor Toolbar */}
      <div className="flex items-center border-b border-border bg-secondary text-sm">
        <button 
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="p-2 hover:bg-muted"
          aria-label="Toggle sidebar"
        >
          <Menu size={16} />
        </button>
        <div className="border-l border-border h-8"></div>
        <Tabs defaultValue={location.pathname} className="flex-1">
          <TabsList className="bg-transparent p-0 h-auto">
            {navItems.map(item => (
              <Link to={item.path} key={item.path}>
                <TabsTrigger
                  value={item.path}
                  className={`px-4 py-2 rounded-none data-[state=active]:shadow-none data-[state=active]:bg-background data-[state=active]:border-b-2 data-[state=active]:border-primary`}
                >
                  {item.label}
                </TabsTrigger>
              </Link>
            ))}
          </TabsList>
        </Tabs>
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* Explorer Sidebar */}
        <div className={`border-r border-border bg-secondary 
          ${sidebarOpen ? 'w-48 md:w-64' : 'w-0'} 
          transition-all duration-200 overflow-hidden flex flex-col`}
        >
          <div className="p-2 border-b border-border flex items-center">
            <ChevronDown size={16} className="mr-1.5" />
            <span className="font-semibold">Explorer</span>
          </div>
          <div className="p-1.5 flex-1 overflow-y-auto">
            {navItems.map(item => (
              <Link 
                to={item.path} 
                key={item.path}
                className={`flex items-center p-1.5 text-sm rounded-sm
                  ${location.pathname === item.path 
                    ? 'bg-muted text-foreground' 
                    : 'text-muted-foreground hover:bg-muted/50'}`}
              >
                <span className="mr-2">{item.icon}</span>
                <span>{item.label}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 overflow-hidden flex flex-col">
          {/* File Tab */}
          <div className="bg-secondary border-b border-border px-3 py-1 text-sm flex items-center">
            <span className="mr-2">{
              navItems.find(item => item.path === location.pathname)?.icon
            }</span>
            <span className="text-foreground">{getCurrentFile()}.tsx</span>
          </div>
          
          {/* Editor Content */}
          <div className="flex-1 overflow-auto p-0">
            <div className="code-editor min-h-full">
              {children}
            </div>
          </div>
          
          {/* Status Bar */}
          <div className="bg-secondary text-muted-foreground py-1 px-3 text-xs border-t border-border flex">
            <div className="flex-1">kashyap-karthik-portfolio</div>
            <div>TypeScript • UTF-8</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
