import Room from './room'
import localForage from 'localforage'

export default class House {
	constructor() {
		this.id = 1;
		this.levels = ['Ground floor'];
		this.rooms = [];
		this.documents = [];

		this.addRoom(new Room('General', 'fa-info'));
		this.addRoom(new Room('Bathroom', 'fa-bath'), 'Ground floor');
		this.addRoom(new Room('Bedroom', 'fa-bed'), 'Ground floor');
		this.addRoom(new Room('Office', 'fa-coffee'), 'Ground floor');
	}

	static findOrCreate(id) {
		let house = new House;

		console.log('House:'+id);
		localForage.getItem('House:'+id).then(function (data) {
			console.log(data);
			if (data !== null) {
				for(var k in data) house[k]=data[k];
			}
		})

		return house;
	}

	save() {
		localForage.setItem('House:'+this.id, this).then((data) => {
			console.log('House:'+this.id+' was saved!');
		});
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
