const STATS = [
  { number: '3+',  label: 'Years experience' },
  { number: '25+', label: 'Components built' },
  { number: '20+', label: 'APIs integrated' },
  { number: '3',   label: 'Personal projects' },
]

export default function Stats() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 py-10 border-t border-b border-gray-200 dark:border-neutral-700 mb-12">
      {STATS.map((stat) => (
        <div
          key={stat.label}
          className="bg-gray-50 dark:bg-neutral-800 border border-gray-200 dark:border-neutral-700 rounded-lg px-5 py-4"
        >
          <div className="text-2xl font-semibold leading-none mb-1">{stat.number}</div>
          <div className="text-xs text-gray-500 dark:text-gray-400">{stat.label}</div>
        </div>
      ))}
    </div>
  )
}