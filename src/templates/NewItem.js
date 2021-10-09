function newItem(description, order) {
    const view = `
    <div class="list__new-item" id="itemList${order}">
        <div class="list__description">
            <input type="checkbox">
            <p>${description}</p>
        </div>
        <div class="list__button">
            <div class="list__checked" onclick="changeColor(${order})"></div>
            <div class="list__delete" onclick="deleteList(${order})"></div>
        </div>
    </div>
    `
    return view;
}