import Catalog from "@/components/layouts/Catalog";
import MainLayout from "@/components/layouts/MainLayout";
import Navbar from "@/components/layouts/Navbar";
import HeroImage from "@/components/ui/hero";

export default function Home() {
  return (
    <>
      <Navbar />
      <MainLayout>
        <HeroImage />
        <div className="w-full mt-10">
          <h2 className="text-2xl md:text-4xl font-bold text-neutral-950">
            Featured Product
          </h2>
        </div>
        <Catalog product={undefined} />
      </MainLayout>
    </>
  );
}
