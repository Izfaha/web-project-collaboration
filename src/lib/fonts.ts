import { Courier_Prime, Noto_Sans } from "next/font/google";

export const courierPrimeFont = Courier_Prime({
    subsets: ['latin'],
    weight: '400',
    style: 'normal',
    display:'swap',
    variable: '--font-courier-prime',
})

export const notoSans = Noto_Sans({
    subsets: ['latin'],
    weight: ['400', '700'],
    style: 'normal',
    display: 'swap',
    variable: '--noto-sans',
})




