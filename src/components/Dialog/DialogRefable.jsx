/* eslint-disable react/jsx-props-no-spreading */
import React, { useMemo } from "react";
import { chainFunctions, chainRefFunctions } from "../../utils/function-utils";
import { usePrevious } from "hooks";

const EMPTY_ARRAY = [];

export const DialogRefable = React.forwardRef(
  ({ children, chainAttribues = EMPTY_ARRAY, eventReferences, ...rest }, ref) => {
    const chainedFunctionsMaps = useMemo(() => {
      const chainFunctionRef = {};
      React.Children.map(children, child => {
        chainAttribues.forEach(attribute => {
          if (!child || !child.props) {
            chainFunctionRef[attribute] = eventReferences[attribute];
            return;
          }
          chainFunctionRef[attribute] = getChainedFunction(attribute, child.props, eventReferences);
        });
      });
      return chainFunctionRef;
    }, [children, chainAttribues, eventReferences]);
    return React.Children.map(children, child => {
      if (!React.isValidElement(child)) return null;

      if (typeof child.type !== "string") {
        return (
          <span ref={ref} {...rest}>
            {React.cloneElement(child, { ...child.props, ...chainedFunctionsMaps })}
          </span>
        );
      }
      return React.cloneElement(child, {
        ...rest,
        ...child.props,
        ...chainedFunctionsMaps,
        ref: chainRefFunctions([child.ref, ref])
      });
    });
  }
);

function getChainedFunction(name, childProps, wrapperProps) {
  if (!childProps[name]) return wrapperProps[name];
  return chainFunctions([childProps[name], wrapperProps[name]], true);
}
