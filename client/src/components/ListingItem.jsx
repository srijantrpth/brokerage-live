import { Link } from 'react-router-dom';
import { MdLocationOn } from 'react-icons/md';
import { FaBed, FaBath } from 'react-icons/fa';
import { Card, CardContent, CardFooter } from './ui/card';

export default function ListingItem({ listing }) {
  return (
    <Link to={`/listing/${listing._id}`}>
      <Card className='overflow-hidden card-hover'>
        <div className='relative overflow-hidden h-[250px] md:h-[200px]'>
          <img
            src={listing.imageUrls[0]}
            alt='listing cover'
            className='w-full h-full object-cover hover:scale-110 transition-transform duration-300'
          />
          {listing.offer && (
            <div className='absolute top-3 right-3 bg-destructive text-destructive-foreground px-3 py-1 rounded-full text-xs font-semibold'>
              Offer
            </div>
          )}
          <div className='absolute top-3 left-3 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold capitalize'>
            {listing.type}
          </div>
        </div>

        <CardContent className='p-4 flex flex-col gap-2'>
          <h3 className='text-lg font-semibold text-foreground truncate line-clamp-2'>
            {listing.name || 'Property'}
          </h3>
          
          <div className='flex items-start gap-1'>
            <MdLocationOn className='h-4 w-4 text-accent flex-shrink-0 mt-0.5' />
            <p className='text-sm text-muted-foreground truncate'>
              {listing.address}
            </p>
          </div>

          <p className='text-sm text-muted-foreground line-clamp-2'>
            {listing.description}
          </p>

          <div className='flex items-center gap-4 text-xs font-semibold text-foreground mt-2'>
            <div className='flex items-center gap-1'>
              <FaBed className='text-primary' />
              {listing.bedrooms > 1
                ? `${listing.bedrooms} beds`
                : `${listing.bedrooms} bed`}
            </div>
            <div className='flex items-center gap-1'>
              <FaBath className='text-primary' />
              {listing.bathrooms > 1
                ? `${listing.bathrooms} baths`
                : `${listing.bathrooms} bath`}
            </div>
          </div>
        </CardContent>

        <CardFooter className='bg-secondary/50 p-4 flex-col items-start gap-2'>
          <div className='text-lg font-bold text-primary'>
            ₹{listing.offer
              ? listing.discountPrice?.toLocaleString('en-IN')
              : listing.regularPrice?.toLocaleString('en-IN')}
            {listing.type === 'rent' && '/month'}
          </div>
          {listing.offer && listing.regularPrice > listing.discountPrice && (
            <div className='text-xs text-muted-foreground line-through'>
              ₹{listing.regularPrice?.toLocaleString('en-IN')}
            </div>
          )}
        </CardFooter>
      </Card>
    </Link>
  );
}
}