import VillaCard from '@/components/VillaCard';
import ClientTweetCard from "@/components/magicui/client-tweet-card";

// 创建一个包含多个别墅信息的数组
const villas = [
  {
    imageSrc: "/image.jpg",
    name: "Villa Banovi",
    pricePerNight: 224,
    rating: 4.5,
    location: "Vinjerac, Croatia"
  },
];

const cardDescription = "这个Villa卡片设计融合了现代美学和实用功能。它展示了villa的关键信息，如名称、每晚价格、评分和位置。卡片在悬停时会展开，显示更多细节和预订按钮，创造了一个互动且引人入胜的用户体验。";

export default function Home() {
  return (
    <div className="bg-white p-4">
      <div className="max-w-7xl mx-auto">
        
        <div className="flex flex-col md:flex-row gap-8 items-center">
        <h2 className="text-4xl font-bold mb-8 text-start">Day 1: Card Design</h2>
          {/* Villa cards section */}
          <div className="w-full md:w-1/2">
            <div className="flex flex-col items-start gap-4">
              {villas.map((villa, index) => (
                <VillaCard
                  key={index}
                  imageSrc={villa.imageSrc}
                  name={villa.name}
                  pricePerNight={villa.pricePerNight}
                  rating={villa.rating}
                  location={villa.location}
                />
              ))}
            </div>
          </div>
          
          {/* Description section */}
          <div className="w-full md:w-1/2 flex flex-col justify-between bg-gray-100 p-4 rounded-lg">
            <div>
              <h3 className="text-2xl font-semibold mb-4">卡片设计描述</h3>
              <p className="text-gray-700 mb-6">{cardDescription}</p>
            </div>
            
            {/* Inspiration section */}
            <div>
              <h3 className="text-2xl font-semibold mb-4">灵感来源</h3>
              <ClientTweetCard id="1830911615669051446" className="shadow-2xl max-w-sm" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
