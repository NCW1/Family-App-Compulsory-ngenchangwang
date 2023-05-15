class FamilyMember {
	constructor(name, age, gender) {
		this.name = name;
		this.age = age;
		this.gender = gender;
	}

	incrementAge() {
		this.age++;
	}

	changeName(newName) {
		this.name = newName;
	}
}

const familyMembers = [];

function submitFamilyMember() {
	const nameInput = document.getElementById('name');
	const ageInput = document.getElementById('age');
	const genderInput = document.getElementById('gender');
	const name = nameInput.value;
	const age = parseInt(ageInput.value);
	const gender = genderInput.value;
	const familyMember = new FamilyMember(name, age, gender);
	familyMembers.push(familyMember);
	reloadFamilyMembers();
}

function reloadFamilyMembers() {
	const familyList = document.getElementById("familyMembers").tBodies[0];
	familyList.innerHTML = '';

	for (const [index, familyMember] of familyMembers.entries()) {
		const row = document.createElement('tr');
		row.innerHTML = `
			<td>${familyMember.name}</td>
			<td>${familyMember.age}</td>
			<td>${familyMember.gender}</td>
   			<td>
				<button onclick="addAge(${index})">Add Age</button>
				<button onclick="changeName(${index})">Change Name</button>
			</td>
		`;
		familyList.appendChild(row);
	}
}

function addAge(index) {
	const familyMember = familyMembers[index];
	familyMember.incrementAge();
	reloadFamilyMembers();
}

function changeName(index) {
	const familyMember = familyMembers[index];
	const newName = prompt("Enter a new name: ");

	if (newName) {
		familyMember.changeName(newName);
		reloadFamilyMembers();
	}
}