
export const environments = [
    {
      name: 'Develop',
      description: 'Used for ongoing development.',
      icon: 'DeveloperMode',
      color: {
        light: '#4caf50',
        dark: '#81c784',
      },
    },
    {
      name: 'Test',
      description: 'For the QA team to verify changes.',
      icon: 'BugReport',
      color: {
        light: '#2196f3',
        dark: '#64b5f6',
      },
    },
    {
      name: 'Staging (STG)',
      description: 'Pre-production environment for client reviews.',
      icon: 'Visibility',
      color: {
        light: '#ff9800',
        dark: '#ffb74d',
      },
    },
  ];
  
  export const deploymentSteps = [
    {
      label: 'Deploy to Develop Environment',
      description: 'Deploy changes to the Develop environment and verify functionality.',
    },
    {
      label: 'Move to Test Environment',
      description: 'Once verified, move the changes to the Test environment for QA validation.',
    },
    {
      label: 'Prepare for Staging',
      description: 'After successful testing, mark the tickets as Ready for Test and prepare for deployment to STG.',
    },
  ];
  