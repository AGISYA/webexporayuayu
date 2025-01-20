import Image from "next/image";

export default function FeedProduct() {
  const images = [
    { src: "/images/49.jpg", alt: "Image 1" },
    { src: "/images/48.jpg", alt: "Image 2" },
    { src: "/images/72.jpg", alt: "Image 3" },
    { src: "/images/9.jpg", alt: "Image 4" },
    { src: "/images/28.jpg", alt: "Image 5" },
    { src: "/images/75.jpg", alt: "Image 6" },
    { src: "/images/57.jpg", alt: "Image 7" },
  ];

  return (
    <div className="min-h-screen grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 bg-gray-100 p-4">
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
      <div className="relative rounded-lg overflow-hidden shadow-lg col-span-1 sm:col-span-2 md:col-span-2 lg:col-span-2">
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
