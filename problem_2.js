var x = 0;
var y = 1;
var sum = 0;

while( x < 4000000 ) {
	if( x % 2 === 0 ) {
		sum += a;
	}
	var z = x + y;
	x = y;
	y = z;
	console.log(sum);
};
