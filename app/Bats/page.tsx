import HeroSection from "@/Components/HeroSection";
import Card from "@/Components/Card";
// import HeroSection from '../../components/HeroSection';
// import Card from '../../components/Card';

export default function Home() {
  const Bats = [
    {
      category: "Bats",
      title: "CA Pro 15000",
      image: "/Bats/capro15000.jpg",
      price: "RS 12999",
    },
    {
      category: "Bats",
      title: "Gary Nichols Diamand Edition",
      image: "/Bats/garynicholsbat.png",
      price: "RS 14999",
    },
    {
      category: "Bats",
      title: "BOX OF 6",
      image: "/Bats/mb malik bat.jpeg",
      price: "RS 5999",
    },
    {
      category: "Bats",
      title: "MRF Virat Kohli Eition",
      image: "/Bats/mrf.jpeg",
      price: "RS 14999",
    },
    {
      category: "Bats",
      title: "Kookaburra Bat",
      image: "/Bats/hard ball bat.jpg",
      price: "RS 6999",
    },
    {
      category: "Bats",
      title: "JD Tape ball Bat TM Edition",
      image: "/Bats/tape ball bat.png",
      price: "RS 2099",
    },
    {
      category: "Bats",
      title: "SS Black Edition",
      image: "/Bats/SS bat.jpg",
      price: "RS 7999",
    },
    {
      category: "Bats",
      title: "Ton Player Edition",
      image: "/Bats/Ton player edition.webp",
      price: "RS 3999",
    },
    {
        category: "Bats",
        title: "HS ",
        image: "/Bats/hs.jpeg",
        price: "RS 4999",
      },
  ];

  return (
    <>
      <HeroSection imageSrc="/Bats/Cricket Bats.jpeg" />
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {Bats.map((item, index) => (
              <div key={index} className="lg:w-1/4 md:w-1/2 p-4 w-full">
                <Card
                  category={item.category}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
