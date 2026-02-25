import React from 'react';

/* Architecture diagram — Santander Debt Publication Platform
   Shows: UI → BFF → [Domain Services] → [Argentina] [Mexico]
*/
export const SantanderDiagram: React.FC = () => (
  <svg
    viewBox="0 0 560 220"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-label="Santander debt platform architecture: UI layer feeds into BFF which routes to domain services configured per market"
    style={{ width: '100%', maxWidth: 560, height: 'auto' }}
  >
    {/* UI Layer */}
    <rect x="8" y="80" width="100" height="60" rx="8" fill="var(--bg-subtle)" stroke="var(--border-strong)" strokeWidth="1"/>
    <text x="58" y="107" textAnchor="middle" fill="var(--fg)" fontSize="11" fontWeight="600" fontFamily="Inter,sans-serif">UI Layer</text>
    <text x="58" y="122" textAnchor="middle" fill="var(--fg-muted)" fontSize="10" fontFamily="Inter,sans-serif">React / TS</text>

    {/* Arrow 1 */}
    <line x1="108" y1="110" x2="148" y2="110" stroke="var(--accent)" strokeWidth="1.5" strokeDasharray="4 2"/>
    <polygon points="148,106 156,110 148,114" fill="var(--accent)"/>

    {/* BFF */}
    <rect x="156" y="72" width="108" height="76" rx="8" fill="var(--accent-glow)" stroke="var(--accent)" strokeWidth="1.5"/>
    <text x="210" y="102" textAnchor="middle" fill="var(--accent-light)" fontSize="11" fontWeight="700" fontFamily="Inter,sans-serif">BFF Layer</text>
    <text x="210" y="117" textAnchor="middle" fill="var(--fg-muted)" fontSize="10" fontFamily="Inter,sans-serif">Orchestration</text>
    <text x="210" y="131" textAnchor="middle" fill="var(--fg-muted)" fontSize="10" fontFamily="Inter,sans-serif">API contracts</text>

    {/* Arrow 2 */}
    <line x1="264" y1="110" x2="304" y2="110" stroke="var(--accent)" strokeWidth="1.5" strokeDasharray="4 2"/>
    <polygon points="304,106 312,110 304,114" fill="var(--accent)"/>

    {/* Domain Services */}
    <rect x="312" y="48" width="120" height="48" rx="8" fill="var(--bg-subtle)" stroke="var(--border-strong)" strokeWidth="1"/>
    <text x="372" y="70" textAnchor="middle" fill="var(--fg)" fontSize="11" fontWeight="600" fontFamily="Inter,sans-serif">Domain Logic</text>
    <text x="372" y="85" textAnchor="middle" fill="var(--fg-muted)" fontSize="10" fontFamily="Inter,sans-serif">Core debt rules</text>

    <rect x="312" y="124" width="120" height="48" rx="8" fill="var(--bg-subtle)" stroke="var(--border-strong)" strokeWidth="1"/>
    <text x="372" y="146" textAnchor="middle" fill="var(--fg)" fontSize="11" fontWeight="600" fontFamily="Inter,sans-serif">Locale Config</text>
    <text x="372" y="161" textAnchor="middle" fill="var(--fg-muted)" fontSize="10" fontFamily="Inter,sans-serif">AR / MX / ...</text>

    {/* Arrow from BFF to Domain */}
    <line x1="372" y1="96" x2="372" y2="116" stroke="var(--border-strong)" strokeWidth="1" strokeDasharray="3 2"/>
    <polygon points="368,116 372,124 376,116" fill="var(--border-strong)"/>

    {/* Market badges */}
    <rect x="452" y="48" width="96" height="38" rx="8" fill="var(--bg-card)" stroke="var(--border)" strokeWidth="1"/>
    <text x="500" y="63" textAnchor="middle" fill="var(--fg)" fontSize="11" fontFamily="Inter,sans-serif">🇦🇷 Argentina</text>
    <text x="500" y="78" textAnchor="middle" fill="var(--fg-muted)" fontSize="9.5" fontFamily="Inter,sans-serif">Production</text>

    <rect x="452" y="102" width="96" height="38" rx="8" fill="var(--accent-glow)" stroke="var(--accent)" strokeWidth="1"/>
    <text x="500" y="117" textAnchor="middle" fill="var(--accent-light)" fontSize="11" fontFamily="Inter,sans-serif">🇲🇽 Mexico</text>
    <text x="500" y="132" textAnchor="middle" fill="var(--fg-muted)" fontSize="9.5" fontFamily="Inter,sans-serif">Expansion</text>

    {/* Arrows to markets */}
    <line x1="432" y1="72" x2="452" y2="67" stroke="var(--border-strong)" strokeWidth="1"/>
    <line x1="432" y1="148" x2="452" y2="121" stroke="var(--border-strong)" strokeWidth="1"/>

    {/* Labels */}
    <text x="58" y="168" textAnchor="middle" fill="var(--fg-faint)" fontSize="9" fontFamily="Inter,sans-serif">Client</text>
    <text x="210" y="168" textAnchor="middle" fill="var(--accent)" fontSize="9" fontFamily="Inter,sans-serif">Key boundary</text>
    <text x="372" y="190" textAnchor="middle" fill="var(--fg-faint)" fontSize="9" fontFamily="Inter,sans-serif">Market-isolated</text>
    <text x="500" y="158" textAnchor="middle" fill="var(--fg-faint)" fontSize="9" fontFamily="Inter,sans-serif">Configurable</text>
  </svg>
);

/* Architecture diagram — Simplestate White-label Wallet
   Shows: Brand Token Layer → Core Wallet → API
*/
export const SimplestateDiagram: React.FC = () => (
  <svg
    viewBox="0 0 520 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-label="Simplestate white-label architecture: brand tokens and feature flags feed into core wallet UI, connecting to API gateway"
    style={{ width: '100%', maxWidth: 520, height: 'auto' }}
  >
    {/* Brand Config */}
    <rect x="8" y="32" width="110" height="48" rx="8" fill="var(--bg-subtle)" stroke="var(--border-strong)" strokeWidth="1"/>
    <text x="63" y="53" textAnchor="middle" fill="var(--fg)" fontSize="11" fontWeight="600" fontFamily="Inter,sans-serif">Brand Tokens</text>
    <text x="63" y="68" textAnchor="middle" fill="var(--fg-muted)" fontSize="10" fontFamily="Inter,sans-serif">Colors, logos, copy</text>

    <rect x="8" y="104" width="110" height="48" rx="8" fill="var(--bg-subtle)" stroke="var(--border-strong)" strokeWidth="1"/>
    <text x="63" y="125" textAnchor="middle" fill="var(--fg)" fontSize="11" fontWeight="600" fontFamily="Inter,sans-serif">Feature Flags</text>
    <text x="63" y="140" textAnchor="middle" fill="var(--fg-muted)" fontSize="10" fontFamily="Inter,sans-serif">Per-client config</text>

    {/* Arrows to Core */}
    <line x1="118" y1="56" x2="166" y2="80" stroke="var(--border-strong)" strokeWidth="1.5" strokeDasharray="4 2"/>
    <line x1="118" y1="128" x2="166" y2="100" stroke="var(--border-strong)" strokeWidth="1.5" strokeDasharray="4 2"/>
    <polygon points="163,77 170,83 165,87" fill="var(--border-strong)"/>

    {/* Core Wallet */}
    <rect x="170" y="58" width="140" height="68" rx="8" fill="var(--accent-glow)" stroke="var(--accent)" strokeWidth="1.5"/>
    <text x="240" y="85" textAnchor="middle" fill="var(--accent-light)" fontSize="11" fontWeight="700" fontFamily="Inter,sans-serif">Core Wallet UI</text>
    <text x="240" y="100" textAnchor="middle" fill="var(--fg-muted)" fontSize="10" fontFamily="Inter,sans-serif">Component library</text>
    <text x="240" y="115" textAnchor="middle" fill="var(--fg-muted)" fontSize="10" fontFamily="Inter,sans-serif">Strict API contracts</text>

    {/* Arrow to API */}
    <line x1="310" y1="92" x2="350" y2="92" stroke="var(--accent)" strokeWidth="1.5" strokeDasharray="4 2"/>
    <polygon points="350,88 358,92 350,96" fill="var(--accent)"/>

    {/* API Gateway */}
    <rect x="358" y="68" width="100" height="48" rx="8" fill="var(--bg-card)" stroke="var(--border-strong)" strokeWidth="1"/>
    <text x="408" y="89" textAnchor="middle" fill="var(--fg)" fontSize="11" fontWeight="600" fontFamily="Inter,sans-serif">API Gateway</text>
    <text x="408" y="104" textAnchor="middle" fill="var(--fg-muted)" fontSize="10" fontFamily="Inter,sans-serif">Simplestate</text>

    {/* Client logos */}
    <rect x="8" y="170" width="46" height="22" rx="5" fill="var(--bg-card)" stroke="var(--border)" strokeWidth="1"/>
    <text x="31" y="185" textAnchor="middle" fill="var(--fg-muted)" fontSize="9.5" fontFamily="Inter,sans-serif">Client A</text>

    <rect x="62" y="170" width="46" height="22" rx="5" fill="var(--bg-card)" stroke="var(--border)" strokeWidth="1"/>
    <text x="85" y="185" textAnchor="middle" fill="var(--fg-muted)" fontSize="9.5" fontFamily="Inter,sans-serif">Client B</text>

    <rect x="116" y="170" width="46" height="22" rx="5" fill="var(--bg-card)" stroke="var(--border)" strokeWidth="1"/>
    <text x="139" y="185" textAnchor="middle" fill="var(--fg-muted)" fontSize="9.5" fontFamily="Inter,sans-serif">Client N</text>

    <text x="83" y="165" textAnchor="middle" fill="var(--fg-faint)" fontSize="9" fontFamily="Inter,sans-serif">B2B Clients — same core, different config</text>
    <text x="240" y="148" textAnchor="middle" fill="var(--accent)" fontSize="9" fontFamily="Inter,sans-serif">Key boundary</text>
  </svg>
);

/* Architecture diagram — Arena/Web3 payment UIs
   Shows: State Machine → Transaction UI → Wallet Provider → Chain
*/
export const ArenaDiagram: React.FC = () => (
  <svg
    viewBox="0 0 520 190"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-label="Web3 payments UI architecture with state machine, transaction UI, wallet provider, and blockchain"
    style={{ width: '100%', maxWidth: 520, height: 'auto' }}
  >
    {/* State machine */}
    <rect x="8" y="70" width="108" height="50" rx="8" fill="var(--bg-subtle)" stroke="var(--border-strong)" strokeWidth="1"/>
    <text x="62" y="91" textAnchor="middle" fill="var(--fg)" fontSize="11" fontWeight="600" fontFamily="Inter,sans-serif">TX State Machine</text>
    <text x="62" y="106" textAnchor="middle" fill="var(--fg-muted)" fontSize="10" fontFamily="Inter,sans-serif">idle→sign→confirm</text>

    <line x1="116" y1="95" x2="152" y2="95" stroke="var(--accent)" strokeWidth="1.5" strokeDasharray="4 2"/>
    <polygon points="152,91 160,95 152,99" fill="var(--accent)"/>

    {/* Transaction UI */}
    <rect x="160" y="58" width="120" height="74" rx="8" fill="var(--accent-glow)" stroke="var(--accent)" strokeWidth="1.5"/>
    <text x="220" y="82" textAnchor="middle" fill="var(--accent-light)" fontSize="11" fontWeight="700" fontFamily="Inter,sans-serif">Transaction UI</text>
    <text x="220" y="97" textAnchor="middle" fill="var(--fg-muted)" fontSize="10" fontFamily="Inter,sans-serif">Progressive disclosure</text>
    <text x="220" y="112" textAnchor="middle" fill="var(--fg-muted)" fontSize="10" fontFamily="Inter,sans-serif">Irreversible-action UX</text>
    <text x="220" y="123" textAnchor="middle" fill="var(--fg-muted)" fontSize="10" fontFamily="Inter,sans-serif">Clear error states</text>

    <line x1="280" y1="95" x2="316" y2="95" stroke="var(--border-strong)" strokeWidth="1.5" strokeDasharray="4 2"/>
    <polygon points="316,91 324,95 316,99" fill="var(--border-strong)"/>

    {/* Wallet provider */}
    <rect x="324" y="70" width="104" height="50" rx="8" fill="var(--bg-card)" stroke="var(--border-strong)" strokeWidth="1"/>
    <text x="376" y="91" textAnchor="middle" fill="var(--fg)" fontSize="11" fontWeight="600" fontFamily="Inter,sans-serif">Wallet Provider</text>
    <text x="376" y="106" textAnchor="middle" fill="var(--fg-muted)" fontSize="10" fontFamily="Inter,sans-serif">ethers.js / Web3</text>

    <line x1="428" y1="95" x2="460" y2="95" stroke="var(--border-strong)" strokeWidth="1.5" strokeDasharray="4 2"/>
    <polygon points="460,91 468,95 460,99" fill="var(--border-strong)"/>

    {/* Chain */}
    <rect x="468" y="70" width="44" height="50" rx="8" fill="var(--bg-card)" stroke="var(--border)" strokeWidth="1"/>
    <text x="490" y="93" textAnchor="middle" fill="var(--fg-muted)" fontSize="10" fontFamily="Inter,sans-serif">On</text>
    <text x="490" y="107" textAnchor="middle" fill="var(--fg-muted)" fontSize="10" fontFamily="Inter,sans-serif">Chain</text>

    {/* Labels */}
    <text x="62" y="150" textAnchor="middle" fill="var(--fg-faint)" fontSize="9" fontFamily="Inter,sans-serif">Correctness first</text>
    <text x="220" y="155" textAnchor="middle" fill="var(--accent)" fontSize="9" fontFamily="Inter,sans-serif">Key boundary</text>
    <text x="376" y="150" textAnchor="middle" fill="var(--fg-faint)" fontSize="9" fontFamily="Inter,sans-serif">Abstracted</text>
  </svg>
);
