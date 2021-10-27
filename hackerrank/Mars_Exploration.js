function main() {
    var S = readLine();
    var n = 0;
    for(var i = 0; i < S.length ; i += 3){
        if(S[i] != "S") n++;
        if(S[i + 1] != "O") n++;
        if( S[i + 2] != "S") n++;
        
    }
   console.log(n);
}