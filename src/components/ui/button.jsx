export function Button({ children, className = "", ...props }) {
  return (
    <button
      className={`text-white px-4 py-2 rounded-lg transition ${className}`}
        style={{ 
          backgroundColor: '#cca160',
          border: '2px',
          borderStyle: 'hidden',
          borderColor: '#540000',
        }}
        onMouseOver={e => (e.currentTarget.style.backgroundColor = '#b88a4b')}
        onMouseOut={e => (e.currentTarget.style.backgroundColor = '#cca160')}
      {...props}
    >
      {children}
    </button>
  );
}
