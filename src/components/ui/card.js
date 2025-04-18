export function Card({ children }) {
    return (
      <div className="rounded-lg border p-4 shadow-sm bg-white dark:bg-gray-800">
        {children}
      </div>
    );
  }
  
  export function CardContent({ children }) {
    return <div className="mt-2">{children}</div>;
  }
  