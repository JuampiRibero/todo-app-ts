import { FILTERS_BUTTONS } from "../consts.ts";
import { type FilterValue } from "../types";

interface Props {
  handleFilterChange: (filter: FilterValue) => void;
  filterSelected: FilterValue;
}

export const Filters: React.FC<Props> = ({
  filterSelected,
  handleFilterChange,
}) => {
  const handleClick =
    (filter: FilterValue) => (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      handleFilterChange(filter);
    };

  return (
    <ul className="filters">
      {Object.entries(FILTERS_BUTTONS).map(([key, { literal, href }]) => {
        const isSelected = key === filterSelected;
        const className = isSelected ? "selected" : "";

        return (
          <li key={key}>
            <a
              className={className}
              href={href}
              onClick={handleClick(key as FilterValue)}
            >
              {literal}
            </a>
          </li>
        );
      })}
    </ul>
  );
};
