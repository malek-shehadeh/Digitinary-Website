
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  BarChart2,
  ChevronLeft,
  ChevronRight,
  Settings,
  ShoppingBag,
  User,
  ChevronDown,
  ChevronUp,
  LucideIcon,
  Sun,
  Moon,
} from "lucide-react";
import { useTheme } from '../../context/useTheme';
import "./Sidebar.scss";

interface SidebarItem {
  name: string;
  icon: LucideIcon;
  color: string;
  href: string;
  subItems?: { name: string; href: string; color: string }[];
}

const SIDEBAR_ITEMS: SidebarItem[] = [
  { name: "Overview", icon: BarChart2, color: "#4068DF", href: "/" },
  {
    name: "Frontend",
    icon: ShoppingBag,
    color: "#42c9c2",
    href: "/frontend",
    subItems: [
      { name: "D-Gate", href: "/frontend/DGatePage", color: "#4068DF" },
      { name: "Arena", href: "/frontend/arena", color: "#42c9c2" },
      { name: "KNET", href: "/frontend/knet", color: "#4068DF" },
    ],
  },
  { name: "Backend", icon: User, color: "#4068DF", href: "/backend" },
  { name: "Settings", icon: Settings, color: "#42c9c2", href: "/settings" },
];

interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onToggle }) => {
  const [expandedItem, setExpandedItem] = useState<string | null>(null);
  const { mode, toggleTheme } = useTheme();

  const toggleSubMenu = (itemName: string) => {
    setExpandedItem(expandedItem === itemName ? null : itemName);
  };

  // Determine the logo based on the theme mode
  const getLogo = () => {
    if (isOpen) {
      return mode === 'dark' ? "/public/Digitinary-white.png" : "/Digitinary-Logo.png";
    } else {
      return "/digitinary_logo-removebg-preview.png";
    }
  };

  return (
    <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
      <div className="sidebar-content">
        <button
          onClick={onToggle}
          className="toggle-button"
          aria-label="Toggle sidebar"
        >
          {isOpen ? (
            <ChevronLeft className="w-4 h-4" />
          ) : (
            <ChevronRight className="w-4 h-4" />
          )}
        </button>

        <div className="logo-container">
          <img
            src={getLogo()}
            alt="Logo"
            className="logo-image"
          />
        </div>

        <nav className="navigation">
          {SIDEBAR_ITEMS.map((item, index) => (
            <div key={item.href} className="nav-item-wrapper">
              {item.subItems ? (
                <div
                  onClick={() => toggleSubMenu(item.name)}
                  className="nav-item"
                >
                  <item.icon
                    className="item-icon"
                    style={{ color: item.color }}
                  />
                  {isOpen && (
                    <>
                      <span
                        className="item-text"
                        style={{
                          color: index % 2 === 0 ? "#4068DF" : "#42c9c2",
                        }}
                      >
                        {item.name}
                      </span>
                      <div className="arrow-icon">
                        {expandedItem === item.name ? (
                          <ChevronUp style={{ color: item.color }} />
                        ) : (
                          <ChevronDown style={{ color: item.color }} />
                        )}
                      </div>
                    </>
                  )}
                </div>
              ) : (
                <Link to={item.href} className="nav-item">
                  <item.icon
                    className="item-icon"
                    style={{ color: item.color }}
                  />
                  {isOpen && (
                    <span
                      className="item-text"
                      style={{
                        color: index % 2 === 0 ? "#4068DF" : "#42c9c2",
                      }}
                    >
                      {item.name}
                    </span>
                  )}
                </Link>
              )}

              {isOpen && item.subItems && expandedItem === item.name && (
                <div className="subitems">
                  {item.subItems.map((subItem) => (
                    <Link
                      key={subItem.href}
                      to={subItem.href}
                      className="subitem"
                      style={{ color: subItem.color }}
                    >
                      {subItem.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          <div className="nav-item-wrapper">
            <button onClick={toggleTheme} className="nav-item">
              {mode === 'dark' ? (
                <Sun 
                  className="item-icon"
                  style={{ color: "#42c9c2" }}
                />
              ) : (
                <Moon 
                  className="item-icon"
                  style={{ color: "#42c9c2" }}
                />
              )}
              {isOpen && (
                <span
                  className="item-text"
                  style={{ color: "#42c9c2" }}
                >
                  {mode === 'dark' ? 'Light Mode' : 'Dark Mode'}
                </span>
              )}
            </button>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;