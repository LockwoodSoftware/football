var express = require('express');
var path = require('path');
var router = express.Router();

// router.get( '/index.html', function( request, response ){
//         response.sendFile( path.join( __dirname, '../index.html') );
// });
//
//
router.get( '/', function( request, response ){
        response.render( 'index', { 
	players: [
		{ name: 'Micky Mantle', position: 'Center fielder', average: '287', home: 'Oklahoma', description: 'Now is the time for all good men to come to the aid of their country.' },
		{ name: 'Babe Ruth', position: 'First base', average: '302', home: 'Baltimore, Maryland', description: 'Now is the time for all good men to come to the aid of their country.' }
	] });
});

module.exports = router;





