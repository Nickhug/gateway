import { lobeChat, useWatchPluginMessage } from '@lobehub/chat-plugin-sdk/client';
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';

interface Address {
  city?: string;
  full?: string;
  state?: string;
  street?: string;
  zipCode?: string;
}

interface Agent {
  email?: string;
  name?: string;
  office?: string;
  phone?: string;
}

interface Listing {
  bathrooms?: number;
  bedrooms?: number;
  daysOnMarket?: number;
  livingArea?: number;
  price?: number;
  remarks?: string;
  status?: string;
}

interface Media {
  photos?: string[];
}

interface Property {
  address?: Address;
  agent?: Agent;
  id?: string;
  listing?: Listing;
  listingId?: string;
  media?: Media;
  property?: {
    bathrooms?: number;
    bedrooms?: number;
    livingArea?: number;
    lotSize?: number;
    pool?: boolean;
    propertyType?: string;
    waterfront?: boolean;
    yearBuilt?: number;
  };
}

interface ResponseData {
  data?: Property | Property[];
}

// Format price function moved to outer scope
const formatPrice = (price: number, isRental: boolean = false) => {
  const options: Intl.NumberFormatOptions = {
    currency: 'USD',
    maximumFractionDigits: 0,
    style: 'currency',
  };

  if (price >= 10_000) {
    options.notation = 'compact';
    options.maximumFractionDigits = 1;
  }

  const formattedPrice = new Intl.NumberFormat('en-US', options).format(price);

  if (isRental) {
    return (
      <span style={{ whiteSpace: 'nowrap' }}>
        {formattedPrice}
        <span style={{ color: '#CCCCCC', fontSize: '0.8em', marginLeft: '4px' }}>/month</span>
      </span>
    );
  }

  return formattedPrice;
};

// Convert sqft to acres with appropriate formatting
const formatLotSizeAcres = (sqft: number | undefined | null): string => {
  if (sqft === undefined || sqft === null || sqft <= 0) return 'N/A';
  const acres = sqft / 43_560;
  // Use more precision for smaller lots, less for very large ones
  const decimalPlaces = acres < 0.1 ? 3 : acres < 10 ? 2 : 1;
  return `${acres.toFixed(decimalPlaces)} acres`;
};

// Property card component
const PropertyCard = ({ property }: { property: Property }) => {
  if (!property) return;

  const address = property.address || {};
  const listing = property.listing || {};
  const agent = property.agent || {};
  const media = property.media || {};
  const propertyDetails = property.property || {};
  const photos = media.photos || [];

  // Check if property is rental
  const isRental =
    listing.status === 'For Rent' ||
    (propertyDetails.propertyType &&
      propertyDetails.propertyType.toLowerCase().includes('rental')) ||
    propertyDetails.propertyType === 'Residential Lease';

  // Get the living area from the appropriate location
  const livingArea = listing.livingArea || propertyDetails.livingArea;
  // Get beds and baths from the appropriate location
  const bedrooms = listing.bedrooms || propertyDetails.bedrooms;
  const bathrooms = listing.bathrooms || propertyDetails.bathrooms;
  // Get lot size for conversion to acres
  const lotSize = propertyDetails.lotSize;

  // Calculate theme-based colors (using CSS variables to support dark mode)
  const colorBgContainer = 'var(--color-bg-container, #fff)';
  const colorBorderSecondary = 'var(--color-border-secondary, #eaeaea)';
  const colorTextSecondary = 'var(--color-text-2, #666)';
  const colorTextTertiary = 'var(--color-text-3, #999)';

  return (
    <div
      onMouseOut={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 1px 4px rgba(0, 0, 0, 0.05)';
      }}
      onMouseOver={(e) => {
        e.currentTarget.style.transform = 'translateY(-4px)';
        e.currentTarget.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.08)';
      }}
      style={{
        backgroundColor: colorBgContainer,
        border: `1px solid ${colorBorderSecondary}`,
        borderRadius: '12px',
        boxShadow: '0 1px 4px rgba(0, 0, 0, 0.05)',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        overflow: 'hidden',
        transition: 'transform 0.2s ease, box-shadow 0.2s ease',
      }}
    >
      {/* Property image with property ratio */}
      <div
        style={{
          backgroundColor: '#f0f2f5',
          paddingTop: '60%',
          position: 'relative',
          width: '100%',
        }}
      >
        {photos && photos.length > 0 ? (
          <img
            alt={`${address.full || 'Property'}`}
            src={photos[0]}
            style={{
              height: '100%',
              left: 0,
              objectFit: 'cover',
              position: 'absolute',
              top: 0,
              width: '100%',
            }}
          />
        ) : (
          <div
            style={{
              alignItems: 'center',
              color: colorTextTertiary,
              display: 'flex',
              fontSize: '14px',
              height: '100%',
              justifyContent: 'center',
              left: 0,
              position: 'absolute',
              top: 0,
              width: '100%',
            }}
          >
            No image available
          </div>
        )}
        {/* Status tag */}
        {listing.status && (
          <div
            style={{
              backgroundColor:
                listing.status === 'Active'
                  ? '#10b981'
                  : listing.status === 'Pending'
                    ? '#f59e0b'
                    : '#6366f1',
              borderRadius: '4px',
              color: 'white',
              fontSize: '11px',
              fontWeight: '600',
              left: '12px',
              padding: '2px 8px',
              position: 'absolute',
              textTransform: 'uppercase',
              top: '12px',
            }}
          >
            {listing.status}
          </div>
        )}
        {/* Gradient overlay for price */}
        <div
          style={{
            background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 100%)',
            bottom: 0,
            height: '50%',
            left: 0,
            position: 'absolute',
            right: 0,
          }}
        />
        {/* Price tag */}
        {listing.price && (
          <div
            style={{
              bottom: '10px',
              color: 'white',
              fontSize: '15px',
              fontWeight: '700',
              left: '12px',
              position: 'absolute',
              textShadow: '0 1px 3px rgba(0,0,0,0.3)',
            }}
          >
            {formatPrice(listing.price, isRental)}
          </div>
        )}
      </div>

      {/* Property details */}
      <div style={{ display: 'flex', flex: '1', flexDirection: 'column', padding: '12px' }}>
        <h3
          style={{
            color: '#1a1a1a',
            fontSize: '14px',
            fontWeight: '600',
            margin: '0 0 6px 0',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          }}
        >
          {address.full ||
            `${address.street || ''}, ${address.city || ''}, ${address.state || ''} ${address.zipCode || ''}`}
        </h3>

        <div style={{ display: 'flex', gap: '10px', marginBottom: '8px' }}>
          {bedrooms !== undefined && (
            <div style={{ alignItems: 'center', display: 'flex', gap: '4px' }}>
              <span style={{ color: colorTextSecondary, fontSize: '13px' }}>{bedrooms}</span>
              <span style={{ color: colorTextTertiary, fontSize: '12px' }}>beds</span>
            </div>
          )}
          {bathrooms !== undefined && (
            <div style={{ alignItems: 'center', display: 'flex', gap: '4px' }}>
              <span style={{ color: colorTextSecondary, fontSize: '13px' }}>{bathrooms}</span>
              <span style={{ color: colorTextTertiary, fontSize: '12px' }}>baths</span>
            </div>
          )}
          {livingArea && (
            <div style={{ alignItems: 'center', display: 'flex', gap: '4px' }}>
              <span style={{ color: colorTextSecondary, fontSize: '13px' }}>
                {livingArea.toLocaleString()}
              </span>
              <span style={{ color: colorTextTertiary, fontSize: '12px' }}>sqft</span>
            </div>
          )}
        </div>

        {/* Property Stats - replacing remarks */}
        <div style={{ flex: '1', marginBottom: '8px' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px 16px' }}>
            {lotSize && lotSize > 0 && (
              <div style={{ alignItems: 'center', display: 'flex', gap: '4px' }}>
                <span style={{ color: colorTextSecondary, fontSize: '12px' }}>Lot:</span>
                <span style={{ color: colorTextSecondary, fontSize: '12px' }}>
                  {formatLotSizeAcres(lotSize)}
                </span>
              </div>
            )}

            {propertyDetails.yearBuilt && (
              <div style={{ alignItems: 'center', display: 'flex', gap: '4px' }}>
                <span style={{ color: colorTextSecondary, fontSize: '12px' }}>Built:</span>
                <span style={{ color: colorTextSecondary, fontSize: '12px' }}>
                  {propertyDetails.yearBuilt}
                </span>
              </div>
            )}

            {listing.daysOnMarket !== undefined && (
              <div style={{ alignItems: 'center', display: 'flex', gap: '4px' }}>
                <span style={{ color: colorTextSecondary, fontSize: '12px' }}>DOM:</span>
                <span style={{ color: colorTextSecondary, fontSize: '12px' }}>
                  {listing.daysOnMarket} days
                </span>
              </div>
            )}

            {propertyDetails.propertyType && (
              <div
                style={{
                  backgroundColor: '#f5f5f7',
                  borderRadius: '4px',
                  color: colorTextSecondary,
                  fontSize: '11px',
                  padding: '2px 6px',
                }}
              >
                {propertyDetails.propertyType}
              </div>
            )}

            {propertyDetails.pool && (
              <div
                style={{
                  backgroundColor: '#e6f7ff',
                  borderRadius: '4px',
                  color: '#0091ff',
                  fontSize: '11px',
                  padding: '2px 6px',
                }}
              >
                Pool
              </div>
            )}

            {propertyDetails.waterfront && (
              <div
                style={{
                  backgroundColor: '#e6f7ff',
                  borderRadius: '4px',
                  color: '#0091ff',
                  fontSize: '11px',
                  padding: '2px 6px',
                }}
              >
                Waterfront
              </div>
            )}
          </div>
        </div>

        {agent.name && (
          <div
            style={{
              alignItems: 'center',
              borderTop: '1px solid #f0f0f0',
              color: colorTextTertiary,
              display: 'flex',
              fontSize: '11px',
              overflow: 'hidden',
              paddingTop: '8px',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
            }}
          >
            <span style={{ marginRight: '3px' }}>👤</span>
            <span style={{ overflow: 'hidden', textOverflow: 'ellipsis' }}>
              {agent.name}
              {agent.office && ` • ${agent.office}`}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

// Properties list component
const PropertyList = ({ properties }: { properties: Property[] }) => {
  // Move the ref outside the conditional return
  const scrollContainerRef = React.useRef<HTMLDivElement>(null);
  // State to track scroll position
  const [scrollPosition, setScrollPosition] = React.useState({ isAtEnd: false, isAtStart: true });

  // Function to check scroll position and update state
  const updateScrollPosition = React.useCallback(() => {
    if (!scrollContainerRef.current) return;

    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;

    // Check if content is scrollable
    const isScrollable = scrollWidth > clientWidth;

    // Add a small tolerance for floating point inaccuracies
    const tolerance = 1;
    const isAtStart = !isScrollable || scrollLeft <= tolerance;
    const isAtEnd = !isScrollable || scrollLeft + clientWidth >= scrollWidth - tolerance;

    // Only update state if values have actually changed
    setScrollPosition((prev) => {
      if (prev.isAtStart !== isAtStart || prev.isAtEnd !== isAtEnd) {
        return { isAtEnd, isAtStart };
      }
      return prev;
    });
  }, []);

  // Initialize scroll position check and set up scroll event listener
  React.useEffect(() => {
    // Ensure we have properties before setting up listeners
    if (!properties || properties.length === 0) {
      // Reset scroll position if properties disappear
      setScrollPosition({ isAtEnd: true, isAtStart: true });
      return;
    }

    // Initial check
    updateScrollPosition();

    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', updateScrollPosition, { passive: true }); // Use passive listener

      // Use ResizeObserver for more reliable checks after layout changes/resizes
      const resizeObserver = new ResizeObserver(updateScrollPosition);
      resizeObserver.observe(scrollContainer);

      // Debounced check after initial render and potential layout shifts
      const timer = setTimeout(updateScrollPosition, 150); // Slightly longer timeout

      return () => {
        scrollContainer.removeEventListener('scroll', updateScrollPosition);
        resizeObserver.disconnect();
        clearTimeout(timer);
      };
    }
    // Include updateScrollPosition in dependencies as it's now defined with useCallback
  }, [properties, updateScrollPosition]);

  // Early return if no properties
  if (!properties || properties.length === 0) {
    // Return null or a placeholder if needed when there are no properties
    return null;
  }

  // Function to scroll left
  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ behavior: 'smooth', left: -500 });
    }
  };

  // Function to scroll right
  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ behavior: 'smooth', left: 500 });
    }
  };

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
      }}
    >
      {/* Left navigation arrow - only show if not at start */}
      {!scrollPosition.isAtStart && (
        <div
          onClick={scrollLeft}
          style={{
            alignItems: 'center',
            backdropFilter: 'blur(4px)',
            // Use direct rgba for guaranteed translucency
            backgroundColor: 'rgba(255, 255, 255, 0.85)',
            borderRadius: '50%',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
            color: 'var(--color-text-0, #1a1a1a)',
            cursor: 'pointer',
            display: 'flex',
            height: '32px',
            justifyContent: 'center',
            left: '0',
            position: 'absolute',
            top: '50%',
            transform: 'translateY(-50%)',
            width: '32px',
            zIndex: 2,
          }}
        >
          <span style={{ fontSize: '18px' }}>←</span>
        </div>
      )}

      {/* Right navigation arrow - only show if not at end */}
      {!scrollPosition.isAtEnd && (
        <div
          onClick={scrollRight}
          style={{
            alignItems: 'center',
            backdropFilter: 'blur(4px)',
            // Use direct rgba for guaranteed translucency
            backgroundColor: 'rgba(255, 255, 255, 0.85)',
            borderRadius: '50%',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
            color: 'var(--color-text-0, #1a1a1a)',
            cursor: 'pointer',
            display: 'flex',
            height: '32px',
            justifyContent: 'center',
            position: 'absolute',
            right: '0',
            top: '50%',
            transform: 'translateY(-50%)',
            width: '32px',
            zIndex: 2,
          }}
        >
          <span style={{ fontSize: '18px' }}>→</span>
        </div>
      )}

      {/* Scrollable container */}
      <div
        ref={scrollContainerRef}
        style={{
          WebkitOverflowScrolling: 'touch',
          margin: '0 16px',
          msOverflowStyle: 'none',
          overflowX: 'auto',
          overflowY: 'hidden',
          paddingBottom: '8px',
          scrollbarWidth: 'none',
          width: '100%',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            gap: '14px',
            minWidth: 'min-content',
            paddingLeft: '24px',
            paddingRight: '24px',
          }}
        >
          {properties.map((property, index) => (
            <div key={index} style={{ flexShrink: 0, width: '240px' }}>
              <PropertyCard property={property} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const App = () => {
  const [data, setData] = useState<ResponseData | undefined>();
  const { data: watchData, loading } = useWatchPluginMessage<ResponseData>();

  useEffect(() => {
    // Get the current message of the plugin from LobeChat
    lobeChat
      .getPluginMessage<ResponseData>()
      .then((response) => {
        console.log('Plugin received data:', response);
        setData(response);
      })
      .catch((error) => {
        console.error('Error getting plugin message:', error);
      });
  }, []);

  // Also display any data received from watchData
  useEffect(() => {
    if (watchData) {
      console.log('Received watch data:', watchData);
      setData(watchData);
    }
  }, [watchData]);

  if (loading) {
    return (
      <div
        style={{
          color: '#666',
          fontFamily:
            'SF Pro Display, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif',
          padding: '20px',
          textAlign: 'center',
        }}
      >
        <div
          style={{
            animation: 'spin 1s linear infinite',
            border: '2px solid #f3f3f3',
            borderRadius: '50%',
            borderTop: '2px solid #3498db',
            display: 'inline-block',
            height: '24px',
            marginBottom: '12px',
            width: '24px',
          }}
        />
        <style>
          {`
            @keyframes spin {
              0% { transform: rotate(0deg); }
              100% { transform: rotate(360deg); }
            }
          `}
        </style>
        <p>Loading property listings...</p>
      </div>
    );
  }

  return (
    <div
      style={{
        backgroundColor: 'transparent',
        boxSizing: 'border-box',
        fontFamily:
          'SF Pro Display, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif',
        height: '100%',
        overflow: 'hidden',
        padding: '12px',
        width: '100%',
      }}
    >
      {data?.data ? (
        <>
          <h2
            style={{
              color: 'var(--color-text-0, #1a1a1a)',
              fontSize: '16px',
              fontWeight: '600',
              marginBottom: '12px',
              marginTop: '0',
              paddingLeft: '4px',
            }}
          >
            Property Results
          </h2>
          {Array.isArray(data.data) ? (
            <PropertyList properties={data.data} />
          ) : (
            <div style={{ margin: '0 auto', maxWidth: '400px' }}>
              <PropertyCard property={data.data} />
            </div>
          )}
        </>
      ) : (
        <div
          style={{ color: 'var(--color-text-2, #666)', padding: '24px 16px', textAlign: 'center' }}
        >
          <p style={{ fontSize: '15px', marginBottom: '10px' }}>
            Waiting for property data... Try searching for properties in Miami, FL.
          </p>
          <p style={{ color: 'var(--color-text-3, #888)', fontSize: '13px' }}>
            Example: &quot;Find 3-bedroom houses in Miami under $1M&quot;
          </p>
        </div>
      )}
    </div>
  );
};

const root = ReactDOM.createRoot(document.querySelector('#root') as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
