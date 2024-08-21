const usuarios = []
function adicionarUsuarios(nome, email, idade){
    usuarios.push("User 1 ", "Nome de usuário", nome = "Luiz Fernando Ribeiro Santos",  "Seu email", email = "luizlindo@gmail.com", "Sua idade", idade =  18)
if(idade <= 0 ){
    console.log("Sua idade é inválida")
}if(nome == ""){
    console.log("Seu nome é inválido")
}if(email == ""){
    console.log("Seu email é inválido")
}
}
adicionarUsuarios()
 
function ListarUsuarios(){
    console.log(usuarios)
}

ListarUsuarios()