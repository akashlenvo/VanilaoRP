import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const scrollToHash = (hash) => {
  const target = document.getElementById(decodeURIComponent(hash.replace('#', '')))
  target?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export default function SmoothScroll() {
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    if (!location.hash) return
    const frame = requestAnimationFrame(() => scrollToHash(location.hash))
    return () => cancelAnimationFrame(frame)
  }, [location.hash, location.pathname])

  useEffect(() => {
    const handleAnchorClick = (event) => {
      const link = event.target.closest('a[href]')
      if (!link || event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return

      const url = new URL(link.href, window.location.href)
      if (url.origin !== window.location.origin || !url.hash) return

      event.preventDefault()
      const destination = `${url.pathname}${url.search}${url.hash}`
      navigate(destination)

      if (url.pathname === window.location.pathname) requestAnimationFrame(() => scrollToHash(url.hash))
    }

    document.addEventListener('click', handleAnchorClick)
    return () => document.removeEventListener('click', handleAnchorClick)
  }, [navigate])

  return null
}
