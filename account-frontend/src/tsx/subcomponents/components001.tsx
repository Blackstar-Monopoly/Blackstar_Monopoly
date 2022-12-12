import React from "react";

export function InputDiv(props: any) {
  const { id, className, children } = props;

  return (
    <div id={`inputdiv_${id}`} className={`inputdiv ${className}`}>
      {children}
    </div>
  );
}
