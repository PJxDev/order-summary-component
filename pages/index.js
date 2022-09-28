import Head from "next/head";
import Image from "next/image";
import imgHeader from "/public/images/illustration-hero.svg";
import iconMusic from "/public/images/icon-music.svg";

export default function Home() {
  return (
    <div>
      <Head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="./public/images/favicon.png"
        />

        <title>Frontend Mentor | Order summary card</title>
      </Head>

      <main className="text-base | font-body | bg-paleBlue | h-screen | flex | justify-center | items-center">
        <article className="overflow-hidden | flex | justify-center | items-center | flex-col | max-w-xs | bg-veryPaleBlue | rounded-2xl | ">
          <header className="flex | flex-col | justify-center | gap-6 | w-full | h-full">
            <picture className="relative | object-fill ">
              <Image
                src={imgHeader}
                alt="illustration of a person listening to music"
                layout="responsive"
              ></Image>
            </picture>
            <h2 className="text-center | text-xl | font-black | text-darkBlue">
              Order Summary
            </h2>
          </header>
          <section className="relative | flex | flex-col | justify-center |  gap-6 | text-center | text-base | text-desaturatedBlue | p-6">
            <p>
              You can now listen to millions of songs, audiobooks, and podcasts
              on any device anywhere you like!
            </p>
            <div className="relative | flex | flex-row | items-center | justify-start | gap-5 | bg-desaturatedBlue | bg-opacity-5 | rounded-xl | p-3 | text-sm">
              <Image
                src={iconMusic}
                alt="two eight-notes"
                layout="fixed"
              ></Image>
              <div className="flex | flex-col">
                <h3 className="font-black | text-darkBlue">Annual Plan</h3>
                <label>$59.99/year</label>
              </div>
              <a className="font-bold | underline | cursor-pointer | text-brightBlue | ml-6 || hover:text-opacity-60">Change</a>
            </div>
          </section>
          <footer className="flex | flex-col | justify-center | items-center | font-bold | text-sm | w-full | mb-3 | gap-2">
            <a className="bg-brightBlue | text-veryPaleBlue | p-3 | rounded-lg | w-[80%] | text-center | cursor-pointer || hover:bg-opacity-60">Proceed to Payment</a>
            <a className="text-desaturatedBlue | rounded-lg | text-center | my-2 | select-none | cursor-pointer || hover:text-darkBlue">Cancel Order</a>
          </footer>
        </article>
      </main>
    </div>
  );
}
