import { mockSessions } from '../data/mock'
import { Plus, MessageSquare } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

export default function Sessions() {
  var navigate = useNavigate()

  return (
    <div className="page-content">
      <div className="page-header">
        <div className="page-title">Sessions</div>
        <button className="btn btn-primary btn-small" onClick={function() { navigate('/quick') }}>
          <Plus size={16} /> New
        </button>
      </div>

      <p style={{ fontSize: 14, color: 'var(--text-light)', marginBottom: 24, lineHeight: 1.5 }}>
        Track ongoing negotiations. Add screenshots as the conversation evolves.
      </p>

      <div className="section-title">Active</div>
      {mockSessions.filter(function(s) { return s.status === 'active' }).map(function(session) {
        return (
          <div key={session.id} className="session-card" onClick={function() { navigate('/quick') }}>
            <img src={session.thumbnail} alt="" className="session-thumb" />
            <div className="session-info">
              <div className="session-product">{session.product}</div>
              <div className="session-meta">
                {session.platform} · {session.messages} msgs · {session.lastUpdate}
              </div>
              <span className="badge badge-active" style={{ marginTop: 6 }}>Active</span>
            </div>
            <div className="session-price">
              <div className="session-asking">{session.askingPrice}$</div>
              <div className="session-target">{session.targetPrice}$</div>
            </div>
          </div>
        )
      })}

      <div className="section-title" style={{ marginTop: 24 }}>Completed</div>
      {mockSessions.filter(function(s) { return s.status === 'won' }).map(function(session) {
        var saved = Math.round((1 - session.targetPrice / session.askingPrice) * 100)
        return (
          <div key={session.id} className="session-card">
            <img src={session.thumbnail} alt="" className="session-thumb" />
            <div className="session-info">
              <div className="session-product">{session.product}</div>
              <div className="session-meta">
                {session.platform} · {session.messages} msgs
              </div>
              <span className="badge badge-won" style={{ marginTop: 6 }}>Saved {saved}%</span>
            </div>
            <div className="session-price">
              <div className="session-asking">{session.askingPrice}$</div>
              <div className="session-target">{session.targetPrice}$</div>
            </div>
          </div>
        )
      })}

      {mockSessions.length === 0 && (
        <div style={{ textAlign: 'center', padding: 40 }}>
          <MessageSquare size={40} color="var(--text-muted)" style={{ marginBottom: 16 }} />
          <p style={{ color: 'var(--text-muted)' }}>No sessions yet. Start your first negotiation!</p>
        </div>
      )}
    </div>
  )
}
