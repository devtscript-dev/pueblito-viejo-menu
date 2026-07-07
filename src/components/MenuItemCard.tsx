import type { MenuItem } from "../data/types";
import { formatPrice } from "../utils/formatPrice";
import { MediaFrame } from "./MediaFrame";

export function MenuItemCard({ item }: { item: MenuItem }) {
  return (
    <article className="flex gap-4 rounded-xl bg-white/90 p-3 shadow-sm ring-1 ring-terracotta-100 transition-shadow hover:shadow-md">
      <MediaFrame name={item.name} image={item.image} video={item.video} className="h-20 w-20 shrink-0 rounded-lg" />

      <div className="flex flex-1 flex-col">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-display text-lg leading-tight text-terracotta-900">{item.name}</h3>
          <div className="flex shrink-0 flex-wrap justify-end gap-1">
            {item.prices.map((p, i) => (
              <span key={i} className="price-tag rounded px-2 py-0.5 text-sm">
                {formatPrice(p.amount)}
              </span>
            ))}
          </div>
        </div>
        {item.description && (
          <p className="mt-1 font-body text-sm text-terracotta-700/80">{item.description}</p>
        )}
      </div>
    </article>
  );
}
