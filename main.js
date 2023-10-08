const a =  prompt('Yoshingiz:')

if ( a == null) {
    document.write('Canceled !')
} else if (a  >= 7 && a < 18) {
    document.write('3.000 som')
} else if (a >= 18 && a < 65) {
    document.write('10.000 som')
} else if (a > 65) { 
    document.write('Tekin !')
} else if (a < 7) {
    
    document.write('2.000 som')
}


