
import HeroSection from "@/components/HeroSection";
import Card from "@/components/Card";

export default function GiftBasket() {
  const otheritems= [
    {
      category: "Other Items",
      title: "Cricket Pads",
      image: "/other items/cricket pads.webp",
      price: "RS 4999",
    },
    {
      category: "Other Items",
      title: "Ludo",
      image: "/other items/ludo.webp",
      price: "RS 2499",
    },
    {
      category: "Other Items",
      title: "Mb Malik Gold Edition",
      image: "/other items/mbmalikgold.jpeg",
      price: "RS 1999",
    },
    {
      category: "Other Items",
      title: "6 Ball Pack",
      image: "/other items/ball 6 pack.jpeg",
      price: "RS 1999",
    },
    {
      category: "Other Items",
      title: "Tennis",
      image: "/other items/tennis.jpg",
      price: "RS 999",
    },
    {
      category: "Other Items",
      title: "Carom ",
      image: "/other items/carom board.jpg",
      price: "RS 2499",
    },
    {
      category: "Other Items",
      title: "HL Blue Helmet",
      image: "/other items/HL-50-Blue-Helmet-Side.webp",
      price: "RS 1999",
    },
    {
      category: "Other Items",
      title: "Wicket",
      image: "/other items/images.jpeg",
      price: "RS 2999",
    },
  ];

  return (
    <>
      <HeroSection imageSrc="/other items/other items.jpeg" />
     
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {otheritems.map((item, index) => (
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
