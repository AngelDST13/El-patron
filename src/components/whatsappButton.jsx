function WhatsAppButton() {

  const phone = '5210000000000'

  const message = encodeURIComponent(
    'Hola El Patrón, quiero información sobre sus servicios.'
  )

  return (
    <a
      href={`https://wa.me/${phone}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-button"
    >
      WhatsApp
    </a>
  )
}

export default WhatsAppButton