const ratingItemsList = document.querySelectorAll('.rating-item');
const ratingItemsArray = Array.prototype.slice.call(ratingItemsList);
ratingItemsList.forEach(item =>
	item.addEventListener('click', () => {
		const { itemValue } = item.dataset;
		item.parentNode.dataset.totalValue = itemValue;
	}
	)
);