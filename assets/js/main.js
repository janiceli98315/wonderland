
$(document).ready(function() {
    general_utils();
    blog_posts();
})


function general_utils() {
    // smooth scrolling for nav links
    $('.head-menu-wrap a').smoothScroll();
    $('.extra-link a').smoothScroll();
    $('.profile-pic-link').smoothScroll();

    $('.skillbar').each(function(){
		$(this).find('.skillbar-bar').animate({
			width: $(this).attr('data-percent')
		}, 1000);
	});
}

function blog_posts() {

    // keeping it static, can be fetched from a blog dynamically as well
    let posts = [
        {
            url: 'https://github.com/janiceli98315/wonderland/blob/master/_includes/Teaching%20Assistant.html',
            title: 'University of California, Davis - Teaching Assistant',
        },
        {
            url: 'https://www.nagekar.com/2017/08/privacy.html',
            title: 'University of California, Davis - Student Assistant',
        },
        {
            url: 'https://www.nagekar.com/2018/01/jagriti-yatra.html',
            title: 'Yoren Information Technology (Shanghai) Co., Ltd. - Data Analyst Intern',
        },
        {
            url: 'https://www.nagekar.com/2017/08/private-cloud-part-2.html',
            title: 'HistoBridge LLC - Research Assistant',
        },
    ];

    let post_html = [];

    for(let post of posts) {

        let tags;
        
        if(post.tags) {
            tags = post.tags.map(tag => {
                return `<a href="https://www.nagekar.com/tags#${tag}">${tag}</a>`
            })
        }

        let post_template = `
        <div class="blog-post" onclick="blog_link_click('${post.url}');">

            <div class="blog-link">
    
                <h3><a href="${post.url}">${post.title}</a></h3>            

            </div>
    
            <div class="blog-goto-link">
                <!-- Removed image -->
            </div>
        </div>
        `;

        post_html.push(post_template);
    }

    $('#rss-feeds').html(post_html);

}

function blog_link_click(url) {
    window.location = url;
}
