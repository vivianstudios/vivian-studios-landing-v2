"use client";
import React, { ReactNode } from "react";

type ClientComponentProps = {
  children: ReactNode;
};

const ClientComponent: React.FC<ClientComponentProps> = (props) => {
  return <>{props.children}</>;
};
export default ClientComponent;
