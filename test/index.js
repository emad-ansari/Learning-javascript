console.log('hello')
const studentarray  = ["emad", "farhan", "arsalan", "Hamid"]

studentarray.forEach((student)=> {
    if (student === "arsalan"){
        studentarray.pop(student)
    }
})
console.log(studentarray)