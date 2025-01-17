// // import React, { useState } from "react";
// // import { Link, useLocation } from "react-router-dom";
// // import { AnimatePresence, motion } from "framer-motion";
// // import {
// //   LayoutDashboard,
// //   Dumbbell,
// //   ChevronLeft,
// //   ChevronRight,
// //   LucideIcon,
// // } from "lucide-react";

// // type MenuItem = {
// //   name: string;
// //   icon: LucideIcon;
// //   href: string;
// // };

// // type MenuGroup = {
// //   title: string;
// //   items: MenuItem[];
// // };

// // const MENU_ITEMS: MenuGroup[] = [
// //   {
// //     title: "Main",
// //     items: [
// //       { name: "Home", icon: LayoutDashboard, href: "/" },
// //       { name: "Frontend", icon: Dumbbell, href: "/Frontend" },
// //     ],
// //   },
// // ];

// // const Sidebar: React.FC = () => {
// //   const [isExpanded, setIsExpanded] = useState<boolean>(true);
// //   const location = useLocation();

// //   const sidebarVariants = {
// //     expanded: { width: "16rem" },
// //     collapsed: { width: "5rem" },
// //   };

// //   const MenuGroup: React.FC<MenuGroup> = ({ title, items }) => (
// //     <div className="mb-6">
// //       <AnimatePresence>
// //         {isExpanded && (
// //           <motion.h3
// //             initial={{ opacity: 0 }}
// //             animate={{ opacity: 0.6 }}
// //             exit={{ opacity: 0 }}
// //             className="px-4 text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2"
// //           >
// //             {title}
// //           </motion.h3>
// //         )}
// //       </AnimatePresence>
// //       <div className="space-y-1">
// //         {items.map((item) => {
// //           const isActive = location.pathname === item.href;
// //           return (
// //             <Link key={item.href} to={item.href}>
// //               <motion.div
// //                 className={`flex items-center px-3 py-2 rounded-lg transition-all duration-200 ${
// //                   isActive
// //                     ? "bg-[#444] text-white"
// //                     : "text-gray-400 hover:bg-[#333] hover:text-white"
// //                 }`}
// //                 whileHover={{ scale: 1.02 }}
// //                 whileTap={{ scale: 0.98 }}
// //               >
// //                 <item.icon
// //                   size={20}
// //                   className={`${isActive ? "text-[#3CB347]" : "text-gray-400"}`}
// //                 />
// //                 <AnimatePresence>
// //                   {isExpanded && (
// //                     <motion.span
// //                       initial={{ opacity: 0, x: -10 }}
// //                       animate={{ opacity: 1, x: 0 }}
// //                       exit={{ opacity: 0, x: -10 }}
// //                       className="ml-3 font-medium"
// //                     >
// //                       {item.name}
// //                     </motion.span>
// //                   )}
// //                 </AnimatePresence>
// //               </motion.div>
// //             </Link>
// //           );
// //         })}
// //       </div>
// //     </div>
// //   );

// //   return (
// //     <motion.div
// //       initial="expanded"
// //       animate={isExpanded ? "expanded" : "collapsed"}
// //       variants={sidebarVariants}
// //       className="relative min-h-screen border-r border-[#333] bg-black shadow-xl"
// //     >
// //       {/* Logo and Toggle */}
// //       <div className="p-4 flex items-center justify-between border-b border-[#333]">
// //         <div className="flex items-center gap-2">
// //           <div className="w-8 h-8 bg-[#3CB347] rounded-lg flex items-center justify-center shrink-0">
// //             <Dumbbell size={20} className="text-white" />
// //           </div>
// //           <AnimatePresence>
// //             {isExpanded && (
// //               <motion.span
// //                 initial={{ opacity: 0, x: -10 }}
// //                 animate={{ opacity: 1, x: 0 }}
// //                 exit={{ opacity: 0, x: -10 }}
// //                 className="font-bold text-white whitespace-nowrap"
// //               >
// //                 Digitinary{" "}
// //               </motion.span>
// //             )}
// //           </AnimatePresence>
// //         </div>
// //         <motion.button
// //           whileHover={{ scale: 1.1 }}
// //           whileTap={{ scale: 0.9 }}
// //           onClick={() => setIsExpanded(!isExpanded)}
// //           className="p-2 rounded-lg hover:bg-[#333] transition-colors"
// //         >
// //           {isExpanded ? (
// //             <ChevronLeft size={20} className="text-[#3CB347]" />
// //           ) : (
// //             <ChevronRight size={20} className="text-[#3CB347]" />
// //           )}
// //         </motion.button>
// //       </div>

// //       {/* Navigation */}
// //       <nav className="p-4 space-y-4">
// //         {MENU_ITEMS.map((group) => (
// //           <MenuGroup
// //             key={group.title}
// //             title={group.title}
// //             items={group.items}
// //           />
// //         ))}
// //       </nav>
// //     </motion.div>
// //   );
// // };

// // export default Sidebar;
// // /////
// // import React, { useState } from "react";
// // import { Link, useLocation } from "react-router-dom";
// // import { AnimatePresence, motion } from "framer-motion";
// // import {
// //   LayoutDashboard,
// //   Dumbbell,
// //   ChevronLeft,
// //   ChevronRight,
// //   LucideIcon,
// // } from "lucide-react";
// // import "./sidebar.scss"; // Import the SASS file

// // type MenuItem = {
// //   name: string;
// //   icon: LucideIcon;
// //   href: string;
// // };

// // type MenuGroup = {
// //   title: string;
// //   items: MenuItem[];
// // };

// // const MENU_ITEMS: MenuGroup[] = [
// //   {
// //     title: "Main",
// //     items: [
// //       { name: "Home", icon: LayoutDashboard, href: "/" },
// //       { name: "Frontend", icon: Dumbbell, href: "/Frontend" },
// //     ],
// //   },
// // ];

// // const Sidebar: React.FC = () => {
// //   const [isExpanded, setIsExpanded] = useState<boolean>(true);
// //   const location = useLocation();

// //   const sidebarVariants = {
// //     expanded: { width: "16rem" },
// //     collapsed: { width: "5rem" },
// //   };

// //   const MenuGroup: React.FC<MenuGroup> = ({ title, items }) => (
// //     <div className="menu-group">
// //       <AnimatePresence>
// //         {isExpanded && (
// //           <motion.h3
// //             initial={{ opacity: 0 }}
// //             animate={{ opacity: 0.6 }}
// //             exit={{ opacity: 0 }}
// //             className="menu-title"
// //           >
// //             {title}
// //           </motion.h3>
// //         )}
// //       </AnimatePresence>
// //       <div className="space-y-1">
// //         {items.map((item) => {
// //           const isActive = location.pathname === item.href;
// //           return (
// //             <Link key={item.href} to={item.href}>
// //               <motion.div
// //                 className={`menu-item ${isActive ? "active" : ""}`}
// //                 whileHover={{ scale: 1.02 }}
// //                 whileTap={{ scale: 0.98 }}
// //               >
// //                 <item.icon
// //                   size={20}
// //                   className={`icon ${isActive ? "active" : ""}`}
// //                 />
// //                 <AnimatePresence>
// //                   {isExpanded && (
// //                     <motion.span
// //                       initial={{ opacity: 0, x: -10 }}
// //                       animate={{ opacity: 1, x: 0 }}
// //                       exit={{ opacity: 0, x: -10 }}
// //                       className="item-name"
// //                     >
// //                       {item.name}
// //                     </motion.span>
// //                   )}
// //                 </AnimatePresence>
// //               </motion.div>
// //             </Link>
// //           );
// //         })}
// //       </div>
// //     </div>
// //   );

// //   return (
// //     <motion.div
// //       initial="expanded"
// //       animate={isExpanded ? "expanded" : "collapsed"}
// //       variants={sidebarVariants}
// //       className="sidebar"
// //     >
// //       {/* Logo and Toggle */}
// //       <div className="logo-toggle">
// //         <div className="logo">
// //           <div className="logo-icon"></div>
// //           <AnimatePresence>
// //             {isExpanded && (
// //               <motion.span
// //                 initial={{ opacity: 0, x: -10 }}
// //                 animate={{ opacity: 1, x: 0 }}
// //                 exit={{ opacity: 0, x: -10 }}
// //                 className="logo-text"
// //               ></motion.span>
// //             )}
// //           </AnimatePresence>
// //         </div>
// //         <motion.button
// //           whileHover={{ scale: 1.1 }}
// //           whileTap={{ scale: 0.9 }}
// //           onClick={() => setIsExpanded(!isExpanded)}
// //           className="toggle-button"
// //         >
// //           {isExpanded ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
// //         </motion.button>
// //       </div>

// //       {/* Navigation */}
// //       <nav className="navigation">
// //         {MENU_ITEMS.map((group) => (
// //           <MenuGroup
// //             key={group.title}
// //             title={group.title}
// //             items={group.items}
// //           />
// //         ))}
// //       </nav>
// //     </motion.div>
// //   );
// // };

// // export default Sidebar;
// /////
// import React, { useState } from "react";
// import { Link, useLocation } from "react-router-dom";
// import { AnimatePresence, motion } from "framer-motion";
// import {
//   LayoutDashboard,
//   Dumbbell,
//   ChevronLeft,
//   ChevronRight,
//   LucideIcon,
// } from "lucide-react";
// import "./sidebar.scss"; // Import the SASS file

// type MenuItem = {
//   name: string;
//   icon: LucideIcon;
//   href: string;
// };

// type MenuGroup = {
//   title: string;
//   items: MenuItem[];
// };

// const MENU_ITEMS: MenuGroup[] = [
//   {
//     title: "Main",
//     items: [
//       { name: "Home", icon: LayoutDashboard, href: "/" },
//       { name: "Frontend", icon: Dumbbell, href: "/Frontend" },
//     ],
//   },
// ];

// const Sidebar: React.FC = () => {
//   const [isExpanded, setIsExpanded] = useState<boolean>(true);
//   const location = useLocation();

//   const sidebarVariants = {
//     expanded: { width: "16rem" },
//     collapsed: { width: "5rem" },
//   };

//   const MenuGroup: React.FC<MenuGroup> = ({ title, items }) => (
//     <div className="menu-group">
//       <AnimatePresence>
//         {isExpanded && (
//           <motion.h3
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 0.6 }}
//             exit={{ opacity: 0 }}
//             className="menu-title"
//           >
//             {title}
//           </motion.h3>
//         )}
//       </AnimatePresence>
//       <div className="space-y-1">
//         {items.map((item) => {
//           const isActive = location.pathname === item.href;
//           return (
//             <Link key={item.href} to={item.href}>
//               <motion.div
//                 className={`menu-item ${isActive ? "active" : ""}`}
//                 whileHover={{ scale: 1.02 }}
//                 whileTap={{ scale: 0.98 }}
//               >
//                 <item.icon
//                   size={20}
//                   className={`icon ${isActive ? "active" : ""}`}
//                 />
//                 <AnimatePresence>
//                   {isExpanded && (
//                     <motion.span
//                       initial={{ opacity: 0, x: -10 }}
//                       animate={{ opacity: 1, x: 0 }}
//                       exit={{ opacity: 0, x: -10 }}
//                       className="item-name"
//                     >
//                       {item.name}
//                     </motion.span>
//                   )}
//                 </AnimatePresence>
//               </motion.div>
//             </Link>
//           );
//         })}
//       </div>
//     </div>
//   );

//   return (
//     <motion.div
//       initial="expanded"
//       animate={isExpanded ? "expanded" : "collapsed"}
//       variants={sidebarVariants}
//       className="sidebar"
//     >
//       {/* Logo */}
//       <div className="logo-toggle">
//         <div className="logo">
//           <div className="logo-icon">
//             {isExpanded ? (
//               <img src="/Digitinary-Logo.png" alt="Logo Open" />
//             ) : (
//               <img
//                 src="/digitinary_logo-removebg-preview.png"
//                 alt="Logo Closed"
//               />
//             )}
//           </div>
//           <AnimatePresence>
//             {isExpanded && (
//               <motion.span
//                 initial={{ opacity: 0, x: -10 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 exit={{ opacity: 0, x: -10 }}
//                 className="logo-text"
//               ></motion.span>
//             )}
//           </AnimatePresence>
//         </div>
//       </div>

//       {/* Navigation */}
//       <nav className="navigation">
//         {MENU_ITEMS.map((group) => (
//           <MenuGroup
//             key={group.title}
//             title={group.title}
//             items={group.items}
//           />
//         ))}
//       </nav>

//       {/* Toggle Button (Arrow) on the Right Side */}
//       <motion.button
//         whileHover={{ scale: 1.1 }}
//         whileTap={{ scale: 0.9 }}
//         onClick={() => setIsExpanded(!isExpanded)}
//         className="toggle-button"
//       >
//         {isExpanded ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
//       </motion.button>
//     </motion.div>
//   );
// };

// export default Sidebar;
///

// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { AnimatePresence, motion } from "framer-motion";
// import {
//   BarChart2,
//   Contact,
//   FileText,
//   ChevronLeft,
//   ChevronRight,
//   Settings,
//   ShoppingBag,
//   ShoppingCart,
//   User,
//   Users,
// } from "lucide-react";
// import "./sidebar.scss";

// interface SidebarItem {
//   name: string;
//   icon: React.ComponentType<any>;
//   color: string;
//   href: string;
// }

// const SIDEBAR_ITEMS: SidebarItem[] = [
//   { name: "Overview", icon: BarChart2, color: "#6366f1", href: "/" },
//   { name: "Products", icon: ShoppingBag, color: "#8B5CF6", href: "/products" },
//   { name: "Users", icon: User, color: "#EC4899", href: "/users" },
//   {
//     name: "Shop Owner Users",
//     icon: Users,
//     color: "#EC4899",
//     href: "/ShopOwner",
//   },
//   { name: "Contact", icon: Contact, color: "#10B981", href: "/Contact" },
//   { name: "Report", icon: FileText, color: "#10B981", href: "/Report" },
//   { name: "Orders", icon: ShoppingCart, color: "#F59E0B", href: "/orders" },
//   { name: "Settings", icon: Settings, color: "#6EE7B7", href: "/settings" },
// ];

// const Sidebar: React.FC = () => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(true);

//   // Image paths (assuming images are in the public folder)
//   const openSidebarImage = "/public/Digitinary-Logo.png";
//   const closedSidebarImage = "/public/digitinary_logo-removebg-preview.png";

//   return (
//     <motion.div
//       className={`sidebar ${isSidebarOpen ? "open" : "closed"}`}
//       animate={{ width: isSidebarOpen ? 256 : 80 }}
//     >
//       <div className="sidebar-content">
//         {/* Toggle Button */}
//         <motion.button
//           whileHover={{ scale: 1.1 }}
//           whileTap={{ scale: 0.9 }}
//           onClick={() => setIsSidebarOpen(!isSidebarOpen)}
//           className="toggle-button"
//         >
//           {isSidebarOpen ? (
//             <ChevronLeft size={24} /> // Arrow icon for open state
//           ) : (
//             <ChevronRight size={24} /> // Arrow icon for closed state
//           )}
//         </motion.button>

//         {/* Display the appropriate image based on sidebar state */}
//         <motion.div
//           className="sidebar-image"
//           initial={{ opacity: 0, scale: 0.8 }}
//           animate={{ opacity: 1, scale: 1 }}
//           exit={{ opacity: 0, scale: 0.8 }}
//           transition={{ duration: 0.2 }}
//         >
//           <motion.img
//             src={isSidebarOpen ? openSidebarImage : closedSidebarImage}
//             alt={isSidebarOpen ? "Open Sidebar" : "Closed Sidebar"}
//             animate={{
//               width: isSidebarOpen ? "100%" : "64px", // Adjust image size dynamically
//             }}
//             transition={{ duration: 0.2 }}
//           />
//         </motion.div>

//         <nav>
//           {SIDEBAR_ITEMS.map((item) => (
//             <Link key={item.href} to={item.href}>
//               <motion.div className="nav-item">
//                 <item.icon
//                   size={20}
//                   style={{ color: item.color }}
//                   className="icon"
//                 />
//                 <AnimatePresence>
//                   {isSidebarOpen && (
//                     <motion.span
//                       className="nav-text"
//                       initial={{ opacity: 0, width: 0 }}
//                       animate={{ opacity: 1, width: "auto" }}
//                       exit={{ opacity: 0, width: 0 }}
//                       transition={{ duration: 0.2, delay: 0.3 }}
//                     >
//                       {item.name}
//                     </motion.span>
//                   )}
//                 </AnimatePresence>
//               </motion.div>
//             </Link>
//           ))}
//         </nav>
//       </div>
//     </motion.div>
//   );
// };

// export default Sidebar;
//////////////////////////////////

// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import {
//   BarChart2,
//   Contact,
//   FileText,
//   ChevronLeft,
//   ChevronRight,
//   Settings,
//   ShoppingBag,
//   ShoppingCart,
//   User,
//   Users,
// } from "lucide-react";

// const SIDEBAR_ITEMS = [
//   { name: "Overview", icon: BarChart2, color: "#4068DF", href: "/" },
//   { name: "Products", icon: ShoppingBag, color: "#42c9c2", href: "/products" },
//   { name: "Users", icon: User, color: "#4068DF", href: "/users" },
//   {
//     name: "Shop Owner Users",
//     icon: Users,
//     color: "#42c9c2",
//     href: "/ShopOwner",
//   },
//   { name: "Contact", icon: Contact, color: "#4068DF", href: "/Contact" },
//   { name: "Report", icon: FileText, color: "#42c9c2", href: "/Report" },
//   { name: "Orders", icon: ShoppingCart, color: "#4068DF", href: "/orders" },
//   { name: "Settings", icon: Settings, color: "#42c9c2", href: "/settings" },
// ];

// const Sidebar = () => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(true);

//   return (
//     <div
//       className={`flex h-screen bg-white ${
//         isSidebarOpen ? "w-64" : "w-20"
//       } transition-all duration-300 ease-in-out relative`}
//     >
//       <div className="flex flex-col h-full border-r border-gray-200">
//         {/* Toggle Button */}
//         <button
//           onClick={() => setIsSidebarOpen(!isSidebarOpen)}
//           className="absolute -right-3 top-1/2 transform -translate-y-1/2 bg-white border-2 border-gray-200 rounded-full p-1 hover:scale-110 transition-transform duration-200"
//         >
//           {isSidebarOpen ? (
//             <ChevronLeft className="w-4 h-4 text-[#4068DF]" />
//           ) : (
//             <ChevronRight className="w-4 h-4 text-[#4068DF]" />
//           )}
//         </button>

//         {/* Logo Section */}
//         <div className="p-4">
//           <img
//             src={
//               isSidebarOpen
//                 ? "/public/Digitinary-Logo.png"
//                 : "/public/digitinary_logo-removebg-preview.png"
//             }
//             alt="Logo"
//             className={`transition-all duration-200 ${
//               isSidebarOpen ? "w-full" : "w-12"
//             }`}
//           />
//         </div>

//         {/* Navigation Items */}
//         <nav className="flex-1 px-4 mt-8">
//           {SIDEBAR_ITEMS.map((item, index) => (
//             <Link key={item.href} to={item.href}>
//               <div className="flex items-center px-4 py-3 mb-2 rounded-lg hover:bg-gray-50 transition-colors duration-200">
//                 <item.icon
//                   className={`w-5 h-5`}
//                   style={{ color: item.color }}
//                 />
//                 {isSidebarOpen && (
//                   <span
//                     className="ml-4 text-sm font-medium text-gray-700 whitespace-nowrap overflow-hidden transition-all duration-200"
//                     style={{ color: index % 2 === 0 ? "#4068DF" : "#42c9c2" }}
//                   >
//                     {item.name}
//                   </span>
//                 )}
//               </div>
//             </Link>
//           ))}
//         </nav>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;
///

// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import {
//   BarChart2,
//   Contact,
//   FileText,
//   ChevronLeft,
//   ChevronRight,
//   Settings,
//   ShoppingBag,
//   ShoppingCart,
//   User,
//   Users,
// } from "lucide-react";
// import "./sidebar.scss";

// const SIDEBAR_ITEMS = [
//   { name: "Overview", icon: BarChart2, color: "#4068DF", href: "/" },
//   { name: "Products", icon: ShoppingBag, color: "#42c9c2", href: "/products" },
//   { name: "Users", icon: User, color: "#4068DF", href: "/users" },
//   {
//     name: "Shop Owner Users",
//     icon: Users,
//     color: "#42c9c2",
//     href: "/ShopOwner",
//   },
//   { name: "Contact", icon: Contact, color: "#4068DF", href: "/Contact" },
//   { name: "Report", icon: FileText, color: "#42c9c2", href: "/Report" },
//   { name: "Orders", icon: ShoppingCart, color: "#4068DF", href: "/orders" },
//   { name: "Settings", icon: Settings, color: "#42c9c2", href: "/settings" },
// ];

// const Sidebar = () => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(true);

//   return (
//     <div className={`sidebar ${isSidebarOpen ? "open" : "closed"}`}>
//       <div className="sidebar-content">
//         {/* Toggle Button */}
//         <button
//           onClick={() => setIsSidebarOpen(!isSidebarOpen)}
//           className="absolute -right-3 top-1/2 transform -translate-y-1/2 bg-white border-2 border-gray-200 rounded-full p-1 hover:scale-110 transition-transform duration-200"
//         >
//           {isSidebarOpen ? (
//             <ChevronLeft className="w-4 h-4 text-[#4068DF]" />
//           ) : (
//             <ChevronRight className="w-4 h-4 text-[#4068DF]" />
//           )}
//         </button>

//         {/* Logo */}
//         <div className="sidebar-image">
//           <img
//             src={
//               isSidebarOpen
//                 ? "/public/Digitinary-Logo.png"
//                 : "/public/digitinary_logo-removebg-preview.png"
//             }
//             alt="Digitinary Logo"
//           />
//         </div>

//         {/* Navigation */}
//         <nav>
//           {SIDEBAR_ITEMS.map((item, index) => (
//             <Link key={item.href} to={item.href}>
//               <div className="nav-item">
//                 <item.icon
//                   size={20}
//                   style={{ color: item.color }}
//                   className="icon"
//                 />
//                 {isSidebarOpen && (
//                   <span className="nav-text" style={{ color: item.color }}>
//                     {item.name}
//                   </span>
//                 )}
//               </div>
//             </Link>
//           ))}
//         </nav>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;
///

// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import {
//   BarChart2,
//   Contact,
//   FileText,
//   ChevronLeft,
//   ChevronRight,
//   Settings,
//   ShoppingBag,
//   ShoppingCart,
//   User,
//   Users,
//   LucideIcon,
// } from "lucide-react";

// interface SidebarItem {
//   name: string;
//   icon: LucideIcon;
//   color: string;
//   href: string;
// }

// const SIDEBAR_ITEMS: SidebarItem[] = [
//   { name: "Overview", icon: BarChart2, color: "#4068DF", href: "/" },
//   { name: "Frontend", icon: ShoppingBag, color: "#42c9c2", href: "/frontend" },
//   { name: "Backend", icon: User, color: "#4068DF", href: "/backend" },
//   // {
//   //   name: "Shop Owner Users",
//   //   icon: Users,
//   //   color: "#42c9c2",
//   //   href: "/ShopOwner",
//   // },
//   // { name: "Contact", icon: Contact, color: "#4068DF", href: "/Contact" },
//   // { name: "Report", icon: FileText, color: "#42c9c2", href: "/Report" },
//   // { name: "Orders", icon: ShoppingCart, color: "#4068DF", href: "/orders" },
//   { name: "Settings", icon: Settings, color: "#42c9c2", href: "/settings" },
// ];

// const Sidebar: React.FC = () => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(true);

//   return (
//     <div
//       className={`flex h-screen bg-white ${
//         isSidebarOpen ? "w-64" : "w-20"
//       } transition-all duration-300 ease-in-out relative`}
//     >
//       <div className="flex flex-col h-full border-r border-gray-200">
//         <button
//           onClick={() => setIsSidebarOpen(!isSidebarOpen)}
//           className="absolute -right-3 top-1/2 transform -translate-y-1/2 bg-white border-2 border-gray-200 rounded-full p-1 hover:scale-110 transition-transform duration-200"
//         >
//           {isSidebarOpen ? (
//             <ChevronLeft className="w-4 h-4 text-[#4068DF]" />
//           ) : (
//             <ChevronRight className="w-4 h-4 text-[#4068DF]" />
//           )}
//         </button>

//         <div className="p-4">
//           <img
//             src={
//               isSidebarOpen
//                 ? "/public/Digitinary-Logo.png"
//                 : "/public/digitinary_logo-removebg-preview.png"
//             }
//             alt="Logo"
//             className={`transition-all duration-200 ${
//               isSidebarOpen ? "w-full" : "w-12"
//             }`}
//           />
//         </div>

//         <nav className="flex-1 px-4 mt-8">
//           {SIDEBAR_ITEMS.map((item: SidebarItem, index: number) => (
//             <Link key={item.href} to={item.href}>
//               <div className="flex items-center px-4 py-3 mb-2 rounded-lg hover:bg-gray-50 transition-colors duration-200">
//                 <item.icon
//                   className={`w-5 h-5`}
//                   style={{ color: item.color }}
//                 />
//                 {isSidebarOpen && (
//                   <span
//                     className="ml-4 text-sm font-medium text-gray-700 whitespace-nowrap overflow-hidden transition-all duration-200"
//                     style={{ color: index % 2 === 0 ? "#4068DF" : "#42c9c2" }}
//                   >
//                     {item.name}
//                   </span>
//                 )}
//               </div>
//             </Link>
//           ))}
//         </nav>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;
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
