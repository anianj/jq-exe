define(['jquery','jqui'],function($){
    $.widget('njui.counter',{
        options: {
            autostart: true
        },
        _create: function(){
            this.state = {}
            
            if(this.options.autostart){
                this.start();
            }

        },
        _update: function(){
            this.element.html(this._format(this.state.time));
            
            if (this.state.time <= 0){
                this.stop()
            }else{
                this.state.time -= 1;
            }
        },
        _format: function(time){
                return parseInt(time/60) + ":" + time%60;
        },
        start: function(){
            this.state.time = this.state.time || this.options.time;
            this._update();

            var self = this;
            function __update(){self._update();}
            this.state.interval = setInterval(__update,1000);
        },
        stop: function(){
            this.state.time = undefined;
            clearInterval(this.state.interval);
        },
        pause: function(){
            clearInterval(this.state.interval);
        }
    })
})