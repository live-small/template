<h1 align="middle">ESLint, Prettier 세팅된 환경</h1>



## 🔍 이건 말이죠,

ESLint, Prettier이 세팅된 환경입니다.

### 만들게 된 계기

코드 컨벤션의 중요성을 알게 된 후부터, 프로젝트 할 때마다 ESLint, Prettier를 세팅하는 걸 자동화할 수 없을까 고민하다..   
ESLint, Prettier이 세팅된 template을 만들어서 활용하자! 는 생각으로 만들었습니다.

## 📝 이용하는 방법

```bash
# 해당 저장소를 로컬로 옮겨옵니다
git clone https://github.com/live-small/template.git

# 혹시 모르니까, branch를 최신화해줍니다
git branch update

# 저장소(github)에 있는 브랜치를 확인합니다
git branch -a

# eslint-prettier이 세팅된 branch를 로컬에 생성해 이동합니다
git checkout -t origin/eslint-prettier

# 이용할 프로젝트로 복사합니다(맥 터미널 기준) 
cp -R template my-project(이용할 프로젝트 이름)

# 필요한 모듈을 다운받아요
npm i

```

## 💻 실행 결과

![잘_세팅됐다면_보일_메시지](https://github.com/live-small/template/blob/eslint-prettier/images/eslint-prettier.png)
