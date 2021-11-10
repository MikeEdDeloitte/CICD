$("#generate").click(function () {
	var lorem = $("#lorem");
	lorem.html("");
	let data = `Bacon ipsum dolor amet ground round eu tenderloin, capicola est duis meatloaf in incididunt pork cillum. Magna pork belly exercitation, chicken voluptate sed t-bone cow dolore adipisicing. Ham mollit dolor dolore, meatball cillum duis strip steak magna pariatur sint. Spare ribs ball tip chicken velit meatball ea pariatur duis beef ribeye venison sed voluptate aliquip. Dolore enim biltong exercitation bresaola ribeye ipsum swine strip steak commodo in. Buffalo exercitation frankfurter, in turkey quis biltong ball tip chicken flank aliquip aliqua ut pastrami kevin. Buffalo tail bacon ipsum consequat laboris shoulder commodo fugiat corned beef elit in.

Chicken buffalo pork chislic pork chop pork loin beef ribs tongue laborum leberkas andouille incididunt exercitation pig. Culpa hamburger cillum quis corned beef. Excepteur ham hock cow shoulder in sausage, boudin officia tongue aute salami esse swine buffalo. Rump in tri-tip landjaeger, ipsum adipisicing doner eu deserunt meatball culpa. Magna proident brisket aliquip beef ribs dolore, tail chicken non ground round enim biltong nisi. Nulla cow esse, chicken cillum frankfurter minim kevin id. Cupim sunt short ribs pariatur cillum mollit irure sirloin ham hock bacon veniam non buffalo chislic esse.

Picanha cupidatat flank t-bone fugiat culpa minim et ea. Do cupim buffalo, salami meatloaf shankle pariatur flank picanha adipisicing boudin aliquip quis turducken. Ad short loin turkey quis pork loin. Non boudin brisket consectetur, veniam voluptate in flank elit meatloaf lorem doner meatball laboris bresaola. Kevin est aute laboris deserunt mollit hamburger tongue eiusmod pariatur qui short loin. Filet mignon bresaola pancetta, alcatra ea spare ribs ribeye turkey prosciutto dolore cupim short loin shoulder sirloin. Shankle capicola in, landjaeger ea tri-tip mollit.`.split(" ")
	var quantity = $("#quantity")[0].valueAsNumber;
	for (var i = 0; i < quantity; i++) {
		if (data[i] !== undefined) {
			lorem.append("<p>" + data[i] + "</p>");
		} else {
			alert("You asked for to much ipsum. I gave you as much as I can, Also this is dev!");
			return
		}
	}

})