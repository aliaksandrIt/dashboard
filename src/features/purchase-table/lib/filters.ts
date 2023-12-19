import { Category } from "../../../shared/types";

export const categoryFilters = Object.values(Category).map((value) => ({
  text: value.charAt(0).toUpperCase() + value.slice(1), // Преобразование в читаемый формат
  value: value,
}));
