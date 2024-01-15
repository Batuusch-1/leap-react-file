import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import Card from '@/components/Card'
import List1 from '@/components/list';
export default function Home() {
  return ( 
    <div className={styles.maincontainer}>
      <Card />
      <List1 color="asd" />
  
    </div>
  );
}
