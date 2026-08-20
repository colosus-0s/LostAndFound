import React, { useState } from 'react';
import { MapPin, Clock, ArrowUpRight } from 'lucide-react';
import { Container, Card, Badge, Button } from '../ui';
import { ROUTE_PATHS } from '../../routes';

export const FeaturedItemsSection: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'lost' | 'found'>('all');

  const items = [
    {
      id: '1',
      title: 'iPhone 14 Pro',
      status: 'lost',
      location: 'Library',
      subLocation: 'Study Area',
      time: '12 min ago',
      category: 'Phone',
      tag: 'Student Center',
      image: 'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: '2',
      title: 'Brown Wallet',
      status: 'found',
      location: 'Cafeteria',
      subLocation: 'Main Hall',
      time: '1 hour ago',
      category: 'Wallet',
      tag: 'Cafeteria',
      image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: '3',
      title: 'Black Backpack',
      status: 'lost',
      location: 'Classroom 205',
      subLocation: 'Academic Building',
      time: '2 hours ago',
      category: 'Backpack',
      tag: 'Academic Block',
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: '4',
      title: 'Silver Watch',
      status: 'found',
      location: 'Parking Area',
      subLocation: 'Block B',
      time: '3 hours ago',
      category: 'Watch',
      tag: 'Main Parking',
      image: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=600&q=80',
    },
  ];

  const filteredItems = filter === 'all' ? items : items.filter((item) => item.status === filter);

  return (
    <section className="py-20 bg-[#0e0f14] border-t border-white/[0.08] relative">
      <Container size="xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20">
              EXPLORE ITEMS
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Browse Lost & Found Items
            </h2>
          </div>

          {/* Filter Tabs */}
          <div className="flex items-center gap-2 bg-[#121318] p-1.5 rounded-full border border-white/[0.08] self-start md:self-auto">
            <button
              type="button"
              onClick={() => setFilter('all')}
              className={`px-4 py-1.5 text-xs font-medium rounded-full transition-all cursor-pointer ${
                filter === 'all' ? 'bg-indigo-600 text-white shadow-md' : 'text-gray-400 hover:text-white'
              }`}
            >
              All Items
            </button>
            <button
              type="button"
              onClick={() => setFilter('lost')}
              className={`px-4 py-1.5 text-xs font-medium rounded-full transition-all cursor-pointer ${
                filter === 'lost' ? 'bg-red-600 text-white shadow-md' : 'text-gray-400 hover:text-white'
              }`}
            >
              Lost
            </button>
            <button
              type="button"
              onClick={() => setFilter('found')}
              className={`px-4 py-1.5 text-xs font-medium rounded-full transition-all cursor-pointer ${
                filter === 'found' ? 'bg-blue-600 text-white shadow-md' : 'text-gray-400 hover:text-white'
              }`}
            >
              Found
            </button>
          </div>
        </div>

        {/* Items Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <Card
              key={item.id}
              variant="surface"
              interactive
              padded={false}
              className="overflow-hidden flex flex-col justify-between group"
            >
              {/* Card Image Container */}
              <div className="relative aspect-[4/3] bg-[#1a1c23] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3">
                  <Badge variant={item.status === 'lost' ? 'lost' : 'found'} dot size="sm">
                    {item.status === 'lost' ? 'Lost' : 'Found'}
                  </Badge>
                </div>
                <div className="absolute bottom-3 right-3">
                  <span className="text-[11px] font-medium bg-[#0a0a0c]/80 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/10 text-gray-300">
                    {item.category}
                  </span>
                </div>
              </div>

              {/* Card Details Body */}
              <div className="p-5 space-y-3">
                <div className="flex items-start justify-between">
                  <h3 className="text-base font-bold text-white group-hover:text-indigo-400 transition-colors">
                    {item.title}
                  </h3>
                </div>

                <div className="space-y-1.5 text-xs text-gray-400">
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                    <span className="truncate">Near {item.location}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-gray-500 shrink-0" />
                    <span>{item.time}</span>
                  </div>
                </div>

                <div className="pt-2 flex items-center justify-between border-t border-white/[0.08]">
                  <span className="text-[11px] font-medium text-gray-400 px-2 py-0.5 rounded bg-white/[0.04]">
                    📍 {item.tag}
                  </span>
                  <a
                    href={`${ROUTE_PATHS.PUBLIC.BROWSE}/${item.id}`}
                    className="text-xs font-semibold text-indigo-400 hover:text-indigo-300 flex items-center gap-1"
                  >
                    Details <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* View All Action */}
        <div className="mt-12 text-center">
          <a href={ROUTE_PATHS.PUBLIC.BROWSE}>
            <Button variant="secondary" size="lg">
              View All Items
            </Button>
          </a>
        </div>
      </Container>
    </section>
  );
};
