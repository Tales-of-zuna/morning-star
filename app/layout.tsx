import ThemeProvide from "@/utils/themeProvide";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MxrningStar",
  description: "Alternative Rock Band",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en" className={``}>
      <body className={inter.className}>
        <ThemeProvide>
          <div className="transform transition-all duration-500 ease-in-out">
            {children}
          </div>
        </ThemeProvide>
      </body>
    </html>
  );
};

export default RootLayout;
