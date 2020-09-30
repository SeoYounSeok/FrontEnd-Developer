### Axios 란?

```
* Axios 란?

- Axios HTTP 클라이언트 라이브러리로써, 비동기 방식으로 HTTP 데이터 요청을 실행합니다.
  내부적으로 Axios는 직접적으로 XMLHttpRequest 를 다루지 않고, "AJAX 호출"을 할 수 있습니다.
  
* HTTP 통신이란?

- Hyper Text Transfer Protocol 의 줄임말로 HTML로 작성된 웹 페이지나 동영상, 음성 파일등을 주고 받기 위한 통신 규약
- 전송 계층 프로토콜로 TCP를 사용하고, 네트워크 계층 프로토콜로 IP를 사용하는데 이를 합쳐 TCP/IP 라고 한다.

```

![image](https://user-images.githubusercontent.com/43161245/94632321-2f680c80-0305-11eb-8aef-3a7c758264ef.png)


### Ajax

```
- 비동기 방식으로 서버와 통신하는 방식입니다.
- XML을 이용하고 요즘은 JSON 을 많이 사용합니다.

1. 요청 : 브라우저는 서버에 정답을 요청한다. (브라우저는 Ajx 요청을 담당하는 XMLHttpRequest 라는 객체를 구현하고 있다.)
2. 응답 : 브라우저는 콘텐츠를 처리하여 페이지에 추가한다.

* jQuery 쓰는 이유

- jQuery를 이용하면, 100줄 정도의 Source를 몇 줄 만으로 간단하게 주고 받을 수 있습니다.
- 크로스 브라우징의 문제를 jQuery가 알아서 해결해줍니다.
```
