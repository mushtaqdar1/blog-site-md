'use client';

import Image from 'next/image';
import { useState } from 'react';
import { Menu } from 'lucide-react';
import Link from 'next/link';
import { ModeToggle } from './mode-toggle';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const links = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    // { href: '/blogs', label: 'Blogs' },
  ];

  return (
    <nav className="w-full shadow-md px-4 py-2 flex items-center justify-between">
      {/* Logo */}
      <Link className="flex items-center" href="/">
        <Image
          src="/profile.png"
          width={40}
          height={40}
          alt="User Logo"
          className="object-cover px-2"
        />
        <p className="flex flex-col">
          <span className="ml-2 font-bold text-lg uppercase">
            Mushtaq Ahmad Dar
          </span>
          <span className="text-xs px-2 tracking-tight">
            [BE(CSE)/MTech/NET/PhD-Pursuing]
          </span>
        </p>
      </Link>
      {/* Desktop Nav Links */}
      <div className="hidden md:flex space-x-8 items-center">
        {links.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className="hover:text-primary font-medium"
          >
            {link.label}
          </Link>
        ))}
        <ModeToggle />
      </div>
      {/* Hamburger Menu for Mobile */}
      <div className="md:hidden">
        <button
          type="button"
          className="focus:outline-none"
          onClick={() => setOpen((prev) => !prev)}
        >
          <Menu />
        </button>
      </div>
      {/* Mobile Nav Links */}
      {open && (
        <div
          className="absolute top-16 left-0 w-full bg-background text-foreground shadow-md flex flex-col items-center md:hidden z-50"
          onClick={() => setOpen(false)}
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="py-2 w-full text-center hover:text-primary"
            >
              {link.label}
            </a>
          ))}
          <ModeToggle />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
