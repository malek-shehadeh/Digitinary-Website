// import React from 'react';
// import { Card, CardContent, Paper, Box, Typography } from '@mui/material';
// import { 
//   Business, 
//   Description, 
//   Info as InfoIcon  
// } from '@mui/icons-material';
// import SectionHeader from './SectionHeader';
// import ResourceSection from './ResourceSection';

// const MainContent: React.FC = () => {
//   const resourceLinks = [
//     { title: 'Business Docs Link 1', url: '#' },
//     { title: 'Business Docs Link 2', url: '#' },
//   ];

//   return (
//     <Card className="main-card">
//       <CardContent>
//         <Box className="content-container">
//           {/* Main Title */}
//           <Box>
//             <SectionHeader 
//               icon={Business} 
//               title="Step 2: Business Requirements" 
//               variant="h4" 
//             />
//           </Box>

//           {/* Overview Section */}
//           <Paper className="section-paper">
//             <SectionHeader icon={Description} title="Overview" />
//             <Typography className="section-content">
//               A comprehensive description of the key business requirements and objectives for the project.
//               These requirements form the foundation of our development process and ensure alignment with
//               business goals and stakeholder expectations.
//             </Typography>
//           </Paper>

//           {/* Resources Section */}
//           <ResourceSection links={resourceLinks} />

//           {/* Additional Information Section */}
//           <Paper className="info-section">
//             <Typography className="info-text">
//               <InfoIcon color="primary" fontSize="small" />
//               For more detailed information about specific business requirements or to request access to additional
//               documentation, please contact the business analysis team.
//             </Typography>
//           </Paper>
//         </Box>
//       </CardContent>
//     </Card>
//   );
// };

// export default MainContent;



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
  const resourceLinks = [
    { title: 'Business Docs Link 1', url: '#' },
    { title: 'Business Docs Link 2', url: '#' },
  ];

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
            resources={resourceLinks} 
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

