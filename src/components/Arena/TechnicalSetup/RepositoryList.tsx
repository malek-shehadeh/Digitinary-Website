import React from 'react';
import {
  Paper,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Box,
  Chip,
} from '@mui/material';
import {
  CheckCircle,
  RadioButtonUnchecked,
} from '@mui/icons-material';
import SectionHeader from './SectionHeader';
import { SvgIconComponent } from '@mui/icons-material'; 

interface Repository {
  name: string;
  description: string;
}

interface RepositoryListProps {
  title: string;
  icon: SvgIconComponent; 
  repositories: Repository[];
  type: 'required' | 'optional';
  description?: string;
}

const RepositoryList: React.FC<RepositoryListProps> = ({
  title,
  icon,
  repositories,
  type,
  description,
}) => (
  <Paper className="section-paper">
    <SectionHeader icon={icon} title={title} />
    
    {description && (
      <Typography className="section-description">
        {description}
      </Typography>
    )}
    
    <List className="repository-list">
      {repositories.map((repo) => (
        <ListItem key={repo.name}>
          <ListItemIcon>
            {type === 'required' ? (
              <CheckCircle color="success" />
            ) : (
              <RadioButtonUnchecked color="primary" />
            )}
          </ListItemIcon>
          <ListItemText
            primary={
              <Box className="repository-header">
                <Typography className="repository-name">
                  {repo.name}
                </Typography>
                <Chip 
                  label={type === 'required' ? 'Required' : 'Optional'}
                  size="small"
                  variant={type === 'required' ? 'filled' : 'outlined'}
                  color="primary"
                  className={`repository-chip ${type}`}
                />
              </Box>
            }
            secondary={
              <Typography className="repository-description">
                {repo.description}
              </Typography>
            }
          />
        </ListItem>
      ))}
    </List>
  </Paper>
);

export default RepositoryList;