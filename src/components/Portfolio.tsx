import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import CTA from './CTA';
import { cn } from '@/lib/utils';

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-[600px] mx-auto px-4" style={{ marginTop: '40px', marginBottom: '40px' }}>
        <Card className="bg-transparent border-none shadow-none">
          <CardContent className="p-0 space-y-6">
            {/* Profile Section */}
            <div className="flex items-center gap-2">
              {/* Avatar */}
              <div className="flex-shrink-0">
                <div className="w-[57px] h-[64px] flex items-center justify-center">
                  <img 
                    alt="Kiet's Avatar" 
                    className="w-full h-full object-contain" 
                    src="images/avatar.png" 
                  />
                </div>
              </div>

              {/* Greeting Text */}
              <div className="flex-1">
                <div className="transform rotate-[357.214deg]">
                  <p 
                    className="font-caveat text-gray-700"
                    style={{ fontSize: '24px', lineHeight: '20px' }}
                  >
                    <span className="text-gray-700">I'm </span>
                    <span className="font-bold underline decoration-solid underline-offset-2 text-gray-900">
                      Kiet
                    </span>
                    <span className="text-gray-700">, nice to<br />meet you!</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Professional Info */}
            <div className="space-y-4">
              <h1 className="font-inter font-semibold text-3xl leading-tight tracking-tight text-gray-900">
                Product designer with 3+ years of experience in B2B SaaS.
              </h1>
              
              <div className="flex flex-wrap items-center gap-2 text-sm">
                <Badge variant="outline" className="italic text-gray-900 border-gray-300">
                  Currently seeking new opportunity
                </Badge>
                <span className="text-gray-500">•</span>
                <span className="text-gray-500">Previously Sr. UX Designer at </span>
                <a 
                  href="https://www.gs1ca.org/" 
                  className="underline decoration-gray-200 hover:decoration-gray-400 transition-colors text-gray-500"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GS1 Canada
                </a>
              </div>
            </div>

            {/* CTA Section */}
            <div className="pt-4">
              <CTA />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
