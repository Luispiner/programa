e1=document.querySelector('ul li:nth-child(1)');
e2=document.querySelector('ul li:nth-child(2)');
e3=document.querySelector('ul li:nth-child(3)');
e4=document.querySelector('ul li:nth-child(4)');
p=document.querySelector("p");

t1="<h2>El sistema operativo Linux es más bien una familia de sistemas operativos, cuyo desarrollo empezó en los años 80. Este software tiene la característica de tener un desarrollo libre y, por tanto, gratuito. Como tal, no pertenece a ninguna corporación, como sí lo son sus contrapartes de mercado: Windows y Mac. Este aspecto permite que su código fuente (abierto) se pueda utilizar, modificar y distribuir sin restricciones</h2>"
t2="<h2>Aunque la historia de Linux se comienza a escribir un poco más tarde, sus orígenes nos hacen remontar hasta principios de los años 80, cuando Richard Stallman, inició el Proyecto GNU con el propósito de crear un sistema operativo similar y compatible con UNIX. En el año 1985, se creó la Fundación del Software Libre y se desarrolló la Licencia pública general de GNU para tener un marco legal que permitiera difundir libremente este software.</h2>"
t3="<h2>Las distribuciones se clasifican aproximadamente en tres árboles genealógicos básicos de Linux y muchos otros árboles genealógicos más pequeños o versiones independientes. Por ejemplo, todo el árbol genealógico de Ubuntu se basa en Debian, mientras que Fedora se basa en Red Hat Linux. SUSE Linux, por su parte, utilizaba la versión Slackware de Linux.</h2>"
t4="<h2>Fundación Linux es un tipo de organización sin ánimo de lucro que promueve el desarrollo de una tecnología abierta y su adopción comercial, no solo para Linux sino también para otros sistemas operativos.</h2>"


function cambiar (event,t){
    event.preventDefault();
    p.innerHTML=t;
}
e1.addEventListener ('click', function (event) {cambiar(event,t1)});
e2.addEventListener ('click', function (event) {cambiar(event,t2)});
e3.addEventListener ('click', function (event) {cambiar(event,t3)});
e4.addEventListener ('click', function (event) {cambiar(event,t4)});