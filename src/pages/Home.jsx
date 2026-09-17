import { Link } from 'react-router-dom'
import SpeciesCard from '../components/SpeciesCard'
import { species } from '../data/species'
import { useDiscoveries } from '../hooks/useDiscoveries'

const festivalExperiences = [
  {
    kicker: 'IMERSÃO',
    title: 'A Mata',
    text: 'Uma vivência na Mata Atlântica para reconhecer espécies, ingredientes e histórias ligadas à floresta.',
  },
  {
    kicker: 'GASTRONOMIA',
    title: 'A Cozinha',
    text: 'Ingredientes nativos ganham novas leituras enquanto chefs cozinham, compartilham processos, sabores e possibilidades.',
  },
  {
    kicker: 'ENCONTRO',
    title: 'A Feira',
    text: 'Um espaço para aproximar público, produtores e iniciativas que mantêm vivos os sabores e conhecimentos da Mata Atlântica.',
  },
]

export default function Home() {
  const { discoveries } = useDiscoveries()
  const progress = (discoveries.length / species.length) * 100
  const previewSpecies = species.slice(0, 6)

  const handleFestivalClick = () => {
    document.getElementById('sobre')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <>
      <section className="hero brand-hero" id="inicio">
        <div className="brand-hero__art" aria-hidden="true">
          <img src="/festival_gabiroba_site/brand/fauna-flora-hero.png" alt="" />
        </div>

        <div className="container brand-hero__grid">
          <div className="brand-hero__copy">
            <img
              className="brand-logo hero-step hero-step-1"
              src="/festival_gabiroba_site/brand/festival-gabiroba-logo.png"
              alt="Festival Gabiroba"
            />
            <span className="festival-kicker hero-step hero-step-2">SABORES DA MATA ATLÂNTICA</span>
            <p className="hero-step hero-step-3">
              Uma experiência para descobrir espécies, ingredientes, histórias e outras formas de se relacionar com a floresta.
            </p>
            <div className="hero-actions hero-step hero-step-4">
              <Link className="button button-dark hero-primary-button" to="/especies">Explorar espécies</Link>
              <button className="hero-secondary-link" type="button" onClick={handleFestivalClick}>Conheça o Festival ↓</button>
            </div>
          </div>
        </div>

        <div className="brand-hero__footer">
          <div className="container brand-hero__footer-inner">
            <span>GASTRONOMIA</span><span>•</span><span>SABORES</span><span>•</span><span>TERRITÓRIO</span><span>•</span><span>ENCONTROS</span>
          </div>
        </div>
      </section>

      <div className="brand-pattern-divider" aria-hidden="true" />

      <section className="about-strip brand-about" id="sobre">
        <div className="container about-grid">
          <span className="eyebrow">SOBRE O GABIROBA</span>
          <div>
            <h2>A Mata Atlântica também se conecta pela mesa.</h2>
            <p>
              O Gabiroba conecta biodiversidade, gastronomia e conhecimento para aproximar o público de espécies, sabores e histórias que ainda vivem na floresta.
            </p>
          </div>
        </div>
      </section>

      <section className="manifesto-section brand-manifesto" id="festival">
        <img className="brand-manifesto__art" src="/festival_gabiroba_site/brand/botanical-dots.png" alt="" aria-hidden="true" />
        <div className="container manifesto-grid" data-reveal>
          <span className="eyebrow">POR QUE GABIROBA?</span>
          <div>
            <p className="manifesto-lead">
              Gabiroba é o nome de uma fruta pequena, verde e ácida que nasce onde a Mata Atlântica ainda resiste.
            </p>
            <h2>Por que esses sabores desapareceram do nosso prato?</h2>
            <p>
              O festival nasce desse encontro entre floresta, cultura e gastronomia — aproximando o público de espécies que fazem parte da Mata Atlântica e das pessoas que mantêm esses saberes vivos.
            </p>
          </div>
        </div>
      </section>

      <section className="days-section container brand-experiences">
        <header className="compact-heading" data-reveal>
          <div>
            <span className="eyebrow">O QUE VOCÊ VAI ENCONTRAR</span>
            <h2>Da mata ao encontro.</h2>
          </div>
          <p>Experiências que conectam biodiversidade, gastronomia, cultura e pessoas.</p>
        </header>

        <div className="days-grid">
          {festivalExperiences.map((experience, index) => (
            <article className={`day-card brand-day-card brand-day-card--${index + 1}`} key={experience.title} data-reveal>
              <span className="brand-day-card__number">0{index + 1}</span>
              <div>
                <span className="day-kicker">{experience.kicker}</span>
                <h3>{experience.title}</h3>
                <p>{experience.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="trail-feature brand-trail-feature">
        <div className="container trail-feature__grid" data-reveal>
          <div>
            <span className="eyebrow">DESCUBRA A MATA</span>
            <h2>20 espécies.<br />20 histórias.</h2>
            <p>
              Encontre as mudas pelo Festival, escaneie os QR Codes e construa sua própria trilha pela Mata Atlântica.
            </p>
            <div className="trail-feature__actions">
              <Link className="button button-primary" to="/especies">Explorar as espécies</Link>
              <Link className="text-link light" to="/minha-trilha">Ver minha trilha →</Link>
            </div>
          </div>

          <div className="trail-counter-card brand-trail-counter">
            <div className="trail-counter-card__top">
              <span>SUA TRILHA</span>
              <strong>{discoveries.length} / 20</strong>
            </div>
            <div className="progress-track"><span style={{ width: `${progress}%` }} /></div>
            <p>{discoveries.length === 0 ? 'Sua primeira descoberta começa em uma das mudas do Festival.' : `${discoveries.length} espécie${discoveries.length === 1 ? '' : 's'} descoberta${discoveries.length === 1 ? '' : 's'} até agora.`}</p>
          </div>
        </div>
      </section>

      <section className="species-preview container brand-species-preview">
        <header className="compact-heading" data-reveal>
          <div>
            <span className="eyebrow">COLEÇÃO DO FESTIVAL</span>
            <h2>Algumas espécies para começar.</h2>
          </div>
          <Link className="text-link" to="/especies">Ver todas as 20 →</Link>
        </header>

        <div className="species-grid species-grid--preview">
          {previewSpecies.map((item) => (
            <SpeciesCard key={item.slug} item={item} discovered={discoveries.includes(item.slug)} />
          ))}
        </div>
      </section>
    </>
  )
}
