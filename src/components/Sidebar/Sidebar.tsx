/////
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
} from "lucide-react";

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

const Sidebar: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(true);
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  const toggleSubMenu = (itemName: string) => {
    setExpandedItem(expandedItem === itemName ? null : itemName);
  };

  return (
    <div
      className={`flex h-screen bg-white ${
        isSidebarOpen ? "w-64" : "w-20"
      } transition-all duration-300 ease-in-out relative`}
    >
      <div className="flex flex-col h-full border-r border-gray-200">
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="absolute -right-3 top-1/2 transform -translate-y-1/2 bg-white border-2 border-gray-200 rounded-full p-1 hover:scale-110 transition-transform duration-200"
        >
          {isSidebarOpen ? (
            <ChevronLeft className="w-4 h-4 text-[#4068DF]" />
          ) : (
            <ChevronRight className="w-4 h-4 text-[#4068DF]" />
          )}
        </button>

        <div className="p-4">
          <img
            src={
              isSidebarOpen
                ? "/public/Digitinary-Logo.png"
                : "/public/digitinary_logo-removebg-preview.png"
            }
            alt="Logo"
            className={`transition-all duration-200 ${
              isSidebarOpen ? "w-full" : "w-12"
            }`}
          />
        </div>

        <nav className="flex-1 px-4 mt-8">
          {SIDEBAR_ITEMS.map((item: SidebarItem, index: number) => (
            <div key={item.href}>
              {item.subItems ? (
                <div
                  onClick={() => toggleSubMenu(item.name)}
                  className="flex items-center px-4 py-3 mb-2 rounded-lg hover:bg-gray-50 transition-colors duration-200 cursor-pointer"
                >
                  <item.icon
                    className="w-5 h-5"
                    style={{ color: item.color }}
                  />
                  {isSidebarOpen && (
                    <>
                      <span
                        className="ml-4 text-sm font-medium text-gray-700 whitespace-nowrap overflow-hidden transition-all duration-200"
                        style={{
                          color: index % 2 === 0 ? "#4068DF" : "#42c9c2",
                        }}
                      >
                        {item.name}
                      </span>
                      <div className="ml-auto">
                        {expandedItem === item.name ? (
                          <ChevronUp
                            className="w-4 h-4"
                            style={{ color: item.color }}
                          />
                        ) : (
                          <ChevronDown
                            className="w-4 h-4"
                            style={{ color: item.color }}
                          />
                        )}
                      </div>
                    </>
                  )}
                </div>
              ) : (
                // Render as link if it doesn't have subitems
                <Link to={item.href}>
                  <div className="flex items-center px-4 py-3 mb-2 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                    <item.icon
                      className="w-5 h-5"
                      style={{ color: item.color }}
                    />
                    {isSidebarOpen && (
                      <span
                        className="ml-4 text-sm font-medium text-gray-700 whitespace-nowrap overflow-hidden transition-all duration-200"
                        style={{
                          color: index % 2 === 0 ? "#4068DF" : "#42c9c2",
                        }}
                      >
                        {item.name}
                      </span>
                    )}
                  </div>
                </Link>
              )}

              {isSidebarOpen && item.subItems && expandedItem === item.name && (
                <div className="ml-9 mb-2">
                  {item.subItems.map((subItem) => (
                    <Link
                      key={subItem.href}
                      to={subItem.href}
                      className="block py-2 px-4 text-sm hover:bg-gray-50 rounded-lg transition-colors duration-200"
                      style={{ color: subItem.color }}
                    >
                      {subItem.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
