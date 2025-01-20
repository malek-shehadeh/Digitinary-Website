import React from 'react';
import { 
  List, 
  ListItem, 
  ListItemIcon, 
  ListItemText, 
  Link 
} from '@mui/material';
import { Link as LinkIcon } from '@mui/icons-material';

interface Resource {
  title: string;
  url: string;
}

interface ResourceListProps {
  resources: Resource[];
  sectionTitle: string;
}

const ResourceList: React.FC<ResourceListProps> = ({ resources, sectionTitle }) => (
  <div>
    <h3>{sectionTitle}</h3>
    <List>
      {resources.map((resource, index) => (
        <ListItem key={index}>
          <ListItemIcon>
            <LinkIcon color="primary" />
          </ListItemIcon>
          <ListItemText
            primary={
              <Link href={resource.url} target="_blank">
                {resource.title}
              </Link>
            }
          />
        </ListItem>
      ))}
    </List>
  </div>
);

export default ResourceList;
