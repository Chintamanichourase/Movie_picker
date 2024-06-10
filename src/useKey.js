import { useEffect } from "react";

export function useKey(key, action) {
  useEffect(
    function () {
      function escapeCallback(e) {
        if (e.code.toLowerCase() === key.toLowerCase()) {
          action();
          // console.log("heh");
        }
      }
      document.addEventListener("keydown", escapeCallback);
      return function () {
        document.removeEventListener("keydown", escapeCallback);
      };
    },
    [action, key]
  );
}
