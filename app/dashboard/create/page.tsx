import { ChevronDown } from "lucide-react";
import ProgressSteps from "@/components/dashboard/ProgressSteps";

const STEPS = [
  { label: "Strategy Basics" },
  { label: "Strategy Composition" },
  { label: "Risk & Performance Preview" },
  { label: "Automation Settings" },
  { label: "Preview" },
];

export default function CreateStrategyPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1 overflow-y-auto px-12 py-8">
        <header className="mb-12">
          <h1 className="text-4xl font-semibold text-[#E7FDFF]">
            Create New Strategy
          </h1>
          <p className="mt-4 text-[16px] text-[#88AEB1]">
            Build a custom DeFi strategy and share with the world
          </p>
        </header>

        <div className="mb-12">
          <ProgressSteps steps={STEPS} currentIndex={0} />
        </div>

        <section className="rounded-3xl border border-[#12383B] bg-[#0A1516]/70 p-8 shadow-[0_24px_48px_rgba(6,24,26,0.45)] backdrop-blur-sm">
          <h2 className="mb-8 text-lg font-semibold uppercase tracking-[0.18em] text-[#6CF4FA]">
            Fill out the form carefully
          </h2>

          <div className="grid gap-6 md:grid-cols-[1.5fr_1fr]">
            <label className="flex flex-col gap-3">
              <span className="text-sm uppercase tracking-[0.18em] text-[#89A8AA]">
                Enter Strategy Name
              </span>
              <input
                className="rounded-2xl border border-[#12383B] bg-[#050607]/60 px-5 py-4 text-[15px] text-[#CDEFF1] placeholder:text-[#597778] focus:border-[#1FE9F7] focus:outline-none focus:ring-0"
                placeholder="Vault Drip"
                type="text"
              />
            </label>

            <label className="flex flex-col gap-3">
              <span className="text-sm uppercase tracking-[0.18em] text-[#89A8AA]">
                Risk Level
              </span>
              <div className="rounded-2xl border border-[#12383B] bg-[#050607]/60 px-5 py-4 text-[15px] text-[#CDEFF1]">
                <div className="flex items-center justify-between">
                  <span>Medium</span>
                  <ChevronDown
                    className="h-4 w-4 text-[#1FE9F7]"
                    strokeWidth={1.6}
                  />
                </div>
              </div>
            </label>
          </div>

          <label className="mt-8 flex flex-col gap-3">
            <span className="text-sm uppercase tracking-[0.18em] text-[#89A8AA]">
              Description
            </span>
            <textarea
              rows={5}
              className="rounded-2xl border border-[#12383B] bg-[#050607]/60 px-5 py-4 text-[15px] text-[#CDEFF1] placeholder:text-[#597778] focus:border-[#1FE9F7] focus:outline-none focus:ring-0"
              placeholder="Describe your strategy"
            />
          </label>

          <div className="mt-10 flex items-center justify-between">
            <button>Go Back</button>
            <button>Continue</button>
          </div>
        </section>
      </main>
    </div>
  );
}
