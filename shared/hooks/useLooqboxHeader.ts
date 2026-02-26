import { useState } from "react";

export function useLooqboxHeader() {
  const [open, setOpen] = useState(false);

  return { 
    open,
    setOpen,
  }
}