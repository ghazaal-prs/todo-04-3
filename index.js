const sabadKharid = [{
    name: 'pizza',
    size: 'large'
} , {
    name: 'salad',
    size: 'medium'
}]

const addNewKhoraki = (newKhoraki) => {
    if (!newKhoraki.name && !newKhoraki.size) return null;

    sabadKharid.push(newKhoraki)
}
addNewKhoraki({name: 'sibzamini' , size: 'large'});
delete sabadKharid[1]
console.log(sabadKharid)