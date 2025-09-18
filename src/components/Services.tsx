import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Leaf, Stethoscope, ShoppingCart, Users, Heart, Shield } from "lucide-react";
import herbsImage from "@/assets/herbs-products.jpg";

const Services = () => {
  const services = [
    {
      icon: ShoppingCart,
      title: "Kinh Doanh Dược Thảo",
      description: "Cung cấp các loại dược thảo chất lượng cao, nguồn gốc rõ ràng từ các vùng trồng uy tín."
    },
    {
      icon: Stethoscope,
      title: "Tư Vấn Chuyên Môn",
      description: "Đội ngũ chuyên gia tư vấn sử dụng dược thảo phù hợp với từng cá nhân."
    },
    {
      icon: Users,
      title: "Dịch Vụ Khách Hàng",
      description: "Hỗ trợ khách hàng 24/7, giao hàng tận nơi, đảm bảo chất lượng sản phẩm."
    },
    {
      icon: Heart,
      title: "Chăm Sóc Sức Khỏe",
      description: "Tư vấn phương pháp chăm sóc sức khỏe tự nhiên bằng dược thảo truyền thống."
    },
    {
      icon: Shield,
      title: "Đảm Bảo Chất Lượng",
      description: "Kiểm tra nghiêm ngặt từ khâu thu mua đến bảo quản và phân phối sản phẩm."
    },
    {
      icon: Leaf,
      title: "Sản Phẩm Tự Nhiên",
      description: "Chuyên cung cấp các sản phẩm dược thảo 100% tự nhiên, không hóa chất độc hại."
    }
  ];

  return (
    <section className="py-16 bg-gradient-nature">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Dịch Vụ Của Chúng Tôi
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Chúng tôi cung cấp đa dạng các dịch vụ liên quan đến dược thảo, 
            từ kinh doanh đến tư vấn chuyên môn.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img 
              src={herbsImage} 
              alt="Traditional Vietnamese herbal products" 
              className="rounded-2xl shadow-herbal w-full h-[400px] object-cover"
            />
          </div>
          
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground">
              Sản Phẩm Dược Thảo Chất Lượng Cao
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Với hơn 10 năm kinh nghiệm trong lĩnh vực dược thảo, chúng tôi tự hào là 
              đối tác tin cậy của nhiều khách hàng trên toàn quốc. Sản phẩm của chúng tôi 
              được tuyển chọn kỹ lưỡng từ các vùng trồng dược liệu uy tín.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-herbal-gold/10 text-herbal-primary px-4 py-2 rounded-full text-sm font-medium">
                Ginseng Hàn Quốc
              </div>
              <div className="bg-herbal-gold/10 text-herbal-primary px-4 py-2 rounded-full text-sm font-medium">
                Đông Trùng Hạ Thảo
              </div>
              <div className="bg-herbal-gold/10 text-herbal-primary px-4 py-2 rounded-full text-sm font-medium">
                Linh Chi Đỏ
              </div>
              <div className="bg-herbal-gold/10 text-herbal-primary px-4 py-2 rounded-full text-sm font-medium">
                Tổ Yến Khánh Hòa
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="border-herbal-sage/30 hover:shadow-herbal transition-all duration-300 bg-background/80 backdrop-blur-sm"
            >
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-gradient-gold rounded-lg">
                    <service.icon className="h-6 w-6 text-herbal-primary" />
                  </div>
                  <CardTitle className="text-lg text-foreground">
                    {service.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;