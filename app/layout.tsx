import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Hamburger from "@/components/ui/Hamburger";
import "./globals.css";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SecondWear",
  description: "Compra, vende y reusa ropa de segunda mano.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="w-screen">
          <div className="w-full bg-[#8b71e1] text-white font-semibold">
            <div
              className="flex flex-col md:flex-row justify-between items-center
            w-[min(1250px,95vw)]
            m-auto"
            >
              <div>Number</div>
              <div className="hidden md:block">Info</div>
              <div>Idioma/Location</div>
            </div>
          </div>
          <div className=" border-b-2 border-gray-100 flex items-center justify-between w-[min(1250px,95vw)] m-auto py-2">
            <div className="lg:hidden">
              <Hamburger />
            </div>
            <a className="hidden lg:block order-1 sm:order-0" href="/">
              <div className="">
                <Image
                  src={"/logo1.png"}
                  alt="sajdjs"
                  width={150}
                  height={70}
                />
              </div>
            </a>
            <div className="hidden lg:flex lg:justify-center lg:gap-10 order-2">
              <a href="/products">Categorias</a>
              <a href="/products">Producos</a>
            </div>
            <div className="hidden lg:block order-3">
              <input
                className="rounded-[20px] px-4 border-2 border-gray-200 focus:outline-none"
                type="text"
                placeholder="buscar"
              />
            </div>
            <div className="flex flex-row order-4 gap-2 sm:flex-row sm:gap-8">
              <a href="/auth" className="flex">
                {/* <Image src="/icons/login.png" alt="" /> */}
                <span>Cuenta</span>
              </a>
              <a href="/cart" className="flex items-center">
                {/* <img src="/icons/cart.png" alt="" /> */}
                <span>Carrito</span>
              </a>
            </div>
          </div>
        </header>

        {children}
        <footer
          className="w-[min(1250px,95vw)] 
          m-auto mt-8"
        >
          <section className="footer-items">
            <article className="company">
              <div className="flex flex-col justify-start">
                <a className="order-1 sm:order-0" href="/">
                  <Image
                    src={"/logo1.png"}
                    alt="sajdjs"
                    width={200}
                    height={70}
                  />
                </a>
              </div>
              <p className="text-sm">
                Queremos hacer del mundo un lugar mejor promoviendo la compra de
                ropa usada :)
              </p>
            </article>
            <article className="payment">
              <h2
                className="font-semibold text-gray-700 text-lg
                mb-5"
              >
                Pagos Aceptados
              </h2>
              <div className="grid grid-cols-[repeat(auto-fit,minmax(2rem,1fr))] gap-2">
                <span className="flex justify-center p-2 border border-gray-300 rounded-[5px]">
                  <Image
                    src="/webpay-logo.png"
                    alt="mastercard"
                    width={25}
                    height={25}
                  />
                </span>
                <span className="flex justify-center p-2 border border-gray-300 rounded-[5px]">
                  <Image
                    src="/visa-logo.png"
                    alt="mastercard"
                    width={40}
                    height={10}
                  />
                </span>
                <span className="flex justify-center p-2 border border-gray-300 rounded-[5px]">
                  <Image
                    src="/mastercard-logo.png"
                    alt="mastercard"
                    width={25}
                    height={25}
                  />
                </span>
              </div>
            </article>
            <article className="department">
              <h2
                className="font-semibold text-gray-700 text-lg
                mb-5"
              >
                Tipo de ropa
              </h2>
              <ul className="text-sm footer-list">
                <li>
                  <a href="/">Deportiva</a>
                </li>
                <li>
                  <a href="/">Casual</a>
                </li>
                <li>
                  <a href="/">Calzado</a>
                </li>
              </ul>
            </article>
            <article className="about-us">
              <h2
                className="font-semibold text-gray-700 text-lg
                mb-5"
              >
                Sobre nosotros
              </h2>
              <ul className="text-sm footer-list">
                <li>
                  <a href="/">Sobre SecondWear</a>
                </li>
                <li>
                  <a href="/">Noticias & Blog</a>
                </li>
                <li>
                  <a href="/">Ideas & Guias</a>
                </li>
              </ul>
            </article>
            <article className="services">
              <h2
                className="font-semibold text-gray-700 text-lg
                mb-5"
              >
                Servicios
              </h2>
              <ul className="text-sm footer-list">
                <li>
                  <a href="/">Gift Card</a>
                </li>
                <li>
                  <a href="/">Aplicacion Movil</a>
                </li>
                <li>
                  <a href="/">Crear Cuenta</a>
                </li>
              </ul>
            </article>
            <article className="help">
              <h2
                className="font-semibold text-gray-700 text-lg
                mb-5"
              >
                Ayuda
              </h2>
              <ul className="text-sm footer-list">
                <li>
                  <a href="/">Seguimiento de tu orden</a>
                </li>
                <li>
                  <a href="/">Feedback</a>
                </li>
                <li>
                  <a href="/">Contáctanos</a>
                </li>
              </ul>
            </article>
          </section>
          <hr className="my-5" />
          <section className="flex flex-wrap justify-between flex-col sm:flex-row">
            <div className="flex flex-wrap justify-between">
              <p className="mx-2">Vende tú</p>
              <p className="mx-2">Gitf Cards</p>
              <p className="mx-2">Help center</p>
            </div>
            <div className="flex flex-wrap justify-between">
              <p>Terminos de servicio</p>
              <p>Privacidad</p>
            </div>
            <div className="flex flex-wrap justify-center">
              <p>dlwldma@2023</p>
            </div>
          </section>
        </footer>
      </body>
    </html>
  );
}
