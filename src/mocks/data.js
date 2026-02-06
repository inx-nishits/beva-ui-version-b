export const MOCK_PLAYERS = [
    { id: 1, name: 'Ronnie O\'Sullivan', rating: 2240, matches: 1250, wins: 1100, rank: 1, country: 'GBR', trend: 'up', winRate: '88%' },
    { id: 2, name: 'Judd Trump', rating: 2195, matches: 980, wins: 760, rank: 2, country: 'GBR', trend: 'stable', winRate: '77%' },
    { id: 3, name: 'Mark Selby', rating: 2155, matches: 920, wins: 710, rank: 3, country: 'GBR', trend: 'down', winRate: '77%' },
    { id: 4, name: 'Neil Robertson', rating: 2120, matches: 850, wins: 620, rank: 4, country: 'AUS', trend: 'up', winRate: '73%' },
    { id: 5, name: 'Luca Brecel', rating: 2090, matches: 600, wins: 380, rank: 5, country: 'BEL', trend: 'up', winRate: '63%' },
    { id: 6, name: 'Kyren Wilson', rating: 2085, matches: 580, wins: 350, rank: 6, country: 'GBR', trend: 'stable', winRate: '60%' },
    { id: 7, name: 'Shaun Murphy', rating: 2050, matches: 800, wins: 500, rank: 7, country: 'GBR', trend: 'down', winRate: '62%' },
    { id: 8, name: 'Ding Junhui', rating: 2035, matches: 750, wins: 480, rank: 8, country: 'CHN', trend: 'up', winRate: '64%' },
    { id: 9, name: 'Mark Williams', rating: 2010, matches: 1100, wins: 800, rank: 9, country: 'GBR', trend: 'stable', winRate: '72%' },
    { id: 10, name: 'John Doe (You)', rating: 1560, matches: 24, wins: 15, rank: 124, country: 'AUS', trend: 'up', winRate: '62%' },
];

export const MOCK_VENUES = [
    {
        id: 1,
        name: 'The Crucible Theatre',
        city: 'Sheffield, UK',
        tables: 12,
        status: 'Live',
        type: 'Championship Arena',
        image: 'https://images.unsplash.com/photo-1544161515-4af6b1d8d179?q=80&w=1200',
        nextEvent: 'World Championship (Apr 15)',
        facilities: ['TV Studio', 'Pro Shop', 'Lounge']
    },
    {
        id: 2,
        name: 'Alexandra Palace',
        city: 'London, UK',
        tables: 8,
        status: 'Maintenance',
        type: 'Exhibition Hall',
        image: 'https://images.unsplash.com/photo-1528605105345-5344ea20e269?q=80&w=1200',
        nextEvent: 'Masters Open (Jun 10)',
        facilities: ['Auditorium', 'VIP Bar']
    },
    {
        id: 3,
        name: 'City Billiards Academy',
        city: 'Melbourne, AUS',
        tables: 24,
        status: 'Open',
        type: 'Training Facility',
        image: 'https://images.unsplash.com/photo-1563299796-b729d0af54a5?q=80&w=1200',
        nextEvent: 'Youth League (Tomorrow)',
        facilities: ['Coaching', 'Cafeteria', 'Parking']
    },
    {
        id: 4,
        name: 'Manila Expo Center',
        city: 'Manila, PHL',
        tables: 60,
        status: 'Open',
        type: 'Convention Center',
        image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1200',
        nextEvent: 'Beva Pro Series (Sep 20)',
        facilities: ['Hotel', 'Pool Hall', 'Gym']
    },
    {
        id: 5,
        name: 'Empire Pool Club',
        city: 'New York, USA',
        tables: 16,
        status: 'Busy',
        type: 'Private Club',
        image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=1200',
        nextEvent: '9-Ball Classic (Oct 05)',
        facilities: ['Bar', 'Kitchen', 'Private Rooms']
    }
];

export const MOCK_COMPETITIONS = [
    {
        id: 1,
        title: 'World Snooker Championship',
        format: 'Individual',
        discipline: 'Snooker',
        status: 'LIVE',
        participants: 32,
        venue: 'The Crucible Theatre',
        startDate: '2026-04-15',
        prizePool: '$500,000',
        entryFee: '$1,000',
        image: 'https://images.unsplash.com/photo-1544161515-4af6b1d8d179?q=80&w=1200&auto=format&fit=crop'
    },
    {
        id: 2,
        title: 'Masters Open 2026',
        format: 'Individual',
        discipline: '9-Ball',
        status: 'LIVE',
        participants: 64,
        venue: 'Alexandra Palace',
        startDate: '2026-06-10',
        prizePool: '$250,000',
        entryFee: '$250',
        image: 'https://images.unsplash.com/photo-1528605105345-5344ea20e269?q=80&w=1200&auto=format&fit=crop'
    },
    {
        id: 3,
        title: 'Local Club Round Robin',
        format: 'Individual',
        discipline: '8-Ball',
        status: 'Completed',
        participants: 12,
        venue: 'CueSports Arena',
        startDate: '2026-03-01',
        prizePool: '$5,000',
        entryFee: '$20',
        image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=1200'
    },
    {
        id: 4,
        title: 'Beva Pro Series - Manila',
        format: 'Team',
        discipline: '9-Ball',
        status: 'Completed',
        participants: 128,
        venue: 'Manila Expo Center',
        startDate: '2026-09-20',
        prizePool: '$1,000,000',
        entryFee: '$500',
        image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1200&auto=format&fit=crop'
    },
    {
        id: 5,
        title: 'Elite Top 8 Finals',
        format: 'Individual',
        discipline: '8-Ball',
        status: 'LIVE',
        participants: 8,
        venue: 'The Crucible Theatre',
        startDate: '2026-12-15',
        prizePool: '$2,000,000',
        entryFee: '$2,000',
        image: 'https://images.unsplash.com/photo-1599863261647-73d84a7e7807?q=80&w=1200'
    }
];
