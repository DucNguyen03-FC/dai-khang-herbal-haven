import { Button } from "@/components/ui/button";
import { ArrowRight, Leaf, Heart, Shield } from "lucide-react";
import heroImage from "@/assets/hero-herbal.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center bg-gradient-nature overflow-hidden">
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Traditional Vietnamese herbal medicine" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-background/40"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <div className="flex items-center gap-2 mb-6">
            <Leaf className="h-8 w-8 text-herbal-gold" />
            <span className="text-herbal-gold font-medium">Dược Thảo Truyền Thống</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            Công Ty TNHH Thương Mại Dịch Vụ{" "}
            <span className="text-primary">Dược Thảo Đại Khang</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
            Chuyên cung cấp các sản phẩm dược thảo chất lượng cao, 
            mang đến sức khỏe và sự an tâm cho khách hàng với 
            phương pháp truyền thống kết hợp hiện đại.
          </p>
          
          <div className="flex flex-wrap gap-6 mb-8">
            <div className="flex items-center gap-2">
              <Heart className="h-5 w-5 text-herbal-gold" />
              <span className="text-sm">Tự Nhiên 100%</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-herbal-gold" />
              <span className="text-sm">Chất Lượng Cao</span>
            </div>
            <div className="flex items-center gap-2">
              <Leaf className="h-5 w-5 text-herbal-gold" />
              <span className="text-sm">Truyền Thống Việt Nam</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="bg-gradient-herbal hover:opacity-90 transition-opacity shadow-herbal"
            >
              Khám Phá Sản Phẩm
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-herbal-primary text-herbal-primary hover:bg-herbal-primary hover:text-primary-foreground"
            >
              Tư Vấn Miễn Phí
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;