##### grid-template-columns

```
- 컨테이너에 Grid 트랙의 크기들을 지정해주는 속성입니다.
```
[이미지출처](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-columns)
![image](https://user-images.githubusercontent.com/43161245/157602252-b2900918-704a-4351-b6d3-a5966396064e.png)

##### minmax 함수
```
- 최솟값과 최댓값을 지정할 수 있는 함수입니다.

예) minmax(100px, auto)의 의미는 최소한 100px, 최대는 자동으로(auto) 늘어날수 있다.
```

##### auto-fill과 auto-fit
```
auto-fill과 auto-fit은 column의 개수를 미리 정하지 않고 설정된 너비가 허용하는 한 최대한 셀을 채웁니다.

1. autu-fill code

.container {
	grid-template-columns: repeat(auto-fill, minmax(20%, auto));
}
```
[이미지출처](https://studiomeal.com/archives/533)
![image](https://user-images.githubusercontent.com/43161245/157602841-6319253c-c846-426e-ba61-1fe3df1d095e.png)
