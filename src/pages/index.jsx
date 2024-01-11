import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import Card from '@/components/Card'
export default function Home() {
  return (
    <div className={styles.maincontainer}>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
}
