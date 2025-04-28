import { fetchPluginMessage } from '@lobehub/chat-plugin-sdk/client';
import {
  Avatar,
  Badge,
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

const { Title, Text, Paragraph } = Typography;
const { useToken } = theme;

// Helper function to transform API property data to our MLSProperty format
const transformToMLSProperty = (property: any): MLSProperty => {
  return {
    address: {
      city: property.address?.city || '',
      full: property.address?.full || '',
      neighborhood: property.address?.neighborhood || '',
      state: property.address?.state || '',
      street: property.address?.street || '',
      zipCode: property.address?.zipCode || '',
    },
    agent: {
      email: property.agent?.email || '',
      name: property.agent?.name || '',
      office: property.agent?.office || '',
      phone: property.agent?.phone || '',
    },
    id: property.id || '',
    listing: {
      daysOnMarket: property.listing?.daysOnMarket || 0,
      listedDate: property.listing?.listedDate || '',
      price: property.listing?.price || 0,
      remarks: property.listing?.remarks || '',
      status: property.listing?.status || 'Unknown',
    },
    listingId: property.listingId || '',
    media: {
      photos: property.media?.photos || [],
      virtualTour: property.media?.virtualTour,
    },
    property: {
      bathrooms: property.property?.bathrooms || 0,
      bedrooms: property.property?.bedrooms || 0,
      garageSpaces: property.property?.garageSpaces,
      livingArea: property.property?.livingArea || 0,
      lotSize: property.property?.lotSize,
      pool: !!property.property?.pool,
      propertyType: property.property?.propertyType || '',
      stories: property.property?.stories,
      view: property.property?.view,
      waterfront: !!property.property?.waterfront,
      yearBuilt: property.property?.yearBuilt || 0,
    },
  };
};

// Helper function to transform API property data to our PropertyDetails format
const transformToPropertyDetails = (property: any): PropertyDetails => {
  const baseProperty = transformToMLSProperty(property);

  return {
    ...baseProperty,
    address: {
      ...baseProperty.address,
      county: property.address?.county || '',
      latitude: property.address?.latitude || 0,
      longitude: property.address?.longitude || 0,
      unit: property.address?.unit,
    },
    agent: {
      ...baseProperty.agent,
      officeEmail: property.agent?.officeEmail || '',
      officePhone: property.agent?.officePhone || '',
    },
    listing: {
      ...baseProperty.listing,
      hoaFees: property.listing?.hoaFees || 0,
      hoaFrequency: property.listing?.hoaFrequency,
      mlsNumber: property.listing?.mlsNumber || property.listingId || '',
      pricePerSqFt: property.listing?.pricePerSqFt || 0,
      taxAnnualAmount: property.listing?.taxAnnualAmount || 0,
      taxAssessedValue: property.listing?.taxAssessedValue || 0,
      taxYear: property.listing?.taxYear || 0,
      virtualTourUrl: property.listing?.virtualTourUrl || property.media?.virtualTour,
    },
    property: {
      ...baseProperty.property,
      appliances: property.property?.appliances || [],
      construction: property.property?.construction || '',
      cooling: property.property?.cooling || '',
      features: property.property?.features || [],
      foundation: property.property?.foundation,
      halfBaths: property.property?.halfBaths || 0,
      heating: property.property?.heating || '',
      parkingSpaces: property.property?.parkingSpaces,
      roof: property.property?.roof,
      spa: !!property.property?.spa,
      subType: property.property?.subType || '',
    },
    schools: property.schools || [],
  };
};

// Define styles using antd-style (Sorted alphabetically)
const useStyles = createStyles(({ css, token }) => ({
  agentInfo: css`
    display: flex;
    align-items: center;
    gap: 8px;
  `,
  agentText: css`
    font-size: 12px;
    color: ${token.colorTextSecondary};
  `,
  cardBody: css`
    flex: 1;
    padding: 16px;
  `,
  cardContainer: css`
    display: flex;
    flex-direction: column;
    height: 100%;
    overflow: hidden;
    transition: all 0.3s;

    &:hover {
      transform: translateY(-2px);
      box-shadow: ${token.boxShadowTertiary};
    }
  `,
  cardsContainer: css`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 16px;
    padding: 0 16px;
  `,
  carouselDot: css`
    .slick-dots li button {
      background: white !important;
      opacity: 0.6;
    }
    .slick-dots li.slick-active button {
      opacity: 1;
    }
  `,
  description: css`
    -webkit-line-clamp: 2;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-bottom: 12px;
    color: ${token.colorTextSecondary};
  `,
  detailsContainer: css`
    max-width: 1200px;
    margin: 0 auto;
    padding: 16px;
  `,
  footer: css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 16px;
    border-top: 1px solid ${token.colorBorderSecondary};
    background: ${token.colorBgContainer};
  `,
  imageContainer: css`
    position: relative;
    height: 220px;
    overflow: hidden;
  `,
  priceTag: css`
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 8px 12px;
    background: rgba(0, 0, 0, 0.6);
    color: white;
    font-weight: bold;
  `,
  propertyStats: css`
    display: flex;
    justify-content: space-between;
    margin: 12px 0;
  `,
  resultHeader: css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;
    padding: 16px 0;
  `,
  statItem: css`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;
  `,
  statLabel: css`
    font-size: 12px;
    color: ${token.colorTextSecondary};
  `,
  statValue: css`
    font-size: 16px;
    font-weight: 500;
    color: ${token.colorTextHeading};
  `,
  statusBadge: css`
    position: absolute;
    top: 8px;
    right: 8px;
    z-index: 2;
  `,
  tagContainer: css`
    display: flex;
    gap: 6px;
    flex-wrap: wrap;
    margin-bottom: 12px;
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

const getStatusColor = (status: string): string => {
  switch (status) {
    case 'Active': {
      return 'green';
    }
    case 'Pending': {
      return 'orange';
    }
    case 'Sold': {
      return 'blue';
    }
    case 'Closed': {
      return 'blue';
    }
    default: {
      return 'default';
    }
  }
};

// Improved property card component
const PropertyCard = ({ property }: { property: MLSProperty }) => {
  const { styles } = useStyles();
  const { token } = useToken();

  return (
    <Card
      bodyStyle={{ padding: 0 }}
      className={styles.cardContainer}
      cover={
        <div className={styles.imageContainer}>
          {property.media.photos && property.media.photos.length > 0 ? (
            <Carousel
              autoplay
              className={styles.carouselDot}
              dots={{ className: 'custom-carousel-dots' }}
            >
              {property.media.photos.map((photo, index) => (
                <div key={index}>
                  <div
                    style={{
                      backgroundImage: `url(${photo})`,
                      backgroundPosition: 'center',
                      backgroundSize: 'cover',
                      height: 220,
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
                color: token.colorTextQuaternary,
                display: 'flex',
                height: 220,
                justifyContent: 'center',
              }}
            >
              No Image Available
            </div>
          )}
          <Badge.Ribbon
            className={styles.statusBadge}
            color={getStatusColor(property.listing.status)}
            text={property.listing.status}
          />
          <div className={styles.priceTag}>{formatCurrency(property.listing.price)}</div>
        </div>
      }
      hoverable
    >
      <div className={styles.cardBody}>
        <Title ellipsis level={5} style={{ marginBottom: 8, marginTop: 0 }}>
          {property.address.street || property.address.full}
        </Title>

        <Text style={{ display: 'block', marginBottom: 12 }} type="secondary">
          {property.address.city}, {property.address.state} {property.address.zipCode}
          {property.address.neighborhood && property.address.neighborhood !== 'N/A' && (
            <Tag color="blue" style={{ marginLeft: 8 }}>
              {property.address.neighborhood}
            </Tag>
          )}
        </Text>

        <div className={styles.propertyStats}>
          <div className={styles.statItem}>
            <span className={styles.statValue}>{property.property.bedrooms}</span>
            <span className={styles.statLabel}>Beds</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statValue}>
              {property.property.bathrooms % 1 === 0
                ? property.property.bathrooms
                : property.property.bathrooms.toFixed(1)}
            </span>
            <span className={styles.statLabel}>Baths</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statValue}>{formatNumber(property.property.livingArea)}</span>
            <span className={styles.statLabel}>Sq Ft</span>
          </div>
          {property.property.yearBuilt > 0 && (
            <div className={styles.statItem}>
              <span className={styles.statValue}>{property.property.yearBuilt}</span>
              <span className={styles.statLabel}>Year</span>
            </div>
          )}
        </div>

        <Paragraph className={styles.description}>{property.listing.remarks}</Paragraph>

        <div className={styles.tagContainer}>
          <Tag color="blue">{property.property.propertyType}</Tag>
          {property.property.waterfront && <Tag color="cyan">Waterfront</Tag>}
          {property.property.pool && <Tag color="geekblue">Pool</Tag>}
          {property.property.view && <Tag color="purple">View</Tag>}
        </div>
      </div>

      <div className={styles.footer}>
        <div className={styles.agentInfo}>
          {property.agent.name !== 'N/A' && (
            <Avatar size="small" style={{ backgroundColor: token.colorPrimary }}>
              {property.agent.name.charAt(0)}
            </Avatar>
          )}
          <span className={styles.agentText}>
            {property.agent.name === 'N/A' ? 'Agent Unknown' : property.agent.name}
          </span>
        </div>
        {property.listing.daysOnMarket > 0 && property.listing.daysOnMarket <= 7 && (
          <Tag color="orange">New</Tag>
        )}
      </div>
    </Card>
  );
};

// Property details view component
const PropertyDetailsView = ({ property }: { property: PropertyDetails }) => {
  const { styles } = useStyles();
  const { token } = useToken();

  return (
    <div className={styles.detailsContainer}>
      {property.media.photos && property.media.photos.length > 0 ? (
        <Carousel autoplay style={{ borderRadius: 8, marginBottom: 24, overflow: 'hidden' }}>
          {property.media.photos.map((photo, index) => (
            <div key={index}>
              <Image
                alt={`Property image ${index + 1}`}
                preview={false}
                src={photo}
                style={{
                  height: '400px',
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
            background: token.colorFillQuaternary,
            borderRadius: 8,
            color: token.colorTextQuaternary,
            display: 'flex',
            height: 400,
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
              color={getStatusColor(property.listing.status)}
              text={property.listing.status}
            />
            <Paragraph style={{ fontSize: 16, lineHeight: 1.6 }}>
              {property.listing.remarks}
            </Paragraph>
          </Col>
        </Row>
      </Card>

      {/* Additional property details sections */}
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
              {property.property.foundation !== undefined && (
                <Descriptions.Item label="Foundation">
                  {property.property.foundation}
                </Descriptions.Item>
              )}
            </Descriptions>
          </Card>
        </Col>
        <Col md={12} xs={24}>
          <Card bordered={false} title="Listing Details">
            <Descriptions column={1} style={{ marginBottom: 0 }}>
              <Descriptions.Item label="Status">{property.listing.status}</Descriptions.Item>
              <Descriptions.Item label="MLS #">{property.listing.mlsNumber}</Descriptions.Item>
              <Descriptions.Item label="Listed Date">
                {new Date(property.listing.listedDate).toLocaleDateString()}
              </Descriptions.Item>
              <Descriptions.Item label="Days on Market">
                {property.listing.daysOnMarket}
              </Descriptions.Item>
              {property.listing.taxAnnualAmount > 0 && (
                <Descriptions.Item label="Annual Tax">
                  {formatCurrency(property.listing.taxAnnualAmount)}
                </Descriptions.Item>
              )}
              {property.listing.taxYear > 0 && (
                <Descriptions.Item label="Tax Year">{property.listing.taxYear}</Descriptions.Item>
              )}
              {property.listing.taxAssessedValue > 0 && (
                <Descriptions.Item label="Tax Assessed Value">
                  {formatCurrency(property.listing.taxAssessedValue)}
                </Descriptions.Item>
              )}
              {property.listing.hoaFees > 0 && (
                <Descriptions.Item
                  label={`HOA${property.listing.hoaFrequency ? ' (' + property.listing.hoaFrequency + ')' : ''}`}
                >
                  {formatCurrency(property.listing.hoaFees)}
                </Descriptions.Item>
              )}
            </Descriptions>
          </Card>
        </Col>

        {property.schools && property.schools.length > 0 && (
          <Col xs={24}>
            <Card bordered={false} title="Nearby Schools">
              {property.schools.map((school, index) => (
                <div key={index}>
                  <Flex align="center" justify="space-between">
                    <div>
                      <Text strong>{school.name}</Text>
                      <br />
                      <Text type="secondary">{school.level}</Text>
                    </div>
                    <div>
                      <Rate defaultValue={school.rating} disabled />
                      <br />
                      <Text type="secondary">{school.distance.toFixed(1)} miles</Text>
                    </div>
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

// Search results component with improved layout
const SearchResults = ({ data }: { data: PropertySearchResults }) => {
  const { styles } = useStyles();

  return (
    <div style={{ padding: '0 16px' }}>
      <div className={styles.resultHeader}>
        <Title level={4} style={{ margin: 0 }}>
          {formatNumber(data.meta.total)} Properties Found
        </Title>
        {data.meta.count > 0 && (
          <Text type="secondary">
            Showing {data.meta.count} of {formatNumber(data.meta.total)}
          </Text>
        )}
      </div>

      {data.data && data.data.length > 0 ? (
        <div className={styles.cardsContainer}>
          {data.data.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      ) : (
        <Empty
          description="No properties match your criteria."
          image={Empty.PRESENTED_IMAGE_SIMPLE}
          style={{ margin: '48px 0' }}
        />
      )}
    </div>
  );
};

// Main plugin component
const MLSSearchPlugin = memo(() => {
  const [data, setData] = useState<PluginMessageData | undefined>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | undefined>();

  useEffect(() => {
    setLoading(true);
    setError(undefined);

    // Fetch data from LobeChat using the SDK
    fetchPluginMessage()
      .then((response: any) => {
        console.log('Plugin data received from SDK:', response);

        if (response?.error) {
          setError(`API Error: ${response.error}`);
          setData(undefined);
        } else if (response) {
          try {
            // Handle search results (has data array and meta info)
            if (response.data && Array.isArray(response.data) && response.meta) {
              setData({
                data: response.data.map((property: any) => transformToMLSProperty(property)),
                meta: response.meta,
              });
            }
            // Handle single property detail (has property fields but no data array)
            else if (response.address && response.property && response.listing) {
              // This is a single property detail
              setData(transformToPropertyDetails(response));
            }
            // For any other data structure, try to use as-is
            else {
              setData(response);
            }
          } catch (parseError) {
            console.error('Error parsing response:', parseError);
            setError(`Failed to parse response: ${parseError.message}`);
            setData(undefined);
          }
        } else {
          setError('Received empty data from plugin.');
          setData(undefined);
        }
        setLoading(false);
      })
      .catch((fetchError) => {
        console.error('Error fetching plugin data via SDK:', fetchError);
        setError(`Failed to load plugin data: ${fetchError.message}`);
        setData(undefined);
        setLoading(false);
      });
  }, []);

  // Custom styles to override carousel dots
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

  if (loading) {
    return (
      <div
        style={{
          alignItems: 'center',
          display: 'flex',
          justifyContent: 'center',
          padding: '64px 0',
        }}
      >
        <Spin size="large" tip="Loading properties..." />
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ padding: 24 }}>
        <Title level={4} type="danger">
          Error Loading Properties
        </Title>
        <Paragraph>{error}</Paragraph>
        {data && (data as any).details && (
          <pre
            style={{
              background: '#f0f0f0',
              borderRadius: '4px',
              padding: '8px',
              whiteSpace: 'pre-wrap',
              wordBreak: 'break-all',
            }}
          >
            {JSON.stringify((data as any).details, null, 2)}
          </pre>
        )}
      </div>
    );
  }

  if (!data) {
    return (
      <Empty
        description="No property data available"
        image={Empty.PRESENTED_IMAGE_SIMPLE}
        style={{ margin: '48px 0' }}
      />
    );
  }

  // Determine if the data is a property detail or search results
  const isPropertyDetail = data && 'schools' in data;
  const isSearchResults = data && 'data' in data && Array.isArray(data.data);

  return (
    <Layout style={{ background: 'transparent', minHeight: '100%' }}>
      <Layout.Content>
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
                background: '#f0f0f0',
                borderRadius: '4px',
                padding: '8px',
                whiteSpace: 'pre-wrap',
                wordBreak: 'break-all',
              }}
            >
              {JSON.stringify(data, null, 2)}
            </pre>
          </div>
        )}
      </Layout.Content>
    </Layout>
  );
});

export default MLSSearchPlugin;
