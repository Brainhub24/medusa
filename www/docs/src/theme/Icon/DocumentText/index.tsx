import React from "react"
import { IconProps } from ".."

const IconDocumentText: React.FC<IconProps> = ({
  iconColorClassName,
  ...props
}) => {
  return (
    <svg
      width={props.width || 20}
      height={props.height || 20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M16.25 11.8462V9.69231C16.25 8.95786 15.9537 8.2535 15.4262 7.73417C14.8988 7.21483 14.1834 6.92308 13.4375 6.92308H12.1875C11.9389 6.92308 11.7004 6.82582 11.5246 6.65271C11.3488 6.4796 11.25 6.24482 11.25 6V4.76923C11.25 4.03479 10.9537 3.33042 10.4262 2.81109C9.89879 2.29176 9.18342 2 8.4375 2H6.875M6.875 12.4615H13.125M6.875 14.9231H10M8.75 2H4.6875C4.17 2 3.75 2.41354 3.75 2.92308V17.0769C3.75 17.5865 4.17 18 4.6875 18H15.3125C15.83 18 16.25 17.5865 16.25 17.0769V9.38462C16.25 7.42609 15.4598 5.54779 14.0533 4.1629C12.6468 2.77802 10.7391 2 8.75 2V2Z"
        className={
          iconColorClassName ||
          "tw-stroke-medusa-icon-secondary dark:tw-stroke-medusa-icon-secondary"
        }
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default IconDocumentText
