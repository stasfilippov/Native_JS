import {city, demolishHousesOnTheStreet, getBuildingsWithStaffCountGreaterThen} from './02-01';

test('should take all man older then 90', () => {
	const ages = [18, 20, 90, 14, 12, 23, 55, 100]


	const oldAges = ages.filter(age => age > 90)

	expect(oldAges.length).toBe(1)
	expect(oldAges[0]).toBe(100)
})


test('should take all courses chipper 160', () => {
	const courses = [
		{title: 'CSS', price: 100},
		{title: 'JS', price: 120},
		{title: 'React', price: 150}
	]

	const cheefCourses = courses.filter(course => course.price < 160)

	expect(cheefCourses.length).toBe(3)
})

test('get only completed tasks', () => {
	const tasks = [
		{id: 1, title: 'Bread', isDone: false},
		{id: 2, title: 'Milk', isDone: false},
		{id: 3, title: 'Sugar', isDone: true},
		{id: 4, title: 'Fruit', isDone: false}
	]

	const completedTasks = tasks.filter(task => task.isDone)

	expect(completedTasks.length).toBe(1)
	expect(completedTasks[0].title).toBe('Sugar')
})

test('get only uncompleted tasks', () => {
	const tasks = [
		{id: 1, title: 'Bread', isDone: false},
		{id: 2, title: 'Milk', isDone: false},
		{id: 3, title: 'Sugar', isDone: true},
		{id: 4, title: 'Fruit', isDone: false}
	]

	const uncompletedTasks = tasks.filter(task => !task.isDone)

	expect(uncompletedTasks.length).toBe(3)
	expect(uncompletedTasks[0].title).toBe('Bread')
	expect(uncompletedTasks[1].title).toBe('Milk')
	expect(uncompletedTasks[2].title).toBe('Fruit')
})

test('Houses should be destroyed', () => {

	demolishHousesOnTheStreet(city, 'Happy street');

	expect(city.houses.length).toBe(1)
	expect(city.houses[0].id).toBe(1)
})

test('buildings with correct staff count', () => {
	getBuildingsWithStaffCountGreaterThen(city.governmentBuildings, 500)

	expect(city.governmentBuildings.length).toBe(1)
	expect(city.governmentBuildings[0].type).toBe('FIRE-STATION')
})