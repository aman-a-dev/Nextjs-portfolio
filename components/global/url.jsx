"use client";

import { usePathname, useSearchParams } from "next/navigation";

export default function CurrentUrl() {
   const pathname = usePathname();
   const searchParams = useSearchParams();
   const queryString = searchParams.toString();

   const fullUrl = `${window.location.origin}${pathname}${
      queryString ? "?" + queryString : ""
   }`;
alert(fullUrl)
   return fullUrl;
}
