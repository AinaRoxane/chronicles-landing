import type { ReactNode } from "react";

type Metric = {
  icon: ReactNode;
  value: string;
  label: string;
};

type MetricsBandProps = {
  items: Metric[];
  label?: string;
};

/**
 * The wavy blue "BD" metric band used on the home and pricing pages.
 * Values/colouring come from each page's own stylesheet.
 */
export function MetricsBand({ items, label }: MetricsBandProps) {
  return (
    <section className="metrics-band" aria-label={label}>
      <div className="container">
        <div className="metrics-row">
          {items.map((item) => (
            <div className="metric-col" key={item.label}>
              <div className="metric__icon" aria-hidden="true">
                {item.icon}
              </div>
              <div className="metric__value">{item.value}</div>
              <div className="metric__label">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
