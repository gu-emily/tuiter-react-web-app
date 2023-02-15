import exploreItems from "./posts.js"
import PostSummaryItem from "./PostSummaryItem.js";
const PostSummaryList = () => {
  return(`
    <div class="list-group">
      ${exploreItems.map(exploreItem => PostSummaryItem(exploreItem)).join('')}
    </div>
  `);
}

export default PostSummaryList;

$('#post-summary-list').append(PostSummaryList());