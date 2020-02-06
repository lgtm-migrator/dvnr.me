import React from 'react';
import {
  Box,
  Flex,
  Heading,
  IconButton,
  useColorMode,
  Link as ChLink,
  DarkMode
} from '@chakra-ui/core';
import Link from 'next/link';

const Header = (): JSX.Element => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex align="center" justify="space-between" my="15px">
      <Box>
        <Heading style={{ fontWeight: 1000, fontSize: '1.8em' }}>
          <Link href="/">
            <a href="/">devnur</a>
          </Link>
        </Heading>
        <Heading size="sm" style={{ fontWeight: 300 }}>
          inspirations by{' '}
          <Link href="/about">
            <ChLink
              href="/about"
              style={{ fontWeight: 400, textDecoration: 'underline' }}
              color="teal.500"
            >
              Nurseiit A.
            </ChLink>
          </Link>
        </Heading>
      </Box>
      <DarkMode>
        <IconButton
          aria-label="Toggle color mode"
          icon={colorMode === 'light' ? 'moon' : 'sun'}
          onClick={toggleColorMode}
        />
      </DarkMode>
    </Flex>
  );
};

const Footer = (): JSX.Element => (
  <Flex align="center" justify="space-between" my="15px">
    <Box>
      <ChLink
        style={{ fontWeight: 400, textDecoration: 'underline' }}
        color="teal.500"
        href="mailto:nurs@unist.ac.kr"
      >
        mail
      </ChLink>{' '}
      &bull;{' '}
      <ChLink
        style={{ fontWeight: 400, textDecoration: 'underline' }}
        color="teal.500"
        href="https://www.linkedin.com/in/nurseiit"
      >
        linkedin
      </ChLink>{' '}
      &bull;{' '}
      <ChLink
        style={{ fontWeight: 400, textDecoration: 'underline' }}
        color="teal.500"
        href="https://github.com/nurseiit"
      >
        github
      </ChLink>
    </Box>
    <Box>
      <ChLink
        style={{ fontWeight: 400, textDecoration: 'underline' }}
        color="teal.500"
        href="https://github.com/nurseiit/inspire"
      >
        edit this page
      </ChLink>
    </Box>
  </Flex>
);

interface Props {
  children: JSX.Element | string | null;
}

const Layout = ({ children }: Props): JSX.Element => (
  <Box mx="auto" maxW="660px">
    <Box mx="20px">
      <Header />
      {children}
      <Footer />
    </Box>
  </Box>
);

export default Layout;
