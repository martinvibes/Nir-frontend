import { ChevronDown } from "lucide-react";
import ProgressSteps from "@/components/dashboard/ProgressSteps";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

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
        <div className="mb-2 flex flex-col gap-8 lg:flex-row lg:justify-between">
          <div className="mb-12">
            <h1 className="text-4xl font-semibold text-[#E7FDFF]">
              Create New Strategy
            </h1>
            <p className="mt-4 text-[16px] text-[#88AEB1]">
              Build a custom DeFi strategy and share with the world
            </p>
          </div>

          <Button
            variant="ghost"
            className="rounded-full border border-[#1FE9F7]/30 bg-[#090909] px-16 py-6 text-sm font-semibold text-[#1FE9F7] transition hover:text-[#E2FEFF] cursor-pointer"
          >
            Save Draft
          </Button>
        </div>

        <div className="mb-12">
          <ProgressSteps steps={STEPS} currentIndex={0} />
        </div>

        <section className="rounded-3xl p-8 shadow-[0_24px_48px_rgba(6,24,26,0.45)] backdrop-blur-sm">
          <h2 className="mb-8 text-sm text-center font-semibold uppercase tracking-[0.18em] text-[#F2F4F5]">
            Fill out the form carefully
          </h2>

          <div className="grid gap-6 md:grid-cols-[1.5fr_1fr]">
            <label className="flex flex-col gap-3">
              <span className="text-sm uppercase tracking-[0.18em] text-[#89A8AA]">
                Enter Strategy Name
              </span>
              <input
                className="rounded-2xl border border-[#EDFCFE0F] bg-[#EDFCFE0F] px-5 py-3.5 text-[14px] text-[#D6D7D7] placeholder:text-[#597778] focus:border-[#1FE9F7] focus:outline-none focus:ring-0"
                placeholder="Vault Drip"
                type="text"
              />
            </label>

            <label className="flex flex-col gap-3">
              <span className="text-sm uppercase tracking-[0.18em] text-[#89A8AA]">
                Risk Level
              </span>
              <div className="rounded-2xl text-[12px] text-[#D6D7D7]">
                <Select>
                  <SelectTrigger className="bg-[#EDFCFE0F] w-full text-[#D6D7D7] placeholder:text-[#597778] border border-[#EDFCFE0F] focus:border-[#1FE9F7] focus:outline-none focus:ring-0 px-5 py-6">
                    <SelectValue placeholder="Risk Level" />
                  </SelectTrigger>
                  <SelectContent className="bg-[#EDFCFE0F] text-[#ADBEBF] border-none outline-none focus:outline-none focus:ring-0 focus:border-none">
                    <SelectItem value="low">Low Risk</SelectItem>
                    <SelectItem value="medium">Medium Risk</SelectItem>
                    <SelectItem value="high">High Risk</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </label>
          </div>

          <label className="mt-8 flex flex-col gap-3">
            <span className="text-sm uppercase tracking-[0.18em] text-[#89A8AA]">
              Description
            </span>
            <textarea
              rows={5}
              className="rounded-2xl border border-[#EDFCFE0F] bg-[#EDFCFE0F] px-5 py-4 text-[15px] text-[#CDEFF1] placeholder:text-[#597778] focus:border-[#1FE9F7] focus:outline-none focus:ring-0"
              placeholder="Describe your strategy"
            />
          </label>

          <div className="mt-10 flex items-center justify-between">
            <Button
              variant="ghost"
              className="rounded-full border border-[#1FE9F7]/30 bg-[#090909] px-16 py-6 text-sm font-semibold text-[#1FE9F7] transition hover:text-[#1FE9F7]/80 hover:bg-transparent cursor-pointer"
            >
              Go Back
            </Button>
            <Button
              variant="default"
              className="text-sm font-medium text-[#1FE9F7] join-strategy-button bg-linear-to-r from-[#045358] to-[#045358] rounded-lg px-16 py-6 text-center cursor-pointer"
            >
              Continue
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
}
