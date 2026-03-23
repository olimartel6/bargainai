import { useState, useRef } from 'react'
import { mockQuickResult } from '../data/mock'
import { Upload, Image, Copy, Check, Loader, DollarSign, Tag } from 'lucide-react'

export default function QuickMode() {
  var [screenshot, setScreenshot] = useState(null)
  var [screenshotPreview, setScreenshotPreview] = useState(null)
  var [context, setContext] = useState('')
  var [askingPrice, setAskingPrice] = useState('')
  var [targetPrice, setTargetPrice] = useState('')
  var [result, setResult] = useState(null)
  var [loading, setLoading] = useState(false)
  var [copied, setCopied] = useState(null)
  var [toast, setToast] = useState(null)
  var fileRef = useRef(null)

  function showToast(msg) { setToast(msg); setTimeout(function() { setToast(null) }, 2500) }

  function handleFile(e) {
    var file = e.target.files[0]
    if (file) {
      setScreenshot(file)
      var reader = new FileReader()
      reader.onload = function(ev) { setScreenshotPreview(ev.target.result) }
      reader.readAsDataURL(file)
    }
  }

  function handleAnalyze() {
    if (!screenshot) return
    setLoading(true)
    setTimeout(function() {
      setResult(mockQuickResult)
      setLoading(false)
    }, 2000)
  }

  function handleCopy(idx, text) {
    try { navigator.clipboard.writeText(text) } catch(e) {}
    setCopied(idx)
    showToast('Response copied!')
    setTimeout(function() { setCopied(null) }, 2000)
  }

  if (result) {
    return (
      <div className="page-content">
        {toast ? <div className="toast">{toast}</div> : null}

        <div className="page-header">
          <div className="page-title">AI Suggestions</div>
          <button className="btn btn-small btn-secondary" onClick={function() { setResult(null); setScreenshot(null); setScreenshotPreview(null) }}>
            New
          </button>
        </div>

        <div className="card" style={{ padding: 16, marginBottom: 20 }}>
          <div style={{ fontSize: 13, color: 'var(--text-muted)', marginBottom: 6, textTransform: 'uppercase', letterSpacing: 0.5, fontWeight: 600 }}>Context detected</div>
          <p style={{ fontSize: 14, color: 'var(--text-light)', lineHeight: 1.5 }}>{result.context}</p>
        </div>

        <div className="section-title">Choose your approach</div>

        {result.responses.map(function(resp, idx) {
          return (
            <div key={idx} className="response-card">
              <div className="response-label" style={{ background: resp.color + '20', color: resp.color }}>
                {resp.label}
              </div>
              <div className="response-message">{resp.message}</div>
              <div className="response-tip">{resp.tip}</div>
              <button
                className="btn btn-secondary btn-small"
                style={{ marginTop: 14, width: '100%' }}
                onClick={function() { handleCopy(idx, resp.message) }}
              >
                {copied === idx ? <span><Check size={14} /> Copied!</span> : <span><Copy size={14} /> Copy response</span>}
              </button>
            </div>
          )
        })}
      </div>
    )
  }

  return (
    <div className="page-content">
      <div className="page-header">
        <div className="page-title">Quick Mode</div>
      </div>

      <p style={{ fontSize: 14, color: 'var(--text-light)', marginBottom: 24, lineHeight: 1.5 }}>
        Upload a screenshot of your negotiation. AI will analyze it and suggest what to say.
      </p>

      <div className="section-title">Screenshot</div>
      <div
        className={'upload-area' + (screenshotPreview ? ' has-image' : '')}
        onClick={function() { fileRef.current.click() }}
      >
        {screenshotPreview ? (
          <img src={screenshotPreview} alt="Screenshot" />
        ) : (
          <div>
            <Upload size={32} color="var(--text-muted)" style={{ marginBottom: 12 }} />
            <p style={{ fontSize: 15, fontWeight: 600, color: 'var(--text)', marginBottom: 4 }}>
              Tap to upload screenshot
            </p>
            <p style={{ fontSize: 13, color: 'var(--text-muted)' }}>
              PNG, JPG — conversation screenshot
            </p>
          </div>
        )}
        <input ref={fileRef} type="file" accept="image/*" style={{ display: 'none' }} onChange={handleFile} />
      </div>

      <div style={{ marginTop: 20 }}>
        <div className="input-group">
          <label>Context (optional)</label>
          <textarea
            placeholder="Ex: I'm buying a MacBook, seller asks $1800, I want to pay $1400..."
            value={context}
            onChange={function(e) { setContext(e.target.value) }}
          />
        </div>

        <div style={{ display: 'flex', gap: 10 }}>
          <div className="input-group" style={{ flex: 1 }}>
            <label>Asking price</label>
            <input type="number" placeholder="1800" value={askingPrice} onChange={function(e) { setAskingPrice(e.target.value) }} />
          </div>
          <div className="input-group" style={{ flex: 1 }}>
            <label>Your target</label>
            <input type="number" placeholder="1400" value={targetPrice} onChange={function(e) { setTargetPrice(e.target.value) }} />
          </div>
        </div>
      </div>

      <button
        className="btn btn-primary"
        disabled={!screenshot || loading}
        onClick={handleAnalyze}
      >
        {loading ? <span><Loader size={18} className="spin" /> Analyzing...</span> : <span><Zap size={18} /> Analyze & Suggest</span>}
      </button>
    </div>
  )
}
