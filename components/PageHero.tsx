import React from "react";
import Image from "next/image";

/**
 * HERO AUDIT (pre-unification)
 * - Top offset inconsistency: some heroes rely on `MainContent` padding only, others add `pt-20/pt-28/pt-32/pt-36`, and a few add inner `pt-20` on the content container.
 * - Header-to-first-element gap varies widely because the first visible element is sometimes a badge, sometimes a title, sometimes breadcrumbs, and spacing uses different `mb-*` and `py-*` patterns.
 * - Vertical rhythm inconsistency: hero heights range from `min-h-[50vh]` to `min-h-screen` with different `min-h-[500px]/[600px]` guards, producing inconsistent above-the-fold density.
 * - Container inconsistency: mix of `container-custom` vs `max-w-7xl` wrappers and inconsistent horizontal padding (`px-4` vs `px-4 sm:px-6 lg:px-8`).
 * - Typography inconsistency: titles range from `text-4xl` to `xl:text-[80px]` with mixed `font-bold` usage and different line-heights; subtitles vary from `text-base` to `text-2xl` and use different cream/opacity values.
 * - Alignment inconsistency: some heroes are centered (`text-center`), others left-aligned with split lines/spans.
 * - Adornments inconsistency: some heroes include scroll indicators, textures, decorative blobs, parallax backgrounds, overlapping next sections, and CTA rows; others are simple text-only.
 *
 * Baseline chosen: the most polished *simple* centered hero treatment used on pages like `gallery`/`book-tour`
 * (gradient background, centered stack, strong display title, clear subtitle).
 */

export type PageHeroProps = {
  title: string;
  subtitle?: string;
  badge?: string;
  image?: string;
};

export default function PageHero({ title, subtitle, badge, image }: PageHeroProps) {
  return (
    <section className="relative -mt-[var(--header-offset)] bg-gradient-luxury pt-[var(--header-offset)] text-white">
      {image ? (
        <div className="absolute inset-0 z-0">
          <Image
            src={image}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-navy-900/65" />
        </div>
      ) : null}

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex min-h-[50vh] flex-col items-center justify-center text-center py-16 sm:py-20 lg:py-24">
          {badge ? (
            <div className="mb-4 sm:mb-6">
              <span className="inline-flex items-center rounded-full border border-gold-500/30 bg-gold-500/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-gold-300">
                {badge}
              </span>
            </div>
          ) : null}

          <h1 className="font-display text-4xl font-bold leading-[1.05] text-white sm:text-5xl md:text-6xl lg:text-7xl">
            {title}
          </h1>

          {subtitle ? (
            <p className="mt-5 max-w-3xl font-body text-lg leading-relaxed text-cream-50/90 sm:mt-6 sm:text-xl md:text-2xl">
              {subtitle}
            </p>
          ) : null}
        </div>
      </div>
    </section>
  );
}

