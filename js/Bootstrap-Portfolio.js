$(function () {

    $("#showMe").click(function () {

        var opa = $("#progress").css("opacity");

        opa = (opa == 1) ? 0 : 1;

        $("#progress").animate({
            "opacity": opa
        }, "slow");
    });

    $('#Light').click(function () {
        $('#lightT').attr("href", './css/Bootstrap-Portfolio-Light.css');
    });

    $('#Dark').click(function () {
        $('#lightT').attr("href", './css/Bootstrap-Portfolio-Dark.css');
    });

    $('#formBTN').click(function () {
        $('.fa-paper-plane').css('color', '#00611C');
    });

    // scroll handler
    var scrollToAnchor = function (id) {

        // grab the element to scroll to based on the name
        var elem = $("a[name='" + id + "']");

        // if that didn't work, look for an element with our ID
        if (typeof (elem.offset()) === "undefined") {
            elem = $("#" + id);
        }

        // if the destination element exists
        if (typeof (elem.offset()) !== "undefined") {

            // do the scroll
            $('html, body').animate({
                scrollTop: elem.offset().top
            }, 1000);

        }
    };

    // bind to click event
    $("a").click(function (event) {

        // only do this if it's an anchor link
        if ($(this).attr("href").match("#")) {

            // cancel default event propagation
            event.preventDefault();

            // scroll to the location
            var href = $(this).attr('href').replace('#', '')
            scrollToAnchor(href);

        }

    });

    $("#fixedbutton").mouseover(function () {
        animateDiv();

    });

    function makeNewPosition() {

        // Get viewport dimensions (remove the dimension of the div)
        var h = $(window).height() - 50;
        var w = $(window).width() - 50;

        var nh = Math.floor(Math.random() * h);
        var nw = Math.floor(Math.random() * w);

        return [nh, nw];


    }


});

var gaugeOptions = {

    chart: {
        type: 'solidgauge',
    },

    title: null,

    pane: {
        center: ['50%', '85%'],
        size: '100%',
        startAngle: -90,
        endAngle: 90,
        background: {
            backgroundColor: 'lightgray',
            innerRadius: '60%',
            outerRadius: '100%',
            shape: 'arc',
        }
    },

    tooltip: {
        enabled: false
    },

    // the value axis
    yAxis: {
        stops: [
            [0.1, '#DF5353'], // red
            [0.5, '#DDDF0D'], // yellow
            [0.9, '#55BF3B'] // green
        ],
        lineWidth: 0,
        minorTickInterval: null,
        tickAmount: 2,
        title: {
            y: -35
        },
        labels: {
            y: 16
        }
    },

    plotOptions: {
        solidgauge: {
            dataLabels: {
                y: 5,
                borderWidth: 0,
                useHTML: true
            }
        }
    }
};

// The speed gauge
var chartSpeed = Highcharts.chart('js', Highcharts.merge(gaugeOptions, {
    yAxis: {
        min: 0,
        max: 100,
        title: {
            text: 'Javascript'
        }
    },

    credits: {
        enabled: false
    },

    series: [{
        name: 'Javascript',
        data: [30],
        dataLabels: {
            format: '<div style="text-align:center"><span style="font-size:15px;color:' +
                ((Highcharts.theme && Highcharts.theme.contrastTextColor) || 'white')
        },

    }]

}));

var chartSpeed = Highcharts.chart('html-css', Highcharts.merge(gaugeOptions, {
    yAxis: {
        min: 0,
        max: 100,
        title: {
            text: 'html-css'
        }
    },

    credits: {
        enabled: false
    },

    series: [{
        name: 'html-css',
        data: [75],
        dataLabels: {
            format: '<div style="text-align:center"><span style="font-size:15px;color:' +
                ((Highcharts.theme && Highcharts.theme.contrastTextColor) || 'white')
        },

    }]

}));

var chartSpeed = Highcharts.chart('bootstrap', Highcharts.merge(gaugeOptions, {
    yAxis: {
        min: 0,
        max: 100,
        title: {
            text: 'bootstrap  '
        }
    },

    credits: {
        enabled: false
    },

    series: [{
        name: 'bootstrap  ',
        data: [60],
        dataLabels: {
            format: '<div style="text-align:center"><span style="font-size:15px;color:' +
                ((Highcharts.theme && Highcharts.theme.contrastTextColor) || 'white')
        },

    }]

}));

var chartSpeed = Highcharts.chart('PHP', Highcharts.merge(gaugeOptions, {
    yAxis: {
        min: 0,
        max: 100,
        title: {
            text: 'PHP'
        }
    },

    credits: {
        enabled: false
    },

    series: [{
        name: 'PHP',
        data: [60],
        dataLabels: {
            format: '<div style="text-align:center"><span style="font-size:15px;color:' +
                ((Highcharts.theme && Highcharts.theme.contrastTextColor) || 'white')
        },

    }]

}));
