import Link from 'next/Link';
import navStyles from '../styles/Nav.module.css';

const Nav = () => {
  return ( 
    <nav className={navStyles.nav}>
      <div className={navStyles.div}>
        <ul>
          <li>
            <Link href='/'>Team</Link>
          </li>
          <li>
            <Link href='/'>Resource</Link>
          </li>
          <li>
            <Link href='/'>Ranking</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
 
export default Nav;