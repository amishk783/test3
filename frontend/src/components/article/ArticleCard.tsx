interface Props {
  title: string;
  description: string;
  date: string;
  author: string;
  image: string;
}

export const ArticleCard: React.FC<Props> = ({
  title,
  description,
  date,
  author,
  image,
}) => {
  return (
    <div className=" w-full flex flex-col gap-4 bg-white rounded-xl overflow-hidden">
      <img src={image} className="w-full" />
      <div className="w-full flex flex-col gap-4 p-4">
        <div className="flex justify-between text-black/70">
          <p>{date}</p>
          <p>{author}</p>
        </div>
        <div className="flex flex-col gap-2">
          <h4 className=" text-xl font-semibold">{title}</h4>
          <p className=" text-black/70">{description}</p>
        </div>
      </div>
    </div>
  );
};
