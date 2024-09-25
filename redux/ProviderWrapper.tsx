"use client";

import React from "react";
import { Provider } from "react-redux";
import { store } from "@/redux/store";

interface ProviderWrapperProps {
  children: React.ReactNode;
}

const ProviderWrapper = ({ children }: ProviderWrapperProps) => (
  <Provider store={store}>{children}</Provider>
);

export default ProviderWrapper;
