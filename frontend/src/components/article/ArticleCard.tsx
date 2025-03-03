import { ArticleList } from "@/type";
import { format } from "date-fns";

export const ArticleCard: React.FC<ArticleList> = ({
  title,
  description,
  date,
  author,
  imageUrl,
}) => {
  const formattedDate = format(date, "MMMM d, yyyy");

  return (
    <div className=" w-full flex flex-col gap-4 bg-white rounded-xl overflow-hidden">
      <img src={imageUrl} className="w-full" />
      <div className="w-full flex flex-col gap-4 p-4">
        <div className="flex justify-between text-black/70">
          <p>{formattedDate}</p>
          <p>{author}</p>
        </div>
        <div className="flex flex-col gap-2">
          <h4 className="text-lg md:text-xl font-semibold">{title}</h4>
          <p className=" text-black/70">{description}</p>
        </div>
      </div>
    </div>
  );
};
