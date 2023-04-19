interface BoxProps {
    color: string;
  }
  
  function Box2({ color }: BoxProps) {
    return (
      <div
        style={{
          backgroundColor: color
        }}
      >
        Box
      </div>)
  }
  
  export default Box2;