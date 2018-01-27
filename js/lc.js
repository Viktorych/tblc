$(document).ready(function() {
    $('#table_lc').DataTable( {
        "ajax": "data/lc.json"
    ,
   /* columns: [
        { data: 0 },
        { data: 1 },
        { data: 2 },
        { data: 3 }
    ],*/
		"language": {
                "url": "datatable/Russian.json"
            }
 
    } );
} );