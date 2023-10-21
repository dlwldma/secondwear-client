import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <section
        className="flex justify-center w-screen h-[500px] relative border-2 landing-background-gradient border-blue-100
        
        "
      >
        {/* Este contiene la imagen en específico. 
        Se debe borrar en resoluciones pequeñas. */}
        <Image
          className="hidden lg:block absolute top-0 right-0"
          src="/hero-background.png"
          alt="hero image"
          width={750}
          height={20}
        />
        <div className="flex justify-start items-center md:w-[min(1250px,95vw)] text-white p-5 md:p-0">
          <div className=" w-full lg:w-[50%]">
            <h2 className="font-bold font-3xl">
              Compra y vende tu ropa usada.
            </h2>
            <h2 className="font-2xl">
              Sin intermediarios, sin dificultades y al precio que tú decidas.
            </h2>
            <button
              className="bg-white text-[#8b71e1] font-bold rounded-3xl 
              p-4 mt-10"
            >
              ¡Comienza a comprar!
            </button>
          </div>
        </div>
      </section>
      <section
        className=" w-[min(1250px,95vw)]
        border-2 border-blue-100"
      >
        Primeras categorias
      </section>
      <section
        className=" w-[min(1250px,95vw)]
        border-2 border-blue-100"
      >
        Mejores Opciones para vs
      </section>
      <section
        className=" w-[min(1250px,95vw)]
        border-2 border-blue-100"
      >
        Elije por marca
      </section>
      <section
        className=" w-[min(1250px,95vw)]
        border-2 border-blue-100"
      >
        Hasta 70% descuento
      </section>
      <section
        className=" w-[min(1250px,95vw)]
        border-2 border-blue-100"
      >
        Productos populares de la semana
      </section>
      <section
        className="flex justify-center w-screen border-2 border-blue-100
        "
      >
        <div className="md:w-[min(1250px,95vw)]">Seccion del cashback</div>
      </section>
      <section
        className=" w-[min(1250px,95vw)]
        border-2 border-blue-100"
      >
        Mejores opciones para vs hoy
      </section>
      <section
        className=" w-[min(1250px,95vw)]
        border-2 border-blue-100"
      >
        Servicios para ayudarte a comprar
      </section>
    </main>
  );
}
