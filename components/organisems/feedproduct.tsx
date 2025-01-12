import Image from "next/image";

export default function FeedProduct() {
  const images = [
    { src: "/images/chicken51.jpg", alt: "Image 1" },
    { src: "/images/chicken49.jpg", alt: "Image 2" },
    { src: "/images/chicken47.jpg", alt: "Image 3" },
    { src: "/images/chicken41.jpg", alt: "Image 4" },
    { src: "/images/chicken36.jpg", alt: "Image 5" },
    { src: "/images/banner16.jpg", alt: "Image 6" },
    { src: "/images/chicken35.jpg", alt: "Image 7" },
  ];

  return (
    <div className="min-h-screen grid grid-rows-2 grid-cols-4 gap-4 bg-gray-100 p-4">
      {/* Baris Atas: Gambar 1-4 */}
      <div className="relative rounded-lg overflow-hidden shadow-lg">
        <Image
          src={images[0].src}
          alt={images[0].alt}
          fill
          className="object-cover"
        />
      </div>
      <div className="relative rounded-lg overflow-hidden shadow-lg">
        <Image
          src={images[1].src}
          alt={images[1].alt}
          fill
          className="object-cover"
        />
      </div>
      <div className="relative rounded-lg overflow-hidden shadow-lg">
        <Image
          src={images[2].src}
          alt={images[2].alt}
          fill
          className="object-cover"
        />
      </div>
      <div className="relative rounded-lg overflow-hidden shadow-lg">
        <Image
          src={images[3].src}
          alt={images[3].alt}
          fill
          className="object-cover"
        />
      </div>

      {/* Baris Bawah: Gambar 5-7 */}
      <div className="relative rounded-lg overflow-hidden shadow-lg">
        <Image
          src={images[4].src}
          alt={images[4].alt}
          fill
          className="object-cover"
        />
      </div>
      <div className="relative rounded-lg overflow-hidden shadow-lg col-span-2">
        <Image
          src={images[5].src}
          alt={images[5].alt}
          fill
          className="object-cover"
        />
      </div>
      <div className="relative rounded-lg overflow-hidden shadow-lg">
        <Image
          src={images[6].src}
          alt={images[6].alt}
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
}
