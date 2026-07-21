import { Link } from 'react-router-dom'
import BrandLogo from '../BrandLogo'

export default function SiteFooter({ className = '', compact = false }) {
  return <footer className={`flex flex-col items-center justify-between gap-5 border-t border-white/10 bg-[#040712] px-[7vw] py-9 text-[9px] uppercase tracking-wider text-slate-500 md:flex-row ${className}`.trim()}><BrandLogo /><p>© 2026 Vanilão Roleplay{compact ? '' : '. Feito para sobreviventes.'}</p><div className="flex gap-5"><Link to="/loja">Loja</Link><Link to="/docs">Documentação</Link></div></footer>
}
