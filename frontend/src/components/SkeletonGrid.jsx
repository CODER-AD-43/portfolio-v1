function SkeletonGrid({ count = 3 }) {
  return (
    <>
      {Array.from({ length: count }).map((_, i) => (
        <div className="skeleton" key={i}></div>
      ))}
    </>
  );
}

export default SkeletonGrid;
