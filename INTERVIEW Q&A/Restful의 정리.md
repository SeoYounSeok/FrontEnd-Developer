### API (애플리케이션 프로그래밍 인터페이스) 란?

```
응용 프로그램에서 사용할 수 있도록 운영체제나 프로그래밍 언어가 제공하는 기능을 제어할 수 있게 만든 인터페이스

! 즉 응용프로그램에서 사용 할 수 있도록 기타 다른 응용프로그램들을 제어할 수 있게 하는 것.

EX) JAVSCRIPT 개발 중에 Alert 를 생각해보자.
    브라우저 창에 뜨는 경고창의 경우에도 폰트나 글자크기 등을 설정한 적이 없지만 기본값을 가지고있고, 그것이 API사용한 것!
```

### REST 그리고 RESTful API

```
* REST
  - Representational State Transfer 의 약자
  - 자원을 이름(자원의 표현)으로 구분하여 해당 자원의 상태를 주고 받는 모든 것을 의미한다.
  - ! 기본적으로 웹의 기존 기술과 HTTP 프로토콜을 그대로 활용하기 때문에 웹의 장점을 최대한 활용할 수 있는 아키텍처 스타일 입니다.
  - 네트워크 상에서 Client 와 Server 사이의 통신 방식중 하나이다.
```
### REST의 구체적인 개념
```
* REST 란!?
  - HTTP URI를 통해 자원을 명시하고 HTTP Method(POST,GET,PUT,DELETE)를 통해 해당 자원에 대한 
    CRUD Opertaion을 적용하는 것을 의미한다.

* CRUD Operation
  - CREATE : 생성 (POST)
  - READ : 조회 (GET)
  - UPDATE : 수정 (PUT)
  - DELETE : 삭제 (DELETE)
  - HEAD : HEADER 정보 조회 (HEAD)

```  

### REST 구성요소
```

1. 자원(Resource) : URI
    - 모든 자원에 고유한 ID가 존재하고, 이 자원은 서버에 존재한다.
    - 자원을 구별하는 ID는 HTTP URI 다.
    - Client 는 URI를 이용해서 자원을 지정하고 해당 자원의 상태(정보)에 대한 조작을 서버에 요청한다.
2. 행위(Verb) : HTTP Method
    - HTTP 프로토콜은 GET,POST,PUT,DELETE 와 같은 메서드를 제공한다.
3. 표현(Representation of Resource)
    - Client 가 자원의 상태에 대한 조작을 요청하면 서버는 이에 적절한 응답을 보낸다.
    - REST에 하나의 자원은 json,XML 등 여러 형태의 응답으로 나타내어 질 수 있다.
    
```
### REST API

```
* REST API 
    - REST 기반으로 서비스 API를 구현한 것
    - 최근 OPEN API, 마이크로 서비스 등을 제공하는 업체 대부분은 REST API를 제공한다.
```

### RESTful

```
* RESTful이란
    - 일반적으로 REST라는 아키텍처를 구현하는 웹 서비스를 나타내는 위해 사용되는 용어이다.
```

![image](https://user-images.githubusercontent.com/43161245/83777187-17b8a880-a6c4-11ea-9957-53056af5a8d2.png)

    
