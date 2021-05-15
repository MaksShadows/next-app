import Link from "next/link";
import Head from "next/head";
import styles from "./mainlayout.module.scss";
const MainLayout = ({ children, title = "Next App" }) => {
  return (
    <>
      <Head>
        <title>{title} | Next</title>
        <meta name="keywords" content="next,javascript,nextjs,react" />
        <meta name="description" content="this is youtube tutorial for next" />
        <meta charSet="utf-8" />
      </Head>
      <header className={styles.header}>
        <nav className={styles.header__nav}>
          <div className={styles.header__logo}></div>
          <ul className={styles.header__list}>
            <li>
              <Link href="/">
                <a className={styles.header__link}>Home</a>
              </Link>
            </li>
            <li >
              <Link href="/about">
                <a  className={styles.header__link}>About us</a>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
    </>
  );
};
export default MainLayout;
