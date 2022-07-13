import React, { useState, useContext } from "react";
import sublinks from "./data";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isSidebar, setIsSidebar] = useState(false);
  const [isSubMenu, setIsSubMenu] = useState(false);
  const [page, setPage] = useState({ page: "", links: [] });
  const [location, setLocation] = useState({});

  const openSidebar = () => {
    setIsSidebar(true);
  };

  const closeSidebar = () => {
    setIsSidebar(false);
  };

  const openSubmenu = (text, coordinates) => {
    const page = sublinks.find((link) => link.page === text);
    setPage(page);
    setLocation(coordinates);
    setIsSubMenu(true);
  };
  const closeSubmenu = () => {
    setIsSubMenu(false);
  };
  return (
    <AppContext.Provider
      value={{
        isSidebar,
        openSidebar,
        closeSidebar,
        isSubMenu,
        openSubmenu,
        closeSubmenu,
        page,
        location,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
