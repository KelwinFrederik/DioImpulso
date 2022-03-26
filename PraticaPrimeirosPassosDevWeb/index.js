var icons = {
    header: 'ui-icon-circle-plus',
    activeHeader:'ui-icon-circle-close'
};

$( "#accordion" ).accordion({
    collapsible:true,
    icons: icons
});

var nomeDisponiveis = [
	"Augusto",
	"Agatha",
	"Amanda",
	"Antonela",
	"Breno",
	"Bruno",
	"Caio",
	"Cecília",
	"Clara",
	"João",
	"Laís",
	"Larissa"
];
$( "#autocomplete" ).autocomplete({
	source: nomeDisponiveis
});

$( "#radioset" ).buttonset();

$( "#tabs" ).tabs({
    collapsible: true
});

$( "#buttonFinalizar" ).button();