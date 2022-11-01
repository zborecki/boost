import { NavigationProps } from '../../types/props';
import { NavigationLink, NavigationList } from './navigation.style';

const Navigation = (
  {
    data,
    style: { horizontal, gap, fontcolor },
    className
  }: NavigationProps
): JSX.Element => (
  <nav className={`${className}__navigation`}>
    <NavigationList
      className="navigation__list"
      gap={gap}
      horizontal={horizontal}
    >
      {
        data.map(({ label, link }) => (
          <li
            key={label}
            className="navigation__item"
          >
            <NavigationLink
              to={link}
              end
              fontcolor={fontcolor}
            >
              { label }
            </NavigationLink>
          </li>
        ))
      }
    </NavigationList>
  </nav>
);

export default Navigation;
