### JOSN VS XML 기본 구조
 
![image](https://user-images.githubusercontent.com/43161245/83597111-691c4700-a5a1-11ea-984e-dc00a1528e3c.png)

```
신규 웹 API를 만들 때 고려하는 요소에는 여러 가지가 있지만 
그 중 하나가 API에 전달할 ‘인자 데이터’와 ‘응답받는 데이터’의 형식일 것입니다.

+

Y
XML 문서는 XML DOM(Document Object Model)을 이용하여 해당 문서에 접근합니다.
하지만 JSON은 문자열을 전송받은 후에 해당 문자열을 바로 파싱하므로, XML보다 더욱 빠른 처리 속도를 보여줍니다.
따라서 HTML과 자바스크립트가 연동되어 빠른 응답이 필요한 웹 환경에서 많이 사용되고 있습니다.

XML 쓰는 이유.

JSON에서는 명칭 공간을 지원하지 않고, 그래픽 파일이나 문서 등의 바이너리(Binary) 코딩된 파일은 XML이 더 적합합니다.

```

### 메타데이터(metadata)는 데이터(data)에 대한 데이터이다. 

### 출처
http://tcpschool.com/json/json_intro_xml  
