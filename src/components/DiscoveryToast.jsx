import { species } from '../data/species'

export default function DiscoveryToast({ speciesName, total, onClose }) {
  return (
    <div className="discovery-toast" role="status">
      <button onClick={onClose} aria-label="Fechar">×</button>
      <span className="eyebrow">NOVA ESPÉCIE DESCOBERTA</span>
      <strong>Você encontrou {speciesName} ✦</strong>
      <p>{total} de {species.length} espécies descobertas</p>
    </div>
  )
}
