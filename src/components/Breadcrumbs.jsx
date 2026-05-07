// src/components/Breadcrumbs.jsx
import Link from 'next/link'

export default function Breadcrumbs({ items }) {
  return (
    <nav className="text-sm mb-6" aria-label="Хлебные крошки">
      <ol className="flex flex-wrap items-center gap-1 text-gray-500">
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            {index > 0 && <i className="fa-solid fa-chevron-right text-xs mx-2 text-gray-400" />}
            {item.link ? (
              <Link href={item.link} className="hover:text-green-deep transition-colors">
                {item.label}
              </Link>
            ) : (
              <span className="text-gray-700 font-medium">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
