function solution(record) {
  let user = new Map();
  const answer = [];
  record.forEach(element => {
    const arr = element.split(" ");
    if(user[0] === "Enter") {
      user.set(arr[1], arr[2]);
      answer.push();
    } else if (user[0] === "Leave"){
      user.set(arr[1], arr[2]);
      answer.push();
    } else {
      
    }
  });
  return answer;
}
// 다양한 사람들이 들어오고, 나가는 것을 지켜볼 수 있는 관리자창을 만들기
// 들오오면 '닉네임'님이 들어왔습니다.
// 나가면 '닉네임'님이 나갔습니다.
// 변경 1. 채팅방 나가기 + 새로운 닉네임으로 들어오기
//      2. 채팅방에서 닉네임 바꾸기
// 닉네임이 바뀌면 바뀌기 전의 닉네임 또한 모두 바뀌게 설계
// 중복 닉네임 허용
// 채팅방에 들어오고 나가거나, 닉네임을 변경한 기록이 담긴 문자열 배열 record가
// record가 모두 실행된 후 최종적으로 방을 개설한 사람이 보게 되는 메시지를
// 문자열 배열 형태로 return

// id 닉네임
// enter => 들어왔습니다 기록
// leave => 나갔습니다 기록
// change => 기존 닉네임 변경

// record를 분리
// 명령어 + id + nickname
// 명령어 / id,name => 매핑 => user
// record.push(명령어 + ${user.nickname})
// if change? user.id 기반 서칭 후 nickname 변경
// record 반복문이 끝날 경우 return
