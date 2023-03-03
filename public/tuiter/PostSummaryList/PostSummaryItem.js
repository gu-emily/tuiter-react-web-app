const PostSummaryItem = (post) => {
  return(`
    <li class="list-group-item">
      <div class="row">
        <div class="col">
          <div class="text-secondary">${post.topic}</div>
          <div class="fw-bold">
            ${post.userName}
            <i class="fa-solid fa-circle-check"></i>
            <span class="text-secondary fw-lighter"> - ${post.time}</span>
            </div>
          <div class="fw-bold text-wrap">
            ${post.title}
          </div>
        </div>
        <div class="col-auto">
          <img class="float-end justify-content-evenly" src=${post.image} height="100px">
        </div>
      </div>
    </li>
  `);
}

export default PostSummaryItem;

$('#post-item').append(PostSummaryItem(
    {
      "topic": "Web Development",
      "userName": "ReactJS",
      "time": "2h",
      "image": "../../images/react.png",
      "title": "React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs",
    },

));