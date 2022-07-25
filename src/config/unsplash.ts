export type UnsplashImage = {
  name: string
  href: string
  src: string
  alt: string
  width: number
  height: number
}

export const images: UnsplashImage[] = [
  {
    name: 'Štefan Štefančík',
    href: 'https://unsplash.com/photos/-g7axSVst6Y',
    src: '/unsplash/stefan-stefancik--g7axSVst6Y-unsplash.jpg',
    alt: 'landscape photography of mountain ranges under purple and pink skies',
    width: 1920,
    height: 1080,
  },
  {
    name: 'Andre Benz',
    href: 'https://unsplash.com/photos/MsMISAIe8Qw',
    src: '/unsplash/andre-benz-MsMISAIe8Qw-unsplash.jpg',
    alt: 'person walking on street while holding umbrella',
    width: 1920,
    height: 1323,
  },
  {
    name: 'Wade Meng',
    href: 'https://unsplash.com/photos/LgCj9qcrfhI',
    src: '/unsplash/wade-meng-LgCj9qcrfhI-unsplash.jpg',
    alt: 'gray bridge above body of water during golden hour photography',
    width: 1920,
    height: 1280,
  },
  {
    name: 'Cosmic Timetraveler',
    href: 'https://unsplash.com/photos/-SFhuMwFClk',
    src: '/unsplash/cosmic-timetraveler--SFhuMwFClk-unsplash.jpg',
    alt: 'roadway beside iced capped mountain during daytime',
    height: 2400,
    width: 1920,
  },
]
