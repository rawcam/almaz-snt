export default function Stats() {
  return (
    <section className="py-16 container mx-auto px-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {[
          { value: '150+', label: 'участков' },
          { value: '24/7', label: 'охрана' },
          { value: '20', label: 'лет доверия' },
          { value: '100%', label: 'прозрачность' },
        ].map((stat, i) => (
          <div
            key={i}
            className="bg-white/60 backdrop-blur-md rounded-2xl p-6 shadow-sm hover:shadow-md transition-all"
          >
            <div className="text-4xl font-semibold text-green-deep">{stat.value}</div>
            <div className="text-gray-500 mt-1">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
