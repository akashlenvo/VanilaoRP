import { Link } from 'react-router-dom'

/** Shared brand mark used across all public pages. */
export default function BrandLogo({ className = '', markClassName = '' }) {
  return (
    <Link to="/" className={`flex items-center gap-2.5 font-display text-xs leading-[.8] tracking-[.14em] ${className}`.trim()}>
      <span>VANILÃO<br /><b className="text-[17px] tracking-[.17em]">ROLEPLAY</b></span>
    </Link>
  )
}
