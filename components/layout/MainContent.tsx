"use client";

import React from "react";

export default function MainContent({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex-grow pt-[var(--header-offset)]">{children}</main>
  );
}

