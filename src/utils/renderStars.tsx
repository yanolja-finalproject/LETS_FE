const renderStars = (averageScore: number) => {
  const totalStars = Array.from({ length: 5 }, (_, index) => index + 1);

  return totalStars.map((starNumber) => {
    let svgContent;

    if (starNumber <= Math.floor(averageScore)) {
      // 노란 별 SVG
      svgContent = (
        <>
          <path
            d="M9.9834 16.5L12.7676 11.4478L18.4834 10.3885L14.4884 6.20686L15.2367 0.5L9.9834 2.96779L4.73011 0.5L5.4784 6.20686L1.4834 10.3885L7.19916 11.4478L9.9834 16.5Z"
            fill="#FDBD00"
          />
          <path
            d="M9.9834 16.5V12.5V10.5V8.5V5.5V3L4.4834 0L5.4834 6L0.983398 10.5L6.9834 11.4478L9.9834 16.5Z"
            fill="#FDBD00"
          />
        </>
      );
    } else if (
      starNumber === Math.ceil(averageScore) &&
      averageScore % 1 !== 0
    ) {
      // 반쪽 별 SVG
      svgContent = (
        <>
          <path
            d="M9 16.5L11.7842 11.4478L17.5 10.3885L13.505 6.20686L14.2533 0.5L9 2.96779L3.74671 0.5L4.495 6.20686L0.5 10.3885L6.21576 11.4478L9 16.5Z"
            fill="#CCCAC3"
          />
          <path
            d="M9 16.5V12.5V10.5V8.5V5.5V3L3.5 0L4.5 6L0 10.5L6 11.4478L9 16.5Z"
            fill="#FDBD00"
          />
        </>
      );
    } else {
      // 회색 별 SVG
      svgContent = (
        <path
          d="M8.5 16L11.2842 10.9478L17 9.88854L13.005 5.70686L13.7533 0L8.5 2.46779L3.24671 0L3.995 5.70686L0 9.88854L5.71576 10.9478L8.5 16Z"
          fill="#CCCAC3"
        />
      );
    }

    return (
      <svg
        key={starNumber}
        width="12"
        height="12"
        viewBox="0 0 19 17"
        xmlns="http://www.w3.org/2000/svg"
      >
        {svgContent}
      </svg>
    );
  });
};

export default renderStars;
