import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
  return(`
      <div class="wd-search-bar w-100 position-relative mb-2">
        <i class="fa-solid fa-magnifying-glass position-absolute pt-2 ps-3 $font-size-base"></i>
        <input class="form-control rounded-pill w-100" placeholder="Search Tuiter"/>
        <a class="float-end" href="explore-settings.html"><i
            class="fa-solid fa-gear align-middle ps-4"></i></a>
      </div>

      <ul class="nav nav-tabs mb-2">
        <li class="nav-item">
          <a class="nav-link active" href="#">For You</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Trending</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">News</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Sports</a>
        </li>
        <li class="nav-item">
          <a class="nav-link d-none d-md-block" href="#">Entertainment</a>
        </li>
      </ul>

      <div class="position-relative">
        <img src="../../images/starship.jpg" width="100%">
        <h2 class="position-absolute bottom-0 left-0 text-white fw-bold ps-2">SpaceX's Starship</h2>
      </div>
           ${PostSummaryList()}
    `);
}
export default ExploreComponent;

$('#explore-component').append(ExploreComponent());
