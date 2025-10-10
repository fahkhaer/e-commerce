"use client";

import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  LayoutDashboard,
  Package,
  ListOrdered,
  Star,
  Settings,
  LogOut,
  Menu,
  ClipboardList,
  ShoppingBag,
  DollarSign,
  CheckCircle,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Suspense, useEffect, useState } from "react";
import Reviews from "@/components/layouts/ReviewSeller";
import StoreSettings from "@/components/layouts/StoreSettings";
import { ProductsList } from "@/components/layouts/ProductsList";
import OrderList from "@/components/layouts/OrderListSeller";
import { useSearchParams } from "next/navigation";


export default function HomeSeller() {
  return (
    <Suspense fallback={<div>Loading seller home...</div>}>
      <SellerHome />
    </Suspense>
  );
}

function SellerHome() {
  const searchParams = useSearchParams();
  const tab = searchParams.get("tab");

  const [open, setOpen] = useState(true);
  const [active, setActive] = useState("dashboard"); // menu aktif

  useEffect(() => {
    if (tab === "reviews" || tab === "orders") {
      setActive(tab);
    } else {
      setActive("orders");
    }
  }, [tab]);

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <aside
        className={`${
          open ? "w-64" : "w-17.5"
        } bg-white border-r transition-all duration-300 flex flex-col`}
      >
        {/* Logo + toggle */}
        <div className="flex items-center justify-between px-4 py-5 border-b">
          <span className="font-bold text-xl">
            {open ? "Shirt Seller" : "SS"}
          </span>
        </div>

        {/* Menu */}
        <nav className="flex-1 px-2 py-4 space-y-1">
          <button
            onClick={() => setActive("dashboard")}
            className={`flex items-center w-full px-2 py-2 text-sm font-medium rounded-lg ${
              active === "dashboard"
                ? "bg-gray-200 font-semibold"
                : "hover:bg-gray-100"
            }`}
          >
            <LayoutDashboard className="h-5 w-5 mr-2" />
            {open && "Dashboard"}
          </button>
          <button
            onClick={() => setActive("products")}
            className={`flex items-center w-full px-2 py-2 text-sm font-medium rounded-lg ${
              active === "products"
                ? "bg-gray-200 font-semibold"
                : "hover:bg-gray-100"
            }`}
          >
            <Package className="h-5 w-5 mr-2" />
            {open && "Products"}
          </button>
          <button
            onClick={() => setActive("orders")}
            className={`flex items-center w-full px-2 py-2 text-sm font-medium rounded-lg ${
              active === "orders"
                ? "bg-gray-200 font-semibold text-yellow-600"
                : "hover:bg-gray-100"
            }`}
          >
            <ListOrdered className="h-5 w-5 mr-2" />
            {open && "Order List"}
          </button>
          <button
            onClick={() => setActive("reviews")}
            className={`flex items-center w-full px-2 py-2 text-sm font-medium rounded-lg ${
              active === "reviews"
                ? "bg-gray-200 font-semibold"
                : "hover:bg-gray-100"
            }`}
          >
            <Star className="h-5 w-5 mr-2" />
            {open && "Reviews"}
          </button>
          <button
            onClick={() => setActive("settings")}
            className={`flex items-center w-full px-2 py-2 text-sm font-medium rounded-lg ${
              active === "settings"
                ? "bg-gray-200 font-semibold"
                : "hover:bg-gray-100"
            }`}
          >
            <Settings className="h-5 w-5 mr-2" />
            {open && "Settings"}
          </button>
        </nav>

        {/* Logout */}
        <div className="p-4 border-t">
          <Button
            variant="ghost"
            className="w-full justify-start text-pink-500"
          >
            <LogOut className="h-5 w-5 mr-2" />
            {open && "Logout"}
          </Button>
        </div>
      </aside>

      {/* Content */}
      <main className="flex-1 flex flex-col">
        {/* Topbar */}
        <header className="flex items-center justify-between bg-white py-4 border-b">
          <div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setOpen(!open)}
              className="ml-auto px-5"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
          <div className="flex items-center px-20 space-x-2">
            <Avatar>
              <AvatarImage src="https://i.pravatar.cc/40" alt="John Doe" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <span className="font-medium">John Doe</span>
          </div>
        </header>

        {/* Content berdasarkan menu aktif */}
        <div className="p-6">
          {active === "dashboard" && (
            <>
              <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <ShoppingBag className="h-5 w-5" />
                      <span>Total Product</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-2xl font-bold">24</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <ClipboardList className="h-5 w-5" />
                      <span>Total Orders</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-2xl font-bold">13</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <DollarSign className="h-5 w-5" />
                      <span>Total Revenue</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-2xl font-bold">Rp1.920.000</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5" />
                      <span>Completed Orders</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-2xl font-bold">8</p>
                  </CardContent>
                </Card>
              </div>
            </>
          )}

          {active === "products" && (
            <>
              <h1 className="text-2xl pb-4 font-bold">Products</h1>
              <Button className="bg-black hover:bg-black/80 h-12 w-45 text-white">
                + Add Product
              </Button>
              <ProductsList />
            </>
          )}
          {active === "orders" && (
            <>
              <h1 className="text-2xl font-bold">Order List</h1>

              <OrderList />
            </>
          )}
          {active === "reviews" && (
            <>
              <h1 className="text-2xl font-bold">Reviews Page</h1>
              <Reviews />
            </>
          )}
          {active === "settings" && (
            <>
              <h1 className="text-2xl font-bold">Settings</h1>
              <StoreSettings />
            </>
          )}
        </div>
      </main>
    </div>
  );
}
