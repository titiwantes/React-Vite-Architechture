import TopBar from "@/components/TopBar";
import Sidebar from "@/components/SideBar";
import { useLocation } from "react-router-dom";

interface AppLayoutProps {
  children: React.ReactNode;
}

export default function AppLayout({ children }: AppLayoutProps) {
  const location = useLocation();

  return (
    <div className="flex flex-col min-h-screen w-full bg-background overflow-hidden">
      <TopBar />
      <div className="flex flex-1 overflow-hidden">
        <div className="hidden md:flex md:w-64 md:flex-shrink-0">
          <Sidebar pathname={location.pathname} />
        </div>
        <main className="flex-1 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
