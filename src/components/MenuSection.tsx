import type { MenuCategory } from "../data/types";
import { MenuItemCard } from "./MenuItemCard";

export function MenuSection({ category }: { category: MenuCategory }) {
  return (
    <section id={category.id} className="mx-auto max-w-6xl scroll-mt-20 px-4 py-10">
      <div className="mb-6 text-center">
        <h2 className="font-display text-3xl text-terracotta-800">{category.name}</h2>
        {category.subtitle && (
          <p className="mt-1 font-body text-sm text-terracotta-600">{category.subtitle}</p>
        )}
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {category.items.map((item) => (
          <MenuItemCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}
