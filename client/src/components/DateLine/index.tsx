import React from "react";
import "./styles.css";

interface IProps {
  date: string;
}
function DateLine({ date }: IProps) {
  return (
    <div className="dateLine">
      <span>{date}</span>
    </div>
  );
}
export default DateLine;
