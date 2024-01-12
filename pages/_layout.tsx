import { Providers } from "@components/providers";

import { poppins } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { TailwindIndicator } from "@/components/tailwind-indicator";

import "@/styles/globals.css";

export const metadata = {
  title: "Tracy Muso",
  description: "Professional protfolio of Tracy Muso",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          poppins.variable,
          "font-poppins min-h-screen scroll-smooth antialiased"
        )}
      >
        <Providers>{children}</Providers>

        <TailwindIndicator />
      </body>
    </html>
  );
};

export default RootLayout;
