// src/lib/fonts.ts
import localFont from "next/font/local";

export const courierPrime = localFont({
    src: [
        {
            path: "/fonts/courier-prime/CourierPrime-Regular.ttf", // Perbaiki path
            weight: "400",
            style: "normal",
        },
        {
            path: "/fonts/courier-prime/CourierPrime-Bold.ttf", // Perbaiki path
            weight: "700",
            style: "normal",
        },
    ],
    variable: "--font-courier-prime", // create a CSS variable
    display: "swap",
});
