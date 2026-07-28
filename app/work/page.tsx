'use client'

import { useState, useEffect, Suspense } from 'react'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'
import projects, {
  getArchiveProjects,
  STATUS_LABELS,
  STATUS_COLORS,
  type WorkCategory,
  type WorkProject,
} from '@/lib/workData'

// ─── Helpers ──────────────────────────────────────────────────────────────────

const FILTERS: { label: string; value: WorkCategory | 'all' }[] = [
  { label: 'ALL', value: 'all' },
  { label: 'WEBSITES', value: 'website' },
  { label: 'PLATFORMS', value: 'platform' },
  { label: 'ERP & OPERATIONS', value: 'erp' },
  { label: 'ECOMMERCE', value: 'ecommerce' },
  { label: 'BRAND & SEARCH', value: 'brand-search' },
  { label: 'LABS', value: 'lab' },
]

function StatusPill({ status }: { status: WorkProject['status'] }) {
  const color = STATUS_COLORS[status]
  const label = STATUS_LABELS[status]
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '5px',
        fontFamily: 'var(--font-body)',
        fontSize: '0.5rem',
        letterSpacing: '0.2em',
        color,
        textTransform: 'uppercase',
        border: `1px solid ${color}44`,
        padding: '0.25rem 0.6rem',
        background: `${color}10`,
        flexShrink: 0,
      }}
    >
      {status === 'live' && (
        <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: color, display: 'inline-block' }} />
      )}
      {label}
    </span>
  )
}

// ─── Exhibition Wall Preview ────────────────────────────────────────────────

function ExhibitionPreview({ project }: { project: WorkProject | null }) {
  const [displayed, setDisplayed] = useState<WorkProject | null>(project)
  const [transitioning, setTransitioning] = useState(false)

  useEffect(() => {
    if (!project || project?.slug === displayed?.slug) return
    
    setTransitioning(true)
    const t = setTimeout(() => {
      setDisplayed(project)
      setTransitioning(false)
    }, 200)
    return () => clearTimeout(t)
  }, [project?.slug])

  if (!displayed) return (
    <div
      style={{
        width: '100%',
        aspectRatio: '4/3',
        background: 'var(--ink3)',
        border: '1px solid var(--line)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.6rem', letterSpacing: '0.2em', color: 'var(--dim)', textTransform: 'uppercase' }}>
        Exhibition Wall
      </span>
    </div>
  )

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Cover image */}
      <div
        style={{
          width: '100%',
          aspectRatio: '4/3',
          background: 'var(--ink3)',
          overflow: 'hidden',
          position: 'relative',
          border: '1px solid var(--line)',
        }}
      >
        <img
          key={displayed.slug}
          src={displayed.cover}
          alt={displayed.coverAlt}
          loading="lazy"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            filter: 'grayscale(1) brightness(0.65)',
            opacity: transitioning ? 0 : 1,
            transform: transitioning ? 'scale(1.03)' : 'scale(1)',
            transition: 'opacity 400ms cubic-bezier(0.16, 1, 0.3, 1), transform 400ms cubic-bezier(0.16, 1, 0.3, 1)',
          }}
          onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none' }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            padding: '1rem 1.2rem',
            background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 100%)',
            opacity: transitioning ? 0 : 1,
            transition: 'opacity 400ms cubic-bezier(0.16, 1, 0.3, 1) 60ms',
          }}
        >
          <StatusPill status={displayed.status} />
        </div>
      </div>

      {/* Preview metadata */}
      <div style={{ padding: '1.4rem 0 0' }}>
        <div
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.58rem',
            letterSpacing: '0.15em',
            color: 'var(--cobalt2)',
            textTransform: 'uppercase',
            marginBottom: '0.5rem',
            opacity: transitioning ? 0 : 1,
            transform: transitioning ? 'translateY(4px)' : 'translateY(0)',
            transition: 'opacity 350ms cubic-bezier(0.16, 1, 0.3, 1) 120ms, transform 350ms cubic-bezier(0.16, 1, 0.3, 1) 120ms',
          }}
        >
          {displayed.categoryLabel}
        </div>
        <div
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.3rem, 2vw, 1.8rem)',
            fontWeight: 300,
            color: 'var(--white)',
            lineHeight: 1.1,
            marginBottom: '0.75rem',
            opacity: transitioning ? 0 : 1,
            transform: transitioning ? 'translateY(4px)' : 'translateY(0)',
            transition: 'opacity 350ms cubic-bezier(0.16, 1, 0.3, 1) 180ms, transform 350ms cubic-bezier(0.16, 1, 0.3, 1) 180ms',
          }}
        >
          {displayed.name}
        </div>
        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.82rem',
            lineHeight: 1.7,
            color: 'var(--fog)',
            opacity: transitioning ? 0 : 1,
            transform: transitioning ? 'translateY(4px)' : 'translateY(0)',
            transition: 'opacity 350ms cubic-bezier(0.16, 1, 0.3, 1) 240ms, transform 350ms cubic-bezier(0.16, 1, 0.3, 1) 240ms',
          }}
        >
          {displayed.shortDescription}
        </p>

        {displayed.industries.length > 0 && (
          <div 
            style={{ 
              display: 'flex', 
              gap: '0.5rem', 
              flexWrap: 'wrap', 
              marginTop: '1rem',
              opacity: transitioning ? 0 : 1,
              transform: transitioning ? 'translateY(4px)' : 'translateY(0)',
              transition: 'opacity 350ms cubic-bezier(0.16, 1, 0.3, 1) 300ms, transform 350ms cubic-bezier(0.16, 1, 0.3, 1) 300ms',
            }}
          >
            {displayed.industries.map((ind) => (
              <span
                key={ind}
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.52rem',
                  letterSpacing: '0.12em',
                  color: 'var(--dim)',
                  border: '1px solid var(--line)',
                  padding: '0.2rem 0.5rem',
                  textTransform: 'uppercase',
                }}
              >
                {ind}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}



// ─── Desktop project row ───────────────────────────────────────────────────

function ProjectRow({
  project,
  isActive,
}: {
  project: WorkProject
  isActive: boolean
  onHover?: (slug: string | null) => void
}) {
  const router = useRouter()

  const handleClick = () => {
    if (project.externalUrl && project.status === 'live') {
      window.open(project.externalUrl, '_blank', 'noopener,noreferrer')
    } else if (project.status === 'private') {
      router.push('/contact')
    }
  }

  return (
    <div
      className="proj-row"
      data-slug={project.slug}
      role="button"
      tabIndex={0}
      aria-label={`${project.name} — ${project.categoryLabel}`}
      onClick={handleClick}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') handleClick() }}
      style={{
        display: 'grid',
        gridTemplateColumns: '48px 1fr 160px 80px 100px',
        gap: '1.5rem',
        alignItems: 'center',
        padding: '1.8rem 0',
        borderTop: '1px solid var(--line)',
        cursor: project.externalUrl || project.status === 'private' ? 'pointer' : 'default',
        transition: 'background 200ms',
      }}
    >
      {/* Number */}
      <div
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: '0.56rem',
          letterSpacing: '0.2em',
          color: isActive ? 'var(--cobalt2)' : 'var(--dim)',
          transition: 'color 200ms',
        }}
      >
        {project.number}
      </div>

      {/* Name + description */}
      <div>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '1rem', marginBottom: '0.4rem' }}>
          <span
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.2rem, 1.8vw, 1.7rem)',
              fontWeight: 300,
              color: 'var(--white)',
              lineHeight: 1,
              transition: 'color 200ms',
            }}
          >
            {project.name}
          </span>
          {project.category === 'lab' && (
            <span
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.48rem',
                letterSpacing: '0.2em',
                color: 'var(--dim)',
                border: '1px solid var(--line)',
                padding: '0.2rem 0.5rem',
                textTransform: 'uppercase',
              }}
            >
              LAB
            </span>
          )}
        </div>
        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.78rem',
            lineHeight: 1.6,
            color: 'var(--fog)',
            maxWidth: '480px',
            margin: 0,
            opacity: isActive ? 1 : 0.7,
            transition: 'opacity 200ms',
          }}
        >
          {project.shortDescription}
        </p>
      </div>

      {/* Category */}
      <div
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: '0.56rem',
          letterSpacing: '0.1em',
          color: isActive ? 'var(--cobalt2)' : 'var(--dim)',
          textTransform: 'uppercase',
          transition: 'color 200ms',
          lineHeight: 1.4,
        }}
      >
        {project.categoryLabel}
      </div>

      {/* Year */}
      <div
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: '0.56rem',
          letterSpacing: '0.1em',
          color: 'var(--dim)',
        }}
      >
        {project.year}
      </div>

      {/* Status */}
      <div>
        <StatusPill status={project.status} />
      </div>
    </div>
  )
}

// ─── Mobile project entry ──────────────────────────────────────────────────

function MobileEntry({ project }: { project: WorkProject }) {
  const router = useRouter()

  const handleCta = () => {
    if (project.externalUrl && project.status === 'live') {
      window.open(project.externalUrl, '_blank', 'noopener,noreferrer')
    } else if (project.status === 'private') {
      router.push('/contact')
    }
  }

  return (
    <div style={{ borderTop: '1px solid var(--line)', padding: '2rem 0' }}>
      {/* Meta row */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '1rem',
          marginBottom: '0.8rem',
          flexWrap: 'wrap',
        }}
      >
        <span
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.52rem',
            letterSpacing: '0.2em',
            color: 'var(--dim)',
            textTransform: 'uppercase',
          }}
        >
          {project.number}
        </span>
        <span
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.52rem',
            letterSpacing: '0.12em',
            color: 'var(--cobalt2)',
            textTransform: 'uppercase',
          }}
        >
          {project.categoryLabel}
        </span>
        <StatusPill status={project.status} />
        {project.category === 'lab' && (
          <span
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.48rem',
              letterSpacing: '0.2em',
              color: 'var(--dim)',
              border: '1px solid var(--line)',
              padding: '0.2rem 0.5rem',
              textTransform: 'uppercase',
            }}
          >
            LAB
          </span>
        )}
      </div>

      {/* Name */}
      <h3
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(1.6rem, 7vw, 2.4rem)',
          fontWeight: 300,
          color: 'var(--white)',
          lineHeight: 1.0,
          marginBottom: '1rem',
        }}
      >
        {project.name}
      </h3>

      {/* Cover image */}
      <div
        style={{
          width: '100%',
          aspectRatio: '4/3',
          background: 'var(--ink3)',
          overflow: 'hidden',
          marginBottom: '1rem',
          border: '1px solid var(--line)',
        }}
      >
        <img
          src={project.cover}
          alt={project.coverAlt}
          loading="lazy"
          style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(1) brightness(0.65)' }}
          onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none' }}
        />
      </div>

      {/* Description */}
      <p
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: '0.85rem',
          lineHeight: 1.7,
          color: 'var(--fog)',
          marginBottom: '1.2rem',
        }}
      >
        {project.shortDescription}
      </p>

      {/* CTA */}
      {(project.externalUrl && project.status === 'live') ? (
        <a
          href={project.externalUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            fontFamily: 'var(--font-body)',
            fontSize: '0.62rem',
            letterSpacing: '0.18em',
            color: 'var(--cobalt2)',
            textDecoration: 'none',
            textTransform: 'uppercase',
            minHeight: '44px',
          }}
        >
          VIEW LIVE ↗
        </a>
      ) : project.status === 'private' ? (
        <button
          onClick={handleCta}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            fontFamily: 'var(--font-body)',
            fontSize: '0.62rem',
            letterSpacing: '0.18em',
            color: 'var(--cobalt2)',
            background: 'none',
            border: '1px solid var(--cobalt2)',
            padding: '0.6rem 1.2rem',
            cursor: 'pointer',
            textTransform: 'uppercase',
            minHeight: '44px',
          }}
        >
          REQUEST WALKTHROUGH →
        </button>
      ) : null}
    </div>
  )
}

// ─── Main page (inner — uses useSearchParams, needs Suspense) ──────────────

function WorkPageInner() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const initialCat = (searchParams?.get('category') ?? 'all') as WorkCategory | 'all'

  const [activeFilter, setActiveFilter] = useState<WorkCategory | 'all'>(initialCat)
  const [activeProject, setActiveProject] = useState<WorkProject | null>(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  const all = getArchiveProjects()
  const filtered = activeFilter === 'all' ? all : all.filter((p) => p.category === activeFilter)
  // Labs go to bottom of the list in "all" view
  const sorted = activeFilter === 'all'
    ? [...filtered.filter((p) => p.category !== 'lab'), ...filtered.filter((p) => p.category === 'lab')]
    : filtered

  // Set initial active project
  useEffect(() => {
    if (sorted.length > 0 && !activeProject) {
      setActiveProject(sorted[0])
    }
  }, [sorted.length])

  // Intersection Observer for exhibition wall
  useEffect(() => {
    if (isMobile) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.4) {
            const slug = entry.target.getAttribute('data-slug')
            const project = sorted.find((p) => p.slug === slug)
            if (project && project.slug !== activeProject?.slug) {
              setActiveProject(project)
            }
          }
        })
      },
      {
        threshold: [0, 0.4, 0.5, 0.6, 1],
        rootMargin: '-40% 0px -40% 0px',
      }
    )

    const rows = document.querySelectorAll('.proj-row')
    rows.forEach((row) => observer.observe(row))

    return () => observer.disconnect()
  }, [sorted, isMobile, activeProject?.slug])

  const handleFilter = (val: WorkCategory | 'all') => {
    setActiveFilter(val)
    const params = val === 'all' ? '/work' : `/work?category=${val}`
    router.replace(params, { scroll: false })
  }

  return (
    <main style={{
      paddingTop: 'var(--header-height)',
      minHeight: '100vh',
      position: 'relative',
      zIndex: 10,
      background: 'linear-gradient(145deg,#000000 0%,#000000 48%,#000019 76%,#00002E 100%)',
    }}>
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <div style={{ padding: '4rem 4rem 6rem', position: 'relative', overflow: 'hidden' }} className="work-hero">
        {/* Background video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
            zIndex: 0,
            opacity: 0.4,
          }}
        >
          <source src="/hero video/work,service,about.mp4" type="video/mp4" />
        </video>
        
        {/* Content */}
        <div style={{ position: 'relative', zIndex: 1 }}>
          <span className="label-tag">WORK / SYSTEMS ARCHIVE</span>
          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.8rem, 7vw, 8rem)',
              fontWeight: 300,
              lineHeight: 0.9,
              marginTop: '1.2rem',
              color: 'var(--white)',
              letterSpacing: '-0.02em',
            }}
          >
            WEBSITES, PRODUCTS
            <br />
            <em
              style={{
                fontStyle: 'italic',
                color: 'transparent',
                WebkitTextStroke: '1.5px var(--white)',
              }}
            >
              AND OPERATING SYSTEMS.
            </em>
          </h1>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.95rem',
              color: 'rgba(255,255,255,0.72)',
              lineHeight: 1.8,
              maxWidth: '520px',
              marginTop: '2rem',
            }}
          >
            From public-facing brand experiences to private software running the
            business behind them.
          </p>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.58rem',
              letterSpacing: '0.3em',
              color: 'var(--dim)',
              textTransform: 'uppercase',
              marginTop: '1.5rem',
            }}
          >
            PUBLIC EXPERIENCES&nbsp;&nbsp;/&nbsp;&nbsp;DIGITAL PRODUCTS&nbsp;&nbsp;/&nbsp;&nbsp;PRIVATE OPERATIONS
          </p>
        </div>
      </div>

      {/* ── FILTERS ──────────────────────────────────────────────────────── */}
      <div
        style={{
          padding: '0 4rem',
          borderTop: '1px solid var(--line)',
          borderBottom: '1px solid var(--line)',
          overflowX: 'auto',
        }}
        className="work-filters"
      >
        <div style={{ display: 'flex', gap: '0', minWidth: 'max-content' }}>
          {FILTERS.map((f) => (
            <button
              key={f.value}
              onClick={() => handleFilter(f.value)}
              aria-pressed={activeFilter === f.value}
              style={{
                background: 'none',
                border: 'none',
                borderBottom: activeFilter === f.value ? '2px solid var(--cobalt)' : '2px solid transparent',
                padding: '1.2rem 1.4rem',
                fontFamily: 'var(--font-body)',
                fontSize: '0.58rem',
                letterSpacing: '0.2em',
                color: activeFilter === f.value ? 'var(--white)' : 'var(--dim)',
                textTransform: 'uppercase',
                cursor: 'pointer',
                transition: 'color 200ms, border-color 200ms',
                minHeight: '44px',
                whiteSpace: 'nowrap',
              }}
              onMouseEnter={(e) => {
                if (activeFilter !== f.value) (e.currentTarget as HTMLElement).style.color = 'var(--fog)'
              }}
              onMouseLeave={(e) => {
                if (activeFilter !== f.value) (e.currentTarget as HTMLElement).style.color = 'var(--dim)'
              }}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      {/* ── DESKTOP: EDITORIAL INDEX + EXHIBITION WALL ────────────────────── */}
      {!isMobile && (
        <>
          {/* Fixed exhibition wall — never moves */}
          <div style={{
            position: 'fixed',
            top: '120px',
            right: '4rem',
            width: '340px',
            zIndex: 5,
            pointerEvents: 'none',
          }}>
            <ExhibitionPreview project={activeProject} />
          </div>

          {/* Left list — normal page scroll, padded right to leave room for fixed panel */}
          <div
            style={{
              padding: '0 calc(360px + 6rem) 8rem 4rem',
              marginTop: '4rem',
            }}
            className="work-desktop"
          >
            {sorted.map((p) => (
              <ProjectRow
                key={p.slug}
                project={p}
                isActive={activeProject?.slug === p.slug}
              />
            ))}
            {sorted.length === 0 && (
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.85rem', color: 'var(--dim)', padding: '3rem 0' }}>
                No projects in this category yet.
              </p>
            )}
            <div style={{ borderTop: '1px solid var(--line)' }} />
          </div>
        </>
      )}

      {/* ── MOBILE: Stacked entries ───────────────────────────────────────── */}
      {isMobile && (
        <div style={{ padding: '2rem 1.5rem 6rem' }}>
          {sorted.map((p) => (
            <MobileEntry key={p.slug} project={p} />
          ))}
          {sorted.length === 0 && (
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.85rem', color: 'var(--dim)', padding: '2rem 0' }}>
              No projects in this category yet.
            </p>
          )}
          <div style={{ borderTop: '1px solid var(--line)' }} />
        </div>
      )}

      {/* ── LABS DIVIDER (visible in "all" view only) ─────────────────────── */}
      {activeFilter === 'all' && !isMobile && sorted.some((p) => p.category === 'lab') && (
        <div style={{ padding: '0 4rem', marginTop: '-6rem', marginBottom: '4rem' }}>
          <div style={{ borderTop: '1px solid var(--line)', paddingTop: '2rem' }}>
            <span className="label-tag">REVOLQ LABS — INTERNAL & CONCEPT</span>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.8rem', color: 'var(--dim)', lineHeight: 1.6, maxWidth: '500px', marginTop: '0.8rem' }}>
              Internal tools, experimental systems and concept products built inside REVOLQ.
              Not commissioned client work.
            </p>
          </div>
        </div>
      )}

      {/* ── FINAL CTA ─────────────────────────────────────────────────────── */}
      <section
        style={{
          padding: '8rem 4rem',
          borderTop: '1px solid var(--line)',
          textAlign: 'center',
          position: 'relative',
          zIndex: 10,
        }}
        className="work-cta"
      >
        <span className="label-tag">START A PROJECT</span>
        <h2
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.5rem, 6vw, 7rem)',
            fontWeight: 300,
            lineHeight: 0.9,
            letterSpacing: '-0.02em',
            color: 'var(--white)',
            marginTop: '1.2rem',
            marginBottom: '0',
          }}
        >
          HAVE A SYSTEM
        </h2>
        <h2
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.5rem, 6vw, 7rem)',
            fontWeight: 300,
            lineHeight: 0.9,
            letterSpacing: '-0.02em',
            fontStyle: 'italic',
            color: 'transparent',
            WebkitTextStroke: '1.5px var(--white)',
            marginTop: '0.1em',
            marginBottom: '2rem',
          }}
        >
          THAT NEEDS BUILDING?
        </h2>
        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.92rem',
            fontWeight: 200,
            lineHeight: 1.9,
            color: 'rgba(255,255,255,0.72)',
            maxWidth: '480px',
            margin: '0 auto 3rem',
          }}
        >
          Tell us what is not working, what is still manual or what your customers cannot find.
        </p>
        <div style={{ display: 'flex', gap: '1.2rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link
            href="/contact"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '1rem 2.2rem',
              background: 'var(--cobalt)',
              color: 'var(--white)',
              fontFamily: 'var(--font-body)',
              fontSize: '0.65rem',
              letterSpacing: '0.2em',
              textDecoration: 'none',
              textTransform: 'uppercase',
              minHeight: '52px',
              transition: 'background 200ms',
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = 'var(--cobalt2)')}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = 'var(--cobalt)')}
          >
            START A PROJECT →
          </Link>
          <a
            href="https://wa.me/917995617374"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '1rem 2.2rem',
              border: '1px solid var(--line2)',
              color: 'rgba(255,255,255,0.8)',
              fontFamily: 'var(--font-body)',
              fontSize: '0.65rem',
              letterSpacing: '0.2em',
              textDecoration: 'none',
              textTransform: 'uppercase',
              minHeight: '52px',
              transition: 'border-color 200ms',
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.borderColor = 'var(--cobalt2)')}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.borderColor = 'var(--line2)')}
          >
            WHATSAPP US →
          </a>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .work-hero { padding: 3rem 1.5rem 4rem !important; }
          .work-filters { padding: 0 1.5rem !important; }
          .work-cta { padding: 6rem 1.5rem !important; }
        }
      `}</style>
    </main>
  )
}

export default function WorkPage() {
  return (
    <Suspense fallback={
      <main style={{
        paddingTop: '8rem',
        minHeight: '100vh',
        position: 'relative',
        zIndex: 10,
        background: 'linear-gradient(145deg,#000000 0%,#000000 48%,#000019 76%,#00002E 100%)',
      }}>
        <div style={{ padding: '4rem', fontFamily: 'var(--font-body)', color: 'var(--dim)', fontSize: '0.8rem' }}>
          Loading…
        </div>
      </main>
    }>
      <WorkPageInner />
    </Suspense>
  )
}
