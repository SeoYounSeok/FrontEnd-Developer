### 가비지 컬렉션 https://medium.com/@leeyh0216/reference-counting%EA%B3%BC-mark-and-sweep-2d046f73da4f

```
쓰레기 수집(garbage collection 가비지 컬렉션[*], GC)은 메모리 관리 기법 중의 하나로, 
프로그램이 동적으로 할당했던 메모리 영역 중에서 필요없게 된 영역을 해제하는 기능이다.

+ Heap 영역
Heap 영역은 동적으로 생성된 객체가 저장되는 영역으로 GC의 대상이 되는 공간입니다.

+ Stack 영역
Stack 영역은 지역변수나 메서드의 매개변수, 임시적으로 사용되는 변수, 메서드의 저장되는 영역입니다.

- 금방 사용되고 사라지는..?
```

### Reference Counting

```
Reference Counting은 객체, 메모리 블록, 디스크 공간 등을 
참조하는 Reference, Pointer, Handle 의 갯수를 저장하는 기술이다.
```

### BUT Circular Referencing in Reference Counting 문제가 생겨!?

```
2개 이상의 객체가 서로를 참조하는 경우가 있다. 이러한 경우를 순환 참조라고 부른다.
둘 다 쓸모가 없어도, 삭제하지 못한다.


! 이렇게 객체가 서로를 참조하는 현상을 Circular Referencing 이라고 하고, 
  이러한 문제점을 해결하기 위해 Mark and Sweep이라는 기법이 만들어졌다.
```

### Mark and Sweep 

![image](https://user-images.githubusercontent.com/43161245/83941368-b90b4000-a825-11ea-9770-43256803439d.png)

```

1. 각 객체를 구성하는 메모리에는 Garbage Collection에서 사용하기 위한 1bit의 flag값이 존재한다. 
   이 값은 Garbage Collection이 일어나는 동안에만 활성화될 수 있다.

2. Mark Stage: Root Set에서 접근 가능한 객체들의 flag를 ‘in-use’로 마킹한다. 
   Mark Stage가 끝났을 때 flag가 ‘in-use’로 마킹되어 있는 부분은 모두 Root Set에서 접근 가능한 객체들이다.

3. Sweep Stage: 모든 메모리 공간을 순회하며 flag 값이 ‘in-use’로 되어 있지 않은 객체들의 메모리를 해제한다. 
   ‘in-use’ 상태가 아닌 객체들은 Root Set에서 접근이 불가능하기 때문이다.

4. Sweep Stage가 끝나면 다음 Garbage Collection을 위해 모든 객체의 flag를 초기화한다.

-> Root Set이라는 말이 나오는데, Stack이나 Static 공간에 선언된 변수들의 모음 정도로 생각하면 이해가 쉽다.

```
