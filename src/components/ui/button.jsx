export function Button({ children, className = "", ...props }) {
  return (
    <button
      className={`text-white px-4 py-2 rounded-lg transition ${className}`}
        style={{ backgroundColor: '#cea167' }}
        onMouseOver={e => (e.currentTarget.style.backgroundColor = '#b88a4b')}
        onMouseOut={e => (e.currentTarget.style.backgroundColor = '#cea167')}
      {...props}
    >
      {children}
    </button>
  );
}
