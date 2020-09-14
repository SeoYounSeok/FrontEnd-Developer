### Cookie 와 Seesion 그리고 LocalStorage 와 SessionStorage

```

- 쿠키와 세션을 사용하는 이유?
  
  클라이언트의 인증을 유지하기 위해 사용합니다.
  (사용자에 대한 인증을 유지)

```

### CooKie 란?

```

- Cookie 란?

  1. Cookies는 최대 4KB의 용량을 가진 매우 작은 양의 데이터입니다. 문자열만 저장할 수 있다는 제한은 있다.
  2. 클라이언트 측에서 관리되는 작은 기록 정보 파일입니다.
  
- Cookie의 종류
  
  1. Seesion cookies
  
     - Seesion cookies는 만료일을 포함하지 않는다.
     - 브라우저나 탭이 열려있는 동안에만 저장이 된다.
     - 은행 유저들의 자격 증명을 저장하는데 사용 될 수 있다.
     
  2. Persistent cookies
  
     - Persistent cookies은 만료일을 가집니다.
     - cookies는 만료일까지 유저의 디스크에 저장되고 만료일이 지나면 삭제됩니다.
     - 유저들이 방문할때마다 유저 경험을 커스텀하기 위해 특정 웹사이트에서 행동을 기록하는 등 여러 활동들에 사용될 수 있습니다.
```

### Session 란?

```

- Session 란?

  1. 세션은 쿠키를 기반으로 하고 있지만, 사용자 정보 파일을 브라우저에 저장하는 쿠키와 달리 세션은 서버 측에서 관리합니다.
  2. 서버에서는 클라이언트를 구분하기 위해 세션 ID를 부여하며 웹 브라우저가 서버에 접속해서 브라우저를 종료할 때까지 인증상태를 유지합니다.
  3. 물론 접속 시간에 제한을 두어 일정 시간 응답이 없다면 세션을 끊도록 설정이 가능 합니다.
  
  + 사용자에 대한 정보를 서버에 저장하기 때문에 쿠키보다 보안에 좋지만, 사용자가 많아질수록 서버 메모리를 많이 차지하게 됩니다.
     즉, 동접자 수가 많은 웹 사이트인 경우 서버에 과부하를 주게 되므로 성능 저하의 요인이 됩니다.
  
```

### Cookie 와 Session 의 차이
```

- 가장 큰 차이점은 사용자의 기록 정보가 저장되는 위치입니다.
- 때문에 쿠키는 서버의 자원을 전혀 사용하지 않으며, 세션은 서버의 자원을 사용합니다.

- 또한 보안 면에서 세션이 더 우수하며, 요청 속도는 쿠키가 세션보다 더 빠른데, 그 이유는 세션의 경우 서버에서의 처리가 필요하기 때문입니다.

```

![image](https://user-images.githubusercontent.com/43161245/93048852-c9d81700-f69a-11ea-947c-1b62eb1a4a1f.png)


### Cookie 와 LocalStorage


```

1. 쿠키는 매번 서버로 전송된다.
   반면에 Web Storage는 저장된 데이터가 클라이언트에 존재할 뿐 서버로 전송은 이루어지지 않는다.

2. 단순 문자열을 넘어(스크립트) 객체정보를 저장할 수 있다.
   * 브라우저의 지원 여부를 확인해 봐야 하는 항목이다.

```  
 

=> 다음편 [2020-09-14 Cookie 와 Seesion 그리고 LocalStorage 와 SessionStorage - 2.md](https://github.com/SeoYounSeok/ManToMen-WEB-Angular7/blob/master/src/app/services/data.service.ts)

```
https://medium.com/@erwinousy/%EC%BF%A0%ED%82%A4-vs-%EB%A1%9C%EC%BB%AC%EC%8A%A4%ED%86%A0%EB%A6%AC%EC%A7%80-%EC%B0%A8%EC%9D%B4%EC%A0%90%EC%9D%80-%EB%AC%B4%EC%97%87%EC%9D%BC%EA%B9%8C-28b8db2ca7b2
https://velog.io/@ejchaid/localstorage-sessionstorage-cookie%EC%9D%98-%EC%B0%A8%EC%9D%B4%EC%A0%90
https://victorydntmd.tistory.com/34
https://devuna.tistory.com/23
```
