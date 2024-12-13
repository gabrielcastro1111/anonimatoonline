import React from 'react';
import { Monitor, Smartphone } from 'lucide-react';
import { DeviceIcon } from './DeviceIcon';

export function DeviceBadge() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3 mt-4">
      <DeviceIcon Icon={Monitor} label="Windows • Mac" />
      <DeviceIcon Icon={Smartphone} label="Android • iOS" />
    </div>
  );
}