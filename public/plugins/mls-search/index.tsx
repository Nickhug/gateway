import { fetchPluginMessage } from '@lobehub/chat-plugin-sdk/client';
import {
  Avatar,
  Badge,
  Button,
  Card,
  Carousel,
  Col,
  Descriptions,
  Divider,
  Empty,
  Flex,
  Image,
  Layout,
  Rate,
  Row,
  Spin,
  Statistic,
  Tag,
  Typography,
  theme,
} from 'antd';
import { createStyles } from 'antd-style';
import React, { memo, useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { Flexbox } from 'react-layout-kit';

const { Title, Text, Paragraph } = Typography;
const { useToken } = theme;

// Create styles for property card
const useStyles = createStyles(({ css }) => ({
  propertyCard: css`
    display: flex;
    flex-direction: column;
    height: 100%;
    overflow: hidden;
    border-radius: 12px;
    transition: all 0.3s ease;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);

    &:hover {
      box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
      transform: translateY(-4px);
    }
  `,
}));

interface MLSProperty {
  address: {
    city: string;
    full: string;
    neighborhood: string;
    state: string;
    street: string;
    zipCode: string;
  };
  agent: {
    email: string;
    name: string;
    office: string;
    phone: string;
  };
  id: string;
  listing: {
    daysOnMarket: number;
    listedDate: string;
    price: number;
    remarks: string;
    status: string;
  };
  listingId: string;
  media: {
    photos: string[];
    virtualTour: string | undefined;
  };
  property: {
    bathrooms: number;
    bedrooms: number;
    garageSpaces: number | undefined;
    livingArea: number;
    lotSize: number | undefined;
    pool: boolean;
    propertyType: string;
    stories: number | undefined;
    view: string | undefined;
    waterfront: boolean;
    yearBuilt: number;
  };
}

interface PropertySearchResults {
  data: MLSProperty[];
  meta: {
    count: number;
    limit: number;
    nextResultIndex?: number;
    offset: number;
    total: number; // For pagination
  };
}

interface PropertyDetails extends MLSProperty {
  address: MLSProperty['address'] & {
    county: string;
    latitude: number;
    longitude: number;
    unit: string | undefined;
  };
  agent: MLSProperty['agent'] & {
    officeEmail: string;
    officePhone: string;
  };
  listing: MLSProperty['listing'] & {
    hoaFees: number;
    hoaFrequency: string | undefined;
    mlsNumber: string;
    pricePerSqFt: number;
    taxAnnualAmount: number;
    taxAssessedValue: number;
    taxYear: number;
    virtualTourUrl: string | undefined;
  };
  property: MLSProperty['property'] & {
    appliances: string[];
    construction: string;
    cooling: string;
    features: string[];
    foundation: string | undefined;
    halfBaths: number;
    heating: string;
    parkingSpaces: number | undefined;
    roof: string | undefined;
    spa: boolean;
    subType: string;
  };
  schools: {
    distance: number;
    level: string;
    name: string;
    rating: number;
  }[];
}

type PluginMessageData =
  | PropertySearchResults
  | PropertyDetails
  | { details?: any; error?: string };

const formatCurrency = (value: number): string => {
  return new Intl.NumberFormat('en-US', {
    currency: 'USD',
    maximumFractionDigits: 0,
    style: 'currency',
  }).format(value);
};

const formatNumber = (value: number): string => {
  return new Intl.NumberFormat('en-US').format(value);
};

const PropertyCard = ({ property }: { property: MLSProperty }) => {
  const { token } = useToken();
  const { styles } = useStyles();

  return (
    <Card
      bodyStyle={{
        flex: 1,
        padding: 16,
      }}
      className={styles.propertyCard}
      cover={
        <div style={{ height: 200, position: 'relative' }}>
          {property.media.photos && property.media.photos.length > 0 ? (
            <Carousel autoplay dots={{ className: 'custom-carousel-dots' }}>
              {property.media.photos.map((photo, index) => (
                <div key={index}>
                  <div
                    style={{
                      backgroundImage: `url(${photo})`,
                      backgroundPosition: 'center',
                      backgroundSize: 'cover',
                      height: 200,
                    }}
                  />
                </div>
              ))}
            </Carousel>
          ) : (
            <div
              style={{
                alignItems: 'center',
                background: token.colorFillQuaternary,
                color: token.colorTextDisabled,
                display: 'flex',
                height: 200,
                justifyContent: 'center',
              }}
            >
              No Image
            </div>
          )}
          <Badge.Ribbon
            color={
              property.listing.status === 'Active'
                ? 'green'
                : property.listing.status === 'Pending'
                  ? 'orange'
                  : 'blue'
            }
            style={{
              padding: '0 8px',
              position: 'absolute',
              right: 0,
              top: 0,
            }}
            text={property.listing.status}
          />
          <div
            style={{
              background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 100%)',
              bottom: 0,
              height: '50%',
              left: 0,
              position: 'absolute',
              right: 0,
            }}
          />
          <div
            style={{
              bottom: 0,
              color: 'white',
              left: 0,
              padding: '12px',
              position: 'absolute',
              right: 0,
            }}
          >
            <Text strong style={{ color: 'white', fontSize: 18 }}>
              {formatCurrency(property.listing.price)}
            </Text>
          </div>
        </div>
      }
      hoverable
    >
      <Title ellipsis level={5} style={{ marginBottom: 8, marginTop: 0 }}>
        {property.address.street || property.address.full}
      </Title>

      <Paragraph ellipsis style={{ color: token.colorTextSecondary, marginBottom: 12 }}>
        {property.address.city}, {property.address.state} {property.address.zipCode}
        {property.address.neighborhood && property.address.neighborhood !== 'N/A' && (
          <Tag color={token.colorPrimary} style={{ marginLeft: 8 }}>
            {property.address.neighborhood}
          </Tag>
        )}
      </Paragraph>

      <Flexbox gap={16} style={{ marginBottom: 16 }} wrap="wrap">
        <Statistic title="Beds" value={property.property.bedrooms} valueStyle={{ fontSize: 16 }} />
        <Statistic
          title="Baths"
          value={
            property.property.bathrooms % 1 === 0
              ? property.property.bathrooms
              : property.property.bathrooms.toFixed(1)
          }
          valueStyle={{ fontSize: 16 }}
        />
        <Statistic
          title="Sq Ft"
          value={formatNumber(property.property.livingArea)}
          valueStyle={{ fontSize: 16 }}
        />
        {property.property.yearBuilt > 0 && (
          <Statistic
            title="Year"
            value={property.property.yearBuilt}
            valueStyle={{ fontSize: 16 }}
          />
        )}
      </Flexbox>

      <Flexbox gap={8} horizontal style={{ marginBottom: 0 }}>
        <Tag color="blue" style={{ borderRadius: 4, margin: 0 }}>
          {property.property.propertyType}
        </Tag>
        <Tag
          style={{
            backgroundColor: token.colorFillSecondary,
            borderRadius: 4,
            color: token.colorTextSecondary,
            margin: 0,
          }}
        >
          {property.listing.daysOnMarket} days on market
        </Tag>
      </Flexbox>
    </Card>
  );
};

const PropertyDetailsView = ({ property }: { property: PropertyDetails }) => {
  const { token } = useToken();

  return (
    <div style={{ padding: '0 16px' }}>
      {property.media.photos && property.media.photos.length > 0 ? (
        <Carousel autoplay style={{ marginBottom: 24 }}>
          {property.media.photos.map((photo, index) => (
            <div key={index}>
              <Image
                alt={`Property image ${index + 1}`}
                preview={false}
                src={photo}
                style={{
                  borderRadius: 8,
                  height: '300px',
                  objectFit: 'cover',
                  width: '100%',
                }}
              />
            </div>
          ))}
        </Carousel>
      ) : (
        <div
          style={{
            alignItems: 'center',
            background: '#f0f0f0',
            borderRadius: 8,
            color: '#ccc',
            display: 'flex',
            height: 300,
            justifyContent: 'center',
            marginBottom: 24,
          }}
        >
          No Images Available
        </div>
      )}

      <Card bordered={false} style={{ marginBottom: 24 }}>
        <Row gutter={[24, 16]}>
          <Col md={16} xs={24}>
            <Title level={3} style={{ marginBottom: 0, marginTop: 0 }}>
              {property.address.full} {property.address.unit && `#${property.address.unit}`}
            </Title>
            <Text style={{ fontSize: 16 }} type="secondary">
              {property.address.city}, {property.address.state} {property.address.zipCode} ·{' '}
              {property.address.neighborhood}
            </Text>
          </Col>
          <Col md={8} style={{ textAlign: 'right' }} xs={24}>
            <Title level={2} style={{ color: token.colorPrimary, marginBottom: 0, marginTop: 0 }}>
              {formatCurrency(property.listing.price)}
            </Title>
            {property.listing.pricePerSqFt > 0 && (
              <Text>{formatCurrency(property.listing.pricePerSqFt)} per sqft</Text>
            )}
          </Col>
        </Row>

        <Divider style={{ margin: '16px 0' }} />

        <Row gutter={[24, 0]}>
          <Col xs={6}>
            <Statistic
              title="Beds"
              value={property.property.bedrooms}
              valueStyle={{ color: token.colorTextHeading }}
            />
          </Col>
          <Col xs={6}>
            <Statistic
              title="Baths"
              value={
                property.property.bathrooms +
                (property.property.halfBaths ? 0.5 * property.property.halfBaths : 0)
              }
              valueStyle={{ color: token.colorTextHeading }}
            />
          </Col>
          <Col xs={6}>
            <Statistic
              title="Sq Ft"
              value={formatNumber(property.property.livingArea)}
              valueStyle={{ color: token.colorTextHeading }}
            />
          </Col>
          <Col xs={6}>
            <Statistic
              title="Year Built"
              value={property.property.yearBuilt}
              valueStyle={{ color: token.colorTextHeading }}
            />
          </Col>
        </Row>

        <Divider style={{ margin: '16px 0' }} />

        <Row gutter={[24, 16]}>
          <Col xs={24}>
            <Badge.Ribbon
              color={
                property.listing.status === 'Active'
                  ? 'green'
                  : property.listing.status === 'Pending'
                    ? 'orange'
                    : 'blue'
              }
              text={property.listing.status}
            />
            <Paragraph style={{ fontSize: 16, lineHeight: 1.6 }}>
              {property.listing.remarks}
            </Paragraph>
          </Col>
        </Row>
      </Card>

      <Row gutter={[24, 24]}>
        <Col md={12} xs={24}>
          <Card bordered={false} title="Property Details">
            <Descriptions column={1} style={{ marginBottom: 0 }}>
              <Descriptions.Item label="Property Type">
                {property.property.propertyType}{' '}
                {property.property.subType && `(${property.property.subType})`}
              </Descriptions.Item>
              {property.property.stories && (
                <Descriptions.Item label="Stories">{property.property.stories}</Descriptions.Item>
              )}
              {property.property.lotSize && (
                <Descriptions.Item label="Lot Size">
                  {formatNumber(property.property.lotSize)} sqft
                </Descriptions.Item>
              )}
              {property.property.garageSpaces !== undefined && (
                <Descriptions.Item label="Garage">
                  {property.property.garageSpaces} spaces
                </Descriptions.Item>
              )}
              {property.property.parkingSpaces && (
                <Descriptions.Item label="Parking">
                  {property.property.parkingSpaces} spaces
                </Descriptions.Item>
              )}
              {property.property.cooling && (
                <Descriptions.Item label="Cooling">{property.property.cooling}</Descriptions.Item>
              )}
              {property.property.heating && (
                <Descriptions.Item label="Heating">{property.property.heating}</Descriptions.Item>
              )}
              {property.property.construction && (
                <Descriptions.Item label="Construction">
                  {property.property.construction}
                </Descriptions.Item>
              )}
              {property.property.roof && (
                <Descriptions.Item label="Roof">{property.property.roof}</Descriptions.Item>
              )}
            </Descriptions>
          </Card>
        </Col>

        <Col md={12} xs={24}>
          <Card bordered={false} title="Listing Details">
            <Descriptions column={1} style={{ marginBottom: 0 }}>
              {property.listing.mlsNumber && (
                <Descriptions.Item label="MLS #">{property.listing.mlsNumber}</Descriptions.Item>
              )}
              <Descriptions.Item label="Days on Market">
                {property.listing.daysOnMarket}
              </Descriptions.Item>
              <Descriptions.Item label="Listed Date">
                {new Date(property.listing.listedDate).toLocaleDateString()}
              </Descriptions.Item>
              {property.listing.taxYear > 0 && (
                <Descriptions.Item label="Tax Year">{property.listing.taxYear}</Descriptions.Item>
              )}
              {property.listing.taxAssessedValue > 0 && (
                <Descriptions.Item label="Tax Assessment">
                  {formatCurrency(property.listing.taxAssessedValue)}
                </Descriptions.Item>
              )}
              {property.listing.taxAnnualAmount > 0 && (
                <Descriptions.Item label="Annual Tax">
                  {formatCurrency(property.listing.taxAnnualAmount)}
                </Descriptions.Item>
              )}
              {property.listing.hoaFees > 0 && (
                <Descriptions.Item label="HOA Fees">
                  {formatCurrency(property.listing.hoaFees)} {property.listing.hoaFrequency || ''}
                </Descriptions.Item>
              )}
            </Descriptions>
          </Card>
        </Col>

        {property.property.features && property.property.features.length > 0 && (
          <Col xs={24}>
            <Card bordered={false} title="Features">
              <Row gutter={[16, 16]}>
                {property.property.features.map((feature, index) => (
                  <Col key={index} md={8} xs={12}>
                    <Tag style={{ padding: '4px 8px' }}>{feature}</Tag>
                  </Col>
                ))}
                {property.property.waterfront && (
                  <Col md={8} xs={12}>
                    <Tag color="blue" style={{ padding: '4px 8px' }}>
                      Waterfront
                    </Tag>
                  </Col>
                )}
                {property.property.pool && (
                  <Col md={8} xs={12}>
                    <Tag color="blue" style={{ padding: '4px 8px' }}>
                      Pool
                    </Tag>
                  </Col>
                )}
                {property.property.spa && (
                  <Col md={8} xs={12}>
                    <Tag color="blue" style={{ padding: '4px 8px' }}>
                      Spa
                    </Tag>
                  </Col>
                )}
                {property.property.view && (
                  <Col md={8} xs={12}>
                    <Tag color="blue" style={{ padding: '4px 8px' }}>
                      View: {property.property.view}
                    </Tag>
                  </Col>
                )}
              </Row>
            </Card>
          </Col>
        )}

        {property.schools && property.schools.length > 0 && (
          <Col xs={24}>
            <Card bordered={false} title="Schools">
              {property.schools.map((school, index) => (
                <div
                  key={index}
                  style={{ marginBottom: index < property.schools.length - 1 ? 16 : 0 }}
                >
                  <Flex align="center" justify="space-between">
                    <div>
                      <Text strong>{school.name}</Text>
                      <br />
                      <Text type="secondary">
                        {school.level} · {school.distance.toFixed(1)} mi
                      </Text>
                    </div>
                    {school.rating > 0 && (
                      <Rate allowHalf defaultValue={school.rating / 2} disabled />
                    )}
                  </Flex>
                  {index < property.schools.length - 1 && <Divider style={{ margin: '16px 0' }} />}
                </div>
              ))}
            </Card>
          </Col>
        )}

        <Col xs={24}>
          <Card bordered={false} title="Contact">
            <Row align="middle" gutter={[24, 16]}>
              <Col sm={12} xs={24}>
                <Flex align="center">
                  {property.agent.name !== 'N/A' && (
                    <Avatar
                      size={64}
                      style={{ backgroundColor: token.colorPrimary, marginRight: 16 }}
                    >
                      {property.agent.name.charAt(0)}
                    </Avatar>
                  )}
                  <div>
                    <Text strong style={{ fontSize: 16 }}>
                      {property.agent.name === 'N/A' ? 'Agent Unknown' : property.agent.name}
                    </Text>
                    <br />
                    {property.agent.office !== 'N/A' && (
                      <Text type="secondary">{property.agent.office}</Text>
                    )}
                  </div>
                </Flex>
              </Col>
              <Col sm={12} xs={24}>
                <Descriptions column={1} style={{ marginBottom: 0 }}>
                  {property.agent.phone !== 'N/A' && (
                    <Descriptions.Item label="Phone">{property.agent.phone}</Descriptions.Item>
                  )}
                  {property.agent.email !== 'N/A' && (
                    <Descriptions.Item label="Email">{property.agent.email}</Descriptions.Item>
                  )}
                </Descriptions>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

const SearchResults = ({ data }: { data: PropertySearchResults }) => {
  const [loading, setLoading] = useState(false);
  const [properties, setProperties] = useState(data.data);
  const [meta, setMeta] = useState(data.meta);

  // No results UI
  if (!properties || properties.length === 0) {
    return (
      <Empty
        description="No properties found matching your search criteria."
        image={Empty.PRESENTED_IMAGE_SIMPLE}
        style={{ margin: '48px 0' }}
      />
    );
  }

  const loadMoreResults = async () => {
    if (!meta.nextResultIndex) return;

    setLoading(true);
    try {
      // Get current URL search params
      const currentUrl = new URL(window.location.href);
      const searchParams = currentUrl.searchParams;

      // Add the resultIndex parameter for pagination
      searchParams.set('resultIndex', meta.nextResultIndex.toString());

      // Make the API call to get more results
      const response = await fetch(`/api/v1/mls?${searchParams.toString()}`);
      const newData = await response.json();

      if (newData && newData.data && Array.isArray(newData.data)) {
        // Merge the new properties with existing ones
        setProperties([...properties, ...newData.data]);
        // Update the meta information
        setMeta(newData.meta);
      }
    } catch (error) {
      console.error('Error loading more results:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Flexbox gap={24}>
      <div style={{ marginBottom: 16 }}>
        <Title level={4} style={{ marginBottom: 8 }}>
          Search Results
        </Title>
        <Text type="secondary">
          Found {meta.total} properties ({properties.length} shown)
        </Text>
      </div>

      <Row gutter={[24, 24]}>
        {properties.map((property) => (
          <Col key={property.id} lg={8} md={12} sm={24} xs={24}>
            <PropertyCard property={property} />
          </Col>
        ))}
      </Row>

      {meta.nextResultIndex && (
        <Flexbox align="center" justify="center" style={{ marginTop: 24 }}>
          <Button loading={loading} onClick={loadMoreResults} type="primary">
            Load More Results
          </Button>
        </Flexbox>
      )}
    </Flexbox>
  );
};

const MLSSearchPlugin = memo(() => {
  const [data, setData] = useState<PluginMessageData | undefined>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | undefined>();
  const { token } = useToken();

  useEffect(() => {
    console.log('MLSSearchPlugin: useEffect triggered, fetching message...');
    setLoading(true);
    setError(undefined);
    // Fetch data from LobeChat using the SDK
    fetchPluginMessage()
      .then((response: any) => {
        console.log('MLSSearchPlugin: fetchPluginMessage response received:', response);
        if (response?.error) {
          console.error('MLSSearchPlugin: API Error received:', response.error);
          setError(`API Error: ${response.error}`);
          setData(undefined);
        } else if (response) {
          console.log('MLSSearchPlugin: Setting data state:', response);
          setData(response);
        } else {
          console.warn('MLSSearchPlugin: Received empty data from plugin.');
          setError('Received empty data from plugin.');
          setData(undefined);
        }
        console.log('MLSSearchPlugin: Setting loading to false.');
        setLoading(false);
      })
      .catch((fetchError) => {
        console.error('MLSSearchPlugin: Error fetching plugin data via SDK:', fetchError);
        setError(`Failed to load plugin data: ${fetchError.message}`);
        setData(undefined);
        setLoading(false);
      });
  }, []);

  // Custom styles to override carousel dots (can be moved to CSS)
  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      .custom-carousel-dots li button {
        background: white !important;
        opacity: 0.6;
      }
      .custom-carousel-dots li.slick-active button {
        opacity: 1;
      }
    `;
    document.head.append(style);

    return () => {
      style.remove();
    };
  }, []);

  console.log('MLSSearchPlugin: Rendering component...', { data, error, loading });

  if (loading) {
    console.log('MLSSearchPlugin: Rendering loading state.');
    return (
      <div
        style={{ alignItems: 'center', display: 'flex', height: '200px', justifyContent: 'center' }}
      >
        <Spin size="large" tip="Loading properties..." />
      </div>
    );
  }

  if (error) {
    console.error('MLSSearchPlugin: Rendering error state:', error);
    return (
      <div style={{ color: 'red', padding: 24 }}>
        <Title level={4}>Error Loading Plugin Data</Title>
        <Paragraph>{error}</Paragraph>
        {data && (data as any).details && (
          <pre
            style={{
              background: token.colorFillTertiary,
              borderRadius: '8px',
              padding: '16px',
              whiteSpace: 'pre-wrap',
              wordBreak: 'break-all',
            }}
          >
            {JSON.stringify((data as any).details, undefined, 2)}
          </pre>
        )}
      </div>
    );
  }

  if (!data) {
    console.warn('MLSSearchPlugin: Rendering no data state.');
    return (
      <div style={{ padding: 24, textAlign: 'center' }}>
        <Title level={4}>No Data Available</Title>
        <Paragraph>Plugin did not return any data.</Paragraph>
      </div>
    );
  }

  // Determine if the data is a property detail or search results
  // Check for a unique field in PropertyDetails (e.g., 'schools') or check if data.data exists for search results
  const isPropertyDetail = data && 'schools' in data;
  const isSearchResults = data && 'data' in data && Array.isArray(data.data);

  console.log('MLSSearchPlugin: Data type detected:', { isPropertyDetail, isSearchResults });

  return (
    <Layout style={{ background: token.colorBgContainer, minHeight: '100%' }}>
      <Layout.Content style={{ padding: '24px' }}>
        {isPropertyDetail ? (
          <PropertyDetailsView property={data as PropertyDetails} />
        ) : isSearchResults ? (
          <SearchResults data={data as PropertySearchResults} />
        ) : (
          <div style={{ padding: 24, textAlign: 'center' }}>
            <Title level={4}>Unexpected Data Format</Title>
            <Paragraph>The plugin returned data in an unexpected format.</Paragraph>
            <pre
              style={{
                background: token.colorFillTertiary,
                borderRadius: '8px',
                padding: '16px',
                whiteSpace: 'pre-wrap',
                wordBreak: 'break-all',
              }}
            >
              {JSON.stringify(data, undefined, 2)}
            </pre>
          </div>
        )}
      </Layout.Content>
    </Layout>
  );
});

// Create the root element and render the App
const container = document.querySelector('#root');

if (container) {
  const root = ReactDOM.createRoot(container);
  root.render(
    <React.StrictMode>
      <MLSSearchPlugin />
    </React.StrictMode>,
  );
} else {
  console.error('Failed to find the root element. Could not mount the React app.');
}
