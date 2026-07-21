import { AlertTriangle, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

export default function SiteNotice() {
  const { pathname } = useLocation()
  const [isOpen, setIsOpen] = useState(true)

  useEffect(() => setIsOpen(true), [pathname])

  if (!isOpen) return null

  return <div className="fixed inset-0 z-[100] grid place-items-center bg-[#020611]/80 p-5 backdrop-blur-sm" role="dialog" aria-modal="true" aria-labelledby="site-notice-title">
    <div className="relative w-full max-w-md border border-sky-300/30 bg-[#0a1425] p-7 shadow-2xl sm:p-9">
      <button onClick={() => setIsOpen(false)} className="absolute right-4 top-4 text-slate-400 transition hover:text-white" aria-label="Fechar aviso"><X size={18} /></button>
      <AlertTriangle className="mb-5 text-sky-300" size={28} />
      <p className="eyebrow">AVISO IMPORTANTE</p>
      <h2 id="site-notice-title" className="heading text-4xl">SITE NÃO <em>OFICIAL.</em></h2>
      <p className="mt-5 text-sm leading-7 text-slate-300">Este site foi desenvolvido exclusivamente para fins de aprendizado. Todos os direitos, marcas e conteúdos pertencem ao Vanilão Roleplay.</p>
      <button onClick={() => setIsOpen(false)} className="mt-7 w-full bg-blue-500 px-5 py-3 text-xs font-extrabold uppercase tracking-wider text-white transition hover:bg-sky-400">Entendi</button>
    </div>
  </div>
}
