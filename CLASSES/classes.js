class Rectangle {
    constructor(a,b){
        this.a = a;
        this.b = b;
    }

    square(){
        let sq = this.a * this.b;
        console.log(sq);
    }
    perimetr(){
        let pr = this.a *2 + this.b * 2
        console.log(pr)
    }
}

const kvadrat = new Rectangle(5,5);

kvadrat.perimetr();
kvadrat.square()