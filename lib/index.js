require.config({
    baseUrl: "lib",
    paths: {
       jquery: 'jquery-2.1.3',
       jqui:  'jquery-ui-1.11.2.custom/jquery-ui',
       njui_counter : 'njui-counter/njui-counter'
    }
});

require(['jquery','njui_counter'],function($){
    $(function(){
        $('#count-sample').counter({time:160});
    })
});