"use client";
import { BugOff, TreePine } from "lucide-react";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation"; // To highlight active links
import {
  Users,
  Package,
  TestTubeDiagonal,
  LayoutDashboard,
  X,
  Menu,
  Bell,
  LogOut,
} from "lucide-react";

const Header = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleSidebar = () => setIsOpen(!isOpen);

  // Navigation Config
  const navItems = [
    { href: "/dashboard", label: "Overview", icon: LayoutDashboard },
    { href: "/fertilizers", label: "Fertilizers", icon: Package },
    { href: "/pesticides", label: "Pesticides", icon: BugOff },
    { href: "/orders", label: "users", icon: Users },
  ];

  return (
    <>
      <div
        className={`fixed inset-0 z-40 bg-stone-900/40 backdrop-blur-sm lg:hidden transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={toggleSidebar}
      />
      {/* Sidebar */}
      <aside
        className={`fixed top-0 bottom-0 left-0 z-50 w-64 bg-white border-r border-stone-200 transition-transform duration-300 ease-in-out 
            ${isOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0`}
      >
        <div className="flex flex-col h-full">
          {/* Logo Area */}
          <div className="flex items-center justify-between h-16 px-6 border-b border-stone-100">
            <div className="flex items-center">
              <TreePine className="text-primary " />
              <span className="ml-3 text-xs font-bold tracking-widest uppercase text-stone-800">
                ArgiSheilds
              </span>
            </div>
            {/* Close button for mobile */}
            <button
              onClick={toggleSidebar}
              className="lg:hidden text-stone-400"
            >
              <X size={20} />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 px-4 py-6 space-y-1 overflow-y-auto">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`flex  items-center px-3 py-2.5 text-sm font-medium rounded-lg transition-all duration-200 group ${
                    isActive
                      ? "bg-green-50 text-primary"
                      : "text-stone-500 hover:bg-green-50 hover:text-green-900"
                  }`}
                >
                  <Icon
                    size={20}
                    className={`mr-3 transition-colors ${
                      isActive
                        ? "text-green-600"
                        : "text-stone-400 group-hover:text-stone-600"
                    }`}
                  />
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Bottom User Section */}
          <div className="p-4 border-t border-stone-100">
            <button className="flex items-center w-full px-3 py-2.5 text-sm font-medium text-stone-500 rounded-lg hover:bg-red-50 hover:text-red-600 transition-colors group">
              <LogOut
                size={20}
                className="mr-3 text-stone-400 group-hover:text-red-500"
              />
              Sign Out
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="lg:ml-64 flex flex-col min-h-screen">
        <header className="sticky top-0 z-30 flex items-center justify-between h-16 px-4 bg-white/80 backdrop-blur-md border-b border-stone-200 lg:px-8">
          <button
            onClick={toggleSidebar}
            className="p-2 -ml-2 text-stone-600 lg:hidden hover:bg-stone-100 rounded-full"
          >
            <Menu size={24} />
          </button>

          <div className="flex ml-auto items-center space-x-3">
            <button className="p-2 text-stone-400 hover:text-amber-600 hover:bg-amber-50 rounded-full transition-all relative">
              <Bell size={22} />
              <span className="absolute top-2 right-2.5 w-2 h-2 bg-red-500 border-2 border-white rounded-full"></span>
            </button>
            <div className="h-9 w-9 rounded-full bg-stone-200 border-2 border-white shadow-sm overflow-hidden cursor-pointer hover:border-amber-200 transition-all">
              {/* Optional: <img src="/avatar.png" alt="User" /> */}
            </div>
          </div>
        </header>

        <main className="p-4 lg:p-8 flex-1">
          <div className="max-w-7xl mx-auto">{children}</div>
        </main>
      </div>
    </>
  );
};

export default Header;
