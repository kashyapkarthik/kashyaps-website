
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  FileText, 
  User, 
  BookOpen, 
  Mountain,
  Lightbulb,
  Menu,
  Mail
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
    { path: '/', label: 'About', file: 'about.md', icon: <User size={16} /> },
    { path: '/tutoring', label: 'Tutoring', file: 'tutoring.md', icon: <BookOpen size={16} /> },
    { path: '/projects', label: 'Projects', file: 'projects.ts', icon: <Lightbulb size={16} /> },
    { path: '/hiking', label: 'Adventures', file: 'adventures.md', icon: <Mountain size={16} /> },
    { path: '/cv', label: 'CV', file: 'cv.pdf', icon: <FileText size={16} /> },
  ];

  const currentItem = navItems.find((item) => item.path === location.pathname) ?? navItems[0];

  const closeSidebarOnMobile = () => {
    if (isMobile) setSidebarOpen(false);
  };

  return (
    <div className="h-screen flex flex-col overflow-hidden">
      <div className="flex items-center border-b border-border bg-secondary text-sm h-11">
        <button 
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="p-2 hover:bg-muted transition-colors duration-200"
          aria-label="Toggle sidebar"
        >
          <Menu size={16} />
        </button>
        <div className="border-l border-border h-7" />
        <div className="px-3 py-2 shrink-0">
          <span className="text-foreground font-bold">Kashyap Karthik</span>
        </div>
        <div className="hidden sm:flex h-full items-end overflow-x-auto ml-3" aria-label="Open pages">
          {navItems.map((item) => (
            <Link
              to={item.path}
              key={item.path}
              className={`editor-tab ${location.pathname === item.path ? 'editor-tab-active' : ''}`}
            >
              {item.file}
            </Link>
          ))}
        </div>
        <div className="ml-auto flex items-center gap-2 pr-2">
          <span className="sm:hidden text-muted-foreground text-xs">{currentItem.file}</span>
          <Link className="contact-button" to="/tutoring#enquire">
            <Mail size={14} aria-hidden="true" />
            <span>Contact</span>
          </Link>
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden">
        <div className={`border-r border-border bg-secondary 
          transition-all duration-300 ease-in-out overflow-hidden flex flex-col shrink-0
          ${sidebarOpen ? 'w-48' : 'w-0'}`}
        >
          <div className="flex-1 overflow-y-auto p-2 min-w-48 whitespace-nowrap">
            <p className="sidebar-label">Workspace</p>
            {navItems.map(item => (
              <Link 
                to={item.path} 
                key={item.path}
                onClick={closeSidebarOnMobile}
                className={`flex items-center p-2 text-sm rounded-sm transition-colors duration-200
                  ${location.pathname === item.path 
                    ? 'bg-muted text-foreground font-medium'
                    : 'text-muted-foreground hover:bg-muted/70 hover:text-foreground hover:translate-x-0.5'}`}
              >
                <span className="mr-2">{item.icon}</span>
                <span>{item.label}</span>
              </Link>
            ))}
            <div className="sidebar-divider" />
            <Link to="/tutoring#enquire" onClick={closeSidebarOnMobile} className="sidebar-contact">
              <Mail size={15} aria-hidden="true" />
              Book an intro call
            </Link>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 overflow-hidden flex flex-col">
          {/* Editor Content */}
          <div className="flex-1 overflow-auto p-0">
            <div className="code-editor min-h-full">
              {children}
            </div>
          </div>
          
          {/* Status Bar - Removed */}
        </div>
      </div>
    </div>
  );
};

export default Layout;
