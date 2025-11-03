'use client'
import { menu } from "motion/react-client";
import React, { ReactNode } from "react";

type MenuOpenContextType = {
  menuOpen: boolean;
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const MenuOpenContext = React.createContext<MenuOpenContextType | undefined>(undefined);

type Props = {
  children: ReactNode;
}

export default function MenuOpenProvider({children}: Props) {
  
  const [menuOpen, setMenuOpen] = React.useState(false);
  
  return(
    <MenuOpenContext.Provider value={{menuOpen, setMenuOpen}} >
      {children}
    </MenuOpenContext.Provider>
  )
}