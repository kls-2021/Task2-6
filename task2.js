var x=10;
console.log("In global the value of x is: "+x);
function a ()
{
    var x=20;
    console.log("In function a the value of x is: "+x);
a();
function b ()
{
    var x=20;
    console.log("In function b the value of x is: "+x);
}
b();
}
function c ()
{
    var x=30;
    console.log("In function c the value of x is: "+x);
d();
function d ()
{
    var x=40;
    console.log("In function d the value of x is: "+x);
}
}
c();
function e ()
{
    var x=50;
    console.log("In function e the value of x is: "+x);
f();
}
function f () 
{
    console.log("In function f the value of x is: "+x);
}
e();
function g ()
{
    var x=60;
    console.log("In function g the value of x is: "+x);
h();
function h () 
{
    console.log("In function h the value of x is: "+x);
}
}
g();
function i ()
{
    console.log("In function i the value of x is: "+x);
j();
function j () 
{
    console.log("In function j the value of x is: "+x);
}
}
i();
x=100;
console.log("In global now the value of x is: "+x);