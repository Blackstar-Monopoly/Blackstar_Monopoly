import React from "react";

type Props = {
  children: React.ReactNode;
};

export function Section(props: Props) {
  const { children } = props;

  return <div className="">{children}</div>;
}

export function Page(props: Props) {
  return (
    <div className="w-full  items-center justify-center">{props.children}</div>
  );
}
