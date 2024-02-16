import { CAR, ERROR } from '../Constant/Constant.js';

class CarList {
	#names;
	#distance;
	#carCount;

	constructor(names) {
		this.#names = names;
		this.#distance = Array.from(names).fill(0);
		this.#carCount = 0;
		this.validate(names);
	}

	move(index) {
		this.#distance[index]++;
	}

	getDistance() {
		return this.#distance;
	}

	validate(nameArray) {
		if (
			!this.isValidateCarNumber(nameArray) ||
			!this.isValidateDuplicate(nameArray)
		)
			throw new Error(ERROR.NAME);

		for (const name of nameArray) {
			if (!this.isValidateNameLength(name)) throw new Error(ERROR.NAME);
		}
	}

	isValidateCarNumber(nameArray) {
		return !!(
			nameArray.length >= CAR.MIN_CAR_LEN && nameArray.length <= CAR.MAX_CAR_LEN
		);
	}

	isValidateDuplicate(nameArray) {
		const set = new Set(nameArray);
		return nameArray.length === set.size;
	}

	isValidateNameLength(name) {
		return !!name.length <= CAR.MAX_NAME_LEN;
	}
}

export default CarList;