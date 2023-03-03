const WhoToFollowListItem = (who) => {
  return(`
      <li class="list-group-item">
          <div class="row">
            <div class="col-2">
              <img class="float-start rounded-circle" src=${who.avatarIcon} width="40px">
            </div>
            <div class="col-6">
              <div class="fw-bold">
                ${who.userName}
                <i class="fa-solid fa-circle-check"></i>
              </div>
              <div>@${who.handle}</div>
            </div>
            <div class="col-4">
              <button type="button" class="btn btn-primary float-end rounded-pill">Follow</button>
            </div>
          </div>
        </li>
  `);
}

export default WhoToFollowListItem;

const listItem = $('#item')
listItem.append(WhoToFollowListItem({
      avatarIcon: '../../images/virgin-galactic.png',
      userName: 'Virgin Galactic',
      handle: 'virgingalactic',
    }
))