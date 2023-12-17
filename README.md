## React Query

- https://tkdodo.eu/blog/practical-react-query

### staleTime

- 쿼리가 신선한 상태이면 항상 캐시에서 데이터를 가져오고 네트워크 요청은 발생하지 않는다.
- 쿼리가 상한 상태이면 캐시에서 데이터를 계속 가져오지만, 특정 조건에서 백그라운드 리패치가 발생할 수 있다.
- 리액트 쿼리는 `staleTime=0` 이어도 매번 리랜더링할 때마다 queryFn을 호출하지 않는다.
- 쿼리를 통해 가져온 서버 상태를 클라이언트 상태값으로 저장하지 않는게 기본적이나 Form의 초기값 설정 등의 경우 저장을 해야 좋은 경우가 있다. 이런 상황에서는 `staleTime: infinity` 으로 설정한다.

### cacheTime

- 비활성 쿼리가 캐시에서 제거될 때까지 걸리는 시간, 기본값은 5분이다.
- 쿼리는 사용되는 모든 컴포넌트가 언마운트되면 비활성 상태가 된다.

### 사용자 경험 개선하기

- **Placeholder Data**와 **Initial Data**
- `initialData`는 캐시에 지속된다. 초기 데이터는 하나만 있을 수 있으며, 첫 번째 옵저버가 마운트될 때 캐시에 저장된다.
- `placeholderData`는 옵저버 수준이다. 이론적으로 컴포넌트마다 다른 값을 가질 수 있다.

### options

- `enabled` : 쿼리 활성/비활성
- `select` : 쿼리 데이터 변형
- `notifyOnChangeProps` : 실제로 사용중인 값을 추적하여 해당 값이 변경시 리랜더링 수행
- `structuralSharing` : 데이터 비교하기
