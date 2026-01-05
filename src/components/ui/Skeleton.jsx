const Skeleton = ({ width, height, className = '', rounded = 'rounded-lg' }) => {
  return (
    <div
      className={`bg-gray-200 dark:bg-neutral-800 animate-pulse ${rounded} ${className}`}
      style={{
        width: width || '100%',
        height: height || '100%',
      }}
    />
  );
};

export default Skeleton;
