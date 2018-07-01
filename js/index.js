function quadraticEquation(a,b,c) {
    var
    D, x1, x2;
    D = b**2 - 4*a*c;
    
    if (D > 0) {
        x1 = (-b + Math.sqrt(D))/(2*a);
        x2 = (-b - Math.sqrt(D))/(2*a);
        alert('x1 = '+x1+'  x2 = '+x2);
    }
    else if (D == 0) {
        x1 = (-b)/(2*a);
        alert('x = '+x1);
        
    }
    else if (D < 0) {
     alert('no results');
     
    }
}
quadraticEquation(1,-2,-3)