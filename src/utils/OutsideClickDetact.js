import { useEffect, useRef } from "react";

export let useClickOutside = (handler) => {
  let domNode = useRef();

  useEffect(() => {
    if (domNode.current) {
      let maybeHandler = (event) => {
        if (!domNode.current.contains(event.target)) {
          handler();
        }
      };

      document.addEventListener("mousedown", maybeHandler);

      return () => {
        document.removeEventListener("mousedown", maybeHandler);
      };
    }
  });

  return domNode;
};
