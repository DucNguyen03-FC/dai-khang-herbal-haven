import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <h1 className="text-lg md:text-xl font-bold text-primary leading-tight">
              Dược Thảo Đại Khang
            </h1>
            <p className="text-sm text-muted-foreground">
              Thương Mại Dịch Vụ Dược Thảo
            </p>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-2 text-sm text-muted-foreground">
              <Phone className="h-4 w-4" />
              <span>0986.836.712</span>
            </div>
            <Button variant="default" size="sm" className="bg-gradient-herbal hover:opacity-90 transition-opacity">
              Liên Hệ
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;