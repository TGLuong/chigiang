import styles from 'src/styles/scss/home/home.module.scss'
import { Image, Tabs, TabList, TabPanels, Tab, TabPanel, Button } from "@chakra-ui/react";

const Home = () => {
  return (
    <>
      <Image src='/banner---ieltstests_2.png' alt='Banner' />
      <div className={styles.container}>
        <div className={styles.content}>
          <Tabs variant='soft-rounded' colorScheme='green'>
            <TabList>
              <Tab>Hà Nội</Tab>
              <Tab>Hồ Chí Minh</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <h4><b>Địa điểm thi thử và địa điểm đào tạo tại:</b></h4>
                <br/>
                <p><b>1. Trường Đại học sư phạm Hà Nội - 136 Xuân Thủy, Dịch Vọng Hậu, Cầu Giấy, Hà Nội</b></p>
                <br/>
                <p><b>
                  2. Trường Đại học Khoa học xã hội và Nhân văn - ĐHQGHN - 
                  336 Nguyễn Trãi, Thanh Xuân Trung, Thanh Xuân, Hà Nội
                </b></p>
                <br/>
                <Button colorScheme='teal' size='md'>
                  Đăng ký dự thi
                </Button>
              </TabPanel>
              <TabPanel>
                <h4><b>Địa điểm thi thử và địa điểm đào tạo tại:</b></h4>
                <br/>
                <p><b>
                  1. Số 2A Nguyễn Thị Minh Khai, Phường Đa Kao, Quận 1, Thành phố Hồ Chí Minh
                </b></p>
                <br/>
                <p><b>
                  2. Trường Đại học Sài Gòn - 273 An Dương Vương, Phường 3, Quận 5, Thành phố Hồ Chí Minh
                </b></p>
                <br/>
                <p><b>
                  3. Trường Đại học Công nghiệp Thực phẩm TP.HCM - 140 Lê Trọng Tấn, 
                  Tây Thạnh, Quận Tân Phú, Thành phố Hồ Chí Minh
                </b></p>
                <br/>
                <p><b>
                  4. Trung tâm phát triển GD-ĐT phía Nam, Văn phòng Bộ GD-ĐT, 
                  số 3 Công trường quốc tế, Phường Võ Thị Sáu, Quận 3, Thành phố Hồ Chí Minh
                </b></p>
                <br/>
                <Button colorScheme='teal' size='md'>
                  Đăng ký dự thi
                </Button>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </div>
      </div>
    </>
  )
}

export default Home;