import { Img, Resource } from 'vue-flux';
import Captions from './Captions';

const maxImages = 60;

export default class Images {
	static generate(num: number = 1) {
		const files: string[] = [];

		for (let i = 1; i <= maxImages; i++) {
			files.push(i.toString().padStart(2, '0') + '.jpg');
		}

		const captions = Captions.generate(num);
		const images: Resource[] = [];

		if (num > maxImages) {
			num = maxImages;
		}

		for (let i = 1; i <= num; i++) {
			const index = Math.floor(Math.random() * files.length);
			const src = '/vue-flux-docs/imgs/slides/' + files.splice(index, 1)[0];
			const rsc = new Img(src, captions[i - 1]);

			images.push(rsc);
		}

		return images.length > 1 ? images : images[0];
	}
}
