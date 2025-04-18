export function Button({ children, variant = "default", ...props }) {
    const base = "px-4 py-2 rounded-md text-sm font-medium transition";
    const styles = {
      default: "bg-blue-600 text-white hover:bg-blue-700",
      ghost: "bg-transparent border border-gray-300 text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:border-gray-600 dark:hover:bg-gray-800",
    };
  
    return (
      <button className={`${base} ${styles[variant]}`} {...props}>
        {children}
      </button>
    );
  }
  
