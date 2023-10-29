const ages = [18, 20, 90, 14, 12, 23, 55, 100]

const oldAges = ages.filter(e => e > 90)// >90

console.log(oldAges)

const courses = [
	{title: 'CSS', price: 100},
	{title: 'JS', price: 120},
	{title: 'React', price: 150}
]

export type cheefCoursesPropsType = {
	title: string
	price: number
}

const cheefCourses = (courses: cheefCoursesPropsType) => {
	return courses
}


type streetType = {
	title: string
}

type adressType = {
	number: number
	street: streetType
}

type housesType = {
	id: number
	buildedAt: number,
	repaired: boolean,
	adress: adressType
}

type cityType = {
	title: string,
	houses: housesType[]
	governmentBuildings: governmentBuildingType[]
	citizensNumber: number
}

//==========================


type governmentBuildingType = {
	type: string
	adress: adressType
	budget: number
	staffCount: number
}


export const city: cityType = {
	title: 'New York',
	houses: [
		{
			id: 1,
			buildedAt: 2012, repaired: false,
			adress: {
				number: 100,
				street: {title: 'White street'}
			}
		},
		{
			id: 2,
			buildedAt: 2007, repaired: false,
			adress: {
				number: 100,
				street: {title: 'Happy street'}
			}
		},
		{
			id: 3,
			buildedAt: 2020, repaired: false,
			adress: {
				number: 101,
				street: {title: 'Happy street'}
			}
		}
	],
	governmentBuildings: [
		{
			type: 'HOSPITAL',
			adress: {
				street: {
					title: 'Central Str'
				},
				number: 12
			},
			budget: 200000,
			staffCount: 200
		},
		{
			type: 'FIRE-STATION',
			adress: {
				street: {
					title: 'West Str'
				},
				number: 20
			},
			budget: 500000,
			staffCount: 1000
		},
	],
	citizensNumber: 1000000
}


export const demolishHousesOnTheStreet = (city: cityType, street: string) => {
	city.houses = city.houses.filter(h => h.adress.street.title !== street)
}

export const getBuildingsWithStaffCountGreaterThen = (goverment: governmentBuildingType[], count: number) => {
	city.governmentBuildings = goverment.filter(g => g.staffCount > count)

}