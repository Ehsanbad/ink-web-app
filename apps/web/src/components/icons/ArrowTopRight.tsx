import { type IconProps, iconProps } from "./types";

export const ArrowTopRightIcon: React.FC<IconProps> = (props) => {
  return (
    <svg
      className={iconProps(props)}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 6C8 5.44772 8.44772 5 9 5H16C17.6569 5 19 6.34315 19 8V15C19 15.5523 18.5523 16 18 16C17.4477 16 17 15.5523 17 15V8.41421L7.20711 18.2071C6.81658 18.5976 6.18342 18.5976 5.79289 18.2071C5.40237 17.8166 5.40237 17.1834 5.79289 16.7929L15.5858 7H9C8.44772 7 8 6.55228 8 6Z"
        fill="currentColor"
      />
    </svg>
  );
};
