import { SanityBlock } from "@/type";
import { PortableTextComponents } from "@portabletext/react";

import { PortableText } from "@portabletext/react";
import React from "react";

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
      h3: ({ children }) => {
        const text = React.Children.toArray(children).join("");
        const slug = text
          .toLowerCase()
          .replace(/\s+/g, "-")
          .replace(/[^\w-]/g, "");
        return (
          <h3
            id={slug}
            className="text-xl md:text-3xl font-semibold mt-12 pb-2"
          >
            {children}
          </h3>
        );
      },
      normal: ({ children }) => (
        <p className="text-lg mt-2 text-black/70">{children}</p>
      ),
      h2: ({ children }) => {
        const text = extractText(children);

        const slug = text
          .toLowerCase()
          .replace(/\s+/g, "-")
          .replace(/[^\w-]/g, "");

        return (
          <h2 id={slug} className="text-4xl md:text-6xl font-bold mt-4 pb-4">
            {children}
          </h2>
        );
      },
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
    marks: {},
  };

  return <PortableText value={content} components={components} />;
};

export default PortableTextComponent;

const extractText = (children: React.ReactNode): string => {
  if (!children) return "";
  if (typeof children === "string") return children;

  if (Array.isArray(children)) {
    return children.map(extractText).join("");
  }

  if (React.isValidElement<{ children?: React.ReactNode }>(children)) {
    return extractText(children.props.children);
  }

  return "";
};
