require.config({
    baseUrl: "lib",
    paths: {
       jquery: 'jquery-2.1.3',
       jqui:   'jquery-ui-1.11.2.custom/jquery-ui',
       njui_counter :      'njui-counter/njui-counter',
       njui_basicslider : 'njui-slider/njui-basicslider'
    }
});

require(['jquery','njui_counter','njui_basicslider'],function($){
    $(function(){
        $('#counter-sample').counter({time:160});
        $('#basicslider-sample').basicslider();
    });
});