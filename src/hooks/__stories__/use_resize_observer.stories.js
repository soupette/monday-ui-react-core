import useResizeObserver from "../useResizeObserver"
import { useCallback, useRef, useState } from "react";

export const Sandbox = () => {
  const [resizePayloadValue, setResizePayloadValue] = useState();
  const ref= useRef();

  const callback = useCallback(resizePayload => {
    const { borderBoxSize } = resizePayload;
    const { inlineSize, blockSize } = borderBoxSize;
    setResizePayloadValue({ inlineSize, blockSize });
  }, []);

  useResizeObserver({
    ref: ref,
    callback,
    debounceTime: 100
  });

  return (
    <div ref={ref}>
      <div>Using resize observer, got those values:</div>
      <div>{JSON.stringify(resizePayloadValue)}</div>
    </div>
  );
};

export default {
  title: "Hooks|useResizeObserver",
  component: useResizeObserver
};
