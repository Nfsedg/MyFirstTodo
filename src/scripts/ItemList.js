class ItemList {
    constructor(description, order) {
        this.order = order,
        this.description = description
    }
    createItem(description, order) {
        const view = `
        <div class="list__new-item" id="itemList${order}">
            <div class="list__description">
                <input type="checkbox">
                <p>${description}</p>
            </div>
            <div class="list__button">
                <div class="list__checked"></div>
                <div class="list__delete"></div>
            </div>
        </div>
        `
        return view;
    }
    finishedItem() {
        const getItem = document.getElementById('itemList')
        getItem.classList.add('checked')
    }
}