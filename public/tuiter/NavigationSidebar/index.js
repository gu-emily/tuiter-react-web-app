const NavigationSidebar = () => {
  return (`
     <div class="list-group mb-1">
        <a href="#" class="list-group-item"><i class="fa-brands fa-twitter"></i></a>
        <a href="../home.html" class="list-group-item d-inline">
          <i class=" fa-solid fa-house-chimney"></i><span class="d-none d-xl-inline"> Home</span>
        </a>
        <a href="index.html" class="list-group-item active">
          <i class="fa-solid fa-hashtag"></i><span class="d-none d-xl-inline"> Explore</span>
        </a>
        <a href="../notifications.html" class="list-group-item">
          <i class="fa-solid fa-bell"></i><span class="d-none d-xl-inline"> Notifications</span>
        </a>
        <a href="../messages.html" class="list-group-item">
          <i class="fa-solid fa-envelope"></i><span class="d-none d-xl-inline"> Messages</span>
        </a>
        <a href="../bookmarks/index.html" class="list-group-item">
          <i class="fa-solid fa-bookmark"></i><span class="d-none d-xl-inline"> Bookmarks</span>
        </a>
        <a href="../lists.html" class="list-group-item">
          <i class="fa-solid fa-list"></i><span class="d-none d-xl-inline"> Lists</span>
        </a>
        <a href="../profile.html" class="list-group-item">
          <i class="fa-solid fa-user"></i><span class="d-none d-xl-inline"> Profile</span>
        </a>
        <a href="#" class="list-group-item">
          <i class="fa-solid fa-ellipsis"></i><span class="d-none d-xl-inline"> More</span>
        </a>
     </div>
     <div class="d-grid mt-2">
        <a href="tweet.html"
        class="btn btn-primary btn-block rounded-pill">
          Tuit</a>
     </div>
 `);
}
export default NavigationSidebar;

const sidebar = $('#sidebar')
sidebar.append(NavigationSidebar);