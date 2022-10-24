AFRAME.registerComponent('sctimer', {
    schema: {
      TimeOutTime : {type:'int', default:10 },
      HideMe: {type:'int',default:1},
    },
    multiple: true,
    init: function () {
      var data = this.data; //get all the data from the schema. 
      var el = this.el; //get reference to the entity.
      var date= new Date(); // to get current time
      this.TargetTime=new Date(date.getTime() + data.TimeOutTime*1000); //calulate the target time
     /*  
       seconds = new THREE.Object3D(); //the parent object
       seconds.name="seconds" */    
    },
    tick : function() 
    { 
      
      if(this.paused==false&& this.seconda!=0)
    {    this.GetTimeLeft();
           if(this.seconda==0)
        {
          this.TimeUp();
        }
     }
    
    },
  
  play: function () {
     if(this.paused)
      {
      this.TargetTime = new Date(new Date().getTime() + this.totalTimeRemaining); //update 
      
      }
      this.paused=false;
    },
       
       
    TimeUp: function(){
    this.el.setAttribute('visible',false);
    },
       
    GetTimeLeft:function(){
      let startDate = new Date();
      startDate = startDate.getTime();
      
      let timeRemaining = parseInt((this.TargetTime - startDate) / 1000);
      
      this.totalTimeRemaining=  timeRemaining*1000;
      if (timeRemaining >= 0) {
        days = parseInt(timeRemaining / 86400);
        timeRemaining = (timeRemaining % 86400);
        
        this.houra = parseInt(timeRemaining / 3600);
        timeRemaining = (timeRemaining % 3600);
        
        this.minutea = parseInt(timeRemaining / 60);
        timeRemaining = (timeRemaining % 60);
        console.log("timeRemaining "+ timeRemaining);
       
        this.seconda = parseInt(timeRemaining);
        console.log("days :"+days+" hours :"+this.houra+" minutes :"+this.minutea+" seconds :"+this.seconda);
      } 
      
    },
    remove: function () {
       console.log("removing timer"); //remove events if any
  
    },
      update: function (oldData) {
      var data = this.data;
      var el = this.el;
      }
  });
    