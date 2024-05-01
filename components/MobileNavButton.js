'use client';
import { useEffect, useState } from 'react';
import { useScrollLock } from '@app/lib/useScrollLock';
import MobileNav from './MobileNav';
export default function MobileNavButton() {
  const [open, setOpen] = useState(true);
  const { lockScroll, unlockScroll } = useScrollLock();
  useEffect(() => {
    if (open) {
      lockScroll();
    } else {
      unlockScroll();
    }
  }, [open]);
  return (
    <>
      <button onClick={() => setOpen(!open)} className="lg:hidden">
        {open && (
          <div className="icon-wrapper flex flex-col">
            <i className="icon-cancel text-2xl mb-[-5px]" />
            <p className="text-xs">close</p>
            <MobileNav />
          </div>
        )}
        {!open && (
          <div className=" icon-wrapper flex flex-col">
            <i className="icon-menu text-2xl mb-[-5px]" />
          </div>
        )}
      </button>
    </>
  );
}
