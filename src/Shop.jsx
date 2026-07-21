import { motion } from 'framer-motion'
import { ArrowRight, Check, Crown, Sparkles } from 'lucide-react'
import SiteFooter from './components/layout/SiteFooter'
import SiteHeader from './components/layout/SiteHeader'

const cashProducts = [
  ['1M 200K', 'R$ 317,90', '/assets/cash-1200k.png', 'O maior impulso para sua jornada.'],
  ['500K', 'R$ 179,90', '/assets/cash-500k.png', 'Saldo direto na sua conta.'],
  ['250K', 'R$ 97,90', '/assets/cash-250k.png', 'Mais liberdade para a sua história.'],
  ['100K', 'R$ 49,90', '/assets/cash-100k.png', 'O primeiro passo para evoluir.'],
]

export default function Shop() {
  return <div className="shop-page">
    <SiteHeader className="shop-header absolute top-0 z-20 border-0 bg-transparent" activePath="/loja" />
    <main>
      <section className="shop-hero"><div><p className="shop-kicker">VANILÃO ROLEPLAY / LOJA OFICIAL</p><h1>IMPULSIONE<br /><em>SUA JORNADA.</em></h1><p>Escolha o pacote ideal, receba em minutos após a aprovação e aproveite o Vanilão com ainda mais possibilidades.</p><a href="#cash" className="shop-button">Ver pacotes <ArrowRight size={17} /></a></div><div className="shop-hero-art"><img src="/assets/vanilao-patch.png" alt="Arte da loja do Vanilão Roleplay" /></div></section>
      <section id="cash" className="shop-section"><div className="shop-heading"><div><p className="shop-kicker">CASH IN-GAME</p><h2>ESCOLHA O SEU<br /><em>PACOTE DE CASH.</em></h2></div><p>Saldo entregue diretamente na sua conta. A confirmação do pagamento e a entrega acontecem pelo Discord.</p></div><div className="cash-grid">{cashProducts.map(([amount, price, image, description], index) => <motion.article initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * .08 }} className={index === 0 ? 'cash-card cash-featured' : 'cash-card'} key={amount}><img src={image} alt={`Pacote ${amount} Cash`} /><div className="cash-card-body"><span>Saldo in-game</span><h3>{amount}</h3><p>{description}</p><div><b>{price}</b><a href="https://discord.com" target="_blank" rel="noreferrer" aria-label={`Comprar ${amount}`}>Comprar <ArrowRight size={15} /></a></div></div></motion.article>)}</div><div className="delivery-note"><p><b>Entrega rápida.</b> Seu saldo é creditado em minutos assim que o pagamento for aprovado.</p></div></section>
      <section className="shop-vip"><div className="vip-image"><img src="/assets/vip-character.png" alt="Personagem exclusivo do Vanilão Roleplay" /></div><div className="vip-content"><p className="shop-kicker"><Crown size={14} /> VANILÃO VIP</p><h2>SEU PASSE PARA<br /><em>MAIS POSSIBILIDADES.</em></h2><p className="vip-description">30 dias de vantagens exclusivas, com cooldown de 1 hora e prioridade para a sua jornada no servidor.</p><ul>{['Grupo privado e canais exclusivos com a Staff','Interações e conteúdos antecipados','Possibilidade de cargos institucionais (Governo)','Entrada prioritária garantida no servidor','R$ 5.000 extras a cada 1 hora jogada','NPC e itens cosméticos exclusivos'].map((item) => <li key={item}><Check size={16} />{item}</li>)}</ul><div className="vip-price"><div><small>APENAS</small><b>R$ 37,90<em>/mês</em></b></div><a href="https://discord.com" target="_blank" rel="noreferrer">Assinar VIP <ArrowRight size={16} /></a></div></div></section>
    </main><SiteFooter className="shop-footer" compact />
  </div>
}
