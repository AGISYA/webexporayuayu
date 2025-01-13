import Footer from "@/components/organisems/footer";
import Navbar from "@/components/organisems/navbar";
import Image from "next/image";
import Link from "next/link";

export default function ChickenPopcorn() {
  return (
    <div className="flex bg-white flex-col min-h-screen">
      <Navbar />
      <div className="w-full max-w-4xl mx-auto mt-28 rounded-lg overflow-hidden flex flex-col h-screen">
        {/* Image Section */}
        <div className="w-full h-1/2 relative">
          <Image
            src="/images/chicken30.jpg"
            alt="Chicken Popcorn"
            layout="fill"
            objectFit="cover"
            className="rounded-t-lg"
          />
        </div>
        {/* Text Section */}
        <div className="flex-grow p-6 flex flex-col justify-between">
          <h1 className="text-3xl font-bold text-gray-800">Chicken Popcorn</h1>
          <p className="text-gray-600 text-justify flex-grow">
            Fried chicken is a popular dish made from chicken pieces that are
            seasoned, coated in a breading or batter, and then deep-fried or
            pan-fried to achieve a crispy, golden-brown exterior while keeping
            the meat tender and juicy on the inside. The chicken is typically
            marinated or seasoned with spices such as salt, pepper, garlic, and
            paprika to enhance flavor. It is then coated with a mixture of
            flour, cornmeal, and sometimes additional spices or herbs. Once
            coated, the chicken is fried in hot oil until the coating becomes
            crisp and the chicken is cooked through. Fried chicken is often
            served with a variety of sides like mashed potatoes, coleslaw,
            biscuits, or fries, and is enjoyed worldwide, especially in Southern
            U.S. cuisine, as well as in many other cultures around the globe.
          </p>
          <div className="border-t pt-4">
            <Link
              href="/item/chicken-package-c"
              className="text-blue-500 hover:underline"
            >
              ← Previous Item
            </Link>
            <Link
              href="/item/chicken-crispy"
              className="ml-4 text-blue-500 hover:underline"
            >
              Next Item →
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
