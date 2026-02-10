'use client'

import Image from "next/image";
import { useEffect, useState } from "react";
import Typography from "@/components/atoms/Typography";

type SearchbarProps = {
  value?: string;
  className?: string;
  placeholder?: string;
  disabled?: boolean;
  onChange: (value: string) => void;
};

const Searchbar = (props: SearchbarProps) => {
  const { value, disabled, placeholder = "Search keyword", className, onChange } = props;
  const [inputVal, setInputVal] = useState("");

  const onSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputVal(event.target.value);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (value !== inputVal) onChange?.(inputVal);
    }, 1000);

    return () => clearTimeout(timer);
  }, [inputVal]);

  useEffect(() => {
    if (value !== inputVal) {
      setInputVal(value ?? "");
    }
  }, [value]);

  return (
    <div className={className}>
      <Typography font='inter' size={18} color='green' weight={500}>
        Search products by keyword
      </Typography>
      <div className="mt-2 relative flex w-full max-w-[739px] items-center">
        <input
          id="search-products"
          type="search"
          role="searchbox"
          placeholder={placeholder}
          value={inputVal}
          disabled={disabled}
          onChange={onSearchChange}
          className="h-[50px] w-full rounded-lg border-2 border-gray-200 bg-gray-100 pl-4 pr-12 text-gray-900 placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-0"
        />
        <span className="pointer-events-none absolute right-4 flex items-center justify-center" aria-hidden>
          <Image src="/assets/search.svg" alt="" width={24} height={24} className="size-6 shrink-0" />
        </span>
      </div>
    </div>
  );
};

export default Searchbar;
