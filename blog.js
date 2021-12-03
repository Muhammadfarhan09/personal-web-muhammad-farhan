let blogs = []

function addBlog(event) {
    event.preventDefault()

    let Datatitle = document.getElementById('input-blog-title').value
    let Datacontent = document.getElementById('input-blog-content').value
    let Dataimage = document.getElementById('input-blog-image')

    Dataimage = URL.createObjectURL(Dataimage.files[0])

    let blog = {
        author: 'Muhammad Farhan',
        title: Datatitle,
        content: Datacontent,
        image: Dataimage,
        PostDate: Date(),
    }

    blogs.push(blog)

    document.getElementById('input-blog-title').value = ''
    document.getElementById('input-blog-content').value = ''
    document.getElementById('input-blog-image').value = ''

    renderBlog()
}
function renderBlog() {
    let blogContainer = document.getElementById('contents');
  
    blogContainer.innerHTML = '';
  
    for (let i = 0; i <= blogs.length; i++) {
      blogContainer.innerHTML += `<div class="blog-list-item">
                                      <div class="blog-image">
                                      <img src="${blogs[i].image}" alt="" />
                                      </div>
                                      <div class="blog-content">
                                      <div class="btn-group">
                                          <button class="btn-edit">Edit Post</button>
                                          <button class="btn-post">Post Blog</button>
                                      </div>
                                      <h1>
                                          <a href="blog-detail.html" target="_blank">
                                              ${blogs[i].title}
                                          </a>
                                      </h1>
                                      <div class="detail-blog-content">
                                          ${blogs[i].PostDate} | ${blogs[i].author}
                                      </div>
                                      <p>${blogs[i].content}</p>
                                      </div>
                                  </div>`;
    }
  }