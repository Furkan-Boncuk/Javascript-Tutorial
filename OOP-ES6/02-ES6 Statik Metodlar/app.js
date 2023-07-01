// static methods

class Math {

    cube(x) {
        console.log(x*x*x);
    }

    static cube_static(x) {
        console.log(x*x*x);
    }

}

//normal bir method kullanımı
const mathObj = new Math();

mathObj.cube(3);

// static method kullanımı
Math.cube_static(4);     // yeni bir nesne oluşturmaya ihtiyaç duymaz

