import VillaCard from '@/components/VillaCard';

export default function Home() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <VillaCard
        imageSrc="/image.jpg"
        name="Villa Banovi"
        pricePerNight={224}
      />
    </div>
  );
}
