const PlaceholderImage = (width:number, height:number) => {
  return (`
    <svg width="${width}" height="${height}"  version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
        <defs>
            <linearGradient id="g">
            <stop stopColor="#333" offset="20%" />
            <stop stopColor="#222" offset="50%" />
            <stop stopColor="#333" offset="70%" />
            </linearGradient>
        </defs>
        <rect fill="#333" />
        <rect id="r" width="${width}px" height="${height}" fill="url(#g)" />
    </svg>
  `)
}

export default PlaceholderImage;