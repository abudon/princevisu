import { Link } from "react-router-dom";

const Button = ({
  color = "blue",
  to,
  disabled,
  children,
  onClick,
  className,
  ...props
}) => {
  const base =
    "flex items-center px-10 py-3 rounded-full gap-3 uppercase text-sm font-semibold justify-center focus:ring-offset-2 disabled:cursor-not-allowed disabled:bg-stone-400 disabled:text-white disabled:border-none border";

  const styles = {
    blue: base + " bg-primary text-white border-primary",
    white: base + " bg-white text-primary border-primary",
    yellow: base + " bg-color-yellow text-color-dark",
    transparent: base + " bg-transparent text-primary border-primary",
  };

  if (to)
    return (
      <Link to={to} className={`${styles[color]} ${className}`} {...props}>
        {children}
      </Link>
    );

  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`${styles[color]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
