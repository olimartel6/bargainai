import { useState } from 'react'
import { Check, Zap, Crown } from 'lucide-react'

var plans = [
  {
    name: 'Free',
    price: '0',
    period: '',
    features: [
      '3 analyses per day',
      'Quick mode only',
      'Basic suggestions',
    ],
    cta: 'Current Plan',
    featured: false,
    disabled: true,
  },
  {
    name: 'Pro',
    price: '9.99',
    period: '/month',
    features: [
      'Unlimited analyses',
      'Quick mode + Sessions',
      '3 response styles (Bold, Moderate, Safe)',
      'Conversation history',
      'Priority AI responses',
    ],
    cta: 'Start Free Trial',
    featured: true,
    disabled: false,
  },
  {
    name: 'Lifetime',
    price: '79',
    period: 'one-time',
    features: [
      'Everything in Pro',
      'Forever access',
      'Early access to new features',
      'No recurring fees',
    ],
    cta: 'Get Lifetime',
    featured: false,
    disabled: false,
  },
]

export default function Pricing() {
  var [toast, setToast] = useState(null)

  function showToast(msg) { setToast(msg); setTimeout(function() { setToast(null) }, 2500) }

  return (
    <div className="page-content">
      {toast ? <div className="toast">{toast}</div> : null}

      <div style={{ textAlign: 'center', padding: '20px 0 28px' }}>
        <h1 style={{ fontSize: 24, fontWeight: 800, marginBottom: 8 }}>
          Choose Your <span className="gradient-text">Plan</span>
        </h1>
        <p style={{ fontSize: 14, color: 'var(--text-light)', lineHeight: 1.5 }}>
          Start free. Upgrade when you're ready to negotiate like a pro.
        </p>
      </div>

      {plans.map(function(plan, idx) {
        return (
          <div key={idx} className={'pricing-card' + (plan.featured ? ' featured' : '')}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
              {plan.featured ? <Crown size={18} color="var(--primary-light)" /> : null}
              <div style={{ fontSize: 18, fontWeight: 700 }}>{plan.name}</div>
            </div>
            <div className="pricing-amount">
              <span style={{ fontSize: 20, verticalAlign: 'top' }}>$</span>
              {plan.price}
            </div>
            {plan.period ? <div className="pricing-period">{plan.period}</div> : null}

            <ul className="pricing-features">
              {plan.features.map(function(feat, i) {
                return (
                  <li key={i}>
                    <Check size={16} color="var(--success)" /> {feat}
                  </li>
                )
              })}
            </ul>

            <button
              className={'btn ' + (plan.featured ? 'btn-primary' : 'btn-secondary')}
              disabled={plan.disabled}
              onClick={function() { showToast('Demo — payment coming soon!') }}
            >
              {plan.featured ? <Zap size={16} /> : null}
              {plan.cta}
            </button>
          </div>
        )
      })}
    </div>
  )
}
