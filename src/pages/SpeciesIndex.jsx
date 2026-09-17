import { Link } from 'react-router-dom'
import SpeciesCard from '../components/SpeciesCard'
import { species } from '../data/species'
import { useDiscoveries } from '../hooks/useDiscoveries'

export default function SpeciesIndex() {
  const { discoveries } = useDiscoveries()
  const progress = (discoveries.length / species.length) * 100

  return (
    <section className="container page-section species-index-page">
      <header className="page-heading-compact species-index-heading" data-reveal>
        <img className="internal-heading-art" src="/festival_gabiroba_site/brand/botanical-dots.png" alt="" aria-hidden="true" />
        <span className="eyebrow">COLEÇÃO DO FESTIVAL</span>
        <div className="page-heading-compact__row">
          <h1>Espécies para descobrir</h1>
          <span>{species.length} espécies</span>
        </div>
        <p>Conheça as mudas presentes no Festival e acompanhe as espécies que você já encontrou pelos QR Codes.</p>
      </header>
      <div className="internal-pattern-rule" aria-hidden="true" />

      <div className="trail-summary trail-summary--page" data-reveal>
        <div>
          <span className="eyebrow">SUA TRILHA</span>
          <strong>{discoveries.length} / 20 DESCOBERTAS</strong>
        </div>
        <div className="progress-track"><span style={{ width: `${progress}%` }} /></div>
      </div>

      <div className="species-index-actions" data-reveal>
        <Link className="button button-primary" to="/minha-trilha">Ver minha trilha</Link>
        <p>Acompanhe suas descobertas e veja quais espécies você já encontrou.</p>
      </div>

      <div className="species-grid species-grid--all">
        {species.map((item) => (
          <SpeciesCard key={item.slug} item={item} discovered={discoveries.includes(item.slug)} />
        ))}
      </div>
    </section>
  )
}
