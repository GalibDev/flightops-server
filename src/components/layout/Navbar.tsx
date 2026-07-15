"use client";
/* eslint-disable react-hooks/set-state-in-effect */

import { Menu, Plane, UserRound, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import type { User } from "@/types";

const publicLinks = [
  ["Home", "/"],
  ["Explore Flights", "/flights"],
  ["About", "/about"],
  ["Contact", "/contact"],
] as const;

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  const loadUser = useCallback(async () => {
    try {
      const response = await fetch("/api/auth/me", { cache: "no-store" });
      const result = await response.json();
      setUser(result.data || null);
    } catch {
      setUser(null);
    }
  }, []);

  useEffect(() => {
    loadUser();
  }, [loadUser, pathname]);

  useEffect(() => {
    window.addEventListener("flightops-auth", loadUser);
    return () => window.removeEventListener("flightops-auth", loadUser);
  }, [loadUser]);

  const links: [string, string][] = user
    ? [
        ...publicLinks.map((link) => [...link] as [string, string]),
        ["Dashboard", "/dashboard"],
        ...(user.role === "admin" ? ([["Admin Center", "/admin"]] as [string, string][]) : []),
        ["Add Flight", "/flights/add"],
        ["Manage", "/flights/manage"],
      ]
    : publicLinks.map((link) => [...link] as [string, string]);

  function active(href: string) {
    if (href === "/") return pathname === "/";
    if (href === "/flights") {
      const segment = pathname.split("/")[2];
      return pathname === "/flights" || (!!segment && !["add", "manage"].includes(segment));
    }
    return pathname === href || pathname.startsWith(`${href}/`);
  }

  async function logout() {
    await fetch("/api/auth/logout", { method: "POST" });
    setUser(null);
    window.location.href = "/";
  }

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="container flex h-[72px] items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-xl font-black">
          <span className="grid size-9 place-items-center rounded-xl bg-blue-600 text-white"><Plane size={19} /></span>
          Flight<span className="text-blue-600">Ops</span>
        </Link>
        <nav className="hidden items-center gap-2 lg:flex">
          {links.map(([name, href]) => (
            <Link
              className={`rounded-lg px-3 py-2 text-sm font-semibold transition ${active(href) ? "bg-blue-50 text-blue-700 ring-1 ring-blue-100" : "text-slate-600 hover:bg-slate-50 hover:text-blue-600"}`}
              href={href}
              key={href}
              aria-current={active(href) ? "page" : undefined}
            >
              {name}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-2 lg:flex">
          {user ? (
            <>
              <span className="mr-2 flex items-center gap-2 text-sm font-bold"><UserRound size={16} />{user.name}</span>
              <button onClick={logout} className="btn btn-secondary !px-4 !py-2">Logout</button>
            </>
          ) : (
            <>
              <Link className="btn btn-secondary !px-4 !py-2" href="/login">Login</Link>
              <Link className="btn btn-primary !px-4 !py-2" href="/register">Sign up</Link>
            </>
          )}
        </div>
        <button aria-label="Toggle menu" onClick={() => setOpen(!open)} className="lg:hidden">{open ? <X /> : <Menu />}</button>
      </div>
      {open && (
        <nav className="container flex flex-col gap-2 border-t py-4 lg:hidden">
          {links.map(([name, href]) => (
            <Link
              onClick={() => setOpen(false)}
              className={`rounded-lg p-3 font-semibold ${active(href) ? "bg-blue-600 text-white" : "hover:bg-blue-50"}`}
              href={href}
              key={href}
            >
              {name}
            </Link>
          ))}
          {user ? <button onClick={logout} className="btn btn-primary">Logout</button> : (
            <div className="flex gap-2"><Link className="btn btn-secondary flex-1" href="/login">Login</Link><Link className="btn btn-primary flex-1" href="/register">Register</Link></div>
          )}
        </nav>
      )}
    </header>
  );
}
