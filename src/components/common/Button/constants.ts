export const BUTTON_STYLES = {
  base: 'px-6 py-3 rounded-md font-medium transition-all duration-300',
  variants: {
    primary: 'bg-[#000000] text-white hover:bg-[#000000] border border-[#1A1A1A]',
    secondary: 'bg-[#1A1A1A] text-gray-300 hover:bg-[#252525] border border-[#333333]'
  },
  sizes: {
    default: 'text-base',
    large: 'text-lg py-4 sm:py-3'
  },
  width: {
    auto: '',
    full: 'w-full'
  }
} as const;