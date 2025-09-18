import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock, Mail, MessageCircle } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Liên Hệ Với Chúng Tôi
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Chúng tôi sẵn sàng tư vấn và hỗ trợ bạn về các sản phẩm dược thảo. 
            Hãy liên hệ với chúng tôi để được phục vụ tốt nhất.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <Card className="border-herbal-sage/30 hover:shadow-herbal transition-all duration-300">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-3 text-xl text-foreground">
                  <div className="p-2 bg-gradient-gold rounded-lg">
                    <MapPin className="h-6 w-6 text-herbal-primary" />
                  </div>
                  Địa Chỉ Cửa Hàng
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Số 66 Trạng Tình, Phường 9<br />
                  Thành phố Đà Lạt, Tỉnh Lâm Đồng<br />
                  Việt Nam
                </p>
                <Button 
                  variant="outline" 
                  size="sm"
                  className="border-herbal-primary text-herbal-primary hover:bg-herbal-primary hover:text-primary-foreground"
                >
                  Xem Bản Đồ
                </Button>
              </CardContent>
            </Card>
            
            <Card className="border-herbal-sage/30 hover:shadow-herbal transition-all duration-300">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-3 text-xl text-foreground">
                  <div className="p-2 bg-gradient-gold rounded-lg">
                    <Phone className="h-6 w-6 text-herbal-primary" />
                  </div>
                  Thông Tin Liên Hệ
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-herbal-gold" />
                  <div>
                    <p className="font-medium text-foreground">Hotline</p>
                    <p className="text-muted-foreground">0986.836.712</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-herbal-gold" />
                  <div>
                    <p className="font-medium text-foreground">Email</p>
                    <p className="text-muted-foreground">info@duocthaodaikhang.vn</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <MessageCircle className="h-5 w-5 text-herbal-gold" />
                  <div>
                    <p className="font-medium text-foreground">Zalo/WhatsApp</p>
                    <p className="text-muted-foreground">0986.836.712</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-herbal-sage/30 hover:shadow-herbal transition-all duration-300">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-3 text-xl text-foreground">
                  <div className="p-2 bg-gradient-gold rounded-lg">
                    <Clock className="h-6 w-6 text-herbal-primary" />
                  </div>
                  Giờ Làm Việc
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Thứ 2 - Thứ 6:</span>
                  <span className="text-foreground font-medium">8:00 - 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Thứ 7:</span>
                  <span className="text-foreground font-medium">8:00 - 16:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Chủ Nhật:</span>
                  <span className="text-foreground font-medium">8:00 - 12:00</span>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="bg-gradient-nature rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Gửi Tin Nhắn Cho Chúng Tôi
            </h3>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Họ và Tên *
                </label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 border border-herbal-sage rounded-lg focus:outline-none focus:ring-2 focus:ring-herbal-primary bg-background"
                  placeholder="Nhập họ và tên của bạn"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Số Điện Thoại *
                </label>
                <input 
                  type="tel" 
                  className="w-full px-4 py-3 border border-herbal-sage rounded-lg focus:outline-none focus:ring-2 focus:ring-herbal-primary bg-background"
                  placeholder="Nhập số điện thoại"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Nội Dung Tư Vấn *
                </label>
                <textarea 
                  rows={4}
                  className="w-full px-4 py-3 border border-herbal-sage rounded-lg focus:outline-none focus:ring-2 focus:ring-herbal-primary bg-background resize-none"
                  placeholder="Mô tả nhu cầu tư vấn của bạn..."
                ></textarea>
              </div>
              
              <Button 
                size="lg" 
                className="w-full bg-gradient-herbal hover:opacity-90 transition-opacity shadow-herbal"
              >
                Gửi Yêu Cầu Tư Vấn
              </Button>
              
              <p className="text-sm text-muted-foreground text-center">
                Chúng tôi sẽ liên hệ lại trong vòng 24 giờ
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <Card className="border-herbal-sage/30 bg-gradient-gold/10 max-w-md mx-auto">
            <CardContent className="p-6">
              <h4 className="font-bold text-foreground mb-2">
                Mã Số Kinh Doanh
              </h4>
              <p className="text-2xl font-bold text-herbal-primary">
                5801444158
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                Được cấp phép kinh doanh chính thức
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;