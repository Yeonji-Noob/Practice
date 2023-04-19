interface BoxProps {
    color: string;
  }
  
  function Box3({ color }: BoxProps) {
    return (
      <div
        style={{
          backgroundColor: color
        }}
      >
        Box
      </div>)
  }
  
  export default Box3;