import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectContent, SelectItem } from "@/components/ui/select";
import { MapPin, CheckCircle, XCircle } from "lucide-react";
import { motion } from "framer-motion";

const OrderDashboard = () => {
  return (
    <div className="p-6 space-y-6 bg-gray-100 min-h-screen">
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Sipariş Yönetim Paneli</h1>
        <Input placeholder="Sipariş Ara..." className="w-64" />
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="shadow-lg">
          <CardContent>
            <h2 className="text-xl font-semibold mb-2">Toplam Siparişler</h2>
            <p className="text-4xl font-bold">120</p>
          </CardContent>
        </Card>
        <Card className="shadow-lg">
          <CardContent>
            <h2 className="text-xl font-semibold mb-2">Bekleyen Siparişler</h2>
            <p className="text-4xl font-bold text-yellow-500">15</p>
          </CardContent>
        </Card>
        <Card className="shadow-lg">
          <CardContent>
            <h2 className="text-xl font-semibold mb-2">Tamamlanan Siparişler</h2>
            <p className="text-4xl font-bold text-green-500">105</p>
          </CardContent>
        </Card>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold mb-4">Siparişler</h2>
        <Table className="w-full">
          <TableHead>
            <TableRow>
              <TableCell>Platform</TableCell>
              <TableCell>Sipariş ID</TableCell>
              <TableCell>Durum</TableCell>
              <TableCell>Teslimat Adresi</TableCell>
              <TableCell>İşlem</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>Trendyol Yemek</TableCell>
              <TableCell>#12345</TableCell>
              <TableCell className="text-yellow-500">Bekliyor</TableCell>
              <TableCell><MapPin className="inline mr-2" /> İstanbul, Beşiktaş</TableCell>
              <TableCell>
                <Button className="mr-2" variant="outline" color="green">
                  <CheckCircle className="mr-1" /> Onayla
                </Button>
                <Button variant="outline" color="red">
                  <XCircle className="mr-1" /> Reddet
                </Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Getir Yemek</TableCell>
              <TableCell>#67890</TableCell>
              <TableCell className="text-green-500">Tamamlandı</TableCell>
              <TableCell><MapPin className="inline mr-2" /> Ankara, Çankaya</TableCell>
              <TableCell>
                <Button variant="outline" disabled>
                  <CheckCircle className="mr-1" /> Onaylandı
                </Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default OrderDashboard;
