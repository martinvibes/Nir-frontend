"use client";

import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { X } from "lucide-react";

const PRIMARY_ITEMS = [
  { label: "Explore", href: "/dashboard", iconSrc: "/icons/search.svg" },
  {
    label: "Create Strategies",
    href: "/dashboard/create",
    iconSrc: "/icons/plus.svg",
  },
  {
    label: "My Strategies",
    href: "/dashboard/my-strategies",
    iconSrc: "/icons/my-strategy.svg",
  },
];

const SECONDARY_ITEMS = [
  { label: "Learn", href: "/dashboard/learn", iconSrc: "/icons/learn.svg" },
  { label: "Market", href: "/dashboard/market", iconSrc: "/icons/market.svg" },
  {
    label: "Settings",
    href: "/dashboard/settings",
    iconSrc: "/icons/settings.svg",
  },
  {
    label: "Notifications",
    href: "/dashboard/notifications",
    iconSrc: "/icons/notifications.svg",
  },
];

const baseLinkClasses =
  "relative flex items-center gap-3 rounded-full px-4 py-3 text-[15px] font-medium text-[#97A9AA] transition-all duration-150 ease-out hover:text-[#C7F5F8]";
const activeLinkClasses =
  "text-[#1FE9F7] shadow-[0_0_0_rgba(0,0,0,0)] [background-image:radial-gradient(120%_120%_at_0%_0%,rgba(31,233,247,0.35),rgba(9,13,16,0)),linear-gradient(180deg,rgba(8,20,24,0.85)_0%,rgba(8,20,24,0.6)_100%)] shadow-[-12px_-8px_32px_rgba(31,233,247,0.18)]";

interface SidebarProps {
  isOpen?: boolean;
  onClose?: () => void;
}

const Sidebar = ({ isOpen = false, onClose }: SidebarProps) => {
  const pathname = usePathname();

  const renderLink = (item: {
    label: string;
    href: string;
    iconSrc: string;
  }) => {
    const isActive =
      item.href === "/dashboard"
        ? pathname === "/dashboard"
        : pathname.startsWith(item.href);

    return (
      <Link
        key={item.href}
        href={item.href}
        onClick={() => onClose?.()}
        className={clsx(baseLinkClasses, isActive && activeLinkClasses)}
      >
        <Image
          src={item.iconSrc}
          alt={item.label}
          width={18}
          height={18}
          className="h-[18px] w-[18px]"
          priority={isActive}
        />
        <span>{item.label}</span>
        {isActive && (
          <span className="pointer-events-none absolute inset-[2px] rounded-full border border-[#1FE9F7]/35 opacity-80" />
        )}
      </Link>
    );
  };

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={clsx(
          "fixed lg:sticky top-0 z-50 flex h-screen w-[232px] shrink-0 flex-col gap-7 overflow-y-auto border-r border-[#070B0B]/20 bg-[#090909] px-[18px] py-8 transition-transform duration-300 ease-in-out",
          isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        )}
      >
        {/* Mobile Close Button */}
        <div className="flex items-center justify-between">
          <Image
            src="/yao_logo_white.svg"
            alt="logo"
            width={46}
            height={46}
            className="w-8 h-8 sm:w-[46px] sm:h-[46px] cursor-pointer lg:hidden"
          />

          <button
            onClick={onClose}
            className="mb-4 flex items-center justify-end text-[#97A9AA] hover:text-[#C7F5F8] lg:hidden"
          >
            <X size={24} />
          </button>
        </div>

        <nav className="flex flex-col gap-3">
          {PRIMARY_ITEMS.map(renderLink)}
        </nav>

        <p className="mt-4 text-xs uppercase tracking-[0.16em] text-[#98ADAE8C]">
          Library
        </p>

        <nav className="flex flex-col gap-3">
          {SECONDARY_ITEMS.map(renderLink)}
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
