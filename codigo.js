function aleatorio(minimo, maximo)
{
    var numero = Math.floor( Math.random() * (maximo -minimo +1) + minimo)
    return numero; 
}
var piedra = 0
var papel = 1
var tijera = 2
var Lagarto = 3
var spock = 4 

var OpcionUsuario
var opcionMaquina = aleatorio(1,4);

alert("¿quieres jugar piedra papel y tijera?")

OpcionUsuario = prompt("¿Que eliges?\nPiedra: 0\nPapel: 1\nTijera: 2\nlagarto: 3\nLagarto: 4", 0)

if(OpcionUsuario == piedra)
{
    alert("Elegiste Piedra")
    if(opcionMaquina == piedra)
    {
        alert("Empate, simio no mata simio")
    }
    else if(opcionMaquina == papel)
    {
        alert("Perdiste, fuite envuelto en papel")
    }
    else if(opcionMaquina == tijera)
    {
        alert("Ganasta, haz roto unas tijeras")
    }
    else if(opcionMaquina == Lagarto)
    {
        alert("Ganaste apalstando un lagarto")
    }
    else if(opcionMaquina == spock)
    {
        alert("Perdiste Spock te desintegro")
    }
}
else if(OpcionUsuario == papel)
{
    alert("Elegiste papel")
    if(opcionMaquina == piedra)
    {
        alert("Perdiste envuelto en papel")
    }
    else if(opcionMaquina == papel)
    {
        alert("Empeate, simio no mata simio")
    }
    else if(opcionMaquina == tijera)
    {
        alert("Gnaste, no hay papel que te detenga")
    }
    else if(opcionMaquina == Lagarto)
    {
        alert("Perdiste, un lagarto puede comer papel")
    }
    else if(opcionMaquina == spock)
    {
        alert("Ganaste y Spock queda destituido")
    }
}
else if(OpcionUsuario == tijera)
{
    alert("Elegiste tijera")

    if(opcionMaquina == piedra)
    {
        alert("Pierdes, las tijeras te han aplastado")
    }
    else if(opcionMaquina == papel)
    {
        alert("Ganaste, no hay papel que se te resista")
    }
    else if(opcionMaquina == tijera)
    {
        alert("Empate, simio no mata simio")
    }
    else if(opcionMaquina == Lagarto)
    {
        alert("Ganaste, le haz cortado la cabeza a un lagarto")
    }
    else if(opcionMaquina == spock)
    {
        alert("Pierdes, Spock te ha aplastado")
    }
}
else if(OpcionUsuario == Lagarto)
{
    alert("Elegiste Lagarto")

    if(opcionMaquina == piedra)
    {
        alert("Pierdes, haz sido aplastado por una piedra")
    }
    else if(opcionMaquina == papel)
    {
        alert("Ganaste, el papel es delicioso, buen provecho lagarto")
    }
    else if(opcionMaquina == tijera)
    {
        alert("Pierdes, las tijeras te han decapitado")
    }
    else if(opcionMaquina == Lagarto)
    {
        alert("Empate, simio no mata simio")
    }
    else if(opcionMaquina == spock)
    {
        alert("Ganas, spock ha sido envenado por un lagarto")
    }
}
else if(OpcionUsuario == spock)
{
    alert("Elegiste a spock")

    if(opcionMaquina == piedra)
    {
        alert("Ganaste, spock te desintegro con su rayo laser")
    }
    else if(opcionMaquina == papel)
    {
        alert("Pierdes, haz quedado distituido Spock")
    }
    else if(opcionMaquina == tijera)
    {
        alert("Ganaste, arriba los rayos lasers")
    }
    else if(opcionMaquina == Lagarto)
    {
        alert("Pierdes, haz sido envenenado")
    }
    else if(opcionMaquina == spock)
    {
        alert("Empate, simio no mata simio")
    }
}
else
{
    alert("Lo siento esa no es una opción")
}
