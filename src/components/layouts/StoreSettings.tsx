"use client"

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function StoreSettings() {
  return (
    <div className="p-6">
      <Tabs defaultValue="profile" className="w-full">
        {/* Tab List */}
        <TabsList className="mb-4">
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="address">Address</TabsTrigger>
        </TabsList>

        {/* Profile Tab */}
        <TabsContent value="profile">
          <Card className="max-w-md">
            <CardContent className="p-6 space-y-4">
              {/* Logo Toko */}
              <div className="w-16 h-16 rounded-full bg-black flex items-center justify-center">
                <span className="text-white text-2xl">👨🏻‍🦰</span>
              </div>

              {/* Store Info */}
              <div>
                <p className="text-sm text-gray-500">Store Name</p>
                <p className="font-medium">Toko Barokah Jaya</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Store Domain</p>
                <p className="font-medium">
                  www.shirt.com/tokobarokahjaya
                </p>
              </div>

              {/* Action Button */}
              <Button variant="outline" className="w-full">
                Change Profile
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Address Tab */}
        <TabsContent value="address">
          <Card className="max-w-md">
            <CardContent className="p-6 space-y-4">
              <p className="text-gray-600">Alamat toko belum ditambahkan.</p>
              <Button className="w-full">Add Address</Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
