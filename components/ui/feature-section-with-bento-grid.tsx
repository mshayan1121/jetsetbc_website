"use client";

import { Badge } from "@/components/ui/Badge";
import { 
  Users, 
  Building2, 
  Presentation, 
  Briefcase, 
  FileText 
} from "lucide-react";
import Image from "next/image";

function Feature() {
  return (
    <div className="w-full py-20 lg:py-40">
      <div className="container mx-auto">
        <div className="flex flex-col gap-10">
          <div className="flex gap-4 flex-col items-start">
            <div>
              <Badge>Our Services</Badge>
            </div>
            <div className="flex gap-2 flex-col">
              <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-regular text-left">
                Premium Business Solutions
              </h2>
              <p className="text-lg max-w-xl lg:max-w-lg leading-relaxed tracking-tight text-muted-foreground text-left">
                Everything you need to run your business efficiently in Dubai.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Coworking - Large Item */}
            <div className="bg-muted rounded-md h-full lg:col-span-2 p-6 aspect-square lg:aspect-auto flex justify-between flex-col relative overflow-hidden group min-h-[300px]">
              <div className="absolute inset-0">
                <Image 
                  src="/images/services/coworking.png" 
                  alt="Coworking" 
                  fill
                  className="object-cover opacity-20 transition-opacity group-hover:opacity-30"
                />
              </div>
              <Users className="w-8 h-8 stroke-1 relative z-10" />
              <div className="flex flex-col relative z-10">
                <h3 className="text-xl tracking-tight">Coworking</h3>
                <p className="text-muted-foreground max-w-xs text-base">
                  Collaborative workspaces designed for networking and productivity.
                </p>
              </div>
            </div>

            {/* Private Office - Small Item */}
            <div className="bg-muted rounded-md aspect-square p-6 flex justify-between flex-col relative overflow-hidden group">
              <div className="absolute inset-0">
                <Image 
                  src="/images/services/private-office.png" 
                  alt="Private Office" 
                  fill
                  className="object-cover opacity-20 transition-opacity group-hover:opacity-30"
                />
              </div>
              <Building2 className="w-8 h-8 stroke-1 relative z-10" />
              <div className="flex flex-col relative z-10">
                <h3 className="text-xl tracking-tight">Private Office</h3>
                <p className="text-muted-foreground max-w-xs text-base">
                  Fully furnished private offices for your team.
                </p>
              </div>
            </div>

            {/* Meeting Room - Small Item */}
            <div className="bg-muted rounded-md aspect-square p-6 flex justify-between flex-col relative overflow-hidden group">
              <div className="absolute inset-0">
                <Image 
                  src="/images/services/meeting-rooms.png" 
                  alt="Meeting Room" 
                  fill
                  className="object-cover opacity-20 transition-opacity group-hover:opacity-30"
                />
              </div>
              <Presentation className="w-8 h-8 stroke-1 relative z-10" />
              <div className="flex flex-col relative z-10">
                <h3 className="text-xl tracking-tight">Meeting Room</h3>
                <p className="text-muted-foreground max-w-xs text-base">
                  State-of-the-art meeting rooms for your presentations.
                </p>
              </div>
            </div>

            {/* Business Setup - Small Item */}
            <div className="bg-muted rounded-md aspect-square p-6 flex justify-between flex-col relative overflow-hidden group">
               <div className="absolute inset-0">
                <Image 
                  src="/images/services/business-setup.png" 
                  alt="Business Setup" 
                  fill
                  className="object-cover opacity-20 transition-opacity group-hover:opacity-30"
                />
              </div>
              <Briefcase className="w-8 h-8 stroke-1 relative z-10" />
              <div className="flex flex-col relative z-10">
                <h3 className="text-xl tracking-tight">Business Setup</h3>
                <p className="text-muted-foreground max-w-xs text-base">
                  Comprehensive assistance for company formation in Dubai.
                </p>
              </div>
            </div>

            {/* Virtual Ejari - Large Item (spanning remaining space? No, simple grid) */}
            {/* Actually we want 3 columns. 
                Row 1: Coworking (2), Private Office (1)
                Row 2: Meeting Room (1), Business Setup (1), Virtual Ejari (1)
            */}
             <div className="bg-muted rounded-md aspect-square p-6 flex justify-between flex-col relative overflow-hidden group">
               <div className="absolute inset-0">
                <Image 
                  src="/images/blog/virtual-office.jpg" 
                  alt="Virtual Ejari" 
                  fill
                  className="object-cover opacity-20 transition-opacity group-hover:opacity-30"
                />
              </div>
              <FileText className="w-8 h-8 stroke-1 relative z-10" />
              <div className="flex flex-col relative z-10">
                <h3 className="text-xl tracking-tight">Virtual Ejari</h3>
                <p className="text-muted-foreground max-w-xs text-base">
                  Get your Ejari contract without a physical office space.
                </p>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export { Feature };
