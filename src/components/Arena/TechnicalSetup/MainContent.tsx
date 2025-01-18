//src/components/Arena/TechnicalSetup/MainContent.tsx
import React from 'react';
import { Card, CardContent, Paper, Box, Typography, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { Code, Description, Storage, GitHub, Build, Architecture } from '@mui/icons-material';
import SectionHeader from './SectionHeader';
import RepositoryList from './RepositoryList';
import { requiredRepos, optionalRepos, libraries } from './data';

const MainContent: React.FC = () => {
  return (
    <Card className="main-card">
      <CardContent>
        <Box className="content-container">
          {/* Main Title */}
          <Box>
            <SectionHeader 
              icon={Code} 
              title="Step 3: Technical Setup" 
              variant="h4" 
            />
          </Box>

          {/* Overview Section */}
          <Paper className="section-paper">
            <SectionHeader icon={Description} title="Overview" />
            <Typography className="section-content">
              This section outlines the technical requirements and setup process for the project.
              Follow these instructions carefully to ensure a proper development environment setup.
            </Typography>
          </Paper>

          {/* Required Repositories Section */}
          <RepositoryList
            title="Required Repositories"
            icon={GitHub}
            repositories={requiredRepos}
            type="required"
          />

          {/* Optional Repositories Section */}
          <RepositoryList
            title="Optional Repositories"
            icon={Storage}
            repositories={optionalRepos}
            type="optional"
            description="Install based on the module you need:"
          />

          {/* Libraries Section */}
          <Paper className="section-paper">
            <SectionHeader icon={Build} title="Libraries and Tools" />
            <List className="library-list">
              {libraries.map((lib) => (
                <ListItem key={lib.name}>
                  <ListItemIcon>
                    <Architecture color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <Typography className="library-name">
                        {lib.name}
                      </Typography>
                    }
                    secondary={
                      <Typography className="library-description">
                        {lib.description}
                      </Typography>
                    }
                  />
                </ListItem>
              ))}
            </List>
          </Paper>
        </Box>
      </CardContent>
    </Card>
  );
};

export default MainContent;