
define("brycorp-site",
	["jquery"],
	function($) {
		function layout() {
			var hWin = $(window).height();
			$(".wrapper").height(hWin);
			$("body").show();
			
			$(".menu").animate({height:hWin}, 2000);
		}
		
		function navLinks() {
			$(".menu-item").click(function() {
				var navSection = $(this).data('nav-section');
				console.log("nav-section-clicked: " + navSection);
				
				$(".content-target .nav-section")
				.each(function(index, element) {
					var targetNav = $(element).data('nav-section')
					if(targetNav == navSection)
						$(element).slideToggle()
					else
						$(element).hide()
				})
			})
		}
		
		function duplicatePosts() {
			var template = $("#example-post")
			var target = $(".nav-section[data-nav-section=posts]");
			console.log("posts-target: "+target);
			for (var i = 0; i < 10; i++) {
				target.append(template.clone());
			}
		}
		
		function postReveal() {
			$(".post .header").click( function() {
				//console.log("post clicked" + this.outerHTML);
				$(".post-content", $(this).parent()).slideToggle("linear");
			})
		}
		
		
		layout();
		navLinks();
		duplicatePosts();
		postReveal();
	}
)