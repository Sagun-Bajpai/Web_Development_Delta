const student={
    name:"sagun",
    marks:95 ,
    prop:this,
    getName:function(){
        console.log(this);
        return this.name;
    },

    getMarks:function(){
        console.log(this);
        return this.marks;
    },

    getInfo1:function(){
        setTimeout(()=>{
            console.log(this);//student calling becouse depent on parent's functin 
        },2000);

    },
    getInfo2:function(){
        setTimeout(function(){
            console.log(this);
        },2000);
    }


    
};