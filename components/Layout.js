import Nav from './Nav'
import styles from '../styles/Layout.module.css'
import BottomNav from '../components/BottomNav.js'

const Layout = ({children}) => {
  return ( 
    <>
    <div className={styles.container}>
      <main className={styles.main}>
        {children}
        <BottomNav />
      </main>

    </div>
    </>
   );
}
 
export default Layout;
