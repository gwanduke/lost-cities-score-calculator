# Lost Cities Score Calculator

> https://lostcities.info

Lost Cities is a board game that is very difficult to calculate the score.

This app makes it easy to calculate the score, and if the browser cache is not empty, all scores are saved.

## TODO

> 👷‍♂️WIP👷‍♂️

- [ ] I18n support
- [ ] Styling
- [ ] SEO
- [ ] Cross Browsing
- [ ] Test
- [ ] Minimal code refactoring

## Skill Stack

- ReactJS
- MobX State Tree - first Try, it was nice experience!

<details>

<summary>MobX State Tree 사용후기</summary>

### 장점

- `MobX State Tree`를 사용해보니 앱 상태를 중복없이 구조적으로 구성하는데 유용했다.
- Model을 잘 분리하고 비지니스 로직을 집약시킬 수 있었다.
- 전체 상태를 Serialize, Deserialize 하기도 매우 편리했다. 나중에 SSR 처리를 할 떄에도 편리하겠다.
- MobX 바인딩을 그대로 사용할 수 있다.
- 왠지 불편하고 하기 싫게 생겼지만 막상 해보고 익숙해지면 약간의 제약이 가져다 주는 장점들이 정말 편리함

### 단점

- models, actions, views 라는 각 구조안에 필요한 것들이 위치해야해서, 하나의 모델이 너무 커져 관리가 어렵지 않도록 조심해야한다.
- 레퍼런스 개념이 안잡히면 처음에 애를 먹을 수 있다.
- 모델 기반 구조화에 어느정도 익숙한 사람들이 사용하기 좋겠다.
- MobX에 익숙하지 않으면 여러 개념이 헷갈릴 수 있겠다.

</details>

## Releases

- 0.2.0: Use MobX State Tree, improve UI(mobile/pc), fix some bugs.
- 0.1.0: First release.
