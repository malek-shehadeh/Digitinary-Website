//src/components/Arena/Architecture/ResourcesList.tsx
import React from 'react';
import { 
  List, 
  ListItem, 
  ListItemIcon, 
  ListItemText, 
  Link 
} from '@mui/material';
import { LibraryBooks, Link as LinkIcon } from '@mui/icons-material';
import SectionContent from './SectionContent';

interface ResourcesListProps {
  links: Array<{
    title: string;
    url: string;
  }>;
}

const ResourcesList: React.FC<ResourcesListProps> = ({ links }) => (
  <SectionContent icon={LibraryBooks} title="Resources">
    <List className="resources-list">
      {links.map((link, index) => (
        <ListItem key={index}>
          <ListItemIcon>
            <LinkIcon color="primary" />
          </ListItemIcon>
          <ListItemText
            primary={
              <Link className="resource-link">
                {link.title}
              </Link>
            }
          />
        </ListItem>
      ))}
    </List>
  </SectionContent>
);

export default ResourcesList;