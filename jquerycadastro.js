$(document).ready(function(){
	$("#btncadastro").click(function(){
		cadastrarCliente();
	});
});

function cadastrarCliente(){
	
	var model = {
		Nome : $("#nome").val(),
		Email : $("#email").val()
	};
	
	$.ajax({
		type : "POST",
		url : ,
		data : model,
		success : function(d){
			$("#mensagem").html(d);
			
			$("#nome").val("");
			$("#email").val("");
		},
		error : function(e){
			$("#mensagem").html(e.status);
		}
		
	});
	
}