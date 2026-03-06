export type HostingType = 'shared' | 'wordpress' | 'vps' | 'cloud' | 'managed-wp';

export interface Provider {
  id: string;
  name: string;
  url: string;
  affiliateUrl: string;
  priceFrom: number;
  priceSuffix: string;
  storage: string;
  traffic: string;
  ssl: boolean;
  freeDomain: boolean;
  support: string;
  rating: number;
  bestFor: string;
  types: HostingType[];
  uptime: string;
  highlight?: string;
  badge?: string;
}

export const providers: Provider[] = [
  {
    id: 'one-com',
    name: 'One.com',
    url: 'one.com',
    affiliateUrl: 'https://www.one.com',
    priceFrom: 29,
    priceSuffix: 'kr/md',
    storage: '50 GB',
    traffic: 'Ubegrænset',
    ssl: true,
    freeDomain: true,
    support: 'Chat + Email',
    rating: 4.3,
    bestFor: 'Begyndere & WordPress',
    types: ['shared', 'wordpress'],
    uptime: '99.9%',
    highlight: 'Gratis domæne inkluderet',
    badge: 'Populær',
  },
  {
    id: 'surftown',
    name: 'Surftown',
    url: 'surftown.dk',
    affiliateUrl: 'https://www.surftown.dk',
    priceFrom: 39,
    priceSuffix: 'kr/md',
    storage: '20 GB',
    traffic: 'Ubegrænset',
    ssl: true,
    freeDomain: false,
    support: 'Dansk telefon + chat',
    rating: 4.2,
    bestFor: 'Dansk support',
    types: ['shared', 'wordpress'],
    uptime: '99.9%',
    highlight: 'Dansk support på telefon',
  },
  {
    id: 'simply',
    name: 'Simply.com',
    url: 'simply.com',
    affiliateUrl: 'https://www.simply.com',
    priceFrom: 35,
    priceSuffix: 'kr/md',
    storage: '20 GB',
    traffic: 'Ubegrænset',
    ssl: true,
    freeDomain: false,
    support: '24/7 chat + telefon',
    rating: 4.4,
    bestFor: 'SMV & professionelle',
    types: ['shared', 'wordpress'],
    uptime: '99.9%',
    highlight: '24/7 dansk support',
    badge: 'Bedste support',
  },
  {
    id: 'hostinger',
    name: 'Hostinger',
    url: 'hostinger.com',
    affiliateUrl: 'https://www.hostinger.com',
    priceFrom: 19,
    priceSuffix: 'kr/md',
    storage: 'Ubegrænset',
    traffic: 'Ubegrænset',
    ssl: true,
    freeDomain: true,
    support: '24/7 live chat',
    rating: 4.5,
    bestFor: 'Budgetbevidste',
    types: ['shared', 'wordpress', 'cloud'],
    uptime: '99.9%',
    highlight: 'Billigst på markedet',
    badge: 'Billigst',
  },
  {
    id: 'siteground',
    name: 'SiteGround',
    url: 'siteground.com',
    affiliateUrl: 'https://www.siteground.com',
    priceFrom: 29,
    priceSuffix: 'kr/md',
    storage: '10 GB SSD',
    traffic: 'Ubegrænset',
    ssl: true,
    freeDomain: false,
    support: '24/7 premium support',
    rating: 4.7,
    bestFor: 'WordPress premium',
    types: ['shared', 'wordpress', 'cloud'],
    uptime: '99.99%',
    highlight: 'Bedste WordPress performance',
    badge: 'Top valg',
  },
  {
    id: 'digitalocean',
    name: 'DigitalOcean',
    url: 'digitalocean.com',
    affiliateUrl: 'https://www.digitalocean.com',
    priceFrom: 45,
    priceSuffix: 'kr/md',
    storage: '25 GB SSD',
    traffic: '1 TB',
    ssl: true,
    freeDomain: false,
    support: 'Ticket + dokumentation',
    rating: 4.6,
    bestFor: 'Udviklere',
    types: ['vps', 'cloud'],
    uptime: '99.99%',
    highlight: 'Fuld server-kontrol',
    badge: 'Developer-favorit',
  },
  {
    id: 'hetzner',
    name: 'Hetzner',
    url: 'hetzner.com',
    affiliateUrl: 'https://www.hetzner.com',
    priceFrom: 35,
    priceSuffix: 'kr/md',
    storage: '20 GB NVMe',
    traffic: '20 TB',
    ssl: true,
    freeDomain: false,
    support: 'Email + ticket',
    rating: 4.7,
    bestFor: 'Pris/ydelse',
    types: ['vps', 'cloud'],
    uptime: '99.99%',
    highlight: 'Laveste pris for VPS',
  },
  {
    id: 'kinsta',
    name: 'Kinsta',
    url: 'kinsta.com',
    affiliateUrl: 'https://www.kinsta.com',
    priceFrom: 249,
    priceSuffix: 'kr/md',
    storage: '10 GB',
    traffic: '25.000 besøg/md',
    ssl: true,
    freeDomain: false,
    support: '24/7 WordPress-eksperter',
    rating: 4.8,
    bestFor: 'Professionelle WP-sites',
    types: ['managed-wp', 'wordpress'],
    uptime: '99.9%',
    highlight: 'Premium managed WordPress',
    badge: 'Premium',
  },
];

export function getProvidersByType(type: HostingType): Provider[] {
  return providers.filter((p) => p.types.includes(type));
}

export function getProviderById(id: string): Provider | undefined {
  return providers.find((p) => p.id === id);
}
