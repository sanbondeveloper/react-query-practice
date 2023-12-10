## 리액트 쿼리 학습하기

https://tkdodo.eu/blog/practical-react-query

- staleTime : 쿼리가 신선한 상태면 항상 캐시에서 데이터를 가져오고 네트워크 요청은 발생하지 않는다. 쿼리가 상한 상태면 캐시에서 데이터를 계속 가져오지만, 특정 조건에서 백그라운드 리패치가 발생할 수 있다.
- cacheTime : 비활성 쿼리가 캐시에서 제거될 때까지 걸리는 시간, 기본값은 5분, 쿼리는 사용되는 모든 컴포넌트가 언마운트되면 비활성 상태가 된다.
- 리액트 쿼리는 staleTime=0 이어도 매번 리랜더링할 때마다 queryFn을 호출하지 않는다.
- 쿼리를 통해 가져온 서버 상태를 클라이언트 상태값으로 저장하지 않는게 기본적이나 저장을 해야 좋은 경우도 있다. 그럴땐 `staleTime: infinity` 로 설정하여 서버 상태와 클라이언트 상태를 동기화한다.
- `enabled` 옵션으로 쿼리를 일시 중단시킬 수 있다.
- `select` 옵션
- `notifyOnChangeProps`, `structuralSharing` 랜더링 효율적으로 하기
- Background errors 발생시, error와 오래된 데이터를 동시에 반환해준다.
