class claculator{

add(n1,n2){return n1+n2;}
sub(n1,n2){return n1-n2;}
mul(n1,n2){return n1*n2;}
div(n1,n2){return n1/n2;}


static main(){
    let obj=new claculator();
    let output1=obj.add(1,2);
    let output2=obj.sub(5,2);
    let output3=obj.mul(1,10);
    let output4=obj.div(12,2);
    console.log(output1);
    console.log(output2);
    console.log(output3);
    console.log(output4);

}
}
claculator.main();