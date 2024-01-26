import React from 'react';

import styles from './Nav.module.scss';
import Item from './Item';
import TItem from './Item/Item.types';
import Link from 'next/link';
import clsx from 'clsx';

// const navItems = [
//   {
//     title: 'Dashboard',
//     svg: (
//       <svg
//         width="18"
//         height="18"
//         viewBox="0 0 18 18"
//         fill="none"
//         xmlns="http://www.w3.org/2000/svg">
//         <path d="M10 6V0H18V6H10ZM0 10V0H8V10H0ZM10 18V8H18V18H10ZM0 18V12H8V18H0Z" fill="black" />
//       </svg>
//     ),
//     href: '/',
//   },
//   {
//     title: 'Orders',
//     svg: (
//       <svg
//         width="20"
//         height="20"
//         viewBox="0 0 20 20"
//         fill="none"
//         xmlns="http://www.w3.org/2000/svg">
//         <path
//           d="M16 16C14.89 16 14 16.89 14 18C14 18.5304 14.2107 19.0391 14.5858 19.4142C14.9609 19.7893 15.4696 20 16 20C16.5304 20 17.0391 19.7893 17.4142 19.4142C17.7893 19.0391 18 18.5304 18 18C18 17.4696 17.7893 16.9609 17.4142 16.5858C17.0391 16.2107 16.5304 16 16 16ZM0 0V2H2L5.6 9.59L4.24 12.04C4.09 12.32 4 12.65 4 13C4 13.5304 4.21071 14.0391 4.58579 14.4142C4.96086 14.7893 5.46957 15 6 15H18V13H6.42C6.3537 13 6.29011 12.9737 6.24322 12.9268C6.19634 12.8799 6.17 12.8163 6.17 12.75C6.17 12.7 6.18 12.66 6.2 12.63L7.1 11H14.55C15.3 11 15.96 10.58 16.3 9.97L19.88 3.5C19.95 3.34 20 3.17 20 3C20 2.73478 19.8946 2.48043 19.7071 2.29289C19.5196 2.10536 19.2652 2 19 2H4.21L3.27 0M6 16C4.89 16 4 16.89 4 18C4 18.5304 4.21071 19.0391 4.58579 19.4142C4.96086 19.7893 5.46957 20 6 20C6.53043 20 7.03914 19.7893 7.41421 19.4142C7.78929 19.0391 8 18.5304 8 18C8 17.4696 7.78929 16.9609 7.41421 16.5858C7.03914 16.2107 6.53043 16 6 16Z"
//           fill="white"
//         />
//       </svg>
//     ),
//     href: '/orders',
//   },
// ];

const navItems = [
  {
    title: 'Overview',
    href: '/overview',
  },
  {
    title: 'Sign-In and Security',
    href: '/security',
  },
  {
    title: 'Payment Methods',
    href: '/payment',
  },
  {
    title: 'Privacy',
    href: '/privacy',
  },
];

const Nav = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <h4 className={styles.username}>mortenus</h4>
        <h4 className={styles.email}>morten.hihiji@gmail.com</h4>
      </div>
      <div className={styles.balance}>$0</div>

      <div className={styles.links}>
        {/* {navItems.map((obj: TItem) => (
            <Item key={obj.title} {...obj} />
          ))} */}

        {navItems.map((obj) => (
          <Link
            className={clsx(styles['links-item'], { [styles.active]: obj.title === 'Privacy' })}
            href={obj.href}>
            {obj.title}
          </Link>
        ))}
      </div>
      {/* <div className={styles.bar} /> */}
    </div>
  );
};

export default Nav;
