import { Flex, Box, Text, Avatar } from '@chakra-ui/react';

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      { showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Joaquim Alves</Text>
          <Text color="gray.300" fontSize="small">
            jaf.alves8@gmail.com
          </Text>
        </Box>
      ) }
      <Avatar size="md" name="Joaquim Alves" src="https://github.com/jaf88.png" />
    </Flex>
  );
}