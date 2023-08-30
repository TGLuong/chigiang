import Header from './header'
import Footer from './footer'

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Header/>
      {children}
      <Footer/>
    </>
  )
}