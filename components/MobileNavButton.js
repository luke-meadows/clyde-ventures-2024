'use client';
import { useEffect, useState } from 'react';
import { useScrollLock } from '@app/lib/useScrollLock';
import MobileNav from './MobileNav';
export default function MobileNavButton() {
  const [open, setOpen] = useState(false);
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
          <div>
            <i className="icon-cancel text-3xl" /> <MobileNav />
          </div>
        )}
        {!open && <i className="icon-menu text-3xl" />}
      </button>
    </>
  );
}
