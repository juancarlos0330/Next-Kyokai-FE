type CircleProps = {
  color: string;
  path?: string;
  en: string;
  jp: string;
  fontSize?: 'sm' | 'base' | 'lg';
};

const fontSizeMap: Record<'sm' | 'base' | 'lg', { en: string; jp: string }> = {
  sm: { en: 'text-7xl', jp: 'text-2xl' },
  base: { en: 'text-8xl', jp: 'text-3xl' },
  lg: { en: 'text-9xl', jp: 'text-5xl' },
};

export default function Circle({ color, path, en, jp, fontSize = 'lg' }: CircleProps) {
  const fontValue = fontSizeMap[fontSize];

  return (
    <div
      className="flex text-center self-center justify-center items-center flex-col text-white rounded-full aspect-square w-40 sm:w-32 md:w-96 p-4"
      style={{ backgroundColor: color }}
    >
      <a href={path}>
        <p className={`${fontValue.en} leading-none font-bold`}>{en}</p>
        <p className={`${fontValue.jp} leading-none mt-2 font-zenKurenaido`}>{jp}</p>
      </a>
    </div>

  );
}
