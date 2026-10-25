import React, { useState } from 'react';

export const GraphVisualizer: React.FC = () => {
  const [nodeCount, setNodeCount] = useState<number>(5);
  const [isComplete, setIsComplete] = useState<boolean>(false);

  // Generate nodes in a circle
  const nodes = Array.from({ length: nodeCount }, (_, i) => {
    const angle = (i * 2 * Math.PI) / nodeCount - Math.PI / 2;
    const r = 100;
    return {
      id: i + 1,
      x: 140 + r * Math.cos(angle),
      y: 130 + r * Math.sin(angle),
    };
  });

  // Calculate edges
  const edges: { from: number; to: number }[] = [];
  if (isComplete) {
    for (let i = 0; i < nodeCount; i++) {
      for (let j = i + 1; j < nodeCount; j++) {
        edges.push({ from: i, to: j });
      }
    }
  } else {
    // Cycle graph
    for (let i = 0; i < nodeCount; i++) {
      edges.push({ from: i, to: (i + 1) % nodeCount });
    }
  }

  const maxEdges = (nodeCount * (nodeCount - 1)) / 2;

  return (
    <div className="bg-omp-card border border-omp-border rounded-xl p-4 my-4 text-white">
      <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
        <div>
          <h4 className="font-mono text-sm text-omp-accent font-semibold uppercase tracking-wider">
            Interaktív Gráf Szimulátor
          </h4>
          <p className="text-xs text-omp-muted">
            {isComplete ? `Teljes gráf (K_${nodeCount})` : `Körgráf (C_${nodeCount})`} • Élek száma: {edges.length} (Max: {maxEdges})
          </p>
        </div>
        <div className="flex items-center gap-3">
          <label className="text-xs text-omp-muted flex items-center gap-2">
            Csúcsok (n):
            <input
              type="range"
              min="3"
              max="8"
              value={nodeCount}
              onChange={(e) => setNodeCount(parseInt(e.target.value))}
              className="accent-omp-accent cursor-pointer"
            />
            <span className="font-mono font-bold text-white w-4">{nodeCount}</span>
          </label>
          <button
            onClick={() => setIsComplete(!isComplete)}
            className={`text-xs px-3 py-1.5 rounded-lg border font-mono transition-all ${
              isComplete
                ? 'bg-omp-accent/20 border-omp-accent text-omp-accent'
                : 'bg-omp-dark border-omp-border text-gray-300 hover:border-gray-500'
            }`}
          >
            {isComplete ? 'Teljes gráf (K_n)' : 'Kör (C_n)'}
          </button>
        </div>
      </div>

      <div className="relative w-full h-[280px] bg-omp-dark/80 rounded-lg border border-omp-border flex items-center justify-center overflow-hidden">
        <svg className="w-full h-full max-w-[320px] max-h-[260px]">
          {/* Edges */}
          {edges.map((edge, idx) => {
            const source = nodes[edge.from];
            const target = nodes[edge.to];
            return (
              <line
                key={idx}
                x1={source.x}
                y1={source.y}
                x2={target.x}
                y2={target.y}
                stroke={isComplete ? '#06b6d4' : '#10b981'}
                strokeWidth="2"
                strokeOpacity="0.7"
                className="transition-all duration-300"
              />
            );
          })}

          {/* Nodes */}
          {nodes.map((node) => (
            <g key={node.id} className="transition-all duration-300">
              <circle
                cx={node.x}
                cy={node.y}
                r="16"
                fill="#121215"
                stroke={isComplete ? '#06b6d4' : '#10b981'}
                strokeWidth="2.5"
                className="hover:scale-110 transition-transform cursor-pointer"
              />
              <text
                x={node.x}
                y={node.y + 4}
                fill="#ffffff"
                fontSize="12"
                fontWeight="bold"
                textAnchor="middle"
                className="select-none pointer-events-none font-mono"
              >
                {node.id}
              </text>
            </g>
          ))}
        </svg>
      </div>

      <div className="mt-3 space-y-1 text-xs text-omp-muted bg-omp-dark p-2.5 rounded-lg border border-omp-border/50 font-mono">
        <div>
          <span className="text-omp-accent font-semibold">Fokszámtétel:</span>{' '}
          Σ deg(v) = 2E = {2 * edges.length}
          {isComplete
            ? ` (K_${nodeCount}: minden fok ${nodeCount - 1})`
            : ` (C_${nodeCount}: minden fok 2 → Euler-kör létezik)`}
        </div>
        <div>
          <span className="text-omp-accent font-semibold">Euler-formula:</span> V − E + F = 2 csak összefüggő,
          síkbarajzolt gráfra (K₅, K₃,₃ nem síkbarajzolható).
        </div>
      </div>
    </div>
  );
};
