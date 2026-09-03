import Navbar from '../components/navbar.jsx'
import Hero from '../components/hero.jsx'
import Promotion from '../components/promotion.jsx'
import Services from '../components/services.jsx'
import BookingForm from '../components/bookingForm.jsx'
import WhatsAppButton from '../components/whatsappButton.jsx'
import Footer from '../components/footer.jsx'

function PaginaInicio() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Promotion />
        <Services />
        <BookingForm />
      </main>

      <WhatsAppButton />

      <Footer />
    </>
  )
}

export default PaginaInicio