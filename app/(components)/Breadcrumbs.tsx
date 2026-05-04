import Link from "next/link";

type BreadcrumbItem = {
  label: string;
  href?: string;
};

export default function Breadcrumbs({
  items,
}: {
  items: BreadcrumbItem[];
}) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex flex-wrap items-center gap-2 text-sm text-muted">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li
              key={`${item.label}-${index}`}
              className="inline-flex items-center gap-2">
              {item.href && !isLast ? (
                <Link
                  href={item.href}
                  className="rounded-lg border border-border bg-surface px-3 py-1 font-medium text-muted transition-[background-color,border-color,color] duration-200 hover:border-electric-200 hover:bg-electric-50 hover:text-electric-700">
                  {item.label}
                </Link>
              ) : (
                <span
                  aria-current={isLast ? "page" : undefined}
                  className="rounded-lg border border-electric-100 bg-electric-50 px-3 py-1 font-semibold text-electric-700">
                  {item.label}
                </span>
              )}
              {!isLast ? <span aria-hidden="true" className="text-border-strong">/</span> : null}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
