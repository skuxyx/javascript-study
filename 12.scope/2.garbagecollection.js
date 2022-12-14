// Garbage Collection (GC)
// => Javascript 의 경우 메모리 관리를 GC에서 처리해 줌.
// => 메모리 관리를 해주긴 하지만 코드를 작성할 때 유의하면서 작성해야함.

// 전역변수(글로벌)의 경우엔 종료될 때 까지 메모리가 지속적으로 유지 됨.
let memory = '';

// => 따라서, 전역변수 사용은 필요한 곳(함수, 조건문, 클래스, {} 내부)에서만 사용할 수 있도록.

{
  // {} 내부에서 작성하면 해당 블럭이 종료되면 일정 시간 후 GC가 처리해 줌.
  let memory = '';
}

const a = 1;
{
  const a = 2;
  {
    console.log(a);
  }
}
