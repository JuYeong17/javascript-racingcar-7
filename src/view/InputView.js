import { Console } from "@woowacourse/mission-utils";

class InputView{
  async getInput(){
    const carName= await Console.readLineAsync("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분\n");
    const tryNumber = await Console.readLineAsync("시도할 횟수는 몇 회인가요?");

    const car=carName.split(',');
    
    return {car, tryNumber};
  }

}

export default InputView;