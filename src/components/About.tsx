import { Card, CardContent } from "@/components/ui/card";
import { Building2, MapPin, Phone, FileText } from "lucide-react";
import consultationImage from "@/assets/consultation.jpg";

const About = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Về Chúng Tôi
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Với nhiều năm kinh nghiệm trong lĩnh vực dược thảo, chúng tôi cam kết 
            mang đến những sản phẩm tốt nhất cho sức khỏe của khách hàng.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src={consultationImage} 
              alt="Professional herbal medicine consultation" 
              className="rounded-2xl shadow-herbal w-full h-[400px] object-cover"
            />
          </div>
          
          <div className="space-y-6">
            <Card className="border-herbal-sage/30 hover:shadow-herbal transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <Building2 className="h-8 w-8 text-herbal-gold" />
                  <h3 className="text-xl font-semibold text-foreground">Tên Công Ty</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Công Ty TNHH Thương Mại Dịch Vụ Dược Thảo Đại Khang
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-herbal-sage/30 hover:shadow-herbal transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <MapPin className="h-8 w-8 text-herbal-gold" />
                  <h3 className="text-xl font-semibold text-foreground">Địa Chỉ</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Số 66 Trạng Tình, Phường 9, Thành phố Đà Lạt, Tỉnh Lâm Đồng, Việt Nam
                </p>
              </CardContent>
            </Card>
            
            <div className="grid sm:grid-cols-2 gap-4">
              <Card className="border-herbal-sage/30 hover:shadow-herbal transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Phone className="h-6 w-6 text-herbal-gold" />
                    <h4 className="font-semibold text-foreground">Điện Thoại</h4>
                  </div>
                  <p className="text-muted-foreground font-medium">0986.836.712</p>
                </CardContent>
              </Card>
              
              <Card className="border-herbal-sage/30 hover:shadow-herbal transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <FileText className="h-6 w-6 text-herbal-gold" />
                    <h4 className="font-semibold text-foreground">MST</h4>
                  </div>
                  <p className="text-muted-foreground font-medium">5801444158</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;