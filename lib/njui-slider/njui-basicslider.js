define(['jquery','jqui'],function($){
    $.widget('njui.basicslider',{
        options: {
            autostart: true,
            duration: 5000,
        },
        _create: function(){
            this.state = {};
            this.state.items = this.element.find('.slider-item').hide();
            
            this._buildAsset();
            this._initEvent();

            this.switchTo(0); // just init the current state to the first element


            if (this.options.autostart)
                this.autoSwitch();

        },
        _buildAsset: function(){
            $("<a class='slider-arrow slider-arrow-prev' href='#'></a>").appendTo(this.element);
            $("<a class='slider-arrow slider-arrow-next' href='#'></a>").appendTo(this.element);
        },
        _initEvent: function(){
            this.element.on('click','.slider-arrow-next',$.proxy(this.next,this));
            this.element.on('click','.slider-arrow-prev',$.proxy(this.prev,this));
        },
        switchTo: function(index){ 
            var current = this.state.current,
                target  = {
                    index:index,
                    element:$(this.state.items[index])
                };
            
            if (current)
                current.element.hide();

            target.element.show();
            this.state.current = target;

        },
        prev: function(){
            if (this.state.current.index !== 0){
                this.switchTo(this.state.current.index - 1);
            }else{
                this.switchTo(this.state.items.length - 1);
            }
        },
        next: function(){
            if (this.state.current.index == this.state.items.length - 1){
                this.switchTo(0);
            }else{
                this.switchTo(this.state.current.index + 1);
            }
        },
        autoSwitch: function(){
            var __next = $.proxy(this.next,this);
            this.state.interval = setInterval(__next,this.options.duration);
        },
        pauseSwith: function(){
            clearInterval(this.state.interval);
        }

    });
});