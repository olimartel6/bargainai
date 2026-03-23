import { useLocation, useNavigate } from 'react-router-dom'
import { Home, Zap, MessageSquare, CreditCard } from 'lucide-react'

var tabs = [
  { path: '/', icon: Home, label: 'Accueil' },
  { path: '/quick', icon: Zap, label: 'Rapide' },
  { path: '/sessions', icon: MessageSquare, label: 'Sessions' },
  { path: '/pricing', icon: CreditCard, label: 'Plans' },
]

export default function BottomNav() {
  var location = useLocation()
  var navigate = useNavigate()

  return (
    <nav className="bottom-nav">
      {tabs.map(function(tab) {
        var Icon = tab.icon
        var active = location.pathname === tab.path
        return (
          <button
            key={tab.path}
            className={'nav-item' + (active ? ' active' : '')}
            onClick={function() { navigate(tab.path) }}
          >
            <Icon size={22} strokeWidth={active ? 2.2 : 1.8} />
            {tab.label}
          </button>
        )
      })}
    </nav>
  )
}
