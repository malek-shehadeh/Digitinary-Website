
import React from 'react';
import { Card, CardContent, Paper, Box, Typography } from '@mui/material';
import { 
  Business, 
  Description, 
  Info as InfoIcon  
} from '@mui/icons-material';
import SectionHeader from './SectionHeader';
import ResourceList from '../../ui/ResourceList';

const MainContent: React.FC = () => {
  return (
    <Card className="main-card">
      <CardContent>
        <Box className="content-container">
          {/* Main Title */}
          <Box>
            <SectionHeader 
              icon={Business} 
              title="Step 2: Business Requirements" 
              variant="h4" 
            />
          </Box>

          {/* Overview Section */}
          <Paper className="section-paper">
            <SectionHeader icon={Description} title="Overview" />
            <Typography className="section-content">
              A comprehensive description of the key business requirements and objectives for the project.
              These requirements form the foundation of our development process and ensure alignment with
              business goals and stakeholder expectations.
            </Typography>
          </Paper>

          {/* Resources Section */}
          <ResourceList 
            resources={[
              { title: 'Business1', url: 'https://www.investopedia.com/articles/personal-finance/090815/basics-business-development.asp#:~:text=Business%20development%20is%20the%20process%20of%20planning%20for,opportunities%2C%20and%20effective%20outreach%20channels%20to%20drive%20success' }, 
              { title: 'Business2', url: 'https://www.zendesk.com/blog/business-development' } 
            ]}
            sectionTitle="Resources"
          />

          {/* Additional Information Section */}
          <Paper className="info-section">
            <Typography className="info-text">
              <InfoIcon color="primary" fontSize="small" />
              For more detailed information about specific business requirements or to request access to additional
              documentation, please contact the business analysis team.
            </Typography>
          </Paper>
        </Box>
      </CardContent>
    </Card>
  );
};

export default MainContent;