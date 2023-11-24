import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import "../assets/css/Header.css";

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const [isScrolled, setIsScrolled] = useState(false);

  const handleClick = () => {
    onClose();
  };

  useEffect(() => {
    const checkScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", checkScroll);
    return () => window.removeEventListener("scroll", checkScroll);
  }, []);

  return (
    <>
      <header className={isScrolled ? "scrolled" : null}>
        <i ref={btnRef} onClick={onOpen} className="fa-solid fa-bars"></i>

        <a href="#home" className="logo">
          PetGulp
        </a>

        <nav>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#shop">Shop</a>
            </li>
            <li>
              <a href="#collections">Collections</a>
            </li>
            <li>
              <a href="#blogs">Blogs</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>

        <div className="navbarIcons">
          <i className="fa-solid fa-magnifying-glass"></i>
          <i className="fa-regular fa-user"></i>
          <i className="fa-solid fa-cart-shopping"></i>
        </div>

        <Drawer
          isOpen={isOpen}
          placement="left"
          onClose={onClose}
          finalFocusRef={btnRef}
          size="md"
          className="sidebar"
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerHeader>
              <div className="logoNclose">
                <a href="#home" onClick={handleClick}>
                  PetGulp
                </a>
                <i
                  onClick={onClose}
                  className="fa-regular fa-circle-xmark cross"
                ></i>
              </div>
            </DrawerHeader>
            <DrawerBody>
              <ul className="sidebarList">
                <li>
                  <a href="#home" onClick={handleClick}>
                    Home
                  </a>
                </li>
                <li>
                  <a href="#shop" onClick={handleClick}>
                    Shop
                  </a>
                </li>
                <li>
                  <a href="#collections" onClick={handleClick}>
                    Collections
                  </a>
                </li>
                <li>
                  <a href="#blogs" onClick={handleClick}>
                    Blogs
                  </a>
                </li>
                <li>
                  <a href="#contact" onClick={handleClick}>
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#login" onClick={handleClick}>
                    Login
                  </a>
                </li>
              </ul>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </header>
    </>
  );
};

export default Header;
