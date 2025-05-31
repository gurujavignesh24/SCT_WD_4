let categories = [];

function renderCategories() {
  const categoryList = document.getElementById("categoryList");
  categoryList.innerHTML = "";
  categories.forEach((category, index) => {
    const li = document.createElement("li");
    li.textContent = category;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.onclick = () => deleteCategory(index);

    li.appendChild(deleteBtn);
    categoryList.appendChild(li);
  });
}

function addCategory() {
  const input = document.getElementById("categoryInput");
  const newCategory = input.value.trim();
  if (newCategory && !categories.includes(newCategory)) {
    categories.push(newCategory);
    input.value = "";
    renderCategories();
  }
}

function deleteCategory(index) {
  categories.splice(index, 1);
  renderCategories();
}

document.addEventListener("DOMContentLoaded", renderCategories);
