import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";

import StrategyCard from "@/components/dashboard/StrategyCard";
import { STRATEGIES, getStrategyBySlug } from "@/lib/data/strategies";
import { Button } from "@/components/ui/button";

interface StrategyPageProps {
  params: Promise<{ slug: string }>;
}

export default async function StrategyDetailPage({
  params,
}: StrategyPageProps) {
  const { slug } = await params;
  const strategy = getStrategyBySlug(slug);

  if (!strategy) {
    notFound();
  }

  const relatedStrategies = STRATEGIES.filter(
    (item) => item.slug !== strategy.slug
  ).slice(0, 3);

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1 overflow-y-auto px-12 py-8">
        {/* Strategy Details */}
        <div className="mb-10 border border-[#EDFCFE0F] rounded-md p-6">
          <div className=" flex items-center mt-3 gap-4 justify-between">
            <div className="flex items-start gap-4">
              <Link
                href="/dashboard"
                className="text-[#5efbff]/80 transition hover:text-[#5efbff] self-start mt-[0.35em]"
              >
                <ArrowLeft size={22} strokeWidth={1.7} />
              </Link>

              <div className="flex flex-col gap-1">
                <h1 className="text-[32px] font-semibold tracking-[0.01em] text-[#F2F4F5] leading-none">
                  {strategy?.title}
                </h1>

                <div className="flex items-center gap-2 w-fit text-[12px] rounded-full bg-[#EDFCFE0F] px-4 py-1 border border-[#EDFCFE0F]">
                  <span className="text-[#F2F4F5]/70">Creator:</span>
                  <Image
                    src="/icons/user_icon.svg"
                    alt="Creator"
                    width={18}
                    height={18}
                    className="rounded-full"
                  />
                  <span className="text-[#5efbff] font-medium">
                    {strategy?.creator}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4">
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
                    {strategy?.type}
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
                    {strategy?.risk}
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
                    {strategy?.performance}
                  </h2>
                </div>
              </div>

              <Button
                variant="outline"
                className="bg-[#1FE9F7] text-[#090909] px-12 py-5 rounded-md border-none outline-none hover:bg-[#1FE9F7]/80 cursor-pointer"
              >
                Join Strategy
              </Button>
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

        {/* Strategy Description and Steps */}
        <section className="mb-20 rounded-[24px] border border-[#EDFCFE0F] bg-[#EDFCFE0F] px-10 py-8 shadow-[0_28px_56px_rgba(6,24,26,0.35)]">
          <div className="grid gap-10 md:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-start">
            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#577578]">
                Description
              </p>
              <p className="text-[16px] leading-7 text-[#F2F4F5]">
                {strategy.summary}
              </p>
            </div>

            <span className="hidden h-full w-1 rounded-full bg-[#1DD43914] md:block" />

            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#577578]">
                Steps
              </p>
              <ol className="space-y-1 text-[16px] leading-7 text-[#F2F4F5]">
                {strategy.steps.map((step, index) => (
                  <li key={`${strategy.slug}-stacked-step-${index}`}>
                    <span className="text-[#F2F4F5] ml-3">{index + 1}.</span>{" "}
                    {step}
                  </li>
                ))}
              </ol>
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
            {relatedStrategies.map((related) => (
              <StrategyCard key={related.slug} {...related} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
