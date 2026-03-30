import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Menu } from "lucide-react";

export default function MobilePrototype() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Header */}
      <div className="fixed top-0 w-full flex justify-between items-center p-4 bg-black z-50 border-b border-gray-800">
        <div className="font-bold">∞</div>
        <div className="flex gap-3">
          <Button className="bg-yellow-500 text-black">Call</Button>
          <Menu onClick={() => setMenuOpen(!menuOpen)} />
        </div>
      </div>

      {/* Menu */}
      {menuOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black p-6 z-40">
          <div className="space-y-4 text-lg">
            <div>Home</div>
            <div>Services</div>
            <div>Projects</div>
            <div>Why Roads Fail</div>
            <div>Contact</div>
          </div>
        </div>
      )}

      <div className="pt-20 px-4">
        {/* Hero */}
        <section className="text-center space-y-4">
          <h1 className="text-4xl font-bold"> ROADS FIXED.<br />ONCE. </h1>
          <p className="text-gray-400"> Permanent road repair engineered to eliminate repeat failure. </p>
          <div className="flex flex-col gap-3">
            <Button className="bg-yellow-500 text-black">Get a Quote</Button>
            <Button variant="outline">See Work</Button>
          </div>
        </section>

        {/* Value Props */}
        <section className="grid grid-cols-2 gap-4 mt-10">
          {['No Repeat Repairs','Engineered','Longevity','Municipal Grade'].map((item) => (
            <Card key={item} className="bg-gray-900 border-gray-800">
              <CardContent className="p-4 text-center text-sm">{item}</CardContent>
            </Card>
          ))}
        </section>

        {/* Problem */}
        <section className="mt-10">
          <h2 className="text-xl font-bold">MOST ROAD REPAIRS FAIL.</h2>
          <ul className="text-gray-400 mt-2 space-y-1">
            <li>Patches break down quickly</li>
            <li>Costs repeat</li>
            <li>Traffic disruption continues</li>
          </ul>
        </section>

        {/* Solution */}
        <section className="mt-10">
          <h2 className="text-xl font-bold"> WE DON'T PATCH ROADS. WE ELIMINATE THE PROBLEM. </h2>
          <p className="text-gray-400 mt-2"> Permanent structural solutions that fix the issue at its core. </p>
        </section>

        {/* Services */}
        <section className="mt-10 space-y-3">
          {['Asphalt Repair','Crack Sealing','Surface Restoration','Preventative Reinforcement'].map((service) => (
            <Card key={service} className="bg-gray-900 border-gray-800">
              <CardContent className="p-4">{service}</CardContent>
            </Card>
          ))}
        </section>

        {/* CTA */}
        <section className="mt-10 text-center">
          <h2 className="text-xl font-bold"> STOP REPAIRING THE SAME ROAD TWICE. </h2>
          <Button className="bg-yellow-500 text-black mt-4 w-full">Get Your Quote</Button>
        </section>
      </div>

      {/* Bottom Bar */}
      <div className="fixed bottom-0 w-full flex">
        <Button className="w-1/2 bg-gray-800">Call</Button>
        <Button className="w-1/2 bg-yellow-500 text-black">Quote</Button>
      </div>
    </div>
  );
}