import styles from 'src/styles/scss/layout/header.module.scss'
import { Image, border } from '@chakra-ui/react'


export default function() {
  return(
    <>
      <div className={styles.container1}>
        <div className={styles.left}>
          <p>097.857.3879 - 096.987.3748 - 091.355.1975 - 038.827.9669 (zalo)</p>
        </div>
        <div className={styles.right}>
          <p><b>ĐĂNG NHẬP</b></p>
        </div>
      </div>
      <div className={styles.container2}>
        <Image src='/logo.png' alt='Logo' style={{height: "70px"}}/>
        <ul>
          <li><b>Giới thiệu</b></li>
          <li><b>Lịch thi</b></li>
          <li><b>Tin tức</b></li>
          <li><b>Thư viện</b></li>
          <li><b>Liên hệ</b></li>
        </ul>
      </div>
    </>
  )
}