type FooterColor = {
  color: string;
  percent: number;
};

type FooterProps = {
  footerColors?: FooterColor[];
  margin?: boolean;
  fixed?: boolean;
};

const ColorFooter = ({ footerColors, margin = false, fixed = false }: FooterProps) => {
  const colors = footerColors || [
    { color: "#A2C4C9", percent: 15 },
    { color: "#76A5AF", percent: 20 },
    { color: "#45818E", percent: 25 },
    { color: "#134F5C", percent: 40 },
  ];

  const defaultMargins = [2, 3, 5];

  return (
    <div className={`${fixed ? "fixed" : ""} bottom-0 left-0 w-full`} style={{ height: '15vh' }}>
      <div className="w-full h-full flex flex-col">
        {colors.map((item, index) => (
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
    </div>
  );
};

export default ColorFooter;