import FortuneCookies from '../shared/FortuneCookies';

export default class Captions {
   static generate(numCaptions: number) {
      const captions: string[] = [];
      let index: number;

      for (let i = 1; i <= numCaptions; i++) {
         index = Math.floor(Math.random() * FortuneCookies.length);
         captions.push(FortuneCookies[index]);
      }

      return captions;
   }
}
