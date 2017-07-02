import Room from './room'

export default class House {
	constructor() {
		this.levels = ['Ground floor'];
		this.rooms = [];
		this.documents = [];

		this.addRoom(new Room('General', 'fa-info'));
		this.addRoom(new Room('Bathroom', 'fa-bath'), 'Ground floor');
		this.addRoom(new Room('Bedroom', 'fa-bed'), 'Ground floor');
		this.addRoom(new Room('Office', 'fa-coffee'), 'Ground floor');
	}

	addLevel(level) {
		this.levels.push(level);
	}

	addRoom(room, level) {
		if (! room instanceof Room) {
			throw 'addRoom expects a Room object';
		}

		if (typeof level !== 'undefined') {
			room.level = level
		}

		this.rooms.push(room);
	}
}