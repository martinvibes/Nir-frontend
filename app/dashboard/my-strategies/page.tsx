"use client";

import { useState } from "react";
import StrategyCard from "@/components/dashboard/StrategyCard";
import SegmentedTabs from "@/components/dashboard/SegmentedTabs";

const JOINED = [
  {
    title: "CrossChain Vault",
    type: "Multi-Protocol",
    creator: "jermiah",
    description:
      "Diversifies assets across Ethereum, Arbitrum, and Polygon yield vaults.",
    performance: "+10.22%",
    risk: "Low",
    href: "/dashboard/strategies/vault-drip",
  },
  {
    title: "Strategy Name",
    type: "Yield Aggregator",
    creator: "jermiah",
    description:
      "Auto-harvests and reinvests rewards across multiple farming pools.",
    performance: "+13.56%",
    risk: "Medium",
    href: "/dashboard/strategies/vault-drip",
  },
];

const CREATED = [
  {
    title: "EthGrow",
    type: "Staking",
    creator: "You",
    description: "Compounds ETH staking rewards with automated restaking.",
    performance: "+6.41%",
    risk: "Medium",
    href: "/dashboard/strategies/vault-drip",
  },
];

const TABS = [
  { label: "Joined Strategies", value: "joined" },
  { label: "Created Strategies", value: "created" },
];

export default function MyStrategiesPage() {
  const [activeTab, setActiveTab] = useState<string>("joined");
  const strategies = activeTab === "joined" ? JOINED : CREATED;

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1 overflow-y-auto px-12 py-8">
        <header className="mb-12 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h1 className="text-4xl font-semibold text-[#E7FDFF]">
              Create New Strategy
            </h1>
            <p className="mt-4 text-[16px] text-[#88AEB1]">
              Build a custom DeFi strategy and share with the world
            </p>
          </div>

          <SegmentedTabs tabs={TABS} onChange={setActiveTab} />
        </header>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
          {strategies.map((strategy) => (
            <StrategyCard key={strategy.title} {...strategy} />
          ))}
        </div>
      </main>
    </div>
  );
}
