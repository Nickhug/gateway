import { lobeChat, useWatchPluginMessage } from '@lobehub/chat-plugin-sdk/client';
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';

interface Address {
  full?: string;
  city?: string;
  state?: string;
  zipCode?: string;
  street?: string;
}

interface Agent {
  name?: string;
  office?: string;
  email?: string;
  phone?: string;
}

interface Listing {
  status?: string;
  price?: number;
  bedrooms?: number;
  bathrooms?: number;
  livingArea?: number;
  remarks?: string;
}

interface Media {
  photos?: string[];
}

interface Property {
  address?: Address;
  agent?: Agent;
  listing?: Listing;
  media?: Media;
  id?: string;
  listingId?: string;
}

interface ResponseData {
  data?: Property | Property[];
}

// Format price function moved to outer scope
const formatPrice = (price: number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(price);
};

// Property card component
const PropertyCard = ({ property }: { property: Property }) => {
  if (!property) return undefined;

  const address = property.address || {};
  const listing = property.listing || {};
  const agent = property.agent || {};
  const media = property.media || {};
  const photos = media.photos || [];

  return (
    <div
      style={{
        borderRadius: '8px',
        overflow: 'hidden',
        boxShadow: '0 2px 12px rgba(0, 0, 0, 0.08)',
        backgroundColor: 'white',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        transition: 'transform 0.2s ease, box-shadow 0.2s ease',
      }}
      onMouseOver={(e) => {
        e.currentTarget.style.transform = 'translateY(-4px)';
        e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.12)';
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 2px 12px rgba(0, 0, 0, 0.08)';
      }}
    >
      {/* Property image with compact ratio */}
      <div style={{ position: 'relative', width: '100%', paddingTop: '66%', backgroundColor: '#f0f2f5' }}>
        {photos && photos.length > 0 ? (
          <img
            src={photos[0]}
            alt={`${address.full || 'Property'}`}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        ) : (
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#999',
              fontSize: '14px',
            }}
          >
            No image available
          </div>
        )}
        {/* Status tag */}
        {listing.status && (
          <div
            style={{
              position: 'absolute',
              top: '8px',
              left: '8px',
              backgroundColor: listing.status === 'Active' ? '#10b981' : 
                              listing.status === 'Pending' ? '#f59e0b' : '#6366f1',
              color: 'white',
              padding: '3px 8px',
              borderRadius: '4px',
              fontSize: '11px',
              fontWeight: '600',
              textTransform: 'uppercase',
            }}
          >
            {listing.status}
          </div>
        )}
        {/* Price tag */}
        {listing.price && (
          <div
            style={{
              position: 'absolute',
              bottom: '8px',
              right: '8px',
              backgroundColor: 'rgba(0, 0, 0, 0.7)',
              color: 'white',
              padding: '4px 8px',
              borderRadius: '4px',
              fontSize: '14px',
              fontWeight: '700',
            }}
          >
            {formatPrice(listing.price)}
          </div>
        )}
      </div>

      {/* Property details - more compact */}
      <div style={{ padding: '12px', flex: '1', display: 'flex', flexDirection: 'column' }}>
        <h3 style={{ 
          margin: '0 0 6px 0', 
          fontSize: '15px', 
          fontWeight: '600', 
          color: '#1a1a1a',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis'
        }}>
          {address.full || `${address.street || ''}, ${address.city || ''}, ${address.state || ''} ${address.zipCode || ''}`}
        </h3>
        
        <div style={{ display: 'flex', gap: '12px', marginBottom: '8px' }}>
          {listing.bedrooms && (
            <div style={{ display: 'flex', alignItems: 'center', color: '#666' }}>
              <span style={{ marginRight: '3px', fontSize: '12px' }}>🛏️</span>
              <span style={{ fontSize: '12px' }}>{listing.bedrooms}</span>
            </div>
          )}
          {listing.bathrooms && (
            <div style={{ display: 'flex', alignItems: 'center', color: '#666' }}>
              <span style={{ marginRight: '3px', fontSize: '12px' }}>🚿</span>
              <span style={{ fontSize: '12px' }}>{listing.bathrooms}</span>
            </div>
          )}
          {listing.livingArea && (
            <div style={{ display: 'flex', alignItems: 'center', color: '#666' }}>
              <span style={{ marginRight: '3px', fontSize: '12px' }}>📏</span>
              <span style={{ fontSize: '12px' }}>{listing.livingArea.toLocaleString()} sq ft</span>
            </div>
          )}
        </div>
        
        {listing.remarks && (
          <p style={{ 
            margin: '0 0 8px 0', 
            fontSize: '12px', 
            color: '#666',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            lineHeight: '1.3',
            flex: '1'
          }}>
            {listing.remarks}
          </p>
        )}
        
        {agent.name && (
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            fontSize: '11px', 
            color: '#888',
            paddingTop: '8px',
            borderTop: '1px solid #f0f0f0',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis'
          }}>
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
  if (!properties || properties.length === 0) return undefined;
  
  return (
    <div style={{ 
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
      gap: '16px',
      width: '100%',
      overflowX: 'auto'
    }}>
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
      <div style={{ 
        fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif', 
        padding: '20px',
        textAlign: 'center',
        color: '#666'
      }}>
        <div style={{ 
          display: 'inline-block', 
          width: '24px', 
          height: '24px', 
          border: '2px solid #f3f3f3',
          borderTop: '2px solid #3498db',
          borderRadius: '50%',
          animation: 'spin 1s linear infinite',
          marginBottom: '12px'
        }} />
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
    <div style={{ 
      fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif',
      padding: '16px',
      maxWidth: '100%',
      overflowX: 'hidden'
    }}>
      {data?.data ? (
        <>
          <h2 style={{ 
            fontSize: '18px', 
            fontWeight: '600', 
            marginBottom: '12px',
            color: '#1a1a1a' 
          }}>
            Property Results
          </h2>
          {Array.isArray(data.data) ? (
            <PropertyList properties={data.data} />
          ) : (
            <div style={{ maxWidth: '400px', margin: '0 auto' }}>
              <PropertyCard property={data.data} />
            </div>
          )}
        </>
      ) : (
        <div style={{ textAlign: 'center', color: '#666', padding: '24px 16px' }}>
          <p style={{ fontSize: '15px', marginBottom: '10px' }}>
            Waiting for property data... Try searching for properties in Miami, FL.
          </p>
          <p style={{ fontSize: '13px', color: '#888' }}>
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
