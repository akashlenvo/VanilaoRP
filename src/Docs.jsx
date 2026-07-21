import { AnimatePresence, motion } from 'framer-motion'
import { BookOpen, ChevronDown, ChevronRight, Command, FileText, Gavel, GraduationCap, Menu, Search, Shield, Sparkles, X } from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { penalCode } from './data/penalCode'

const sections = [
  { id: 'introducao', label: 'Comece aqui', icon: GraduationCap },
  { id: 'codigo-penal', label: 'Código Penal', icon: Gavel },
  { id: 'agravantes', label: 'Agravantes e atenuantes', icon: Shield },
  { id: 'comandos', label: 'Comandos', icon: Command },
  { id: 'vip', label: 'Vanilão VIP', icon: Sparkles },
]

const groups = [
  ['Crimes leves e trânsito', penalCode.slice(0, 10)],
  ['Armas e crimes contra pessoas', penalCode.slice(10, 20)],
  ['Patrimônio e itens ilegais', penalCode.slice(20, 28)],
  ['Estado e crimes organizados', penalCode.slice(28)],
]

function Mark({ children }) { return <span className="docs-mark">{children}</span> }

export default function NewDocs() {
  const [active, setActive] = useState('introducao')
  const [query, setQuery] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)
  const [openCrime, setOpenCrime] = useState(null)
  const results = useMemo(() => penalCode.filter(([name, text]) => `${name} ${text}`.toLowerCase().includes(query.toLowerCase())), [query])

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
      if (visible) setActive(visible.target.id)
    }, { rootMargin: '-22% 0px -62% 0px', threshold: [0.01, .3, .7] })
    sections.forEach(({ id }) => document.getElementById(id) && observer.observe(document.getElementById(id)))
    const markLastAtBottom = () => {
      if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 8) setActive(sections.at(-1).id)
    }
    window.addEventListener('scroll', markLastAtBottom, { passive: true })
    window.addEventListener('resize', markLastAtBottom)
    markLastAtBottom()
    return () => { observer.disconnect(); window.removeEventListener('scroll', markLastAtBottom); window.removeEventListener('resize', markLastAtBottom) }
  }, [])

  const jump = (id) => { document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' }); setMenuOpen(false) }
  const sidebar = <nav className="docs-tree" aria-label="Navegação da documentação"><p className="docs-tree-label">DOCUMENTAÇÃO</p>{sections.map(({ id, label, icon: Icon }) => <button onClick={() => jump(id)} className={active === id ? 'is-current' : ''} key={id}><Icon size={15} /><span>{label}</span><ChevronRight size={14} /></button>)}<div className="docs-tree-divider" /><p className="docs-tree-label">LINKS</p><Link to="/"><FileText size={15} />Página inicial</Link><a href="https://discord.com" target="_blank" rel="noreferrer"><Sparkles size={15} />Entrar no Discord</a></nav>

  return <div className="fumadocs-shell">
    <header className="docs-topbar"><Link className="docs-brand" to="/"><b>VANILÃO<br />ROLEPLAY</b></Link><button onClick={() => setMenuOpen(true)} className="docs-menu" aria-label="Abrir navegação"><Menu size={20} /></button><div className="docs-search"><Search size={17} /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Buscar no Código Penal..." /></div><div className="docs-top-links"><Link to="/">Início</Link><Link to="/loja">Loja</Link><a href="https://discord.com" target="_blank" rel="noreferrer">Discord ↗</a></div></header>
    <AnimatePresence>{menuOpen && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="docs-mobile-menu"><button onClick={() => setMenuOpen(false)} className="ml-auto"><X /></button>{sidebar}</motion.div>}</AnimatePresence>
    <main className="docs-layout"><aside>{sidebar}</aside><article className="docs-article">
      {query ? <section className="docs-search-results"><p className="docs-kicker">RESULTADOS DE BUSCA</p><h1>Encontramos <Mark>{results.length} regras</Mark></h1><p>Resultados para “{query}”.</p><div className="docs-rule-list">{results.map(([title, text]) => <Crime key={title} title={title} text={text} open={openCrime === title} toggle={() => setOpenCrime(openCrime === title ? null : title)} />)}</div></section> : <>
      <section id="introducao" className="docs-page-section"><p className="docs-kicker">VANILÃO ROLEPLAY / DOCUMENTAÇÃO</p><h1>O GUIA PARA<br /><Mark>VIVER A CIDADE.</Mark></h1><p className="docs-intro">A central de referência oficial do Vanilão Roleplay. Aqui você encontra as regras, o Código Penal, os comandos e tudo que precisa para construir uma boa história.</p><div className="docs-callout"><BookOpen size={20} /><p><b>Antes de começar</b>Todo jogador é responsável por conhecer as regras. As ações realizadas dentro do servidor podem ser consideradas dentro do roleplay quando houver prova, denúncia ou flagrante.</p></div><div className="docs-shortcuts">{sections.slice(1).map(({ id, label, icon: Icon }, index) => <button key={id} onClick={() => jump(id)}><span>0{index + 1}</span><Icon size={18} /><b>{label}</b><ChevronRight size={15} /></button>)}</div></section>
      <section id="codigo-penal" className="docs-page-section"><p className="docs-kicker">LEIS DA CIDADE</p><h2>CÓDIGO <Mark>PENAL.</Mark></h2><p className="docs-body">Tempo máximo para prisão: <b>1 hora</b>. As penas podem ser aumentadas em caso de reincidência, fuga de abordagem, desacato ou diversos crimes em uma mesma ocorrência.</p>{groups.map(([group, crimes]) => <div className="docs-code-group" key={group}><h3>{group}</h3><div className="docs-rule-list">{crimes.map(([title, text]) => <Crime key={title} title={title} text={text} open={openCrime === title} toggle={() => setOpenCrime(openCrime === title ? null : title)} />)}</div></div>)}</section>
      <section id="agravantes" className="docs-page-section"><p className="docs-kicker">DOSIMETRIA</p><h2>AGRAVANTES E<br /><Mark>ATENUANTES.</Mark></h2><div className="docs-columns"><div><h3>Agravantes</h3><p>Reincidência; fuga ou resistência; uso de reféns; armamento pesado; crime contra policial ou novatos; crime em local público; destruição de provas e participação em grupo criminoso.</p><b>Recomendação: +10 a +30 minutos.</b></div><div><h3>Atenuantes</h3><p>Cooperar com a polícia; entregar-se voluntariamente; confessar; devolver itens roubados; pagar indenização e não possuir antecedentes.</p><b>Redução recomendada: até 70%.</b></div></div></section>
      <section id="comandos" className="docs-page-section"><p className="docs-kicker">DENTRO DO SERVIDOR</p><h2>COMANDOS<br /><Mark>ESSENCIAIS.</Mark></h2><div className="docs-command-table">{[['/ajuda','Mostra a lista de comandos disponíveis.'],['/report [mensagem]','Envia um pedido de ajuda para a equipe.'],['/me [ação]','Descreve uma ação do seu personagem.'],['/do [situação]','Descreve um estado, objeto ou situação ao redor.']].map(([command, description]) => <div key={command}><code>{command}</code><p>{description}</p></div>)}</div></section>
      <section id="vip" className="docs-page-section"><p className="docs-kicker">ASSINATURA</p><h2>VANILÃO <Mark>VIP.</Mark></h2><div className="docs-vip"><div><span>R$ 37,90</span><small>/ MÊS · DURAÇÃO DE 30 DIAS</small><p>Cooldown de 1 hora. Uma assinatura para dar mais profundidade à sua jornada.</p></div><ul>{['Grupo privado e canais exclusivos com a Staff','Interações e conteúdos antecipados','Possibilidade de cargos institucionais (Governo)','Entrada prioritária no servidor','Salário extra de R$ 5.000 por hora jogada','NPC com itens cosméticos exclusivos'].map((item) => <li key={item}>✦ {item}</li>)}</ul><a href="https://discord.com" target="_blank" rel="noreferrer">Assinar pelo Discord <ChevronRight size={16} /></a></div></section>
      </>}
    </article><aside className="docs-on-this-page"><p>NESTA PÁGINA</p>{sections.map(({ id, label }) => <button className={active === id ? 'is-current' : ''} onClick={() => jump(id)} key={id}>{label}</button>)}</aside></main>
  </div>
}

function Crime({ title, text, open, toggle }) { return <div className={open ? 'docs-crime is-open' : 'docs-crime'}><button onClick={toggle}><span>{title.split(' · ')[0]}</span><b>{title.split(' · ')[1]}</b><ChevronDown size={16} /></button><AnimatePresence>{open && <motion.p initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: .2 }}>{text}</motion.p>}</AnimatePresence></div> }
