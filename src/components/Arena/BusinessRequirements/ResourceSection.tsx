//src/components/Arena/BusinessRequirements/ResourceSection.tsx
import React from 'react';
import { 
  Paper, 
  Typography, 
  List, 
  ListItem, 
  ListItemIcon, 
  ListItemText,
  Link
} from '@mui/material';
import { LibraryBooks, Link as LinkIcon } from '@mui/icons-material';
import SectionHeader from './SectionHeader';

interface ResourceLink {
  title: string;
  url: string;
}

interface ResourceSectionProps {
  links: ResourceLink[];
}

const ResourceSection: React.FC<ResourceSectionProps> = ({ links }) => (
  <Paper className="section-paper">
    <SectionHeader icon={LibraryBooks} title="Resources" />
    
    <Typography className="section-description">
      Refer to the following links for more detailed information about our business requirements:
    </Typography>
    
    <List className="resources-list">
      {links.map((link, index) => (
        <ListItem key={index}>
          <ListItemIcon>
            <LinkIcon color="primary" />
          </ListItemIcon>
          <ListItemText 
            primary={
              <Link href={link.url} className="resource-link">
                {link.title}
              </Link>
            }
          />
        </ListItem>
      ))}
    </List>
  </Paper>
);

export default ResourceSection;