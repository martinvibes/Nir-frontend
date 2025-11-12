import Image from "next/image";

import TimeRangeToggle from "@/components/dashboard/TimeRangeToggle";
import StrategyCard from "@/components/dashboard/StrategyCard";
import { STRATEGIES } from "@/lib/data/strategies";

export default function DashboardHomePage() {
  const featured = STRATEGIES[0];

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1 overflow-y-auto px-12 py-8">
        <section className="mb-16">
          <div className="mb-7 flex items- justify-between gap-4">
            <div className="flex flex-col gap-2">
              <h2 className="text-[24px] font-semibold tracking-[0.01em] text-[#F2F4F5]">
                Trending This Week
              </h2>
              <p className="text-[14px] text-[#ADBEBF]">
                Discover, compare, and follow top-performing DeFi strategies
                curated by experts.
              </p>
            </div>

            <TimeRangeToggle />
          </div>

          <div className="mb-10 border border-[#EDFCFE0F] rounded-md p-6">
            <h3 className="text-[12px] font-semibold text-[#ADBEBF]">
              7:45 AM MAR 10 2025
            </h3>

            <div className=" flex items-center mt-3 gap-4 justify-between">
              <div>
                <h1 className="text-[32px] font-semibold tracking-[0.01em] text-[#F2F4F5]">
                  {featured?.title}
                </h1>
                <div className="flex items-center gap-2 w-fit text-[12px] rounded-full bg-[#EDFCFE0F] px-4 py-1 border border-[#EDFCFE0F]">
                  <h1>Creator:</h1>
                  <Image
                    src="/icons/user_icon.svg"
                    alt="Creator"
                    width={20}
                    height={20}
                  />
                  <span className="text-[#5efbff]">{featured?.creator}</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="flex items-center flex-col w-full sm:w-[142px] rounded-md gap-2 bg-[#070B0B] border border-[#EDFCFE0F] text-nowrap px-5 py-2.5">
                  <div className="flex items-center gap-2">
                    <Image
                      src="/icons/diamond.svg"
                      alt="Diamond"
                      width={20}
                      height={20}
                    />

                    <span className="text-[10px] font-semibold tracking-[0.01em] text-[#F2F4F5]">
                      Type
                    </span>
                  </div>
                  <h2 className="text-[12px] font-semibold tracking-[0.01em] text-[#F2F4F5]">
                    {featured?.type}
                  </h2>
                </div>

                <div className="flex items-center flex-col w-full sm:w-[142px] rounded-md gap-2 bg-[#070B0B] border border-[#EDFCFE0F] text-nowrap px-5 py-2.5">
                  <div className="flex items-center gap-2">
                    <Image
                      src="/icons/WarningDiamond.svg"
                      alt="Diamond"
                      width={20}
                      height={20}
                    />

                    <span className="text-[10px] font-semibold tracking-[0.01em] text-[#F2F4F5]">
                      Risk
                    </span>
                  </div>
                  <h2 className="text-[12px] font-semibold tracking-[0.01em] text-[#FCD34D]">
                    {featured?.risk}
                  </h2>
                </div>

                <div className="flex items-center flex-col w-full sm:w-[142px] rounded-md gap-2 bg-[#070B0B] border border-[#EDFCFE0F] text-nowrap px-5 py-2.5">
                  <div className="flex items-center gap-2">
                    <Image
                      src="/icons/Drop.svg"
                      alt="Diamond"
                      width={20}
                      height={20}
                    />

                    <span className="text-[10px] font-semibold tracking-[0.01em] text-[#F2F4F5]">
                      Performance
                    </span>
                  </div>
                  <h2 className="text-[12px] font-semibold tracking-[0.01em] text-[#46FFD7]">
                    {featured?.performance}
                  </h2>
                </div>
              </div>
            </div>

            <Image
              src="/bar.svg"
              alt="Bar chart"
              width={1000}
              height={1000}
              className="w-full mt-4"
            />
          </div>
        </section>

        <section>
          <div className="mb-7 flex items-end justify-between gap-4">
            <div className="flex flex-col gap-2">
              <h2 className="text-[20px] font-semibold tracking-[0.01em] text-[#F2F4F5]">
                Explore Strategies
              </h2>
              <p className="text-[14px] text-[#ADBEBF]">
                Discover, compare, and follow top-performing DeFi strategies
                curated by experts.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 xl:grid-cols-3 w-full">
            {STRATEGIES.map((strategy) => (
              <StrategyCard key={strategy.title} {...strategy} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
