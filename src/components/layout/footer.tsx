import styles from 'src/styles/scss/layout/footer.module.scss'



export default function Footer()
{
  return(
    <>
      <div className={styles.container}>
        <div className={styles.content}>
          <h4><b>1. Công ty TNHH Công nghệ Giáo dục Đông A</b></h4>
          <p>
            BT6, Lô 4, Dự án khu nhà ở Phùng Khoang, Ngõ 67 Phùng Khoang, Phường Trung Văn,
            Quận Nam Từ Liêm, Thành phố Hà Nội
          </p>
          <br></br>
          <p>
            HOTLINE: <b>097.857.3879 - 096.987.3748 - 091.355.1975 - 038.827.9669</b> (zalo)
          </p>
          <p>
            Email: ieltstests.vn@gmail.com
          </p>
          <br></br>
          <h4><b>2. British Council (Viet Nam) LLC</b></h4>
          <p>- 20 Thụy Khuê, Tây Hồ, Hà Nội; https://britishcouncil.vn</p>
          <p>
            - Tầng 1, tòa nhà Viettel, Hẻm 285 Cách Mạng Tháng Tám,
            Phường 12, Quận 10, Thành phố Hồ Chí Minh
          </p>
        </div>
      </div>
    </>
  )
}