import Image from "next/image";

export default function Desktop() {
  return (
    <section className="hidden lg:grid grid-cols-6">
      <section className="pl-[30%] py-16 bg-[#FFF7F8] col-start-1 col-end-4 bg-[url('/bg-pattern-desktop.svg')]">
        <Image
          className="hidden lg:block"
          src="/logo.svg"
          alt="Base apparel Logo"
          width={160}
          height={160}
          priority
        />
        <section className="pt-10 text-[4.5rem]">
          <div className="tracking-[.4em]">
            <p className="text-[#C89C9C] font-thin">{`WE'RE`}</p>
            <p className="bg-red-400">COMING</p>
            <p>SOON</p>
          </div>
          <div className="text-lg tracking-widest text-[#C89C9C]">
            <p>
              Hello fellow shoppers!. {`We're`} currently building our new
              fashion store. Add your email below to stay up to date with
              announcements and our launch deals.
            </p>

            <form className="my-10 relative items-center">
              <input
                className="py-5 px-6 rounded-full border-none focus:border-2 outline-none
              focus:border-red-400 w-3/4"
                type="text"
                placeholder="janeappleseed#gmail.com"
              />
              <button className="rounded-full py-4 px-12 right-20 bg-[#F8CECF] absolute top-1">
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

      <section className="hidden lg:block col-start-4 col-end-7 relative m-auto">
        <Image
          src="/hero-desktop.jpg"
          alt="Base apparel Hero Image"
          className="object-contain"
          width={500}
          height={500}
        />
      </section>
    </section>
  );
}
