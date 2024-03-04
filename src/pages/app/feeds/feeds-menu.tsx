/* eslint-disable react/jsx-no-useless-fragment */
import { Link, NavLink } from 'react-router-dom';

// eslint-disable-next-line import/extensions
import AddBlackIcon from '@/assets/add.png';
import { MenuIcon } from '@/components/ui/icons/svg-icons';

export function FeedsMenu() {
  return (
    <nav className="flex min-w-full items-center justify-between overflow-auto bg-background px-4 py-8 md:w-full">
      <ul className="flex items-center justify-between gap-4">
        <li>
          <NavLink to="/app/home/feeds">
            {({ isActive }) => (
              <>
                {isActive ? (
                  <span className="text-xl font-semibold text-primary">
                    Posts
                  </span>
                ) : (
                  <span className="text-xl font-medium text-black">Posts</span>
                )}
              </>
            )}
          </NavLink>
        </li>
      </ul>
      <ul className="flex items-center gap-6">
        <li>
          <Link to="/app/home/add-post">
            <img
              src={AddBlackIcon}
              className="h-10 w-10 fill-black"
              alt="add icon"
            />
          </Link>
        </li>
        <li>
          <Link to="/app/account">
            <MenuIcon className="h-8 w-8" />
          </Link>
        </li>
      </ul>
    </nav>
  );
}
