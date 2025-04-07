import type { Metadata } from "next";

import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provider";
import { UILibraryProvider } from "@/providers/ui-library-provider";
import { Toaster } from "@/components/ui/sonner";
import Link from "next/link";
import { GithubIcon } from "lucide-react";
import ToggleTheme from "@/components/toggle-theme";
import { getMessages, setRequestLocale } from "next-intl/server";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";
import Navigation from "@/components/navigation";

export const metadata: Metadata = {
  title: "מערכת טפסים מתקדמת",
  description: "מערכת לניהול טפסים באמצעות TanStack Form ו-Next.js",
};

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages({ locale });

  return (
    <html lang={locale} dir="rtl" suppressHydrationWarning>
      <body className="min-h-screen bg-background text-foreground antialiased">
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <UILibraryProvider>
              <div className="flex flex-col min-h-screen">
                <header className="w-full bg-background border-b">
                  <div className="flex h-16 items-center justify-between px-4">
                    <div className="flex items-center gap-6">
                      <h1 className="text-xl font-bold">
                        TanStack Form + NestJS
                      </h1>
                      <Navigation />
                    </div>
                    <div className="flex items-center gap-4">
                      <ToggleTheme />
                      <Link
                        href="https://github.com/Nachman-Libermensh/tanstack-form-end-nestjs"
                        className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
                      >
                        <GithubIcon className="h-4 w-4" />
                        <span>GitHub</span>
                      </Link>
                    </div>
                  </div>
                </header>
                {children}
              </div>
              <Toaster />
            </UILibraryProvider>
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
