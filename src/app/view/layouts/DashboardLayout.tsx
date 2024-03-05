import { FC, useMemo, useState } from 'react';
import { useAuth } from 'react-auth-utils';
import { Link, Outlet, useLocation } from 'react-router-dom';

import logo from '../../../assets/images/logo.png';
import { RoutesConfig } from '../../../config';
import { User } from '../../../data';
import { Avatar } from '../common/Avatar';

const DashboardLayout: FC = () => {
  const { pathname } = useLocation();

  const [userMenuOpen, setUserMenuOpen] = useState(false);

  const { user, signOut } = useAuth<User>();

  const currentPath = useMemo(() => {
    const pathName = pathname.split('/').filter((item) => item !== '');
    return pathName[0];
  }, [pathname]);

  const handleLogout = () => {
    signOut();
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
                    fullName={user?.fullName}
                    size={8}
                    onClick={() => setUserMenuOpen(!userMenuOpen)}
                  />
                </div>

                {userMenuOpen && (
                  <div className="z-50 my-4 absolute right-1 top-10 block text-base list-none bg-white divide-y divide-gray-100 rounded shadow">
                    <div className="px-4 py-3">
                      <p className="text-sm text-gray-900">{user?.fullName}</p>
                      <p className="text-sm font-medium text-gray-500 truncate">
                        {user?.team?.name}
                      </p>
                      <p className="text-sm text-gray-500 truncate">
                        {user?.company?.name}
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
            {RoutesConfig.appRoutes.menuRoutes.map((route, index) => (
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
            ))}
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
