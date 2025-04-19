// src/components/ui/button.js
export function Button({ children, variant = "default", ...props }) {
    const base = "px-6 py-3 rounded-lg text-sm font-medium transition-all duration-200";
    const styles = {
      default: "bg-blue-600 text-white hover:bg-blue-700 hover:scale-105",
      ghost: "bg-transparent border-2 border-gray-300 text-gray-700 hover:bg-gray-100 hover:scale-105",
    };
  
    return (
      <button className={`${base} ${styles[variant]}`} {...props}>
        {children}
      </button>
    );
  }
  