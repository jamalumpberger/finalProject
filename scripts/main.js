$(document).ready(function(){

	$('a').click(function(){
		if ($(window).width() < 600) 
		{	
			$('a, p').fadeOut(400);
			$('a, p').fadeIn(400);
		}
		else 
		{
			$('a, p').fadeOut(800);
			$('a, p').fadeIn(800);
		}
	})

	$('a.home').click(function()
	{
		if ($(window).width() < 600) 
		{	
			$.scrollTo('#home', 400);
		}
		else 
		{
			$.scrollTo('#home', 800);
		}
	})

	$('a#navLeftHome').click(function(){
		if ($(window).width() < 600) 
		{	
			$.scrollTo('#kids', 400);
		}
		else 
		{
			$.scrollTo('#kids', 800);
		}
	})

	$('a#navRightHome').click(function(){
		if ($(window).width() < 600) 
		{	
			$.scrollTo('#about', 400);
		}
		else 
		{
			$.scrollTo('#about', 800);
		}
	})


	$('a.about').click(function()
	{
		if ($(window).width() < 600) 
		{
			$.scrollTo('#about', 400);
		}
		else 
		{
			$.scrollTo('#about', 800);	
		}
	})

	$('a#navLeftAbout').click(function(){
		if ($(window).width() < 600) 
		{	
			$.scrollTo('#home', 400);
		}
		else 
		{
			$.scrollTo('#home', 800);
		}
	})

	$('a#navRightAbout').click(function(){
		if ($(window).width() < 600) 
		{	
			$.scrollTo('#news', 400);
		}
		else 
		{
			$.scrollTo('#news', 800);
		}
	})

	$('a.news').click(function()
	{
		if ($(window).width() < 600) 
		{
			$.scrollTo('#news', 400);
		}
		else 
		{
			$.scrollTo('#news', 800);
		}
	})

	$('a#navLeftNews').click(function(){
		if ($(window).width() < 600) 
		{	
			$.scrollTo('#about', 400);
		}
		else 
		{
			$.scrollTo('#about', 800);
		}
	})

	$('a#navRightNews').click(function(){
		if ($(window).width() < 600) 
		{	
			$.scrollTo('#faq', 400);
		}
		else 
		{
			$.scrollTo('#faq', 800);
		}
	})

	$('a.faq').click(function()
	{
		if ($(window).width() < 600) 
		{
			$.scrollTo('#faq', 400);
		}
		else 
		{
			$.scrollTo('#faq', 800);
		}
	})

	$('a#navLeftFaq').click(function(){
		if ($(window).width() < 600) 
		{	
			$.scrollTo('#news', 400);
		}
		else 
		{
			$.scrollTo('#news', 800);
		}
	})

	$('a#navRightFaq').click(function(){
		if ($(window).width() < 600) 
		{	
			$.scrollTo('#more', 400);
		}
		else 
		{
			$.scrollTo('#more', 800);
		}
	})

    $('a.more').click(function()
	{
		if ($(window).width() < 600) 
		{
			$.scrollTo('#more', 400);
		}
		else 
		{
			$.scrollTo('#more', 800);
		}
	})

	$('a#navLeftMore').click(function(){
		if ($(window).width() < 600) 
		{	
			$.scrollTo('#faq', 400);
		}
		else 
		{
			$.scrollTo('#faq', 800);
		}
	})

	$('a#navRightMore').click(function(){
		if ($(window).width() < 600) 
		{	
			$.scrollTo('#kids', 400);
		}
		else 
		{
			$.scrollTo('#kids', 800);
		}
	})

    $('a.kids').click(function()
	{
		if ($(window).width() < 600) 
		{
			$.scrollTo('#kids', 400);
		}
		else 
		{
			$.scrollTo('#kids', 800);	
		}
	})

	$('a#navLeftKids').click(function(){
		if ($(window).width() < 600) 
		{	
			$.scrollTo('#more', 400);
		}
		else 
		{
			$.scrollTo('#more', 800);
		}
	})

	$('a#navRightKids').click(function(){
		if ($(window).width() < 600) 
		{	
			$.scrollTo('#home', 400);
		}
		else 
		{
			$.scrollTo('#home', 800);
		}
	})

	// if (window.location.hash === '#home') 
	// {
	// 	$('a').css("color", "black");
	// }
	// else
	// {
	// 	$('a').css("color", "white");
	// }

    $('body').bind('touchmove', function(e)
	{
		e.preventDefault();
	})

});