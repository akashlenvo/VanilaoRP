import { ArrowRight, Menu, X } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import BrandLogo from '../BrandLogo'

const navigation = [['Como jogar', '/#como-jogar'], ['Equipe', '/#equipe'], ['Loja', '/loja'], ['Documentação', '/docs']]

export default function SiteHeader({ className = '', activePath }) {
  const [isOpen, setIsOpen] = useState(false)
  const closeMenu = () => setIsOpen(false)
  return <>
    <header className={`site-header flex h-[82px] w-full items-center justify-between px-[6vw] ${className}`.trim()}>
      <BrandLogo />
      <nav className="hidden items-center gap-7 text-xs text-slate-200 md:flex" aria-label="Navegação principal">{navigation.map(([label, to]) => <Link key={to} to={to} className={`transition hover:text-sky-300 ${activePath === to ? 'text-sky-300' : ''}`}>{label}</Link>)}</nav>
      <a className="hidden items-center gap-3 bg-blue-500 px-3 py-2.5 text-[10px] font-extrabold uppercase tracking-wider text-white transition hover:bg-sky-400 md:inline-flex" href="https://discord.com" target="_blank" rel="noreferrer">Entrar no Discord <ArrowRight size={13} /></a>
      <button className="md:hidden" onClick={() => setIsOpen(true)} aria-label="Abrir menu"><Menu /></button>
    </header>
    <AnimatePresence>{isOpen && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex flex-col bg-[#060913] p-8"><button onClick={closeMenu} className="ml-auto" aria-label="Fechar menu"><X /></button><nav className="mt-20 flex flex-col gap-7 font-display text-4xl uppercase" aria-label="Navegação móvel">{navigation.map(([label, to]) => <Link key={to} onClick={closeMenu} to={to}>{label}</Link>)}</nav><a className="mt-auto inline-flex items-center justify-center gap-4 bg-blue-500 px-5 py-4 text-xs font-extrabold uppercase tracking-wider text-white" href="https://discord.com" target="_blank" rel="noreferrer">Entrar no Discord <ArrowRight size={17} /></a></motion.div>}</AnimatePresence>
  </>
}
