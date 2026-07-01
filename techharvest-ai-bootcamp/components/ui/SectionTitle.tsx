interface Props {
  badge: string;
  title: string;
  description: string;
}

export default function SectionTitle({
  badge,
  title,
  description,
}: Props) {
  return (
    <div className="text-center mb-20">

      <span className="uppercase tracking-[4px] text-green-400 font-bold">

        {badge}

      </span>

      <h2 className="text-5xl font-black text-white mt-5">

        {title}

      </h2>

      <p className="text-xl text-gray-400 mt-6 max-w-3xl mx-auto leading-8">

        {description}

      </p>

    </div>
  );
}