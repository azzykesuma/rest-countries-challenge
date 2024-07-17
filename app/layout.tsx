import type { Metadata } from "next";
import "./globals.css";

import { ThemeProvider } from "@/components/theme-provider";
import ReactQueryProvider from "@/lib/ReactQueryProvider";
import { FilterProvider } from "@/components/filterContext";

export const metadata: Metadata = {
  title: "REST countries frontend mentor challenge",
  description: "REST countries frontend mentor challenge",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          >
            <FilterProvider>
              <ReactQueryProvider>
                {children}
              </ReactQueryProvider>
            </FilterProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
