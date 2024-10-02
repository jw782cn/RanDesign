import Image from 'next/image';

interface VillaCardProps {
  imageSrc: string;
  name: string;
  pricePerNight: number;
}

export default function VillaCard({ imageSrc, name, pricePerNight }: VillaCardProps) {
  return (
    <div className="relative w-72 h-96 rounded-3xl overflow-hidden shadow-lg">
      <Image
        src={imageSrc}
        alt={name}
        layout="fill"
        objectFit="cover"
      />
      <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-80 p-4 rounded-b-3xl">
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-sm">${pricePerNight}/night</p>
      </div>
    </div>
  );
}