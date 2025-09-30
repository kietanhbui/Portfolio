import React from 'react';
import { Button } from '@/components/ui/button';

export default function CTA() {
  return (
    <div className="flex gap-1 items-start justify-start">
      <Button variant="default" size="default">
        Get in touch
      </Button>
      <Button variant="secondary" size="default">
        View Resume
      </Button>
    </div>
  );
}
