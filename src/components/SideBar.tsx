import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

import { Home, BarChart2, Users, Settings, HelpCircle } from "lucide-react";

const navItems = [
  {
    title: "Accueil",
    to: "/",
    icon: Home,
  },
  {
    title: "Statistiques",
    to: "/stats",
    icon: BarChart2,
  },
  {
    title: "Utilisateurs",
    to: "/users",
    icon: Users,
  },
  {
    title: "Paramètres",
    to: "/settings",
    icon: Settings,
  },
];
interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  pathname: string;
  setOpen?: (open: boolean) => void;
}

export default function Sidebar({
  pathname,
  setOpen,
  className,
  ...props
}: SidebarProps) {
  return (
    <div className={cn("flex h-full flex-col border-r", className)} {...props}>
      <ScrollArea className="flex-1">
        <div className="space-y-4 py-4">
          <div className="px-3 py-2">
            <div className="space-y-1">
              {navItems.map((item) => (
                <Button
                  key={item.to}
                  variant={pathname === item.to ? "secondary" : "ghost"}
                  className="w-full justify-start"
                  asChild
                  onClick={() => setOpen?.(false)}
                >
                  <Link to={item.to}>
                    <item.icon className="mr-2 h-4 w-4" />
                    {item.title}
                  </Link>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </ScrollArea>
      <div className="mt-auto border-t p-2">
        <div className="flex flex-col space-y-4">
          <Button variant="ghost" className="w-full justify-start">
            <HelpCircle className="mr-2 h-4 w-4" />
            Aide
          </Button>
        </div>
      </div>
    </div>
  );
}
