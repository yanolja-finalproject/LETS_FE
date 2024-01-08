export interface ListItemProps {
  title: string;
  link?: string;
  categories?: string[];
  date?: string;
  theme?: "menu" | "notice" | "faq";
  iconSrc?: string;
  onClickFn?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
