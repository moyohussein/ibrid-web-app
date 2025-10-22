import localFont from 'next/font/local';

export const fontSans = localFont({
  src: [
    {
      path: '../fonts/EuclidCircularA-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../fonts/EuclidCircularA-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/EuclidCircularA-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../fonts/EuclidCircularA-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../fonts/EuclidCircularA-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-sans',
  display: 'swap',
});

export const fontMono = localFont({
  src: [
    {
      path: '../fonts/EuclidCircularA-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-mono',
  display: 'swap',
});
