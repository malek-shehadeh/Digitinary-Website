import React from 'react';
import { Card, CardContent, Box } from '@mui/material';
import { LibraryBooks, Article } from '@mui/icons-material';
import SectionHeader from './SectionHeader';
import SectionContent from './SectionContent';
import ResourcesList from './ResourcesList';

const DigitinaryUI: React.FC = () => (
  <Card className="section-card">
    <CardContent>
      <Box className="section-container">
        {/* Title */}
        <Box>
          <SectionHeader 
            icon={LibraryBooks} 
            title="Digitinary-UI" 
            variant="h4" 
          />
        </Box>

        {/* Overview Section */}
        <SectionContent 
          icon={Article}
          title="Overview"
          content="A comprehensive UI library designed to maintain consistency across all modules with
                  reusable components and styling. This ensures a unified look and feel across the
                  entire application while promoting code reuse and maintainability."
        />

        {/* Resources Section */}
        <ResourcesList 
          links={[
            { title: 'Digitinary-UI Documentation', url: '#' }
          ]}
        />
      </Box>
    </CardContent>
  </Card>
);

export default DigitinaryUI;