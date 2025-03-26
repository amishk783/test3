import { createContext, useContext, useEffect, useState } from "react";

interface PaywallInterface {
  articleCounter: number;
  updateArticleCounter: () => void;
  resetArticleCounter: () => void;
}

const PaywallContext = createContext<PaywallInterface | null>(null);

export const PaywallProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [articleCounter, setArticleCounter] = useState<number>(() => {
    const storedCount = sessionStorage.getItem("articleCounter");
    return storedCount ? parseInt(storedCount, 10) : 0;
  });
  const updateArticleCounter = () => {
    setArticleCounter((prevCount) => prevCount + 1);
  };
  const resetArticleCounter = () => {
    sessionStorage.setItem("articleCounter", "0");
    setArticleCounter(0);
  };
  useEffect(() => {
    sessionStorage.setItem("articleCounter", articleCounter.toString());
  }, [articleCounter]);

  return (
    <PaywallContext.Provider
      value={{ articleCounter, updateArticleCounter, resetArticleCounter }}
    >
      {children}
    </PaywallContext.Provider>
  );
};

export const usePaywall = () => {
  const context = useContext(PaywallContext);
  if (!context) {
    throw new Error("usePaywall must be used within a PaywallProvider");
  }
  return context;
};
