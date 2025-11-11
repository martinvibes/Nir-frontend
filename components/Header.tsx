import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Input } from "./ui/input";
import { SearchIcon } from "lucide-react";
import { Button } from "./ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import ConnectWallet from "@/app/components/ConnectWallet";

const Header = () => {
  return (
    <div className="flex items-center justify-between px-6 py-6 bg-[#090909]">
      <Link href="/" className="cursor-pointer">
        <Image src="/yao_logo_white.svg" alt="logo" width={46} height={46} />
      </Link>

      <div className="flex items-center gap-2">
        <div className="flex items-center gap-2 w-full bg-[#EDFCFE0F] rounded-full px-5 py-2 relative">
          <Input
            placeholder="Search by name, Curator, or strategy type..."
            className="w-[514px] placeholder:text-[#ADBEBF] text-[#ADBEBF] ml-4.5 bg-transparent border-none outline-none focus:outline-none focus:ring-0 focus:border-none"
          />
          <Button className="absolute text-[#424E4F] left-0 top-1/2 -translate-y-1/2 bg-transparent border-none hover:bg-transparent cursor-pointer">
            <SearchIcon className="size-5" />
          </Button>
        </div>

        <div className=" w-[140px]">
          <Select>
            <SelectTrigger className="w-full bg-[#EDFCFE0F] text-[#ADBEBF] rounded-full border-none outline-none focus:outline-none focus:ring-0 focus:border-none px-4 py-6">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>

            <SelectContent className="bg-[#EDFCFE0F] text-[#ADBEBF] border-none outline-none focus:outline-none focus:ring-0 focus:border-none">
              <SelectItem value="newest">Newest</SelectItem>
              <SelectItem value="oldest">Oldest</SelectItem>
              <SelectItem value="popular">Popular</SelectItem>
              <SelectItem value="unpopular">Unpopular</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <ConnectWallet />
    </div>
  );
};

export default Header;
