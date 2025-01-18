//src/components/Arena/Architecture/MicroFrontend.tsx
import React from 'react';
import { Card, CardContent, Box } from '@mui/material';
import { Architecture, Article } from '@mui/icons-material';
import SectionHeader from './SectionHeader';
import SectionContent from './SectionContent';
import ResourcesList from './ResourcesList';

const MicroFrontend: React.FC = () => (
  <Card className="section-card">
    <CardContent>
      <Box className="section-container">
        {/* Title */}
        <Box>
          <SectionHeader 
            icon={Architecture} 
            title="Step 1: Architecture - Micro Frontend" 
            variant="h4" 
          />
        </Box>

        {/* Overview Section */}
        <SectionContent 
          icon={Article}
          title="Overview"
          content="A micro-frontend architecture enables independent teams to work on specific modules,
                  ensuring scalability and modularity. This approach allows for better management of
                  large-scale applications while maintaining code quality and team autonomy."
        />

        {/* Resources Section */}
        <ResourcesList 
          links={[
            { title: 'Micro Frontend Overview', url: '#' },
            { title: 'Detailed Architecture', url: '#' }
          ]}
        />

        {/* Structure Section */}
        <SectionContent 
          icon={Architecture}
          title="Structure"
        >
          <Box className="image-container">
            <img
              src="/api/placeholder/600/300"
              alt="Architecture Diagram"
              className="content-image"
            />
          </Box>
        </SectionContent>
      </Box>
    </CardContent>
  </Card>
);

export default MicroFrontend;