interface BoxProps {
    color: string;
  }
  
  function Box1({ color }: BoxProps) {
    return (
      <div
        style={{
          backgroundColor: color
        }}
      >
        Box
      </div>)
  }
  
  export default Box1;