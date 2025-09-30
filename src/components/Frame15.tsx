import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

// Image assets from Figma
const imgHeadFlatTop = "http://localhost:3845/assets/305af573bd4191e537b988bb4b8fd10b0ac70c40.svg";
const imgHeadFlatTop1 = "http://localhost:3845/assets/fcb7fde987d1e97a908178195e6b329129831e52.svg";
const imgPath = "http://localhost:3845/assets/519ef62c407ff77070faad80d01aee00b55e5837.svg";
const img = "http://localhost:3845/assets/6ea808e7aa75d7b0c51bdf11493b6268eefce8f4.svg";
const imgFaceSmile = "http://localhost:3845/assets/1535d8cc0b414eac08755725043375da7badb858.svg";
const imgBodyCoffee = "http://localhost:3845/assets/e8812a5d691ab028af2fb69f47abcf6493d7ed65.svg";

export default function Frame15() {
  return (
    <Card className="w-full max-w-4xl mx-auto p-8">
      <CardContent className="space-y-6">
        {/* Profile Section */}
        <div className="flex items-start gap-6">
          {/* Avatar Illustration */}
          <div className="relative flex-shrink-0">
            <div className="relative w-24 h-24">
              <div className="absolute inset-0 grid place-items-center">
                <div className="relative w-full h-full">
                  <div className="absolute h-[58.776px] w-[51.04px] ml-[25.681px] mt-0" 
                       style={{ maskImage: `url('${imgHeadFlatTop}')` }}>
                    <img alt="Head" className="block w-full h-full" src={imgHeadFlatTop1} />
                  </div>
                  <div className="absolute h-[37.823px] w-[18.912px] ml-[52.759px] mt-[14.399px]" 
                       style={{ maskImage: `url('${imgHeadFlatTop}')` }}>
                    <img alt="Path" className="block w-full h-full" src={imgPath} />
                  </div>
                  <div className="absolute h-[13.646px] w-[42.336px] ml-[31.806px] mt-[22.995px] rounded-bl-[80px] rounded-br-[80px]" 
                       style={{ maskImage: `url('${imgHeadFlatTop}')` }}>
                    <div className="absolute inset-[7.97%_-0.99%_8.63%_3.06%]">
                      <img alt="Glasses" className="block w-full h-full" src={img} />
                    </div>
                  </div>
                  <div className="absolute h-[36px] w-[32px] ml-[43px] mt-[15px]" 
                       style={{ maskImage: `url('${imgHeadFlatTop}')` }}>
                    <img alt="Smile" className="block w-full h-full" src={imgFaceSmile} />
                  </div>
                  <div className="absolute h-[78.763px] w-[87.896px] ml-0 mt-[45.237px]" 
                       style={{ maskImage: `url('${imgHeadFlatTop}')` }}>
                    <img alt="Body" className="block w-full h-full" src={imgBodyCoffee} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Greeting Text */}
          <div className="flex-1 pt-2">
            <div className="transform rotate-[357.214deg]">
              <p className="font-caveat text-2xl text-foreground leading-tight">
                <span className="text-muted-foreground">I'm </span>
                <span className="font-bold underline decoration-solid underline-offset-2">Kiet</span>
                <span className="text-muted-foreground">, nice to meet you!</span>
              </p>
            </div>
          </div>
        </div>

        {/* Professional Info */}
        <div className="space-y-4">
          <h1 className="font-inter font-semibold text-3xl leading-tight tracking-tight text-foreground">
            Product designer with 3+ years of experience in B2B SaaS.
          </h1>
          
          <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
            <Badge variant="secondary" className="italic">
              Currently seeking new opportunity
            </Badge>
            <span className="text-muted-foreground">∙</span>
            <span>Previously Sr. UX Designer at </span>
            <a 
              href="https://www.gs1ca.org/" 
              className="underline decoration-muted-foreground/30 hover:decoration-muted-foreground/60 transition-colors"
            >
              GS1 Canada
            </a>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
