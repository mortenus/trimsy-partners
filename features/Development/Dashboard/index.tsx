import React from 'react';

import styles from './Dashboard.module.scss';
import Item from './Item';
import Headline from '../AdminPanel/Headline';
import { Typography } from 'antd';
import LoadingOverlay from 'features/LoadingOverlay';
import useDashboard from './useDashboard';
import Link from 'next/link';
import NumberCounter from 'features/About/Intro/AnimatedNumber';
import Nav from '../Nav';

type TBannerItems = {
  title: string;
  description: string;
  background: string;
  count: number;
  svg: React.ReactElement<SVGAElement>;
};

const Dashboard = () => {
  const {
    data,
    searchQuery,
    bottomText,
    containerRef,
    handleScroll,
    handleTypeChange,
    handleSearchValueChange,
    handleSearch,
    clearSelection,
    isRefreshingItems,
    refreshItems,
    type,
    dataFetchError,
    isFetching,
    isFetchingQuieries,
  } = useDashboard();

  const bannerItems: TBannerItems[] = [
    {
      title: 'Total',
      description: 'All orders',
      background: '#F7B918',
      count: data.totalOrders,
      svg: (
        <svg
          width="38"
          height="46"
          viewBox="0 0 38 46"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M31.2238 2H6.77664C4.07628 2 1.88721 4.18908 1.88721 6.88944V38.6708C1.88721 41.3711 4.07628 43.5602 6.77664 43.5602H31.2238C33.9242 43.5602 36.1133 41.3711 36.1133 38.6708V6.88944C36.1133 4.18908 33.9242 2 31.2238 2Z"
            stroke="white"
            strokeWidth="3"
          />
          <path d="M7 14H31M7 24H31M7 34H23" stroke="white" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      title: 'New',
      description: 'Waiting for an answer',
      background: '#5BCC8C',
      count: data.newStatus,
      svg: (
        <svg
          width="44"
          height="44"
          viewBox="0 0 44 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M39.1111 0H4.88889C2.2 0 0 2.2 0 4.88889V39.1111C0 40.4077 0.515078 41.6512 1.43192 42.5681C2.34877 43.4849 3.59227 44 4.88889 44H39.1111C41.8 44 44 41.8 44 39.1111V4.88889C44 2.2 41.8 0 39.1111 0ZM39.1111 39.1111H4.88889V31.7778H13.5911C15.2778 34.6867 18.4067 36.6667 22.0244 36.6667C25.6422 36.6667 28.7467 34.6867 30.4578 31.7778H39.1111V39.1111ZM39.1111 26.8889H26.9133C26.9133 29.5778 24.7133 31.7778 22.0244 31.7778C19.3356 31.7778 17.1356 29.5778 17.1356 26.8889H4.88889V4.88889H39.1111V26.8889Z"
            fill="white"
          />
        </svg>
      ),
    },
    {
      title: 'Pending',
      description: 'Orders in progress',
      background: '#EB0038',
      count: data.pendingStatus,
      svg: (
        <svg
          width="58"
          height="58"
          viewBox="0 0 58 58"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M28.9551 51.9676C35.0345 51.9676 40.8649 49.5526 45.1637 45.2538C49.4625 40.955 51.8775 35.1246 51.8775 29.0451C51.8775 22.9657 49.4625 17.1353 45.1637 12.8365C40.8649 8.53774 35.0345 6.1227 28.9551 6.1227C22.8757 6.1227 17.0452 8.53774 12.7464 12.8365C8.44765 17.1353 6.03261 22.9657 6.03261 29.0451C6.03261 35.1246 8.44765 40.955 12.7464 45.2538C17.0452 49.5526 22.8757 51.9676 28.9551 51.9676ZM28.9551 0.39209C32.7178 0.39209 36.4438 1.13322 39.9201 2.57317C43.3965 4.01313 46.5551 6.12369 49.2158 8.78438C51.8765 11.4451 53.9871 14.6037 55.427 18.0801C56.867 21.5564 57.6081 25.2824 57.6081 29.0451C57.6081 36.6444 54.5893 43.9324 49.2158 49.3059C43.8423 54.6794 36.5543 57.6982 28.9551 57.6982C13.1099 57.6982 0.302002 44.8043 0.302002 29.0451C0.302002 21.4459 3.3208 14.1579 8.69429 8.78438C14.0678 3.41089 21.3558 0.39209 28.9551 0.39209ZM30.3877 14.7186V29.7615L43.2816 37.4118L41.1326 40.9362L26.0898 31.9105V14.7186H30.3877Z"
            fill="white"
          />
        </svg>
      ),
    },
  ];

  return (
    <>
      <div className={styles['banner-outside']}>
        Launch rates, every commission is doubled for a limited time. Get up to $4000 for an
        attracted customer.
      </div>
      <section className={styles.wrapper}>
        <Nav />
        <div className={styles.content}>
          <Headline
            title={'Overview'}
            description={`Manage your affiliates, including your link,  affiliate token and Sign-In options`}
          />

          <div className={styles.banner}>
            <div className={styles.container}>
              <div className={styles.message}>
                <h5 className={styles['message-title']}>Last links opened</h5>
                <ul className={styles['message-links']}>
                  <li className={styles[`item`]}>https://trimsy.org/development</li>
                  <li className={styles[`item`]}>https://trimsy.org/development</li>
                  <li className={styles[`item`]}>https://trimsy.org/development</li>
                </ul>
              </div>
              <div className={styles.message}>
                <h5 className={styles['message-title']}>Last links opened</h5>
                <ul className={styles['message-limited']}>
                  <li className={styles[`item`]}>
                    <h5 className={styles[`item-title`]}>New Affiliates Bonus</h5>
                    <Link href="/">Learn more</Link>
                  </li>
                  <li className={styles[`item`]}>https://trimsy.org/development</li>
                  <li className={styles[`item`]}>https://trimsy.org/development</li>
                </ul>
              </div>
            </div>
          </div>
          <div className={styles.links}>
            <button className={styles.item}>
              <h4 className={styles.title}>Manage Links</h4>
              <p className={styles.description}>
                The Trimsy Partners Toolkit is easiest and quickest way to create affiliate links.
                Get your instant link to quickly begin affiliating.
              </p>
            </button>
            <button className={styles.item}>
              <h4 className={styles.title}>View commission rates</h4>
              <p className={styles.description}>Last updated on 04.12.2023</p>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
