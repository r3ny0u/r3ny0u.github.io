// SidebarToggle.js
import React from 'react';
import { IconButton } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';

const SidebarToggle = ({ onToggle }) => {
  return (
    <IconButton
      display={{ base: 'block', md: 'none' }}
      icon={<HamburgerIcon />}
      onClick={onToggle}
      size="md"
      aria-label="Toggle sidebar"
    />
  );
};

export default SidebarToggle;
