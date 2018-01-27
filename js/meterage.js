function calc() {
	$('#i1').html("700 Ом.");
	$('#i2').html("700 Ом.");
	$('#i3').html("500 Ом.");
	$('#i4').html("500 Ом.");
	$('#i5').html("500 Ом.");
	$('#i6').html("500 Ом.");
	$('#i7').html("5 мкV.");
	$('#i8').html("ОК.");
	$('#status').html("Статус  : ИСПРАВЕН");
	$('#status').css("background", "#1ee226");
}

function calc_dn() {

	var data_wight_ = [[0, 0, 0],
				  [10, 10, 9],
				  [100, 100, 105],
				  [1000, 1000, 995],
				  [2000, 2000, 1995],
				  [3000, 3000, 2995],
				  [4000, 4000, 3800],
				  [5000, 5000, 4600],
				  [6000, 6000, 5300],
				  [7000, 7000, 6100],
				  [8000, 8000, 6900],
				  [9000, 9000, 7500],
				  [10000, 10000, 8000],
				 ];
	g_w.updateOptions({
		'file': data_wight_
	});
	$('#status_dn').html("Статус линейности - НЕИСПРАВЕН");
	$('#status_dn').css("background", "#e21e1e");
}

var data_wight = [[0, 0, 0]];

$(document).ready(function () {
	//$('#b_ph_test').click(calc());
	g_w = new Dygraph(
		document.getElementById("gr_meterage"), data_wight, {
			//title: 'Динамика измерения относительно образцового.',
			labels: ['Вес образцовый', 'Вес образцовый', 'Вес измеренный'],
			//ylabel: 'Вес измеренный',
			//xlabel: 'Вес образцовый',
			colors: ['#000aff', '#f80b0b'],
			strokeWidth: 1,
			drawPoints: true,
			pointSize: 1,
			highlightCircleSize: 3,
			//fillGraph : true,
			fillAlpha: 0.05


		}
	);




});
