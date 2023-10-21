import Image from "next/image";

export default function Home() {
  return (
    <main
      className="flex flex-col items-center justify-between
        border-2 border-red-300
        "
    >
      <section
        className="flex justify-center w-screen border-2 border-blue-100
        "
      >
        <div className="md:w-[min(1250px,95vw)]">Land section</div>
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
