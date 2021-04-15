import React from "react";
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  Stack,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, AddIcon } from "@chakra-ui/icons";
import { ColorModeSwitch } from "../ColorModeSwitch";
import { Logomark } from "../Logomark";

const Links = ["Dashboard", "Projects", "Team"];

const NavLink: React.FC = ({ children }) => (
  <Button variant="ghost" size="sm" as={Link} href={"#"}>
    {children}
  </Button>
);

export type HeaderProps = {};

export const Header: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: !isOpen ? "none" : "inherit" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={3} alignItems={"center"}>
            <Box>
              <Logomark color="blue" w={8} h={8} />
            </Box>
            <HStack
              as={"nav"}
              spacing={2}
              display={{ base: "none", md: "flex" }}
            >
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={"center"}>
            <Button variant="outline" size={"sm"} mr={4} leftIcon={<AddIcon />}>
              Action
            </Button>
            <Menu>
              <MenuButton
                as={Button}
                size="sm"
                height={16}
                width={16}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
              >
                <Avatar
                  size={"sm"}
                  src={
                    "https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                  }
                />
              </MenuButton>
              <MenuList>
                <MenuItem>Link 1</MenuItem>
                <MenuItem>Link 2</MenuItem>
                <MenuDivider />
                <MenuItem>Link 3</MenuItem>
              </MenuList>
              <ColorModeSwitch />
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>

      <Box p={4}>Main Content Here</Box>
    </>
  );
};
