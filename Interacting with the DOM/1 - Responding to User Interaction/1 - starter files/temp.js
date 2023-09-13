

function hiAndBye(func){
    func()
    console.log('bye')
}

hiAndBye( () =>{
    console.log('Greeting')

})