const showProfile = ({ name: fullName, age }) => {
	console.log(
		`User ${fullName} is ${age} years old`
	)
}

const joe = {
  name: 'Joe',
  age: '32',
  email: 'joe@example.com'
}

showProfile(joe)