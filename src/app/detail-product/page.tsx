import MainLayout from "@/components/layouts/MainLayout";
import NavbarLoginUser from "@/components/layouts/NavbarLoginUser";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";

export default function DetailProduct() {
  return (
    <>
      <NavbarLoginUser />
      <MainLayout>
        <div>
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="/">Home</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="/detail-product">Detail</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Sneakers Court Minimalis</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        
        <div className="flex flex-col md:flex-row gap-5 items-start">
          

        </div>

        {/* related product */}
      <div className="py-8 border-neutral-300 border-t">

      </div>
      </MainLayout>
    </>
  );
}
