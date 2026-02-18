import React from "react";
import { Spinner, SpinnerSize } from "@fluentui/react";
import { ILoadingSpinnerProps } from "./ILoadingSpinnerProps";

const LoadingSpinner = ({ message }: ILoadingSpinnerProps): JSX.Element => {
	return <Spinner size={SpinnerSize.medium} label={message} />;
};

export default LoadingSpinner;
