import Catalog from "@/components/layouts/Catalog";
import MainLayout from "@/components/layouts/MainLayout";
import NavbarGuest from "@/components/layouts/NavbarGuest";
import HeroImage from "@/components/ui/hero";

export default function Home() {
  return (
    <>
      <NavbarGuest></NavbarGuest>
      <MainLayout>
        <HeroImage />

        <div className="w-full mt-10">
          <h2 className="text-2xl md:text-4xl font-bold text-neutral-950">
            Featured Product
          </h2>
        </div>
        {/* grid daftar produk */}
        <Catalog />
      </MainLayout>
    </>
  );
}
