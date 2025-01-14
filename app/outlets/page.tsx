import Footer from "@/components/organisems/footer";
import Navbar from "@/components/organisems/navbar";
import Image from "next/image";

const Outlets = () => {
  const outlet = {
    title: "ayuayunusantara",
    location: "Garut",
    address: "Jl. Ahmad Yani no.1, Garut, Jawa Barat, Indonesia",
    email: "cs@webekspor.com",
    phone: "(+62)888 8990 988",
    imgSrc: "/images/AKSA0619.JPG", // Ganti dengan path gambar yang sesuai
  };

  return (
    <div>
      <Navbar />
      <section className="min-h-screen flex flex-col justify-center bg-white text-black py-8 px-4">
        <h1 className="text-4xl font-bold text-center mb-8">Our Outlet</h1>

        <div className="flex flex-col items-center text-center mx-auto max-w-md">
          <Image
            src={outlet.imgSrc}
            alt={outlet.title}
            width={300}
            height={200}
            className="rounded-lg mb-4"
          />
          <h2 className="text-2xl font-semibold mb-2">{outlet.title}</h2>
          <p className="text-lg text-gray-600 mb-2">{outlet.location}</p>
          <p className="text-sm text-gray-500 mb-2">{outlet.address}</p>
          <p className="text-sm text-gray-500 mb-2">
            Email:{" "}
            <a href={`mailto:${outlet.email}`} className="text-blue-500">
              {outlet.email}
            </a>
          </p>
          <p className="text-sm text-gray-500">
            Phone:{" "}
            <a href={`tel:${outlet.phone}`} className="text-blue-500">
              {outlet.phone}
            </a>
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Outlets;
