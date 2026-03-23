import { useNavigate } from 'react-router-dom'
import { mockStats, mockSessions } from '../data/mock'
import { Zap, MessageSquare, TrendingDown, Trophy, Target, ArrowRight } from 'lucide-react'

export default function Home() {
  var navigate = useNavigate()

  return (
    <div className="page-content">
      <div className="page-header">
        <div className="logo">Bargain<span>AI</span></div>
      </div>

      <div style={{ textAlign: 'center', padding: '24px 0' }}>
        <h1 style={{ fontSize: 28, fontWeight: 800, marginBottom: 8 }}>
          Negotiate <span className="gradient-text">Smarter</span>
        </h1>
        <p style={{ fontSize: 14, color: 'var(--text-light)', lineHeight: 1.5 }}>
          Upload a screenshot of your conversation. AI suggests what to say next.
        </p>
      </div>

      <div style={{ display: 'flex', gap: 10, marginBottom: 28 }}>
        <button className="btn btn-primary" style={{ flex: 1 }} onClick={function() { navigate('/quick') }}>
          <Zap size={18} /> Quick Mode
        </button>
        <button className="btn btn-secondary" style={{ flex: 1 }} onClick={function() { navigate('/sessions') }}>
          <MessageSquare size={18} /> Sessions
        </button>
      </div>

      <div className="stat-grid">
        <div className="stat-card">
          <div className="stat-number" style={{ color: 'var(--primary-light)' }}>{mockStats.totalNegotiations}</div>
          <div className="stat-label">Negotiations</div>
        </div>
        <div className="stat-card">
          <div className="stat-number" style={{ color: 'var(--success)' }}>{mockStats.avgSaved}%</div>
          <div className="stat-label">Avg. Saved</div>
        </div>
        <div className="stat-card">
          <div className="stat-number" style={{ color: 'var(--warning)' }}>{mockStats.bestDeal}</div>
          <div className="stat-label">Best Deal</div>
        </div>
        <div className="stat-card">
          <div className="stat-number" style={{ color: 'var(--primary-light)' }}>{mockStats.winRate}%</div>
          <div className="stat-label">Win Rate</div>
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
        <div className="section-title" style={{ marginBottom: 0 }}>Active Sessions</div>
        <button className="btn btn-small" style={{ background: 'transparent', color: 'var(--primary-light)', width: 'auto', padding: '4px 0', fontSize: 12 }} onClick={function() { navigate('/sessions') }}>
          View all <ArrowRight size={14} />
        </button>
      </div>

      {mockSessions.filter(function(s) { return s.status === 'active' }).map(function(session) {
        return (
          <div key={session.id} className="session-card">
            <img src={session.thumbnail} alt="" className="session-thumb" />
            <div className="session-info">
              <div className="session-product">{session.product}</div>
              <div className="session-meta">{session.platform} · {session.messages} messages</div>
            </div>
            <div className="session-price">
              <div className="session-asking">{session.askingPrice}$</div>
              <div className="session-target">{session.targetPrice}$</div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
