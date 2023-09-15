
function DentistCard({ nombre, email, telefono, sitioWeb }) {
  return (
    <div className="dentist-card">
      <h2 className="dentist-name">{nombre}</h2>
      <p className="dentist-email">Correo: {email}</p>
      <p className="dentist-phone">Teléfono: {telefono}</p>
      <a
        href={sitioWeb}
        className="dentist-website"
        target="_blank"
        rel="noopener noreferrer"
      >
        Sitio web
      </a>
    </div>
  );
}

export default DentistCard;