        $(document).ready(function() {
            $('#fullpage').'#fullpage'({
                anchors: ['firstPage', 'secondPage']
                sectionsColor: ['#A3A3A3', '#A3A3A3']
                navigation: true,
                navigationPosition: 'right',
                navigationTooltips: ['First page', 'Second page'] }); });

        $(document).ready(function() {
            $('.fullpage').fullpage({
                verticalCentered: true,
                sectionsColor: ['#ffffff', '#ffffff', '#ffffff'],
                afterRender: function(){


                    
                    $('video').get(1).play();
                }
            });
        });