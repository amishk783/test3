import { cn } from "@/lib/utils";
import ReactDOM from "react-dom";

export const Modal: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className }) => {
  const modalRoot = document.getElementById("portal") as Element;

  return ReactDOM.createPortal(
    <div
      className={cn(
        "fixed inset-0 flex md:items-start justify-center w-full h-screen items-center bg-gradient-to-tr from-gray-100/40 via-slate-400/60 to-gray-100/40 backdrop-blur-xl z-50",
        className
      )}
    >
      {children}
    </div>,
    modalRoot
  );
};
