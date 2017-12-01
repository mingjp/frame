/* 
* @Author: Marte
* @Date:   2017-11-09 11:50:39
* @Last Modified by:   Marte
* @Last Modified time: 2017-11-09 17:24:06
*/

module.exports={
    src:'http://localhost:3001/src/imgs/red.jpg',
    changeEvent: null,
    change:function(type){
        switch(type){
            case 'red':
                this.src = 'http://localhost:3001/src/imgs/red.jpg';
                break;
            case 'yellow':
                this.src= 'http://localhost:3001/src/imgs/yellow.jpg';
                break;
            case 'green':
                this.src= 'http://localhost:3001/src/imgs/green.jpg';
                break;
        }

        this.changeEvent();
    }
}