type Tag = {
  en: string;
  jp: string;
};

type PancakeProps = {
  title: string;
  tags: Tag[];
  content: string;
  index: number;
  highlighted?: boolean;
};

export default function PancakeCard({
  title,
  tags,
  content,
  index,
  highlighted = false,
}: PancakeProps) {
  return (
    <div className="w-full">
      <div
        className={`title border-2 rounded-xl p-2 ${
          highlighted
            ? "bg-[#A0522D] text-white border-amber-700"
            : "border-amber-700"
        }`}
      >
        <h1
          className={`text-4xl font-bold text-left ${
            highlighted ? "border-white border-2 rounded-lg p-1" : "px-2"
          }`}
        >
          {index + 1}. {title}
        </h1>
      </div>

      <div className="tab mt-4 flex gap-5">
        {tags.map((tag, i) => (
          <div
            key={i}
            className="bg-gray-200 rounded-xl p-2 px-3 flex items-center text-[#783F04] gap-5"
          >
            <p className="text-2xl">{tag.en}</p>
            <p className="font-zenKurenaido text-[18px]">{tag.jp}</p>
          </div>
        ))}
      </div>
      <div className="content mt-2">
        <p className="font-outfit" dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </div>
  );
}
