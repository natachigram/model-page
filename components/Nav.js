import React from 'react';
import Link from 'next/link';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import navStyles from '../styles/nav.module.scss';

function Nav() {
  return (
    <nav className={navStyles.navbar}>
      <span className={navStyles.logo}>
        <Link href='/'>
          <a>COCOMIL</a>
        </Link>
      </span>
      <ul>
        <li class='mr-7'>
          <Link href='/'>
            <a>Home</a>
          </Link>
        </li>
        <li class='mr-7'>
          <Link href='/about'>
            <a>About</a>
          </Link>
        </li>
        <li class='mr-7'>
          <Link href='/photoshoot'>
            <a>Photoshoots</a>
          </Link>
        </li>
        <li class='mr-7'>
          <Link href='/contact'>
            <a>Contact</a>
          </Link>
        </li>
        <li>
          <Link href='/blog'>
            <a>Blog</a>
          </Link>
        </li>
      </ul>
      <ul>
        <li class='mr-4' className={navStyles.socials}>
          <Link href='/' passHref>
            <a>
              <InstagramIcon />
            </a>
          </Link>
        </li>
        <li class='mr-4' className={navStyles.socials}>
          <Link href='/' passHref>
            <a>
              <TwitterIcon />
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
