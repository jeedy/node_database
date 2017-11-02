# node_database
Chapter 5. 데이터베이스 접근하기 - Node.js 정석 
============

## 오류 정정
### 1. PAGE 97 - databases/lib/rdf-parser.js 소스 오류 (수정 버전 커밋된 소스 참고)

## 아키텍처와 코어
 Node.js 로 인한 시스템 자원을 과부하를 방지하기 위한 대응방법.
 Node.js 는 매우 빠르다. 사용하다 보면 시스템 자원을 다 써버리거나 연결이 되어 있는 타 시스템에 과부하를 줄 수 있다.

## 패턴
 npm 모듈 async 를 통해 비동기 프로그램들의 작업 배치(batch) 혹은 순차적 처리 기법.
 비동기 자바스크립트 프로그래밍은 서로 의존하는 작업들이 많으면 더 복잡해질 수 있다.

## 자바스크립티즘
 자바스트립트 함수들을 특정 환경에서 다른 환경으로 내보내는 방법.

## CouchDB
```
 1. 참고 API : [http://docs.couchdb.org/en/1.6.1/intro/api.html]
 1. HTTP API reference : [http://docs.couchdb.org/en/1.6.0/http-api.html]
```

설치
```
$ brew install couchdb
```

실행 
```
$ couchdb
```

쿼리
```
$ curl -X POST 'http://localhost:5984/books'    // 생성
$ curl -X PUT 'http://localhost:5984/books'     // 생성 및 갱신
$ curl -X GET 'http://localhost:5984/books'     // 조회
$ curl -X DELETE 'http://localhost:5984/books'  // 삭제
```

데이터 예제 (Project Gutenberg)
```
$ curl -O http://www.gutenberg.org/cache/epub/feeds/rdf-files.tar.bz2
$ tar -xvjf rdf-files.tar.bz2
```