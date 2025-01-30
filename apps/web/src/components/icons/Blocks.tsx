import { type IconProps, iconProps } from "./types";

export const BlocksIcon: React.FC<IconProps> = (props) => {
  return (
    <svg
      className={iconProps(props)}
      width="100%"
      height="100%"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.5008 1.71296C12.5722 1.17641 11.4278 1.17641 10.4992 1.71296L6.49972 4.02378C6.19048 4.20246 6 4.53249 6 4.88964V8.83472C6 9.0648 6.02636 9.29122 6.07698 9.51025C5.84233 9.58612 5.61489 9.69167 5.40032 9.82692L1.46677 12.3063C1.17624 12.4894 1 12.8088 1 13.1523V17.6095C1 18.6147 1.50353 19.5532 2.34115 20.1091L5.34115 22.1C6.34644 22.7671 7.65356 22.7671 8.65885 22.1L11.6588 20.1091C11.7797 20.0289 11.8936 19.9407 12 19.8456C12.1064 19.9407 12.2203 20.0289 12.3412 20.1091L15.3412 22.1C16.3464 22.7671 17.6536 22.7671 18.6588 22.1L21.6588 20.1091C22.4965 19.5532 23 18.6147 23 17.6095V13.1523C23 12.8088 22.8238 12.4894 22.5332 12.3063L18.5997 9.82692C18.3851 9.69167 18.1577 9.58612 17.923 9.51025C17.9736 9.29121 18 9.0648 18 8.83472V4.88964C18 4.53249 17.8095 4.20246 17.5003 4.02378L13.5008 1.71296ZM11.4997 3.44468C11.8093 3.26583 12.1907 3.26583 12.5003 3.44469L15.0395 4.91179L12 6.76079L8.96053 4.91179L11.4997 3.44468ZM12.5197 8.78563L16 6.66847V8.83472C16 9.18381 15.818 9.50763 15.5197 9.68906L12.5197 11.5141C12.2005 11.7083 11.7995 11.7083 11.4803 11.5141L8.48028 9.68906C8.18204 9.50763 8 9.18381 8 8.83472V6.66847L11.4803 8.78563C11.7995 8.97985 12.2005 8.97985 12.5197 8.78563ZM7.53323 11.5189C7.2074 11.3135 6.7926 11.3135 6.46677 11.5189L3.84107 13.1739L7 15.2703L10.1589 13.1739L7.53323 11.5189ZM11 15.0161L7.55295 17.3036C7.21785 17.526 6.78215 17.526 6.44705 17.3036L3 15.0161V17.6095C3 17.9446 3.16784 18.2574 3.44705 18.4427L6.44705 20.4336C6.78215 20.6559 7.21785 20.6559 7.55295 20.4336L10.5529 18.4427C10.8322 18.2574 11 17.9446 11 17.6095V15.0161ZM13.4471 18.4427C13.1678 18.2574 13 17.9446 13 17.6095V15.0161L16.4471 17.3036C16.7821 17.526 17.2179 17.526 17.5529 17.3036L21 15.0161V17.6095C21 17.9446 20.8322 18.2574 20.5529 18.4427L17.5529 20.4336C17.2179 20.6559 16.7821 20.6559 16.4471 20.4336L13.4471 18.4427ZM17.5332 11.5189C17.2074 11.3135 16.7926 11.3135 16.4668 11.5189L13.8411 13.1739L17 15.2703L20.1589 13.1739L17.5332 11.5189Z"
        fill="currentColor"
      />
    </svg>
  );
};
