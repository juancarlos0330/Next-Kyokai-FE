type HeaderColor = {
  color: string;
  percent: number;
};

type HeaderProps = {
  headerColors?: HeaderColor[];
  margin?: boolean;
  fixed?: boolean;
};

const ColorHeader = ({ headerColors, margin = true, fixed = false }: HeaderProps) => {
  const defaultColors = headerColors || [
    { color: "#A2C4C9", percent: 15 },
    { color: "#76A5AF", percent: 25 },
    { color: "#45818E", percent: 25 },
    { color: "#134F5C", percent: 40 },
  ];

  const colors = (headerColors || defaultColors).slice(0, 3);

  const defaultMargins = [2, 3, 5];

  return (
    <div className="flex flex-col w-full" style={{ height: '10vh' }}>
      {[...colors].reverse().map((item, index) => (
          <div
            key={index}
            className="w-full"
            style={{
              backgroundColor: item.color,
              height: `${item.percent}%`,
              marginTop: margin && index !== 0 ? `${defaultMargins[index - 1] || 0}px` : "0px",
            }}
          />
        ))}
    </div>
  );
};

export default ColorHeader;