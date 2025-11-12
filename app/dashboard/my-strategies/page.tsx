"use client";

import { useMemo, useState } from "react";

import StrategyCard from "@/components/dashboard/StrategyCard";
import SegmentedTabs from "@/components/dashboard/SegmentedTabs";
import { Button } from "@/components/ui/button";
import { STRATEGIES } from "@/lib/data/strategies";

const TABS = [
  { label: "Joined Strategies", value: "joined" },
  { label: "Created Strategies", value: "created" },
];

const JOINED_SLUGS = ["crosschain-vault", "vault-drip", "stableflow"];
const CREATED_SLUGS = ["ethgrow", "lendloop"];

export default function MyStrategiesPage() {
  const [activeTab, setActiveTab] = useState<string>("joined");

  const { joinedStrategies, createdStrategies } = useMemo(() => {
    const joined = STRATEGIES.filter((strategy) =>
      JOINED_SLUGS.includes(strategy.slug)
    );
    const created = STRATEGIES.filter((strategy) =>
      CREATED_SLUGS.includes(strategy.slug)
    );

    return { joinedStrategies: joined, createdStrategies: created };
  }, []);

  const strategies =
    activeTab === "joined" ? joinedStrategies : createdStrategies;

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1 overflow-y-auto px-4 sm:px-6 md:px-8 lg:px-12 py-6 sm:py-8 lg:py-10">
        <header className="mb-8 sm:mb-12 flex flex-col gap-6 sm:gap-8 lg:flex-row lg:justify-between">
          <div className="max-w-2xl">
            <h1 className="text-[28px] sm:text-[32px] lg:text-[34px] font-semibold tracking-[0.01em] text-[#E7FDFF]">
              Create New Strategy
            </h1>
            <p className="mt-2 text-[14px] sm:text-[16px] text-[#88AEB1]">
              Build a custom DeFi strategy and share with the world
            </p>
          </div>

          <Button
            variant="ghost"
            className="rounded-full border border-[#1FE9F7]/30 bg-[#090909] px-8 sm:px-12 lg:px-16 py-4 sm:py-5 lg:py-6 text-xs sm:text-sm font-semibold text-[#1FE9F7] transition hover:text-[#E2FEFF] w-full sm:w-auto"
          >
            Save Draft
          </Button>
        </header>

        <section className="mb-8 sm:mb-10 flex flex-col items-center gap-4 sm:gap-6">
          <SegmentedTabs
            tabs={TABS}
            defaultValue="joined"
            onChange={setActiveTab}
          />
        </section>

        <section className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 xl:grid-cols-3">
          {strategies.map((strategy) => (
            <StrategyCard key={strategy.slug} {...strategy} />
          ))}
        </section>
      </main>
    </div>
  );
}
