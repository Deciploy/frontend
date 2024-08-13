import { TextInput } from '@components';
import { FaMagnifyingGlass } from 'react-icons/fa6';

interface SearchProps {
  placeholder?: string;
  onSearch: (value: string) => void;
}

export const SearchInput = ({
  placeholder = 'Search',
  onSearch,
}: SearchProps) => {
  return (
    <TextInput
      prefix={<FaMagnifyingGlass />}
      placeholder={placeholder}
      onChange={onSearch}
    />
  );
};
