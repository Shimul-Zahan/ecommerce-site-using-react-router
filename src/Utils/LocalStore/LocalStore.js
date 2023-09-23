
const searchItemInLC = () => {
    const item = localStorage.getItem('cart');
    if (item) {
        return JSON.parse(item);
    } else {
        return [];
    }
}

const saveToLC = item => {
    const storedCart = searchItemInLC();

    const exist = storedCart.find(cart => cart.id == item.id);
    // console.log(exist);

    if (!exist) {
        storedCart.push(item);
        localStorage.setItem('cart', JSON.stringify(storedCart));
        alert('Products added to cart successfully!!!');
    } else {
        alert('already in queue');
    }
}

export {saveToLC, searchItemInLC}