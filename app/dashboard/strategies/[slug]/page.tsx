import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import MetricChip from "@/components/dashboard/MetricChip";
import StrategyCard from "@/components/dashboard/StrategyCard";

const BAR_HEIGHTS = [
  40, 64, 92, 70, 110, 84, 64, 96, 120, 72, 102, 80, 115, 90,
];

const RELATED = [
  {
    title: "Strategy Name",
    type: "Yield Aggregator",
    creator: "seraph.eth",
    description:
      "Moves stablecoins between lending pools to earn the best rates.",
    performance: "+13.56%",
    risk: "Medium",
    href: "/dashboard/strategies/vault-drip",
  },
  {
    title: "StableFlow",
    type: "Trading",
    creator: "dl_flash",
    description: "Balances liquidity pools to stabilize returns.",
    performance: "+7.84%",
    risk: "Low",
    href: "/dashboard/strategies/vault-drip",
  },
  {
    title: "LendLoop",
    type: "Lending",
    creator: "mario_dev",
    description: "Loops deposits and borrows to maximize APY.",
    performance: "+11.67%",
    risk: "Medium",
    href: "/dashboard/strategies/vault-drip",
  },
];

interface StrategyPageProps {
  params: { slug: string };
}

export default function StrategyDetailPage({ params }: StrategyPageProps) {
  const name = params.slug
    .split("-")
    .map((word) => word[0]?.toUpperCase() + word.slice(1))
    .join(" ");

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1 overflow-y-auto px-12 py-8">
        <Link
          href="/dashboard"
          className="mb-8 inline-flex items-center gap-3 text-sm uppercase tracking-[0.18em] text-[#5efbff]/80 transition hover:text-[#5efbff]"
        >
          <ArrowLeft size={18} strokeWidth={1.6} />
          Back to Explore
        </Link>

        <section className="mb-14 rounded-3xl border border-[#12383B] bg-[#071011]/90 p-10 shadow-[0_28px_56px_rgba(6,24,26,0.45)]">
          <div className="flex flex-col gap-10 lg:flex-row">
            <div className="flex-1 space-y-6">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-[#7faeb1]">
                  Strategy
                </p>
                <h1 className="mt-3 text-5xl font-semibold text-[#E7FDFF]">
                  {name || "Vault Drip"}
                </h1>
                <p className="mt-2 text-[16px] text-[#8DB7BA]">
                  Creator: <span className="text-[#5efbff]">seraph.eth</span>
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                <MetricChip title="Type" value="Yield Aggregator" />
                <MetricChip title="Risk" value="Medium" />
                <MetricChip title="Performance" value="+9.8%" accent />
              </div>

              <p className="text-[15px] leading-7 text-[#8FB5B8]">
                Vault Drip automatically allocates yield from multiple
                stablecoin vaults into the most profitable pools, compounding
                returns while minimizing manual adjustments. It continuously
                evaluates risk and adjusts exposure to maintain the selected
                profile.
              </p>

              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-[#6CF4FA]">
                  Steps
                </p>
                <ul className="mt-4 space-y-3 text-[15px] text-[#9AC7CA]">
                  <li>1. Lend on Compound</li>
                  <li>2. Borrow on Aave</li>
                  <li>3. Supply on Aave</li>
                </ul>
              </div>
            </div>

            <div className="flex w-full flex-col justify-between gap-6 lg:w-96">
              <div className="flex-1 rounded-3xl border border-[#12383B] bg-[#05090A]/80 p-8">
                <h3 className="mb-6 text-sm uppercase tracking-[0.18em] text-[#6CF4FA]">
                  Performance Overview
                </h3>
                <div className="flex h-48 items-end gap-3">
                  {BAR_HEIGHTS.map((height, index) => (
                    <span
                      key={`detail-bar-${index}`}
                      className="flex-1 rounded-t-full bg-linear-to-b from-[#5efbff] to-transparent opacity-90"
                      style={{ height }}
                    />
                  ))}
                </div>
              </div>
              <button>Join Strategy</button>
            </div>
          </div>
        </section>

        <section>
          <div className="mb-7 flex items-end justify-between gap-4">
            <div className="flex flex-col gap-2">
              <h2 className="text-[24px] font-semibold tracking-[0.01em] text-[#F2F4F5]">
                More Strategies
              </h2>
              <p className="text-[14px] text-[#ADBEBF]">
                Here are more similar strategies curated for you.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {RELATED.map((strategy) => (
              <StrategyCard key={strategy.title} {...strategy} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
