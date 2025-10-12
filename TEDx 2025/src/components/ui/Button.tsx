export default function Button({ children, onClick }: { children: React.ReactNode; onClick?: () => void }) {
  return (
    <button
      onClick={onClick}
      className="px-6 py-2 bg-red-500 text-white rounded-xs shadow-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 mt-4 sm:mt-0"
    >
      {children}
    </button>
  );
}