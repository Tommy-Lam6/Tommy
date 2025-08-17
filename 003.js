let students = []

students.push({
  name: 'Alice',
  chinese: 80,
  english: 85,
  math: 90,
})

students.push({
  name: 'Bob',
  chinese: 85,
  english: 75,
  math: 80,
})

students.push({
  name: 'Charlie',
  chinese: 90,
  english: 95,
  math: 100,
})

students.push({
  name: 'David',
  chinese: 50,
  english: 50,
  math: 100,
})

students.push({
  name: 'Fiona',
  chinese: 20,
  english: 80,
  math: 100,
})

students.push({
  name: 'Eve',
  chinese: 50,
  english: 100,
  math: 100,
})

// sort by total score
// if tie, sort by name

console.log('排序前:', students)

let sortedStudents =[];

function compareStudents(a,b){
    let totalA = a.chinese + a.english + a.math;
    let totalB = b.chinese + b.english + b.math;

    return totalA>totalB ? a : b;
}

function sortStudents(students) {
    for (let i = 0; i < students.length; i++) {
        let currentStudent = students[i];
        let inserted = false;

        for (let j = 0; j < sortedStudents.length; j++) {
            let comparedStudent = sortedStudents[j];
            if (compareStudents(currentStudent, comparedStudent) === currentStudent) {
                sortedStudents.splice(j, 0, currentStudent);
                inserted = true;
                break;
            }
        }

        if (!inserted) {
            sortedStudents.push(currentStudent);
        }
    }

    return sortedStudents;
}
sortedStudents = sortStudents(students);
console.log('排序後:', sortedStudents);








