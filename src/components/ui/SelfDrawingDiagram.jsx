import { motion } from "framer-motion";

export default function SelfDrawingDiagram() {
  return (
    <div style={{ position: "relative", width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <svg 
        width="100%" 
        height="100%" 
        viewBox="0 0 400 400" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        style={{ maxWidth: "400px" }}
      >
        {/* Grid Background */}
        <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1"/>
        </pattern>
        <rect width="400" height="400" fill="url(#grid)" />

        {/* Server Box 1 */}
        <motion.rect 
          x="40" y="40" width="100" height="100" rx="4"
          fill="none" stroke="var(--accent)" strokeWidth="2"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut", delay: 0.2 }}
        />
        <text x="50" y="60" fontFamily="var(--font-mono)" fontSize="10" fill="var(--text-3)">CLIENT_01</text>
        <text x="50" y="75" fontFamily="var(--font-mono)" fontSize="8" fill="rgba(255,255,255,0.2)">REQ_MTLS</text>

        {/* Server Box 2 */}
        <motion.rect 
          x="260" y="40" width="100" height="100" rx="4"
          fill="none" stroke="var(--accent)" strokeWidth="2"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut", delay: 0.6 }}
        />
        <text x="270" y="60" fontFamily="var(--font-mono)" fontSize="10" fill="var(--text-3)">VAULT_NODE</text>
        <text x="270" y="75" fontFamily="var(--font-mono)" fontSize="8" fill="rgba(255,255,255,0.2)">SECURE_ENCLAVE</text>

        {/* Database Box */}
        <motion.rect 
          x="150" y="260" width="100" height="100" rx="4"
          fill="none" stroke="var(--accent-2)" strokeWidth="2"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut", delay: 1.0 }}
        />
        <text x="160" y="280" fontFamily="var(--font-mono)" fontSize="10" fill="var(--text-3)">STATE_DB</text>
        <text x="160" y="295" fontFamily="var(--font-mono)" fontSize="8" fill="rgba(255,255,255,0.2)">ENCRYPTED_AT_REST</text>

        {/* Connecting Lines */}
        <motion.path 
          d="M 140 90 L 260 90" 
          fill="none" stroke="var(--text-2)" strokeWidth="1.5" strokeDasharray="4 4"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "linear", delay: 1.8 }}
        />
        <text x="175" y="85" fontFamily="var(--font-mono)" fontSize="8" fill="var(--accent)">gRPC</text>

        <motion.path 
          d="M 310 140 L 310 200 L 200 200 L 200 260" 
          fill="none" stroke="var(--text-2)" strokeWidth="1.5"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: "linear", delay: 2.2 }}
        />
        <text x="220" y="195" fontFamily="var(--font-mono)" fontSize="8" fill="var(--text-3)">TCP_KEEPALIVE</text>

        {/* Floating Particles (Packets) */}
        <motion.circle 
          r="3" fill="var(--success)"
          animate={{
            x: [140, 260],
            y: [90, 90],
            opacity: [0, 1, 0]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatDelay: 1,
            delay: 3
          }}
        />
      </svg>
    </div>
  );
}
