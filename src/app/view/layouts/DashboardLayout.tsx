import { FC, useMemo, useState } from 'react';
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from 'react-icons/md';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { useAuth } from 'src/app/providers';

import logo from '../../../assets/images/logo.png';
import { RoutesConfig } from '../../../config';
import { Avatar } from '../common';

const DashboardLayout: FC = () => {
  const { pathname } = useLocation();

  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [expandedIndex, setExpandedIndex] = useState<Array<number>>([]);

  const { userData, logout } = useAuth();

  const currentPath = useMemo(() => {
    const paths = pathname.split('/').filter((item) => item !== '');
    if (paths.length === 0) return undefined;
    return '/' + paths[0];
  }, [pathname]);

  const handleLogout = () => {
    logout();
  };

  const toggleExpand = (index: number) => {
    if (expandedIndex.includes(index)) {
      setExpandedIndex(expandedIndex.filter((i) => i !== index));
    } else {
      setExpandedIndex([...expandedIndex, index]);
    }
  };

  const isExpanded = (index: number) => {
    return expandedIndex.includes(index);
  };

  return (
    <>
      <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-20">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start">
              <Link to="" className="flex ml-2 md:mr-24">
                <img src={logo} className="h-8 mr-3" alt="App Logo" />
              </Link>
            </div>
            <div className="flex items-center">
              <div className="flex items-center ml-3">
                <div>
                  <Avatar
                    fullName={userData?.fullName}
                    size={8}
                    onClick={() => setUserMenuOpen(!userMenuOpen)}
                  />
                </div>

                {userMenuOpen && (
                  <div className="z-50 my-4 absolute right-1 top-10 block text-base list-none bg-white divide-y divide-gray-100 rounded shadow">
                    <div className="px-4 py-3">
                      <p className="text-sm text-gray-900">
                        {userData?.fullName}
                      </p>
                      <p className="text-sm font-medium text-gray-500 truncate">
                        {userData?.team?.name}
                      </p>
                      <p className="text-sm text-gray-500 truncate">
                        {userData?.company?.name}
                      </p>
                    </div>
                    <ul className="py-1">
                      <li>
                        <Link
                          to=""
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          Dashboard
                        </Link>
                      </li>

                      <li>
                        <Link
                          to=""
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 "
                        >
                          Settings
                        </Link>
                      </li>

                      <li>
                        <div
                          onClick={handleLogout}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                        >
                          Log out
                        </div>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>

      <aside
        id="logo-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 pb-4 overflow-y-auto bg-white">
          <ul className="space-y-2 font-medium">
            {RoutesConfig.appRoutes.menuRoutes.map((route, index) =>
              route.children ? (
                <li key={index}>
                  <div className="flex items-center justify-between p-2 text-gray-900 rounded-lg group">
                    {route.Icon && (
                      <route.Icon className="w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900" />
                    )}

                    <span className="ml-3">{route.title}</span>
                    <button
                      onClick={() => toggleExpand(index)}
                      className="ml-auto"
                    >
                      {isExpanded(index) ? (
                        <MdOutlineKeyboardArrowUp className="w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900" />
                      ) : (
                        <MdOutlineKeyboardArrowDown className="w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900" />
                      )}
                    </button>
                  </div>

                  {isExpanded(index) && (
                    <ul className="pl-4 space-y-2">
                      {route.children.map((child, i) => (
                        <li key={i}>
                          <Link
                            to={child.path ?? ''}
                            className={`flex items-center p-2 text-gray-900 rounded-lg ${
                              currentPath === child.path
                                ? 'bg-primary-100'
                                : 'hover:bg-gray-100'
                            } group`}
                          >
                            {child.Icon && (
                              <child.Icon className="w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900" />
                            )}

                            <span className="ml-3">{child.title}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ) : (
                <li key={index}>
                  <Link
                    to={route.path ?? ''}
                    className={`flex items-center p-2 text-gray-900 rounded-lg ${
                      currentPath === route.path
                        ? 'bg-primary-100'
                        : 'hover:bg-gray-100'
                    } group`}
                  >
                    {route.Icon && (
                      <route.Icon className="w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900" />
                    )}

                    <span className="ml-3">{route.title}</span>
                  </Link>
                </li>
              )
            )}
          </ul>
        </div>
      </aside>

      <div className="p-4 sm:ml-64">
        <div className="p-4 mt-14">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
