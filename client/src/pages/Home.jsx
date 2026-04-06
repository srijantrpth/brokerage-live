import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import SwiperCore from 'swiper';
import 'swiper/css/bundle';
import ListingItem from '../components/ListingItem';
import { Button } from '../components/ui/button';

export default function Home() {
  const [offerListings, setOfferListings] = useState([]);
  const [saleListings, setSaleListings] = useState([]);
  const [rentListings, setRentListings] = useState([]);
  SwiperCore.use([Navigation, Autoplay]);
  
  useEffect(() => {
    const fetchOfferListings = async () => {
      try {
        const res = await fetch('/api/listing/get?offer=true&limit=4');
        const data = await res.json();
        setOfferListings(data);
        fetchRentListings();
      } catch (error) {
        console.log(error);
      }
    };
    const fetchRentListings = async () => {
      try {
        const res = await fetch('/api/listing/get?type=rent&limit=4');
        const data = await res.json();
        setRentListings(data);
        fetchSaleListings();
      } catch (error) {
        console.log(error);
      }
    };

    const fetchSaleListings = async () => {
      try {
        const res = await fetch('/api/listing/get?type=sale&limit=4');
        const data = await res.json();
        setSaleListings(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchOfferListings();
  }, []);
  
  return (
    <div className='flex flex-col gap-8'>
      {/* Hero Section */}
      <section className='bg-gradient-to-r from-primary/10 to-accent/10 py-16 md:py-24'>
        <div className='flex flex-col gap-6 max-w-6xl mx-auto px-3'>
          <div className='space-y-4'>
            <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold gradient-text'>
              Find your next <span className='text-primary'>perfect</span>
              <br />
              place with ease
            </h1>
            <p className='text-base md:text-lg text-muted-foreground max-w-2xl'>
              PropFinder is the best place to find your next perfect place to live.
              <br />
              We have a wide range of properties for you to choose from.
            </p>
          </div>
          <Link to={'/search'}>
            <Button size="lg" className='w-fit'>
              Get Started →
            </Button>
          </Link>
        </div>
      </section>

      {/* Featured Carousel */}
      {offerListings && offerListings.length > 0 && (
        <section className='max-w-6xl mx-auto w-full px-3'>
          <Swiper 
            navigation 
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            className='rounded-lg overflow-hidden shadow-lg'
          >
            {offerListings.map((listing) => (
              <SwiperSlide key={listing._id}>
                <div
                  style={{
                    background: `url(${listing.imageUrls[0]}) center no-repeat`,
                    backgroundSize: 'cover',
                  }}
                  className='h-[400px] md:h-[500px] w-full'
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </section>
      )}

      {/* Listings Grid */}
      <section className='max-w-6xl mx-auto p-3 w-full flex flex-col gap-12'>
        
        {/* Recent Offers */}
        {offerListings && offerListings.length > 0 && (
          <div className='space-y-4'>
            <div className='flex flex-col gap-2'>
              <h2 className='text-3xl font-bold gradient-text'>🔥 Recent Offers</h2>
              <Link to={'/search?offer=true'}>
                <Button variant="link" className='p-0'>
                  View all offers →
                </Button>
              </Link>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
              {offerListings.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}

        {/* Rent Listings */}
        {rentListings && rentListings.length > 0 && (
          <div className='space-y-4'>
            <div className='flex flex-col gap-2'>
              <h2 className='text-3xl font-bold gradient-text'>🏘️ Places for Rent</h2>
              <Link to={'/search?type=rent'}>
                <Button variant="link" className='p-0'>
                  View all rentals →
                </Button>
              </Link>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
              {rentListings.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}

        {/* Sale Listings */}
        {saleListings && saleListings.length > 0 && (
          <div className='space-y-4'>
            <div className='flex flex-col gap-2'>
              <h2 className='text-3xl font-bold gradient-text'>🏠 Places for Sale</h2>
              <Link to={'/search?type=sale'}>
                <Button variant="link" className='p-0'>
                  View all listings →
                </Button>
              </Link>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
              {saleListings.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}
      </section>
    </div>
  );
}