import Footer from "@/components/organisems/footer";
import Navbar from "@/components/organisems/navbar";
import Image from "next/image";

const Outlets = () => {
  const outlets = [
    {
      title: "Outlet Jakarta",
      location: "Jakarta Barat",
      address:
        "Jl. Indonesia Raya, Sudirman, Jakarta Selatan, DKI Jakarta, Indonesia, 10150",
      email: "cs@webekspor.com",
      phone: "(+62)888 8990 988",
      imgSrc: "/images/outlet1.jpg", // Ganti dengan path gambar yang sesuai
    },
    {
      title: "Outlet Surabaya",
      location: "Surabaya Timur",
      address: "Jl. Raya Surabaya, Surabaya, Jawa Timur, Indonesia, 60200",
      email: "cs@webekspor.com",
      phone: "(+62)888 8990 988",
      imgSrc: "/images/outlet2.jpg",
    },
    {
      title: "Outlet Bandung",
      location: "Bandung Utara",
      address: "Jl. Dago, Bandung, Jawa Barat, Indonesia, 40100",
      email: "cs@webekspor.com",
      phone: "(+62)888 8990 988",
      imgSrc: "/images/outlet3.jpg",
    },
    {
      title: "Outlet Bali",
      location: "Kuta, Bali",
      address: "Jl. Pantai Kuta, Bali, Indonesia, 80361",
      email: "cs@webekspor.com",
      phone: "(+62)888 8990 988",
      imgSrc: "/images/outlet4.jpg",
    },
  ];

  return (
    <div>
      <Navbar />
      <section className="min-h-screen flex flex-col justify-center bg-white text-black py-8 px-4">
        <h1 className="text-4xl font-bold text-center mb-8">Our Outlets</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mx-auto">
          {outlets.map((outlet, index) => (
            <div key={index} className="flex flex-col items-start text-left">
              <Image
                src={outlet.imgSrc}
                alt={outlet.title}
                width={300}
                height={200}
                className="rounded-lg mb-4"
              />
              <h2 className="text-2xl font-semibold">{outlet.title}</h2>
              <p className="text-lg text-gray-600">{outlet.location}</p>
              <p className="text-sm text-gray-500 mt-2">{outlet.address}</p>
              <p className="text-sm text-gray-500 mt-2">
                Email:{" "}
                <a href={`mailto:${outlet.email}`} className="text-blue-500">
                  {outlet.email}
                </a>
              </p>
              <p className="text-sm text-gray-500 mt-2">
                Phone:{" "}
                <a href={`tel:${outlet.phone}`} className="text-blue-500">
                  {outlet.phone}
                </a>
              </p>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Outlets;
