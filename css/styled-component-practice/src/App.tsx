import Button from "./style"

function App() {
  return (
    <>
      <div className="App">
        <Button>button</Button>
        {/* 진짜 버튼 생기네 개신기하다 */}
        {/* 하지만 컴포넌트 내부에서 스타일 컴포넌트를 직접 만드는 것은 비추라고 함. 
        이럴 경우에 매우 느리고 별로라고 함*/}
      </div>
    </>

  );
}

export default App;
