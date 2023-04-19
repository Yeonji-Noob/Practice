interface BoxProps {
    color: string;
  }
  
  function Box4({ color }: BoxProps) {
    return (
      <div
        style={{
          backgroundColor: color
        }}
      >
        Box
      </div>)
  }
  
  export default Box4;