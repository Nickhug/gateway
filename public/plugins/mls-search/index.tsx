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
}

interface ResponseData {
  data?: Property | Property[];
}

// Format price function moved to outer scope
const formatPrice = (price: number) => {
  return new Intl.NumberFormat('en-US', {
    currency: 'USD',
    maximumFractionDigits: 0,
    style: 'currency',
  }).format(price);
};

// Property card component
const PropertyCard = ({ property }: { property: Property }) => {
  if (!property) return;

  const address = property.address || {};
  const listing = property.listing || {};
  const agent = property.agent || {};
  const media = property.media || {};
  const photos = media.photos || [];

  return (
    <div
      onMouseOut={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 2px 12px rgba(0, 0, 0, 0.08)';
      }}
      onMouseOver={(e) => {
        e.currentTarget.style.transform = 'translateY(-4px)';
        e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.12)';
      }}
      style={{
        backgroundColor: 'white',
        borderRadius: '8px',
        boxShadow: '0 2px 12px rgba(0, 0, 0, 0.08)',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        overflow: 'hidden',
        transition: 'transform 0.2s ease, box-shadow 0.2s ease',
      }}
    >
      {/* Property image with compact ratio */}
      <div
        style={{
          backgroundColor: '#f0f2f5',
          paddingTop: '66%',
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
              color: '#999',
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
              left: '8px',
              padding: '3px 8px',
              position: 'absolute',
              textTransform: 'uppercase',
              top: '8px',
            }}
          >
            {listing.status}
          </div>
        )}
        {/* Price tag */}
        {listing.price && (
          <div
            style={{
              backgroundColor: 'rgba(0, 0, 0, 0.7)',
              borderRadius: '4px',
              bottom: '8px',
              color: 'white',
              fontSize: '14px',
              fontWeight: '700',
              padding: '4px 8px',
              position: 'absolute',
              right: '8px',
            }}
          >
            {formatPrice(listing.price)}
          </div>
        )}
      </div>

      {/* Property details - more compact */}
      <div style={{ display: 'flex', flex: '1', flexDirection: 'column', padding: '12px' }}>
        <h3
          style={{
            color: '#1a1a1a',
            fontSize: '15px',
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

        <div style={{ display: 'flex', gap: '12px', marginBottom: '8px' }}>
          {listing.bedrooms && (
            <div style={{ alignItems: 'center', color: '#666', display: 'flex' }}>
              <span style={{ fontSize: '12px', marginRight: '3px' }}>🛏️</span>
              <span style={{ fontSize: '12px' }}>{listing.bedrooms}</span>
            </div>
          )}
          {listing.bathrooms && (
            <div style={{ alignItems: 'center', color: '#666', display: 'flex' }}>
              <span style={{ fontSize: '12px', marginRight: '3px' }}>🚿</span>
              <span style={{ fontSize: '12px' }}>{listing.bathrooms}</span>
            </div>
          )}
          {listing.livingArea && (
            <div style={{ alignItems: 'center', color: '#666', display: 'flex' }}>
              <span style={{ fontSize: '12px', marginRight: '3px' }}>📏</span>
              <span style={{ fontSize: '12px' }}>{listing.livingArea.toLocaleString()} sq ft</span>
            </div>
          )}
        </div>

        {listing.remarks && (
          <p
            style={{
              WebkitBoxOrient: 'vertical',
              WebkitLineClamp: 2,
              color: '#666',
              display: '-webkit-box',
              flex: '1',
              fontSize: '12px',
              lineHeight: '1.3',
              margin: '0 0 8px 0',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
          >
            {listing.remarks}
          </p>
        )}

        {agent.name && (
          <div
            style={{
              alignItems: 'center',
              borderTop: '1px solid #f0f0f0',
              color: '#888',
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
  if (!properties || properties.length === 0) return;

  return (
    <div
      style={{
        display: 'grid',
        gap: '16px',
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
        overflowX: 'auto',
        width: '100%',
      }}
    >
      {properties.map((property, index) => (
        <PropertyCard key={index} property={property} />
      ))}
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
        fontFamily:
          'SF Pro Display, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif',
        maxWidth: '100%',
        overflowX: 'hidden',
        padding: '16px',
      }}
    >
      {data?.data ? (
        <>
          <h2
            style={{
              color: '#1a1a1a',
              fontSize: '18px',
              fontWeight: '600',
              marginBottom: '12px',
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
        <div style={{ color: '#666', padding: '24px 16px', textAlign: 'center' }}>
          <p style={{ fontSize: '15px', marginBottom: '10px' }}>
            Waiting for property data... Try searching for properties in Miami, FL.
          </p>
          <p style={{ color: '#888', fontSize: '13px' }}>
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
