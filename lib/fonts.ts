import { Iceberg, Unna } from "next/font/google";
import localFont from "next/font/local";

export const unna = Unna({ weight: "700", subsets: ["latin"] });
export const iceberg = Iceberg({ weight: "400", subsets: ["latin"] });
export const digital = localFont({
  src: "../assets/fonts/digital-7.ttf",
  display: "swap",
});
