import { forwardRef, ButtonHTMLAttributes } from "react";
import "./button.scss";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const { children, ...rest } = props;
  return (
    <button ref={ref} {...rest} className="btn">
      {children}
    </button>
  );
});

export default Button;
