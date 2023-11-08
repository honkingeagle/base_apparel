import Image from "next/image";

export default function Mobile() {
  return (
    <section className="md:hidden w-[90%] mx-auto my-10">
      <Image
        src="/logo.svg"
        alt="Base apparel Logo"
        width={100}
        height={24}
        priority
      />

      <Image
        src="/hero-mobile.jpg"
        alt="Base apparel Hero Image"
        className="pt-6"
        width={600}
        height={600}
      />

      <section className="pt-10 text-[2rem] text-center">
        <div className="tracking-[.4em]">
          <p className="text-[#C89C9C] font-thin">{`WE'RE`}</p>
          <p className="bg-red-400">COMING</p>
          <p>SOON</p>
        </div>
        <div className="text-sm tracking-widest text-[#C89C9C] py-4 text-center">
          <p>
            Hello fellow shoppers!. {`We're`} currently building our new fashion
            store. Add your email below to stay up to date with announcements
            and our launch deals.
          </p>

          <form className="my-10 relative items-center">
            <input
              className="py-5 px-6 rounded-full border-none focus:border-2 outline-none
              focus:border-red-400 w-full"
              type="text"
              placeholder="janeappleseed#gmail.com"
            />
            <button className="rounded-full py-4 px-8 right-1 bg-[#F8CECF] absolute">
              <Image
                src="/icon-arrow.svg"
                alt="an arrow"
                width={15}
                height={15}
              />
            </button>
          </form>
        </div>
      </section>
    </section>
  );
}
