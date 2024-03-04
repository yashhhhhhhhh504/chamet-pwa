import * as React from 'react';

import { Button } from '@/components/ui/button';
import { SearchIcon } from '@/components/ui/icons/svg-icons';
import { Input } from '@/components/ui/input';

type SearchInputProps = {
  placeholder?: string;
};

const SearchInput = React.forwardRef<HTMLInputElement, SearchInputProps>(
  ({ placeholder }, ref) => (
    <div className="search-input relative flex w-full items-center justify-center">
      <Input
        ref={ref}
        type="text"
        className="search-input-field h-10 w-full rounded-full bg-secondary/30 px-4 text-lg text-black focus:border-primary focus:outline-none"
        placeholder={placeholder}
      />
      <Button variant="link" className="absolute right-2">
        <SearchIcon className="h-6 w-6 text-black" />
      </Button>
    </div>
  )
);

export { SearchInput };
