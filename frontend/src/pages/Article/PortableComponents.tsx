import { SanityBlock } from "@/type";
import { PortableTextComponents } from "@portabletext/react";

import { PortableText } from "@portabletext/react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const urlForImage = (source: any) => {
  if (!source?.asset?._ref) return "";
  const parts = source.asset._ref.split("-");
  return (
    "https://cdn.sanity.io/images/n2uf052o/production/" +
    parts.slice(1, -1).join("-") +
    ".png"
  );
};
interface Props {
  content: SanityBlock[];
}

const PortableTextComponent: React.FC<Props> = ({ content }) => {
  const components: PortableTextComponents = {
    block: {
      h2: ({ children }) => (
        <h2 className="text-4xl md:text-6xl font-bold mt-4 pb-4">{children}</h2>
      ),
      h3: ({ children }) => (
        <h3 className="text-xl md:text-3xl font-semibold mt-12 pb-2 ">
          {children}
        </h3>
      ),
      normal: ({ children }) => (
        <p className="text-lg mt-2 text-black/70">{children}</p>
      ),
    },
    list: {
      bullet: ({ children }) => (
        <ul className="list-disc list-inside mt-2">{children}</ul>
      ),
    },
    listItem: {
      bullet: ({ children }) => (
        <li className="ml-4 text-lg text-black/70">{children}</li>
      ),
    },
    types: {
      image: ({ value }) => (
        <div className="my-4 flex justify-center">
          <img
            src={urlForImage(value)}
            alt={value.alt || "Sanity Image"}
            className=" w-full h-auto rounded-lg shadow-md mt-12"
          />
        </div>
      ),
    },
  };

  return <PortableText value={content} components={components} />;
};

export default PortableTextComponent;
