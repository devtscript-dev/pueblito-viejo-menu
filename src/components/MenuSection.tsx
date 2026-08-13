import type { MenuCategory, MenuGroup, MenuItem } from "../data/types";
import { MenuItemCard } from "./MenuItemCard";
import { Reveal, RevealGroup } from "./Reveal";
import { useLanguage } from "../i18n/LanguageContext";
import { withBase } from "../utils/publicUrl";

function ItemGrid({ items }: { items: MenuItem[] }) {
  return (
    <RevealGroup className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      {items.map((item) => (
        <MenuItemCard key={item.id} item={item} />
      ))}
    </RevealGroup>
  );
}

function Group({ group }: { group: MenuGroup }) {
  const { language } = useLanguage();

  if (group.banner) {
    return (
      <div
        className="mb-10 rounded-3xl bg-cover bg-center p-1 shadow-lg"
        style={{ backgroundImage: `url(${withBase(group.banner)})` }}
      >
        <div className="rounded-[1.35rem] bg-terracotta-900/85 p-5 sm:p-7">
          <div className="mb-5 text-center">
            <h3 className="font-display text-2xl text-cream-50">{group.name[language]}</h3>
            {group.subtitle && <p className="mt-1 font-body text-sm text-cream-100/80">{group.subtitle[language]}</p>}
          </div>
          <ItemGrid items={group.items} />
        </div>
      </div>
    );
  }

  return (
    <div className="mb-10">
      <div className="mb-4 text-center">
        <h3 className="font-display text-2xl text-terracotta-800">{group.name[language]}</h3>
        {group.subtitle && <p className="mt-1 font-body text-sm text-terracotta-600">{group.subtitle[language]}</p>}
      </div>
      <ItemGrid items={group.items} />
    </div>
  );
}

export function MenuSection({ category }: { category: MenuCategory }) {
  const { language } = useLanguage();

  return (
    <section id={category.id} className="mx-auto max-w-6xl scroll-mt-20 px-4 py-10">
      <Reveal className="mb-6 text-center">
        <h2 className="font-display text-3xl text-terracotta-800">{category.name[language]}</h2>
        {category.subtitle && (
          <p className="mt-1 font-body text-sm text-terracotta-600">{category.subtitle[language]}</p>
        )}
      </Reveal>

      {category.items && <ItemGrid items={category.items} />}
      {category.groups?.map((group) => <Group key={group.id} group={group} />)}
    </section>
  );
}
